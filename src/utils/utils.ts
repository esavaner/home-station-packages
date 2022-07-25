import { Weather } from "api";
import { OneCallImages } from "assets";

export const parseTemp = (temp: number, round: number = 1) =>
  `${temp ? temp.toFixed(round) : "--"}°C`;

export const parseIcon = (wth: Weather[]) =>
  OneCallImages[wth[0].icon as keyof typeof OneCallImages];
