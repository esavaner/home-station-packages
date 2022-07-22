import { ApiKeys, getOneCall } from "api";
import { useQuery } from "react-query";

export const useOneCallQuery = (baseURL: string) => {
  const query = useQuery([ApiKeys.onecall], () => getOneCall(baseURL), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return query;
};
