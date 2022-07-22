import { ApiKeys, getStatus } from "api";
import { useQuery } from "react-query";

export const useStatusQuery = (baseURL: string) => {
  const query = useQuery([ApiKeys.status], () => getStatus(baseURL), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return query;
};
