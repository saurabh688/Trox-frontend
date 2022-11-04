import axios from "axios";
import { getRefreshToken, setAccessToken, setRefreshToken, clearAccessToken, clearRefreshToken } from "../utils/auth";

const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_BACKEND_HOST,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error?.config;
    if (originalConfig.url !== "user/signin" && error?.response) {
      // Access Token was expired
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axiosInstance.post("/user/access-token", {
            refreshToken: getRefreshToken(),
          });
          const { token, refreshToken } = rs.data.ResponseBody;
          setRefreshToken(refreshToken);
          setAccessToken(token);
          originalConfig.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(originalConfig);
        } catch (_error) {
          clearAccessToken()
          clearRefreshToken()
          window.location.pathname = '/signin'
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

export const _axiosInstance = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_HOME_PAGE,
});
