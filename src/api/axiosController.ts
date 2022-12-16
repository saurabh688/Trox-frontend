import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_BACKEND_HOST,
  validateStatus:()=>false
});

export default axiosInstance;
