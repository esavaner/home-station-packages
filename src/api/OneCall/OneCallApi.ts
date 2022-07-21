import axios from "axios";
import { OneCallModel } from "./OneCallApi.model";

export const getOneCall = (baseURL: string) =>
  axios.get<OneCallModel>(`${baseURL}/onecall`).then(({ data }) => data);
