import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RepoItem from "./RepoItem";
import Loader from "../../components/loader/Loader";
import formatDate from "../../utils/formatDate";
import { getRepos } from "../../services/repoService";

const TrendingReposList = () => {
  const [trendingRepos, setTrendingRepos] = useState([]);
  const [page, setPage] = useState(1);

  const getDate10DaysAgo = () => {
    const today = new Date();
    const daysToSubtract = 10;
    const tenDaysAgo = new Date(today);
    tenDaysAgo.setDate(today.getDate() - daysToSubtract);
    return formatDate(tenDaysAgo);
  };

  const startDate = getDate10DaysAgo();

  const fetchData = async () => {
    try {
      const response = await getRepos(startDate, page);
      setTrendingRepos((prevRepos) => [...prevRepos, ...response.data.items]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const initialLoadData = () => {
      fetchData();
    };
    initialLoadData();
  }, []);

  return (
    <div className="overflow-y-auto mb-16">
      <InfiniteScroll
        dataLength={trendingRepos.length}
        next={fetchData}
        hasMore={true}
        loader={<Loader />}
        endMessage={
          <p className="text-center">
            <b>No more repos</b>
          </p>
        }
      >
        {trendingRepos.map((item) => (
          <RepoItem item={item} key={item.id} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default TrendingReposList;
