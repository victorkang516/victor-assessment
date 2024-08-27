import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <CircularProgress />
    </div>
  );
};

export default Loader;
