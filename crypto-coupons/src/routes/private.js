import Cookies from "js-cookie";
import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const token = Cookies.get("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
