import axios from "axios";

export const SsrApi = axios.create({
  baseURL: process.env.API_SSR_PATH,
});

export const ClientApi = axios.create({
  baseURL: "/api",
});
