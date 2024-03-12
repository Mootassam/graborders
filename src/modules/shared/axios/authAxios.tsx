import axios from "axios";
import authToken from "../../../modules/auth/authToken";

const authAxios = axios.create({
  baseURL: "http://192.168.90.76:8080/api",
});

authAxios.interceptors.request.use(async function (options) {
  const token = authToken.get();
  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  return options;
});

export default authAxios;
