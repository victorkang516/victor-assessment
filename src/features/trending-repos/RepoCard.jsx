import React from "react";
import formatNumber from "../../utils/formatNumber";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const RepoCard = (props) => {
  const { repo } = props;
  return (
    <section className="flex flex-col p-8 border-b hover:bg-gray-100">
      <h2 className="font-semibold text-lg">{repo.full_name}</h2>
      <p>{repo.description}</p>
      <div className="flex flex-row justify-between mt-4">
        <div className="flex flex-row gap-2">
          <img
            src={repo.owner.avatar_url}
            className="object-cover"
            alt="owner-image"
            width={25}
            height={25}
          />
          <p className="font-semibold">{repo.owner.login}</p>
        </div>
        <div className="flex flex-row">
          <StarOutlinedIcon />
          <p className="font-semibold">{formatNumber(repo.stargazers_count)}</p>
        </div>
      </div>
    </section>
  );
};

export default RepoCard;
