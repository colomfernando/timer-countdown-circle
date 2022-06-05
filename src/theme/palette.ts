const palette = {
  green: '#4cc355',
  red: '#fb6087',
  common: {
    black: '#000',
    white: '#fff',
  },
  grey: '#bdbdbd',
};

export const hexToRgb = (hex: string): string => {
  const hexReplace = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_m, r, g, b) => '#' + r + r + g + g + b + b
  );

  const subString = hexReplace.substring(1);
  const matchHex = subString.match(/.{2}/g) || [];
  const joinHex = matchHex.map((x) => parseInt(x, 16)).join(',');
  return joinHex;
};

export default palette;
