import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Table for CRC32
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const typeAndData = buf.subarray(4, 8 + len);
  buf.writeUInt32BE(crc32(typeAndData), 8 + len);
  return buf;
}

function generateIconPNG(size, isMaskable = false) {
  const width = size;
  const height = size;
  const rawBytesPerRow = 1 + width * 4;
  const rawBuffer = Buffer.alloc(rawBytesPerRow * height);

  // Background and drawing setup
  const cx = width / 2;
  const cy = height / 2;
  const radius = isMaskable ? width * 0.48 : width * 0.44;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rawBytesPerRow;
    rawBuffer[rowOffset] = 0; // Filter: None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Default background color: Deep slate navy
      let r = 15;
      let g = 23;
      let b = 42;
      let a = 255;

      // Outer circle / rounded container
      if (dist < radius) {
        // Gradient from indigo to sky blue
        const factor = (y / height);
        r = Math.round(79 * (1 - factor) + 14 * factor);   // #4f46e5 to #0ea5e9
        g = Math.round(70 * (1 - factor) + 165 * factor);
        b = Math.round(229 * (1 - factor) + 233 * factor);
      }

      // Robot Head (center rounded box)
      const headHalfW = width * 0.26;
      const headHalfH = height * 0.22;
      const hx = Math.abs(x - cx);
      const hy = Math.abs(y - (cy + height * 0.02));

      // Head corners rounded
      const cornerR = width * 0.08;
      let inHead = false;
      if (hx <= headHalfW && hy <= headHalfH) {
        if (hx > headHalfW - cornerR && hy > headHalfH - cornerR) {
          const cornerDx = hx - (headHalfW - cornerR);
          const cornerDy = hy - (headHalfH - cornerR);
          if (cornerDx * cornerDx + cornerDy * cornerDy <= cornerR * cornerR) {
            inHead = true;
          }
        } else {
          inHead = true;
        }
      }

      // Robot Ears/Antenna nubs
      const earW = width * 0.05;
      const earH = height * 0.08;
      const earY = Math.abs(y - (cy + height * 0.02));
      const inEars = (Math.abs(x - cx) <= headHalfW + earW) && (earY <= earH);

      // Robot Top Antenna
      const antW = width * 0.03;
      const antTopY = cy - headHalfH - height * 0.12;
      const inAntStem = (Math.abs(x - cx) <= antW) && (y >= antTopY && y <= cy - headHalfH + 5);
      const antBallDist = Math.sqrt((x - cx) ** 2 + (y - antTopY) ** 2);
      const inAntBall = antBallDist <= width * 0.06;

      if (inHead) {
        // Robot face screen / dark visor
        const visorHalfW = headHalfW * 0.82;
        const visorHalfH = headHalfH * 0.72;
        if (hx <= visorHalfW && hy <= visorHalfH) {
          // Visor background: dark navy
          r = 10;
          g = 15;
          b = 30;

          // Cute glowing cyan eyes
          const eyeCenterX = cx - headHalfW * 0.42;
          const eyeCenterX2 = cx + headHalfW * 0.42;
          const eyeCenterY = cy - headHalfH * 0.15;
          const eyeR = width * 0.065;

          const distEye1 = Math.sqrt((x - eyeCenterX) ** 2 + (y - eyeCenterY) ** 2);
          const distEye2 = Math.sqrt((x - eyeCenterX2) ** 2 + (y - eyeCenterY) ** 2);

          if (distEye1 <= eyeR || distEye2 <= eyeR) {
            // Cyan glowing eyes
            r = 56;
            g = 189;
            b = 248; // sky-400
          }

          // Cheerful smile arc
          const mouthDy = y - (cy + headHalfH * 0.38);
          if (mouthDy >= 0 && mouthDy <= width * 0.025 && Math.abs(x - cx) <= width * 0.09) {
            r = 251;
            g = 191;
            b = 36; // amber-400
          }
        } else {
          // Head border: pure clean white/metal
          r = 248;
          g = 250;
          b = 252;
        }
      } else if (inEars) {
        // Ears: Gold amber accents
        r = 245;
        g = 158;
        b = 11;
      } else if (inAntStem) {
        r = 226;
        g = 232;
        b = 240;
      } else if (inAntBall) {
        // Glowing gold energy ball
        r = 251;
        g = 191;
        b = 36;
      }

      rawBuffer[pxOffset] = r;
      rawBuffer[pxOffset + 1] = g;
      rawBuffer[pxOffset + 2] = b;
      rawBuffer[pxOffset + 3] = a;
    }
  }

  // PNG chunks
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bits per channel
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // IDAT
  const compressed = zlib.deflateSync(rawBuffer, { level: 9 });
  const idatChunk = createChunk('IDAT', compressed);

  // IEND
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log('Generating PWA icons...');
const icon192 = generateIconPNG(192, false);
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), icon192);
console.log('pwa-192x192.png generated.');

const icon512 = generateIconPNG(512, false);
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), icon512);
console.log('pwa-512x512.png generated.');

const iconMaskable = generateIconPNG(512, true);
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), iconMaskable);
console.log('pwa-maskable-512x512.png generated.');

const appleIcon = generateIconPNG(180, false);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleIcon);
console.log('apple-touch-icon.png generated.');

const favicon = generateIconPNG(64, false);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), favicon);
console.log('favicon.ico generated.');

console.log('All icons generated successfully!');
