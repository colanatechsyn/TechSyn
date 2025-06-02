import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../Pages/company/dashboard";

const CompanyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default CompanyRoutes;
