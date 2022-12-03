import React from "react";
import DApp from "../layout/Dapp";
import { LandingPage, CreatorPage } from "../pages";
import NoPageFound from "../pages/404";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ClaimLayout from "../layout/Claim";
import { Claim } from "../pages/claim";

const Constants = require("./Constants");

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<ProtectedRoutes />}> */}
      <Route path="/" element={<DApp />}>
        <Route path="" element={<CreatorPage />} />
      </Route>
      <Route path="/claim" element={<ClaimLayout />}>
        <Route path="" element={<Claim />} />
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
