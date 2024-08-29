import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRepos } from "../../services/repoService";
import formatDate from "../../utils/formatDate";
import RepoCard from "./RepoCard";
import Loader from "../../components/loader/Loader";

const TrendingReposList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  const getDate10DaysAgo = () => {
    const today = new Date();
    const daysToSubtract = 10;
    const tenDaysAgo = new Date(today);
    tenDaysAgo.setDate(today.getDate() - daysToSubtract);
    return formatDate(tenDaysAgo);
  };

  const startDate = getDate10DaysAgo();

  const fetchRepoData = async () => {
    try {
      const response = await getRepos(startDate, page);
      const newRepos = response.data.items;
      setRepos((prevRepos) => [...prevRepos, ...newRepos]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const loadRepoData = () => {
      fetchRepoData();
    };
    loadRepoData();
  }, []);

  return (
    <div className="overflow-y-auto">
      <InfiniteScroll
        dataLength={repos.length}
        next={fetchRepoData}
        hasMore={true}
        loader={<Loader />}
        endMessage={
          <p className="text-center">
            <b>No more repos</b>
          </p>
        }
      >
        {repos.map((repo) => (
          <RepoCard repo={repo} key={repo.id} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default TrendingReposList;
