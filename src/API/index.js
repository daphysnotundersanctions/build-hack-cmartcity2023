import axios from "axios";

const API = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// API.get()
