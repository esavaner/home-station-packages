export const parseTemp = (temp: number, round: number = 1) =>
  `${temp ? temp.toFixed(round) : "--"}°C`;
