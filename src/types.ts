export type AspectRatio = '9:16' | '16:9' | '1:1';
export type DeviceType = 'iphone' | 'android' | 'tablet' | 'macbook';
export type DeviceAngle = 'front' | 'tilt-left' | 'tilt-right' | 'floating' | 'isometric' | 'close-up';

export type MusicMood = 'upbeat-tech' | 'chill-saas' | 'energetic-trap' | 'cinematic-rise' | 'none';

export interface FloatingBadge {
  id: string;
  icon: 'star' | 'bolt' | 'shield' | 'spark' | 'users' | 'check' | 'rocket' | 'heart' | 'clock';
  text: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
}

export interface PromoScene {
  id: string;
  headline: string;
  subtext: string;
  voiceoverText: string;
  duration: number; // in seconds, e.g. 3.0
  deviceType: DeviceType;
  deviceAngle: DeviceAngle;
  mockupScreenType: 'kids-robot' | 'fintech' | 'delivery' | 'ai-assistant' | 'fitness' | 'ecommerce' | 'dashboard' | 'welcome';
  customScreenshot?: string; // base64 or object URL
  floatingBadges: FloatingBadge[];
  transitionEffect: 'zoom-in' | 'slide-up' | 'rotate-in' | 'pop' | 'fade';
  highlightColor?: string;
}

export interface PromoProject {
  id: string;
  appName: string;
  appIcon?: string;
  tagline: string;
  aspectRatio: AspectRatio;
  musicMood: MusicMood;
  musicVolume: number; // 0 to 1
  voiceoverEnabled: boolean;
  voiceRate: number; // 0.8 to 1.4
  themeColor: string;
  gradientBg: 'aurora' | 'neon-cyber' | 'midnight-navy' | 'sunset-glow' | 'emerald-luxe' | 'minimal-dark';
  scenes: PromoScene[];
  ctaHeadline: string;
  ctaSubtext: string;
  ctaAppStore: boolean;
  ctaGooglePlay: boolean;
  ctaButtonText: string;
  websiteUrl: string;
}

export interface PresetAppTemplate {
  name: string;
  category: string;
  tagline: string;
  description: string;
  themeColor: string;
  gradientBg: 'aurora' | 'neon-cyber' | 'midnight-navy' | 'sunset-glow' | 'emerald-luxe' | 'minimal-dark';
  musicMood: MusicMood;
  scenes: PromoScene[];
}
