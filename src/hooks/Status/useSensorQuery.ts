import { ApiKeys, getSensors } from "api";
import { useQuery } from "react-query";

export const useSensorQuery = (baseURL: string) => {
  const query = useQuery([ApiKeys.sensors], () => getSensors(baseURL), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return query;
};
