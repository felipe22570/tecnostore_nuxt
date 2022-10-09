import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "*",
  },
});

export default instance;
