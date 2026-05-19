import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("reservaai:token");
const tokenType = localStorage.getItem("reservaai:tokenType") ?? "Bearer";

if (token) {
  api.defaults.headers.common.Authorization = `${tokenType} ${token}`;
}
