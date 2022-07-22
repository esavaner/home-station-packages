export { ApiKeys } from "./keys";

export { getOneCall } from "./OneCall/OneCallApi";
export type {
  Weather,
  Current,
  Minutely,
  Hourly,
  Daily,
  OneCallModel,
} from "./OneCall/OneCallApi.model";

export { getStatus, getSensors } from "./Status/StatusApi";
export type {
  Sensor,
  SensorRead,
  OneWire,
  OneWireRead,
  StatusModel,
} from "./Status/StatusApi.model";
