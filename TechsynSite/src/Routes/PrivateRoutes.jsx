import React from "react";
import { Routes, Route } from "react-router-dom";

import UserPage from "../Pages/user/PagineUsuario";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
};

export default PublicRoutes;
