import axios from "axios"
import { type SWRConfiguration } from "swr"
import { StatusCodes } from "http-status-codes"
import { toastify } from "../components/shared/Toastify"

const ENV = import.meta.env

export const axiosInstance = axios.create({
  baseURL: ENV.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
})

export const getRequest = (url: string) => axiosInstance.get(url).then(res => res.data)

export const SWREventConfig: SWRConfiguration = {
  fetcher: getRequest,
  revalidateOnFocus: false,
  revalidateOnMount: false,
  revalidateIfStale: false,
  onError: (error) => {
    if (error.status === StatusCodes.INTERNAL_SERVER_ERROR) {
      toastify('Internal server error!.', {
        icon: {
          name: 'error',
          color: 'red'
        },
      })
    }
  },
}