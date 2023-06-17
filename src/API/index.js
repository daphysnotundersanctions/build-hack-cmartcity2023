import axios from "axios";
import { graphql, buildSchema } from "graphql";

const headersConfig = {
  "X-Custom-Header": "foobar",
};

// const graphqlBaseSchema = {};

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // timeout: 1000,
  headers: headersConfig,
});

const getAllInfo = async () => {
  return API.get("/layer");
};

export { getAllInfo };
