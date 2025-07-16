import useSWR, { type SWRConfiguration } from "swr"
import { getRequest } from "../utils/apiRequest"

export const useCurrentUser = (config: SWRConfiguration) => {
  const { data, error, isLoading } = useSWR("/user/current-user", getRequest, config)
  return {
    data,
    isError: error,
    isLoading
  }
}