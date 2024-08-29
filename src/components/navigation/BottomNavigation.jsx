import React from "react";
import NavLink from "./NavLink";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import { blue, grey } from "@mui/material/colors";

const BottomNavigation = () => {
  return (
    <nav className="fixed w-full h-[60px] bottom-0 text-center bg-gray-100 border-t z-10">
      <ul className="flex flex-row justify-around items-center w-full h-full">
        <NavLink to={""}>
          <StarIcon sx={{ color: blue[700] }} />
          <span className="font-semibold text-blue-500 text-sm">Trending</span>
        </NavLink>

        <NavLink to={""}>
          <SettingsIcon sx={{ color: grey[700] }} />
          <span className="font-semibold text-gray-400 text-sm">Settings</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
