import { AspectRatio, DeviceAngle, DeviceType, PromoProject, PromoScene } from '../types';

interface RenderOptions {
  project: PromoProject;
  currentScene: PromoScene;
  sceneProgress: number; // 0 to 1 inside current scene
  totalTime: number; // in seconds
  aspectRatio: AspectRatio;
  isOutro?: boolean;
}

export class PromoCanvasRenderer {
  private particles: Array<{ x: number; y: number; size: number; speed: number; alpha: number }> = [];
  private imageCache: Map<string, HTMLImageElement> = new Map();

  constructor() {
    // Generate particle field
    for (let i = 0; i < 60; i++) {
      this.particles.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.05 + 0.02,
        alpha: Math.random() * 0.7 + 0.2,
      });
    }
  }

  public getDimensions(ratio: AspectRatio): { width: number; height: number } {
    switch (ratio) {
      case '9:16':
        return { width: 1080, height: 1920 };
      case '16:9':
        return { width: 1920, height: 1080 };
      case '1:1':
        return { width: 1080, height: 1080 };
    }
  }

  public render(canvas: HTMLCanvasElement, options: RenderOptions) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { project, currentScene, sceneProgress, totalTime, aspectRatio, isOutro } = options;
    const { width, height } = this.getDimensions(aspectRatio);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    ctx.save();

    // 1. Draw Background
    this.drawBackground(ctx, width, height, project.gradientBg, project.themeColor, totalTime);

    // 2. Draw Floating Particle Dust
    this.drawParticles(ctx, width, height, totalTime);

    // 3. Draw Kinetic Typography (Headline & Subtext)
    this.drawTypography(ctx, width, height, currentScene, sceneProgress, project.themeColor, aspectRatio);

    // 4. Draw Device Mockup & Content
    this.drawDevice(ctx, width, height, currentScene, sceneProgress, totalTime, project.themeColor, aspectRatio);

    // 5. Draw Floating Badges
    this.drawBadges(ctx, width, height, currentScene, sceneProgress, totalTime, aspectRatio);

    // 6. Draw Subtitle / Voiceover narration bar
    this.drawSubtitleBar(ctx, width, height, currentScene, sceneProgress, aspectRatio);

    // 7. If last scene / outro, draw App Store badges & CTA
    if (isOutro || currentScene.id === project.scenes[project.scenes.length - 1].id && sceneProgress > 0.4) {
      this.drawOutroElements(ctx, width, height, project, sceneProgress, aspectRatio);
    }

    ctx.restore();
  }

  private drawBackground(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    bgType: string,
    themeColor: string,
    time: number
  ) {
    // Base dark fill
    ctx.fillStyle = '#090a0f';
    ctx.fillRect(0, 0, w, h);

    const grad = ctx.createLinearGradient(0, 0, w, h);

    if (bgType === 'aurora') {
      grad.addColorStop(0, '#0b0c16');
      grad.addColorStop(0.5, '#12142e');
      grad.addColorStop(1, '#05060b');
    } else if (bgType === 'neon-cyber') {
      grad.addColorStop(0, '#0f051d');
      grad.addColorStop(0.5, '#051329');
      grad.addColorStop(1, '#020617');
    } else if (bgType === 'sunset-glow') {
      grad.addColorStop(0, '#1c0a18');
      grad.addColorStop(0.5, '#2e1022');
      grad.addColorStop(1, '#0f0714');
    } else if (bgType === 'emerald-luxe') {
      grad.addColorStop(0, '#041611');
      grad.addColorStop(0.5, '#06261d');
      grad.addColorStop(1, '#020d09');
    } else {
      // Midnight navy / Minimal
      grad.addColorStop(0, '#0b0f19');
      grad.addColorStop(0.5, '#111827');
      grad.addColorStop(1, '#030712');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Animated glow blobs
    const cx1 = w * (0.3 + 0.15 * Math.sin(time * 0.8));
    const cy1 = h * (0.35 + 0.1 * Math.cos(time * 0.6));
    const rad1 = ctx.createRadialGradient(cx1, cy1, 10, cx1, cy1, w * 0.55);
    rad1.addColorStop(0, `${themeColor}44`);
    rad1.addColorStop(0.5, `${themeColor}15`);
    rad1.addColorStop(1, 'transparent');
    ctx.fillStyle = rad1;
    ctx.fillRect(0, 0, w, h);

    const cx2 = w * (0.7 - 0.12 * Math.cos(time * 0.7));
    const cy2 = h * (0.65 + 0.12 * Math.sin(time * 0.5));
    const rad2 = ctx.createRadialGradient(cx2, cy2, 10, cx2, cy2, w * 0.6);
    rad2.addColorStop(0, '#38bdf82b');
    rad2.addColorStop(0.6, '#818cf80f');
    rad2.addColorStop(1, 'transparent');
    ctx.fillStyle = rad2;
    ctx.fillRect(0, 0, w, h);

    // Subtle grid overlay for tech aesthetic
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;
    const gridSize = 60;
    for (let x = 0; x < w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }

  private drawParticles(ctx: CanvasRenderingContext2D, w: number, h: number, time: number) {
    ctx.save();
    for (let p of this.particles) {
      const px = ((p.x + time * p.speed * 0.1) % 1) * w;
      const py = ((p.y - time * p.speed * 0.2 + 1) % 1) * h;
      const pulse = Math.sin(time * 2 + p.x * 10) * 0.3 + 0.7;

      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * pulse * 0.4})`;
      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  private drawTypography(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    scene: PromoScene,
    progress: number,
    themeColor: string,
    ratio: AspectRatio
  ) {
    ctx.save();

    // Smooth entry animation: slide down & fade in
    const ease = Math.min(1, progress * 4);
    const alpha = ease;
    const yOffset = (1 - ease) * -40;

    ctx.globalAlpha = alpha;
    ctx.textAlign = 'center';

    let titleY = h * 0.12 + yOffset;
    let titleFontSize = 54;
    let subFontSize = 26;

    if (ratio === '16:9') {
      titleY = h * 0.14 + yOffset;
      titleFontSize = 58;
      subFontSize = 26;
    } else if (ratio === '9:16') {
      titleY = h * 0.14 + yOffset;
      titleFontSize = 56;
      subFontSize = 26;
    }

    // Drop shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 6;

    // Headline
    ctx.font = `800 ${titleFontSize}px "Plus Jakarta Sans", -apple-system, sans-serif`;
    
    // Draw headline background pill highlight
    const headline = scene.headline;
    const textWidth = ctx.measureText(headline).width;
    const pillPadding = 28;
    const pillHeight = titleFontSize + 26;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.65)';
    ctx.beginPath();
    ctx.roundRect(
      w / 2 - textWidth / 2 - pillPadding,
      titleY - titleFontSize * 0.85,
      textWidth + pillPadding * 2,
      pillHeight,
      20
    );
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Gradient text
    const textGrad = ctx.createLinearGradient(
      w / 2 - textWidth / 2,
      titleY,
      w / 2 + textWidth / 2,
      titleY
    );
    textGrad.addColorStop(0, '#ffffff');
    textGrad.addColorStop(0.65, '#f8fafc');
    textGrad.addColorStop(1, themeColor);
    ctx.fillStyle = textGrad;
    ctx.fillText(headline, w / 2, titleY);

    // Subtext
    ctx.shadowBlur = 10;
    ctx.font = `500 ${subFontSize}px "Plus Jakarta Sans", -apple-system, sans-serif`;
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(scene.subtext, w / 2, titleY + 54);

    ctx.restore();
  }

  private drawDevice(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    scene: PromoScene,
    progress: number,
    time: number,
    themeColor: string,
    ratio: AspectRatio
  ) {
    ctx.save();

    // Device dimensions based on ratio & device type
    let devW = 380;
    let devH = 780;
    let radius = 54;

    if (scene.deviceType === 'android') {
      devW = 370;
      devH = 770;
      radius = 42;
    } else if (scene.deviceType === 'tablet') {
      devW = 600;
      devH = 780;
      radius = 36;
    } else if (scene.deviceType === 'macbook') {
      devW = 760;
      devH = 490;
      radius = 24;
    }

    if (ratio === '9:16') {
      devW *= 1.15;
      devH *= 1.15;
    } else if (ratio === '16:9') {
      devW *= 0.95;
      devH *= 0.95;
    }

    let centerX = w / 2;
    let centerY = h * 0.54;

    if (ratio === '16:9') {
      centerY = h * 0.58;
    } else if (ratio === '9:16') {
      centerY = h * 0.53;
    }

    // Apply animation transforms based on scene progress and deviceAngle
    const enterEase = Math.min(1, progress * 2.8);
    let scale = 0.92 + enterEase * 0.08;
    let rotation = 0;
    let floatY = Math.sin(time * 2) * 8;

    switch (scene.deviceAngle) {
      case 'tilt-left':
        rotation = -0.07;
        break;
      case 'tilt-right':
        rotation = 0.07;
        break;
      case 'floating':
        floatY = Math.sin(time * 3) * 16;
        scale *= 1.03;
        break;
      case 'close-up':
        scale *= 1.25;
        centerY -= 50;
        break;
      case 'isometric':
        rotation = -0.12;
        scale *= 0.96;
        break;
      default: // front
        rotation = 0;
        break;
    }

    ctx.translate(centerX, centerY + floatY);
    ctx.rotate(rotation);
    ctx.scale(scale, scale);

    // Deep realistic device shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 55;
    ctx.shadowOffsetY = 38;

    // Device Body (Outer Titanium bezel)
    const bezel = 12;
    ctx.fillStyle = '#1e212b';
    ctx.beginPath();
    ctx.roundRect(-devW / 2 - bezel, -devH / 2 - bezel, devW + bezel * 2, devH + bezel * 2, radius + bezel);
    ctx.fill();

    // Titanium rim gradient
    ctx.shadowColor = 'transparent';
    const rimGrad = ctx.createLinearGradient(-devW / 2, -devH / 2, devW / 2, devH / 2);
    rimGrad.addColorStop(0, '#475569');
    rimGrad.addColorStop(0.3, '#1e293b');
    rimGrad.addColorStop(0.7, '#64748b');
    rimGrad.addColorStop(1, '#0f172a');
    ctx.strokeStyle = rimGrad;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Screen Boundary (Clip to screen)
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(-devW / 2, -devH / 2, devW, devH, radius);
    ctx.clip();

    // Draw Screen Content (custom image or generated template UI)
    if (scene.customScreenshot) {
      this.drawCustomScreenshot(ctx, scene.customScreenshot, -devW / 2, -devH / 2, devW, devH);
    } else {
      this.drawScreenTemplate(ctx, scene.mockupScreenType, -devW / 2, -devH / 2, devW, devH, themeColor, time);
    }

    // Dynamic light sweep glare on the glass
    const glareX = -devW + ((time * 0.4) % 2) * (devW * 2);
    const glareGrad = ctx.createLinearGradient(glareX, -devH / 2, glareX + 180, devH / 2);
    glareGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
    glareGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.12)');
    glareGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = glareGrad;
    ctx.fillRect(-devW / 2, -devH / 2, devW, devH);

    ctx.restore(); // restore clipping

    // Draw Hardware Features (Dynamic Island or Android punch-hole)
    if (scene.deviceType === 'iphone') {
      this.drawDynamicIsland(ctx, 0, -devH / 2 + 18, time, themeColor);
    } else if (scene.deviceType === 'android') {
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(0, -devH / 2 + 20, 7, 0, Math.PI * 2);
      ctx.fill();
    }

    // Home indicator bar at bottom
    ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.beginPath();
    ctx.roundRect(-55, devH / 2 - 12, 110, 4, 2);
    ctx.fill();

    ctx.restore();
  }

  private drawDynamicIsland(ctx: CanvasRenderingContext2D, x: number, y: number, time: number, themeColor: string) {
    ctx.save();
    const width = 100;
    const height = 28;

    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.roundRect(x - width / 2, y, width, height, height / 2);
    ctx.fill();

    // Camera lens dot
    ctx.fillStyle = '#0d1322';
    ctx.beginPath();
    ctx.arc(x - 28, y + height / 2, 5, 0, Math.PI * 2);
    ctx.fill();

    // Pulsing audio or indicator wave
    const waveH = Math.sin(time * 6) * 5 + 7;
    ctx.fillStyle = themeColor;
    ctx.beginPath();
    ctx.roundRect(x + 22, y + (height - waveH) / 2, 3, waveH, 1.5);
    ctx.fill();

    const waveH2 = Math.cos(time * 8) * 4 + 6;
    ctx.beginPath();
    ctx.roundRect(x + 28, y + (height - waveH2) / 2, 3, waveH2, 1.5);
    ctx.fill();

    ctx.restore();
  }

  private drawCustomScreenshot(
    ctx: CanvasRenderingContext2D,
    url: string,
    x: number,
    y: number,
    w: number,
    h: number
  ) {
    let img = this.imageCache.get(url);
    if (!img) {
      img = new Image();
      img.src = url;
      this.imageCache.set(url, img);
    }

    if (img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, x, y, w, h);
    } else {
      // Placeholder while loading
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(x, y, w, h);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Memuat Screenshot...', x + w / 2, y + h / 2);
    }
  }

  private drawScreenTemplate(
    ctx: CanvasRenderingContext2D,
    type: string,
    x: number,
    y: number,
    w: number,
    h: number,
    themeColor: string,
    time: number
  ) {
    // Screen dark background
    ctx.fillStyle = '#090d16';
    ctx.fillRect(x, y, w, h);

    // Status bar (Time, Wifi, Battery)
    ctx.fillStyle = '#ffffff';
    ctx.font = '600 13px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('09:41', x + 24, y + 26);
    ctx.textAlign = 'right';
    ctx.fillText('5G  100%', x + w - 24, y + 26);

    const pad = 20;
    const topY = y + 54;

    switch (type) {
      case 'kids-robot':
        this.drawKidsRobotUI(ctx, x + pad, topY, w - pad * 2, h - 80, themeColor, time);
        break;
      case 'fintech':
        this.drawFintechUI(ctx, x + pad, topY, w - pad * 2, h - 80, themeColor, time);
        break;
      case 'delivery':
        this.drawDeliveryUI(ctx, x + pad, topY, w - pad * 2, h - 80, themeColor, time);
        break;
      case 'ai-assistant':
        this.drawAiChatUI(ctx, x + pad, topY, w - pad * 2, h - 80, themeColor, time);
        break;
      case 'fitness':
        this.drawFitnessUI(ctx, x + pad, topY, w - pad * 2, h - 80, themeColor, time);
        break;
      default: // Welcome / Dashboard
        this.drawWelcomeUI(ctx, x + pad, topY, w - pad * 2, h - 80, themeColor, time);
        break;
    }
  }

  private drawFintechUI(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    themeColor: string,
    time: number
  ) {
    // Header
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Halo, Bayu Samputra 👋', x, y + 16);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('Dompet Utama', x, y + 40);

    // Balance Card
    const cardH = 140;
    const cardY = y + 56;
    const cardGrad = ctx.createLinearGradient(x, cardY, x + w, cardY + cardH);
    cardGrad.addColorStop(0, themeColor);
    cardGrad.addColorStop(1, '#4f46e5');

    ctx.fillStyle = cardGrad;
    ctx.beginPath();
    ctx.roundRect(x, cardY, w, cardH, 20);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '13px sans-serif';
    ctx.fillText('Total Saldo Tersedia', x + 18, cardY + 30);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText('Rp 48.750.000', x + 18, cardY + 68);

    // Green profit badge
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.roundRect(x + 18, cardY + 86, 110, 24, 12);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('▲ +18.4% bln ini', x + 26, cardY + 102);

    // 4 Action Buttons (Transfer, QRIS, Tagihan, Invest)
    const btnY = cardY + cardH + 20;
    const btnLabels = ['Transfer', 'QRIS', 'Tagihan', 'Investasi'];
    const btnIcons = ['💸', '📷', '🧾', '📈'];
    const itemW = w / 4;

    for (let i = 0; i < 4; i++) {
      const bx = x + i * itemW + itemW / 2;
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(bx, btnY + 22, 24, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(btnIcons[i], bx, btnY + 28);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '12px sans-serif';
      ctx.fillText(btnLabels[i], bx, btnY + 62);
    }

    // Transactions list
    const listY = btnY + 84;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Transaksi Terakhir', x, listY + 16);

    const txs = [
      { name: 'Kopi Kenangan QRIS', date: 'Hari ini, 14:20', amt: '-Rp 28.000', col: '#f87171' },
      { name: 'Transfer dari Budi', date: 'Hari ini, 11:05', amt: '+Rp 2.500.000', col: '#34d399' },
      { name: 'Cashback Promo', date: 'Kemarin, 19:30', amt: '+Rp 50.000', col: '#34d399' },
      { name: 'Langganan Netflix', date: '21 Okt, 08:00', amt: '-Rp 186.000', col: '#f87171' }
    ];

    let rowY = listY + 36;
    for (let tx of txs) {
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.roundRect(x, rowY, w, 56, 14);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText(tx.name, x + 16, rowY + 24);

      ctx.fillStyle = '#64748b';
      ctx.font = '11px sans-serif';
      ctx.fillText(tx.date, x + 16, rowY + 44);

      ctx.fillStyle = tx.col;
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(tx.amt, x + w - 16, rowY + 32);
      ctx.textAlign = 'left';

      rowY += 66;
    }
  }

  private drawDeliveryUI(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    themeColor: string,
    time: number
  ) {
    // Search Bar
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.roundRect(x, y + 10, w, 44, 12);
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px sans-serif';
    ctx.fillText('🔍 Cari nasi padang, burger, boba...', x + 16, y + 36);

    // Promo banner
    const bannerY = y + 68;
    const bGrad = ctx.createLinearGradient(x, bannerY, x + w, bannerY + 110);
    bGrad.addColorStop(0, '#f97316');
    bGrad.addColorStop(1, '#ea580c');
    ctx.fillStyle = bGrad;
    ctx.beginPath();
    ctx.roundRect(x, bannerY, w, 110, 16);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('Diskon Kilat 50% 🔥', x + 16, bannerY + 40);
    ctx.font = '13px sans-serif';
    ctx.fillText('Makan kenyang bebas ongkir se-kota!', x + 16, bannerY + 66);

    // Tracking Card live
    const trackY = bannerY + 128;
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(x, trackY, w, 130, 16);
    ctx.fill();

    ctx.fillStyle = themeColor;
    ctx.beginPath();
    ctx.roundRect(x + 14, trackY + 16, 90, 24, 12);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('🛵 Diantar', x + 28, trackY + 32);

    ctx.font = 'bold 17px sans-serif';
    ctx.fillText('Tiba dalam 12 Menit', x + 14, trackY + 70);
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Driver: Pak Joko Santoso (Honda Vario)', x + 14, trackY + 92);

    // Progress bar
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.roundRect(x + 14, trackY + 106, w - 28, 6, 3);
    ctx.fill();
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.roundRect(x + 14, trackY + 106, (w - 28) * 0.75, 6, 3);
    ctx.fill();
  }

  private drawAiChatUI(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    themeColor: string,
    time: number
  ) {
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('MindGen AI Assistant ✨', x, y + 20);

    // User prompt bubble
    const b1Y = y + 45;
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.roundRect(x + 40, b1Y, w - 40, 56, 16);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = '13px sans-serif';
    ctx.fillText('Buatkan rencana strategi marketing', x + 56, b1Y + 24);
    ctx.fillText('untuk peluncuran aplikasi baru!', x + 56, b1Y + 44);

    // AI response bubble
    const b2Y = b1Y + 70;
    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    ctx.roundRect(x, b2Y, w - 20, 180, 16);
    ctx.fill();

    ctx.strokeStyle = themeColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = themeColor;
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('⚡️ Terpecahkan dalam 0.4 detik', x + 18, b2Y + 26);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '13px sans-serif';
    const lines = [
      '1. Teaser Video Vertikal (TikTok/Reels)',
      '2. Program Referral & Early Bird Bonus',
      '3. Kolaborasi Micro-Influencer Niche',
      '4. Kampanye Review Berhadiah di App Store'
    ];
    let ly = b2Y + 54;
    for (let l of lines) {
      ctx.fillText(l, x + 18, ly);
      ly += 28;
    }
  }

  private drawFitnessUI(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    themeColor: string,
    time: number
  ) {
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('Aktivitas Hari Ini 🔥', x, y + 20);

    // Rings container
    const ringY = y + 50;
    ctx.fillStyle = '#111827';
    ctx.beginPath();
    ctx.roundRect(x, ringY, w, 170, 18);
    ctx.fill();

    // Circular Rings
    const rcx = x + 85;
    const rcy = ringY + 85;

    // Red ring (Move)
    ctx.strokeStyle = '#ef444433';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(rcx, rcy, 60, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(rcx, rcy, 60, -Math.PI / 2, Math.PI * 0.9);
    ctx.stroke();

    // Green ring (Exercise)
    ctx.strokeStyle = '#10b98133';
    ctx.beginPath();
    ctx.arc(rcx, rcy, 42, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(rcx, rcy, 42, -Math.PI / 2, Math.PI * 1.3);
    ctx.stroke();

    // Stats on the right
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('620 / 700 Kkal', x + 160, ringY + 55);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText('Kalori Terbakar', x + 160, ringY + 75);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('45 / 30 Menit', x + 160, ringY + 110);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText('Olahraga Selesai', x + 160, ringY + 130);
  }

  private drawWelcomeUI(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    themeColor: string,
    time: number
  ) {
    const cy = y + h * 0.35;
    ctx.textAlign = 'center';

    // Glowing logo icon circle
    const rad = ctx.createRadialGradient(x + w / 2, cy - 40, 10, x + w / 2, cy - 40, 70);
    rad.addColorStop(0, themeColor);
    rad.addColorStop(1, 'transparent');
    ctx.fillStyle = rad;
    ctx.beginPath();
    ctx.arc(x + w / 2, cy - 40, 70, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = '48px sans-serif';
    ctx.fillText('🚀', x + w / 2, cy - 25);

    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('Selamat Datang!', x + w / 2, cy + 30);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px sans-serif';
    ctx.fillText('Pengalaman digital tercepat & termudah', x + w / 2, cy + 60);

    // Primary CTA Button
    ctx.fillStyle = themeColor;
    ctx.beginPath();
    ctx.roundRect(x + 20, cy + 100, w - 40, 48, 24);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('Mulai Sekarang →', x + w / 2, cy + 130);
  }

  private drawBadges(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    scene: PromoScene,
    progress: number,
    time: number,
    ratio: AspectRatio
  ) {
    if (!scene.floatingBadges || scene.floatingBadges.length === 0) return;

    ctx.save();
    const badgeEase = Math.min(1, Math.max(0, (progress - 0.15) * 3));
    ctx.globalAlpha = badgeEase;

    for (let badge of scene.floatingBadges) {
      let bx = w * 0.2;
      let by = h * 0.45;

      if (badge.position === 'top-left') {
        bx = ratio === '16:9' ? w * 0.22 : w * 0.15;
        by = h * 0.38;
      } else if (badge.position === 'top-right') {
        bx = ratio === '16:9' ? w * 0.78 : w * 0.85;
        by = h * 0.42;
      } else if (badge.position === 'bottom-left') {
        bx = ratio === '16:9' ? w * 0.24 : w * 0.16;
        by = h * 0.68;
      } else if (badge.position === 'bottom-right') {
        bx = ratio === '16:9' ? w * 0.76 : w * 0.84;
        by = h * 0.66;
      }

      // Add gentle floating bob
      by += Math.sin(time * 2.5 + bx) * 6;

      ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
      const textMetrics = ctx.measureText(badge.text);
      const pillW = textMetrics.width + 56;
      const pillH = 46;

      // Glow shadow
      ctx.shadowColor = badge.color || '#6366f1';
      ctx.shadowBlur = 18;
      ctx.shadowOffsetY = 4;

      // Pill Background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.beginPath();
      ctx.roundRect(bx - pillW / 2, by - pillH / 2, pillW, pillH, 23);
      ctx.fill();

      // Border with accent color
      ctx.strokeStyle = badge.color || '#6366f1';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Icon
      let iconEmoji = '⭐️';
      if (badge.icon === 'bolt') iconEmoji = '⚡️';
      if (badge.icon === 'shield') iconEmoji = '🔒';
      if (badge.icon === 'spark') iconEmoji = '✨';
      if (badge.icon === 'users') iconEmoji = '👥';
      if (badge.icon === 'check') iconEmoji = '✅';
      if (badge.icon === 'rocket') iconEmoji = '🚀';
      if (badge.icon === 'heart') iconEmoji = '❤️';
      if (badge.icon === 'clock') iconEmoji = '⏱️';

      ctx.shadowBlur = 0;
      ctx.font = '18px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(iconEmoji, bx - pillW / 2 + 14, by + 6);

      // Label
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(badge.text, bx - pillW / 2 + 42, by + 5);
    }

    ctx.restore();
  }

  private drawSubtitleBar(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    scene: PromoScene,
    progress: number,
    ratio: AspectRatio
  ) {
    if (!scene.voiceoverText) return;

    ctx.save();
    const barY = ratio === '9:16' ? h * 0.91 : h * 0.92;

    ctx.font = '600 21px "Plus Jakarta Sans", -apple-system, sans-serif';
    ctx.textAlign = 'center';

    const text = scene.voiceoverText;
    const textWidth = ctx.measureText(text).width;
    const pad = 24;

    // Frosted dark pill
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.roundRect(w / 2 - textWidth / 2 - pad, barY - 24, textWidth + pad * 2, 44, 22);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Text with highlighted words based on progress
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, w / 2, barY + 6);

    ctx.restore();
  }

  private drawOutroElements(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    project: PromoProject,
    progress: number,
    ratio: AspectRatio
  ) {
    ctx.save();
    const outroEase = Math.min(1, Math.max(0, (progress - 0.3) * 3));
    ctx.globalAlpha = outroEase;

    const outroY = ratio === '9:16' ? h * 0.84 : h * 0.82;

    // App Store & Google Play badge buttons
    const badgeW = 160;
    const badgeH = 48;
    const gap = 16;
    const totalW = badgeW * 2 + gap;

    // Google Play
    const gpx = w / 2 - totalW / 2;
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(gpx, outroY, badgeW, badgeH, 12);
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('▶ Google Play', gpx + badgeW / 2, outroY + 28);

    // App Store
    const asx = gpx + badgeW + gap;
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(asx, outroY, badgeW, badgeH, 12);
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText(' App Store', asx + badgeW / 2, outroY + 28);

    ctx.restore();
  }

  private drawKidsRobotUI(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    themeColor: string,
    time: number
  ) {
    // Header: Student Name & Stars
    ctx.fillStyle = '#93c5fd';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('⭐ RoboPintar SD • Kelas 1-3', x, y + 14);

    // Profile pill
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.roundRect(x, y + 24, w, 40, 12);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Halo, Adik Rafa! 👦', x + 12, y + 48);

    ctx.fillStyle = '#facc15';
    ctx.textAlign = 'right';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('⭐ 2.450 Poin', x + w - 12, y + 48);
    ctx.textAlign = 'left';

    // Robot Avatar & Speech Bubble Card
    const cardY = y + 74;
    const cardH = 150;
    const rGrad = ctx.createLinearGradient(x, cardY, x + w, cardY + cardH);
    rGrad.addColorStop(0, '#1e1b4b');
    rGrad.addColorStop(1, '#312e81');
    ctx.fillStyle = rGrad;
    ctx.beginPath();
    ctx.roundRect(x, cardY, w, cardH, 20);
    ctx.fill();

    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Cute animated Robot head on the left
    const rx = x + 48;
    const ry = cardY + 70 + Math.sin(time * 3) * 4;

    // Antenna
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(rx, ry - 32);
    ctx.lineTo(rx, ry - 42);
    ctx.stroke();
    // Glowing antenna bulb
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(rx, ry - 44, 6, 0, Math.PI * 2);
    ctx.fill();

    // Robot Head box
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.roundRect(rx - 30, ry - 30, 60, 54, 16);
    ctx.fill();

    // Head inner visor (face screen)
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(rx - 22, ry - 22, 44, 38, 10);
    ctx.fill();

    // Robot Eyes (blinking cyclically)
    const blink = Math.sin(time * 4) > 0.92 ? 1 : 8;
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.roundRect(rx - 15, ry - 10, 8, blink, 3);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(rx + 7, ry - 10, 8, blink, 3);
    ctx.fill();

    // Robot Smile
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(rx, ry + 4, 7, 0, Math.PI);
    ctx.stroke();

    // Speech bubble next to robot
    const bx = x + 92;
    const by = cardY + 20;
    const bw = w - 102;
    const bh = 110;

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, 14);
    ctx.fill();

    // Speech pointer triangle
    ctx.beginPath();
    ctx.moveTo(bx, by + 40);
    ctx.lineTo(bx - 10, by + 46);
    ctx.lineTo(bx, by + 52);
    ctx.fill();

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('🤖 Robot AI Berkata:', bx + 12, by + 24);

    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#334155';
    ctx.fillText('"Ayo selesaikan misi', bx + 12, by + 46);
    ctx.fillText('matematika untuk dapat', bx + 12, by + 64);
    ctx.fillText('Trofi Juara Bintang!" 🏆', bx + 12, by + 82);

    // Live Math Quest Card
    const qY = cardY + cardH + 16;
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(x, qY, w, 160, 18);
    ctx.fill();

    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Quest badge
    ctx.fillStyle = '#15803d';
    ctx.beginPath();
    ctx.roundRect(x + 12, qY + 14, 110, 24, 12);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('🎯 Kuis Kelas 1-2 SD', x + 20, qY + 30);

    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Berapakah hasil 4 🍎 + 3 🍎 ?', x + 12, qY + 68);

    // 3 Clickable Option Buttons
    const optY = qY + 86;
    const optW = (w - 32) / 3;

    // Option 1: 5
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.roundRect(x + 10, optY, optW - 6, 44, 12);
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('5', x + 10 + (optW - 6) / 2, optY + 28);

    // Option 2: 7 (CORRECT / HIGHLIGHTED)
    ctx.fillStyle = '#16a34a';
    ctx.beginPath();
    ctx.roundRect(x + 10 + optW, optY, optW - 6, 44, 12);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('7 ✅', x + 10 + optW + (optW - 6) / 2, optY + 28);

    // Option 3: 9
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.roundRect(x + 10 + optW * 2, optY, optW - 6, 44, 12);
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('9', x + 10 + optW * 2 + (optW - 6) / 2, optY + 28);
    ctx.textAlign = 'left';

    // Success banner feedback
    ctx.fillStyle = '#22c55e';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('✨ Hebat! Jawabanmu Benar! +50 ⭐', x + 12, qY + 150);

    // Subject grid buttons
    const subY = qY + 172;
    const subLabels = [
      { ic: '📖', lb: 'Membaca' },
      { ic: '🔢', lb: 'Berhitung' },
      { ic: '🚀', lb: 'Sains Anak' },
      { ic: '🎨', lb: 'Kreativitas' }
    ];
    const itemW = w / 4;
    for (let i = 0; i < 4; i++) {
      const sx = x + i * itemW + itemW / 2;
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(sx, subY + 22, 22, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(subLabels[i].ic, sx, subY + 28);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(subLabels[i].lb, sx, subY + 58);
    }
  }
}
