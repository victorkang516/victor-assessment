import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../components/appbar/AppBar";
import BottomNavigation from "../components/navigation/BottomNavigation";

const Root = () => {
  return (
    <div className="h-screen">
      <AppBar />

      <main className="flex-1 max-w-[1080px] mx-auto">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Root;
