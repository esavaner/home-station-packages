import { SensorRead, Weather } from "models";
import { OneCallImages } from "assets";
import {
  window_open,
  window_closed,
  garage_open,
  garage_closed,
  temperature,
  temperature_cold,
  temperature_hot,
} from "assets";

export const parseTemp = (temp: number, round: number = 1) =>
  `${temp ? temp.toFixed(round) : "--"}°C`;

export const parseIcon = (wth: Weather[]) =>
  OneCallImages[wth[0].icon as keyof typeof OneCallImages];

export const getTempIcon = (temp: number) => {
  if (temp < 5) {
    return temperature_cold;
  } else if (temp < 22) {
    return temperature;
  } else {
    return temperature_hot;
  }
};

export const parseSensorIcon = (sensor: SensorRead) => {
  switch (sensor.type) {
    case "window":
      return sensor.value
        ? {
            icon: window_open,
            state: "Otwarte",
          }
        : {
            icon: window_closed,
            state: "Zamknięte",
          };
    case "gate":
      return sensor.value
        ? {
            icon: garage_open,
            state: "Otwarta",
          }
        : {
            icon: garage_closed,
            state: "Zamknięta",
          };
    case "temp":
      return {
        icon: getTempIcon(sensor.value as number),
        state: parseTemp(sensor.value as number),
      };
    default:
      return {
        icon: garage_closed,
        state: "Otwarte",
      };
  }
};
