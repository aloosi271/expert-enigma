module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep authority blue
        primary: {
          DEFAULT: "#1a237e", // indigo-900
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        // Secondary Colors - Electric progress blue
        secondary: {
          DEFAULT: "#00b4ff", // light-blue-500
          50: "#e1f5fe", // light-blue-50
          100: "#b3e5fc", // light-blue-100
          200: "#81d4fa", // light-blue-200
          300: "#4fc3f7", // light-blue-300
          400: "#29b6f6", // light-blue-400
          500: "#00b4ff", // light-blue-500
          600: "#039be5", // light-blue-600
          700: "#0288d1", // light-blue-700
          800: "#0277bd", // light-blue-800
          900: "#01579b", // light-blue-900
        },
        // Accent Colors - Achievement gold
        accent: {
          DEFAULT: "#ffd700", // yellow-400
          50: "#fffde7", // yellow-50
          100: "#fff9c4", // yellow-100
          200: "#fff59d", // yellow-200
          300: "#fff176", // yellow-300
          400: "#ffd700", // yellow-400
          500: "#ffeb3b", // yellow-500
          600: "#fdd835", // yellow-600
          700: "#fbc02d", // yellow-700
          800: "#f9a825", // yellow-800
          900: "#f57f17", // yellow-900
        },
        // Background Colors
        background: "#121212", // gray-900
        surface: {
          DEFAULT: "#1e1e1e", // gray-800
          light: "#2a2a2a", // gray-700
        },
        // Text Colors
        text: {
          primary: "#ffffff", // white
          secondary: "#b0bec5", // blue-gray-300
          muted: "#78909c", // blue-gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#4caf50", // green-500
          50: "#e8f5e8", // green-50
          100: "#c8e6c9", // green-100
          200: "#a5d6a7", // green-200
          300: "#81c784", // green-300
          400: "#66bb6a", // green-400
          500: "#4caf50", // green-500
          600: "#43a047", // green-600
          700: "#388e3c", // green-700
          800: "#2e7d32", // green-800
          900: "#1b5e20", // green-900
        },
        warning: {
          DEFAULT: "#ff9800", // orange-500
          50: "#fff3e0", // orange-50
          100: "#ffe0b2", // orange-100
          200: "#ffcc80", // orange-200
          300: "#ffb74d", // orange-300
          400: "#ffa726", // orange-400
          500: "#ff9800", // orange-500
          600: "#fb8c00", // orange-600
          700: "#f57c00", // orange-700
          800: "#ef6c00", // orange-800
          900: "#e65100", // orange-900
        },
        error: {
          DEFAULT: "#f44336", // red-500
          50: "#ffebee", // red-50
          100: "#ffcdd2", // red-100
          200: "#ef9a9a", // red-200
          300: "#e57373", // red-300
          400: "#ef5350", // red-400
          500: "#f44336", // red-500
          600: "#e53935", // red-600
          700: "#d32f2f", // red-700
          800: "#c62828", // red-800
          900: "#b71c1c", // red-900
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'achievement': '0 0 40px rgba(255, 215, 0, 0.3)',
        'glow-blue': '0 0 20px rgba(0, 180, 255, 0.3)',
        'glow-gold': '0 0 30px rgba(255, 215, 0, 0.4)',
      },
      animation: {
        'smooth': 'smooth 300ms ease-out',
        'micro': 'micro 200ms ease-in-out',
        'celebration': 'celebration 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 1s ease-in-out 2',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}