import { useQuery } from "react-query";
import { ApiKeys } from "../../api/keys";
import { StatusApi } from "../../api/Status";

export const useStatusQuery = (baseURL: string) => {
  const query = useQuery([ApiKeys.status], () => StatusApi.getStatus(baseURL), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return query;
};
