module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '550px',
      'md': '768px',
      'lg': '995px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        blue: {
          vl: '#dbeafe',
          l: '#3b82f6',
          m: '#1d4ed8',
          d: '#111827'
        },
        green: {
          l: '#D1FAE5',
          d: '#065f46'
        },
        black: {
          l: '#f5f5f5',
          m: '#6b728f',
          d: '#000000'
        }
      }
    },
  },
  plugins: [],
}
