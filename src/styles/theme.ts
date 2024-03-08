const palette = {
  black: '#1E1F22',
  gray: '#2B2D30',
  blue: '#3573F0',
  white: '#FFFFFF',
};

// 1rem : 16px
const typo = {
  header: {
    fontFamily: 'Spoqa-Light',
    fontSize: '1rem',
    lineHeight: '1rem',
    color: palette.white,
  },
  footer: {
    fontFamily: 'Spoqa-Thin',
    fontSize: '1rem',
    lineHeight: '1rem',
    color: palette.white,
  },
};

const grid = {
  header: {
    gridRow: '1/2',
    gridColumn: '1/6',
  },
  footer: {
    gridRow: '4/5',
    gridColumn: '1/6',
  },
  navRight: {
    gridRow: '2/4',
    gridColumn: '5/6',
  },
  navLeft: {
    gridRow: '2/4',
    gridColumn: '1/2',
  },
  codeOne: {
    gridRow: '2/3',
    gridColumn: '3/4',
  },
  codeTwo: {
    gridRow: '2/3',
    gridColumn: '4/5',
  },
  fileExplorer: {
    gridRow: '2/3',
    gridColumn: '2/3',
  },
  terminal: {
    gridRow: '3/4',
    gridColumn: '2/5',
  },
};

export const theme = {
  palette,
  typo,
  grid,
};
