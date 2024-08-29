import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../components/appbar/AppBar";
import BottomNavigation from "../components/navigation/BottomNavigation";

const Root = () => {
  return (
    <div className="h-screen">
      <AppBar />
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default Root;
