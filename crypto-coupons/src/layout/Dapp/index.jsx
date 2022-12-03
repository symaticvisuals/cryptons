import React from "react";
import { Outlet } from "react-router-dom";
import { ColorConstants } from "../../ColorConstants";

function DApp() {
  return (
    <div
      className="h-screen w-screen max-h-screen overflow-hidden"
      style={{ background: ColorConstants.black }}>
      <Outlet />
    </div>
  );
}

export default DApp;
