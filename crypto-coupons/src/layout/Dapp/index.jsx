import React from "react";
import { Outlet } from "react-router-dom";
import { ColorConstants } from "../../ColorConstants";
import "./index.css";
function DApp() {
  return (
    <div className="h-screen w-screen max-h-screen overflow-hidden  bg-black">
      <div className="background-dpp h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default DApp;
