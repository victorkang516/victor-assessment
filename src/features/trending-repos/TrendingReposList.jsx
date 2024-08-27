import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RepoItem from "./RepoItem";
import Loader from "../../components/loader/Loader";
import formatDate from "../../utils/formatDate";
import { fetchRepos } from "../../services/repoService";

const TrendingReposList = () => {
  const [trendingRepos, setTrendingRepos] = useState([]);
  const [page, setPage] = useState(1);

  const today = new Date();
  const daysToSubtract = 10;
  const datePast10Days = new Date(today);
  datePast10Days.setDate(today.getDate() - daysToSubtract);
  const formattedDate = formatDate(datePast10Days);

  const fetchData = async () => {
    try {
      const response = await fetchRepos(formattedDate, page);
      setTrendingRepos((prevRepos) => [...prevRepos, ...response.data.items]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const loadData = () => {
      fetchData();
    };
    loadData();
  }, []);

  return (
    <div className="overflow-y-auto mb-16">
      <InfiniteScroll
        dataLength={trendingRepos.length}
        next={fetchData}
        hasMore={true}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No more repos</b>
          </p>
        }
      >
        {trendingRepos.map((item, index) => (
          <RepoItem item={item} key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default TrendingReposList;
