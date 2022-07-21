import { useQuery } from "react-query";
import { ApiKeys } from "../../api/keys";
import { StatusApi } from "../../api/Status";

export const useSensorsQuery = (baseURL: string) => {
  const query = useQuery(
    [ApiKeys.sensors],
    () => StatusApi.getSensors(baseURL),
    {
      refetchOnWindowFocus: true,
      staleTime: 5 * 60 * 1000,
    }
  );

  return query;
};
