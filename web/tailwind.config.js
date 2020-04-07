module.exports = {
  theme: {
    flex: {
      none: 'none',
      inherit: 'inherit',
      initial: '0 1 auto',
      auto: '1 1 auto',
      '1': '1 0 auto',
      '2': '2 0 auto',
      full: '100 0 auto',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/3': '33.33%',
      '1/2': '50%',
      '2/3': '66.67%',
      '3/4': '75%',
      '50': '50px',
      full: '100%',
    },
    extend: {
      borderRadius: {
        xl: '32px',
      },
      borderWidth: {
        '12': '12px',
        '16': '16px',
      },
      transitionProperty: {
        inputs:
          'background-color, color, border, border-color, fill, stroke, opacity, box-shadow',
        size: 'width, min-width, max-width, height, min-height, max-height',
        flex: 'flex',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(.21, 0, .45, 1)',
      },
    },
  },
  variants: {
    flex: ['responsive', 'hover'],
    width: ['responsive', 'hover'],
    minWidth: ['responsive', 'hover'],
  },
  plugins: [],
}
