/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-tui-cyan',
    'text-tui-yellow',
    'text-tui-accent',
    'text-tui-purple',
    'text-tui-red',
    'hover:border-tui-cyan',
    'hover:border-tui-yellow',
    'hover:border-tui-accent',
    'hover:border-tui-purple',
    'hover:border-tui-red',
  ],
  theme: {
    extend: {
      colors: {
        'tui-bg': '#0a0a0a',
        'tui-bg-secondary': '#111111',
        'tui-bg-tertiary': '#1a1a1a',
        'tui-border': '#2a2a2a',
        'tui-text': '#e4e4e7',
        'tui-text-secondary': '#a1a1aa',
        'tui-text-muted': '#52525b',
        'tui-accent': '#22c55e',
        'tui-accent-dim': '#166534',
        'tui-cyan': '#06b6d4',
        'tui-yellow': '#eab308',
        'tui-red': '#ef4444',
        'tui-purple': '#a855f7',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        slideUpCubiBezier: "slideUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)",
        blink: "blink 1s infinite",
        typing: "typing 3s steps(40, end)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        blink: {
          "0%, 50%": { opacity: 1 },
          "51%, 100%": { opacity: 0 },
        },
        typing: {
          from: { width: 0 },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
}
