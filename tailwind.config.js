/** @type {import('tailwindcss').Config} */

const fallbacks = [
  'NotoSansJP',
  'NotoSansSC',
  'NotoSansKR',
  'NotoSansArabic',
  'NotoSansThai',
  'NotoSansHebrew',
  'NotoSansDevanagari',
];

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // Include original EFB components
    '../fbw-common/src/systems/instruments/src/EFB/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      width: () => ({
        'inr-tk': '13.45rem',
        'out-tk': '5.25rem',
      }),
      height: () => ({
        'content-section-reduced': '54rem',
        'content-section-full': '57.25rem',
      }),
      inset: () => ({
        'ctr-tk-y': '18.75rem',
        'inn-tk-y': '14.5rem',
        'inn-tk-l': '31.5rem',
        'inn-tk-r': '24.75rem',
        'out-tk-y': '12.75rem',
        'out-tk-l': '26.25rem',
        'out-tk-r': '19.5rem',
        'overlay-b-y': '10.25rem',
        'overlay-bl': '22.5rem',
        'overlay-br': '15.5rem',
        'overlay-t-y': '18rem',
        'overlay-tl': '21rem',
        'overlay-tr': '14rem',
      }),
      rotate: () => ({
        '18.5': '18.5deg',
        '-18.5': '-18.5deg',
        '26.5': '26.5deg',
        '-26.5': '-26.5deg',
      }),
      colors: () => ({
        'theme-highlight': 'var(--color-highlight)',
        'theme-body': 'var(--color-body)',
        'theme-text': 'var(--color-text)',
        'theme-unselected': 'var(--color-unselected)',
        'theme-secondary': 'var(--color-secondary)',
        'theme-statusbar': 'var(--color-statusbar)',
        'theme-accent': 'var(--color-accent)',
        cyan: {
          DEFAULT: '#00E0FE',
          medium: '#00C4F5',
        },
        utility: {
          red: 'var(--color-utility-red)',
          green: 'var(--color-utility-green)',
          orange: 'var(--color-utility-orange)',
          amber: 'var(--color-utility-amber)',
          blue: 'var(--color-utility-blue)',
          purple: 'var(--color-utility-purple)',
          pink: 'var(--color-utility-pink)',
          salmon: 'var(--color-utility-salmon)',
          grey: 'var(--color-utility-grey)',
          'dark-grey': 'var(--color-utility-dark-grey)',
        },
      }),
      maxWidth: { '1/2': '50%' },
    },
    fontSize: {
      // FAA Human Factors compliant sizes
      'xs': '12px',
      'sm': '14px',
      'base': '16px',     // Body text - FAA standard
      'lg': '18px',       // H3
      'xl': '20px',       // H2
      '2xl': '24px',      // H1
      '3xl': '28px',
      '4xl': '32px',
      // Aviation-specific
      'mono': '15px',     // Monospace for technical data
      'warning': '16px',  // Minimum for warnings
    },
    fontFamily: {
      // Aviation-approved sans-serif stack
      sans: ['Arial', 'Helvetica', 'Liberation Sans', 'Arimo', 'sans-serif'],
      body: ['Arial', 'Helvetica', 'Liberation Sans', 'Arimo', 'sans-serif'],
      title: ['Arial', 'Helvetica', 'Liberation Sans', 'Arimo', 'sans-serif'],
      // Monospace for technical data, tables, codes
      mono: ['Courier New', 'Courier', 'Consolas', 'monospace'],
      // Keep specialized fonts as fallback
      rmp: ['AirbusRMP'],
      inter: ['Inter', ...fallbacks],
    },
  },
};