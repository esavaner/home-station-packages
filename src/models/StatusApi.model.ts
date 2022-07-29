export type Sensor = {
  pin: number;
  description: string;
  type: "window" | "rain" | "gate" | "temp";
  id?: string;
};

export type SensorRead = Sensor & {
  isOn?: boolean;
  temp?: string;
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
