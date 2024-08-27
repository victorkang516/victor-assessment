import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call failed:", error);
    if (error.response.status === 401) {
      console.error("Unauthorized");
    } else if (error.response.status === 404) {
      console.error("Not found");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
