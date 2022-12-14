import React from "react";
import DApp from "../layout/Dapp";
import { LandingPage, CreatorPage } from "../pages";
import NoPageFound from "../pages/404";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Claim } from "../pages/claim";
import { LiFi } from "../pages/lifiWidget";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<ProtectedRoutes />}> */}
      <Route path="/" element={<DApp />}>
        <Route path="" element={<CreatorPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="claim">
          <Route path=":claimId" element={<Claim />} />
        </Route>
        <Route path="swap/*" element={<LiFi />} />
      </Route>

      <Route path="/details" element={<>Invalid ID</>}></Route>
      {/* </Route> */}
      <Route
        path="/home"
        index
        element={<LandingPage />}
        errorElement={<NoPageFound />}
      />
      <Route path="*" element={<NoPageFound />} />
    </>
  )
);
