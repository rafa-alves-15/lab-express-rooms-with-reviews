import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000" });

api.interceptors.request.use((config) => {
  const storedUser = localStorage.getItem("loggedInUser");

  const loggedInUser = JSON.parse(storedUser || '""');

  if (loggedInUser.token) {
    config.headers = {
      authorization: `Bearer ${loggedInUser.token}`,
    };
  }

  return config;
});

export default api;
