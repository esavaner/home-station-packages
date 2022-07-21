import axios from "axios";
import { Sensor, StatusModel } from "./StatusApi.model";

export const getStatus = (baseURL: string) =>
  axios.get<StatusModel>(`${baseURL}/status`).then(({ data }) => data);

export const getSensors = (baseURL: string) =>
  axios.get<Sensor[]>(`${baseURL}/sensors`).then(({ data }) => data);
