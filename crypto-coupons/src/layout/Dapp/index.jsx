import React from "react";
import { Outlet } from "react-router-dom";
import { ColorConstants } from "../../ColorConstants";
import TopBar from "./components/topbar";
import "./index.css";
function DApp() {
  return (
    <div className="h-screen w-screen max-h-screen overflow-hidden  " style={{
      background: ColorConstants.fadedBlack,
      // backgroundImage: `url(https://img.freepik.com/free-photo/luminous-metaverse-background_23-2149539959.jpg?w=1480&t=st=1670086926~exp=1670087526~hmac=aed7c21d365ea142b782351f3f6389bd56354922638eb71ee56ebb84c0541311)`,
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
      // backgroundPosition: "center",
    
    }}>
      <div className=" h-full">
        <TopBar/>
        <Outlet />
      </div>
    </div>
  );
}

export default DApp;
