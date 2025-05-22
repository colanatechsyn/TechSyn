import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
// import CompanyRoutes from "./CompanyRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/public/*" element={<PublicRoutes />} />
      <Route path="/private/*" element={<PrivateRoutes />} />
      {/* <Route path="/company/*" element={<CompanyRoutes />} /> */}
      <Route path="*" element={<Navigate to="/public" />} />
    </Routes>
  );
}
