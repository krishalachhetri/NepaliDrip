import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase"; // make sure path is correct

const ProtectedRoute = ({ children }) => {
  if (!auth.currentUser) {
    // if user is not logged in
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
