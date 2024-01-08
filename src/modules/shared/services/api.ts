import { refreshToken } from "@modules/auth/services/refreshToken";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useAuthStore } from "../stores/useAuthStore";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
});

let isRefreshingToken = false;

api.interceptors.request.use(async req => {
  let token;
  if (typeof window !== "undefined") {
    const needsAuthentication = !req?.url?.includes("/auth/");
    const state = useAuthStore.getState();

    if (needsAuthentication && state.token) {
      if (!state.hasValidSession()) {
        if (isRefreshingToken) {
          while (isRefreshingToken) {
            await new Promise(resolve => setTimeout(resolve, 500));
          }

          token = useAuthStore.getState().token;
        } else {
          isRefreshingToken = true;
          token = await refreshToken();
          isRefreshingToken = false;
        }
      } else {
        token = state.token;
      }
      if (token && req.headers) {
        req.headers.Authorization = `Bearer ${token}`;
      }
    }
  }

  return req;
});

// api.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   (error: AxiosError) => {
//     Sentry.captureException(error)
//     return Promise.reject(error)
//   },
// )

export default api;
