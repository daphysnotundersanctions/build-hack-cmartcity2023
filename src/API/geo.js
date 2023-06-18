import axios from "axios";

const apiConfig = {
  ccode: "request_user_007",
  key: "dd83e51f-6d0a-4510-a885-6b54e5881961",
  "Content-Type": "application/x-www-form-urlencoded",
};

const getPopulationInfo = (info) => {
  return axios.post("https://api.geointellect.com/poptools/pop_radius", info, {
    headers: apiConfig,
  });
};

export { getPopulationInfo };
