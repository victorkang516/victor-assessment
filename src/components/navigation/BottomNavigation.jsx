import React from "react";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import { blue, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 w-full h-[60px] bg-gray-100 border-t text-center z-10">
      <ul className="flex flex-row justify-around items-center w-full h-full">
        <li className="flex-1 h-full">
          <Link
            to={``}
            className="flex flex-col justify-center items-center hover:bg-gray-200 h-full"
          >
            <StarIcon sx={{ color: blue[700] }} />
            <span className="font-semibold text-blue-500 text-sm">
              Trending
            </span>
          </Link>
        </li>
        <li className="flex-1 h-full">
          <Link
            to={``}
            className="flex flex-col justify-center items-center hover:bg-gray-200 h-full"
          >
            <SettingsIcon sx={{ color: grey[700] }} />
            <span className="font-semibold text-gray-400 text-sm">
              Settings
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
