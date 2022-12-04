import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ColorConstants } from "../../ColorConstants";
import {
  SocialLoginSDKContext,
  Web3StateContext,
  gSignerContext,
} from "../../contexts/dappContexts";
import TopBar from "./components/topbar";
import "./index.css";
function DApp() {
  const initialState = {
    provider: null,
    web3Provider: null,
    ethersProvider: null,
    address: "",
    chainId: "80001",
  };
  const [web3State, setWeb3State] = useState(initialState);
  const { provider, web3Provider, ethersProvider, address, chainId } =
    web3State;
  const [socialLoginSDK, setSocialLoginSDK] = useState(null);
  const [gSigner, setGSigner] = useState(null);

  return (
    <div
      className="h-screen w-screen max-h-screen overflow-hidden  "
      style={{
        background: ColorConstants.background,
        // backgroundImage: `url(https://img.freepik.com/free-photo/luminous-metaverse-background_23-2149539959.jpg?w=1480&t=st=1670086926~exp=1670087526~hmac=aed7c21d365ea142b782351f3f6389bd56354922638eb71ee56ebb84c0541311)`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}>
      <div className=" h-full">
        <Web3StateContext.Provider value={{ web3State, setWeb3State }}>
          <gSignerContext.Provider value={{ gSigner, setGSigner }}>
            <SocialLoginSDKContext.Provider
              value={{ socialLoginSDK, setSocialLoginSDK }}>
              <TopBar />
              <Outlet />
            </SocialLoginSDKContext.Provider>
          </gSignerContext.Provider>
        </Web3StateContext.Provider>
      </div>
    </div>
  );
}

export default DApp;
