export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#031424',
        ocean: '#0e4d74',
        aqua: '#68d5ff',
        'water-blue': '#68d5ff',
        glass: 'rgba(255,255,255,0.14)',
        slate: {
          950: '#020617',
          900: '#081421',
        },
      },
      boxShadow: {
        soft: '0 30px 80px rgba(2, 15, 35, 0.22)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 50px rgba(6, 30, 54, 0.25)',
      },
      backgroundImage: {
        'water-glow': 'radial-gradient(circle at top, rgba(104, 213, 255, 0.18), transparent 35%)',
        'glass-sheen': 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '200px 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.8s linear infinite',
      },
    },
  },
  plugins: [],
};
