import React from "react";
import { Navigate } from "react-router-dom";
import { Dashboard } from "../0auth/Dashboard";

export const Protected = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token?<Dashboard/>:<Navigate to="/"/>}
    </>
  );
};
