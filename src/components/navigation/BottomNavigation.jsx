import React from "react";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-100 p-4 border-t text-center z-10">
      <ul className="flex flex-row justify-around">
        <li className="flex flex-col items-center">
          <StarIcon />
          <span className="font-semibold">Trending</span>
        </li>
        <li className="flex flex-col items-center">
          <SettingsIcon />
          <span className="font-semibold">Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
