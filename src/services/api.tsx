import axios from "axios";

export const api = axios.create({
  baseURL: "http://3.15.193.33:4050",
});
