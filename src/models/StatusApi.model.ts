export type Sensor = {
  pin: number;
  description: string;
  type: "window" | "rain" | "gate" | "temp";
};

export type SensorRead = Sensor & {
  value: string | number | boolean;
};

export type Controller = {
  ip: string;
  name: string;
  sensors: Sensor[];
};

export type ControllerRead = Omit<Controller, "sensors"> & {
  time: number;
  temp: string;
  sensors: SensorRead[];
};
