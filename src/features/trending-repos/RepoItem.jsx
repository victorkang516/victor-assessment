import React from "react";
import formatNumber from "../../utils/formatNumber";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const RepoItem = (props) => {
  const { item } = props;
  return (
    <div className="flex flex-col p-8 border-b hover:bg-gray-100">
      <div className="font-semibold text-lg">{item.full_name}</div>
      <div>{item.description}</div>
      <div className="flex flex-row justify-between mt-2">
        <div className="flex flex-row gap-2">
          <img src={item.owner.avatar_url} className="h-[25px] object-cover" />
          <div className="font-semibold">{item.owner.login}</div>
        </div>
        <div className="flex flex-row">
          <StarOutlinedIcon />
          <div className="font-semibold">
            {formatNumber(item.stargazers_count)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
