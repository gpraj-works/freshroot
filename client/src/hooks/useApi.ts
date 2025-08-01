import useSWR, { type SWRConfiguration } from "swr"
import useSWRMutation from "swr/mutation"
import { getRequest, postRequest } from "../utils/apiRequest"
import axios from "axios"
import { StatusCodes } from "http-status-codes"
import { useMemo } from "react"

export interface ErrorStatus {
  status?: number
  message: string
  errorField?: string | null
}

export const getErrorStatus = (error: unknown): ErrorStatus | null => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status ?? StatusCodes.INTERNAL_SERVER_ERROR
    const message =
      error.response?.data?.message ||
      error.response?.statusText ||
      error.message ||
      "An unexpected error occurred."

    return {
      status,
      message,
      errorField: error?.response?.data?.errorField ?? null
    }
  }

  if (error instanceof Error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
      errorField: null
    }
  }

  return null
}


/* ADMIN */

export const useAdminLogin = () => {
  const { data, isMutating, trigger, error, reset } = useSWRMutation("/admin/login", postRequest)
  const errorStatus = useMemo(() => getErrorStatus(error), [error])
  return { trigger, isMutating, data, errorStatus, reset }
}

/* SELLER */

/* USER */
export const useCurrentUser = (config: SWRConfiguration) => {
  const { data, error, isLoading } = useSWR("/user/current-user", getRequest, config)
  return {
    data,
    isError: error,
    isLoading
  }
}