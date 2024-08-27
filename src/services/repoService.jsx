import apiClient from "./apiClient";

export const fetchRepos = (formattedDate, page) => {
  return apiClient.get(
    `/search/repositories?q=created:%3E${formattedDate}&sort=stars&order=desc&page=${page}`
  );
};
