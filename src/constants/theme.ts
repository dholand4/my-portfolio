export const theme = {
  colors: {
    bg: '#0a0a0f',
    bgElev: '#11111a',
    bgCard: '#0f0f17',
    border: '#1f1f2e',
    borderStrong: '#2a2a3d',
    fg: '#e6e6ef',
    fgMuted: '#8a8aa0',
    fgDim: '#5a5a72',
    accent: '#00ffaa',
    accentDim: 'rgba(0, 255, 170, 0.12)',
    accentGlow: 'rgba(0, 255, 170, 0.25)',
    ctaText: '#001810',
  },
  fonts: {
    display: "'Syne', system-ui, sans-serif",
    body: "'DM Sans', system-ui, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 80,
  },
  radii: {
    sm: 3,
    md: 4,
    lg: 6,
    xl: 8,
  },
  layout: {
    maxWidth: 1100,
    navHeight: 64,
  },
  breakpoints: {
    sm: '640px',
    md: '820px',
    lg: '900px',
  },
  motion: {
    fast: '0.2s ease',
    base: '0.3s ease',
    slow: '0.8s ease',
  },
} as const;

export type Theme = typeof theme;
