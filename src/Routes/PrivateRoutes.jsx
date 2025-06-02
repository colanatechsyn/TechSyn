import React from "react";
import { Routes, Route } from "react-router-dom";

import UserPage from "../Pages/user/PagineUsuario";
import Store from "../Pages/user/store";
import Home from "../Pages/user/Home";
import CreateProfile from "../Pages/user/CriarPerfil";
import SobreNos from "../Pages/user/SobreNos";
import Suporte from "../Pages/user/Suporte";
import FAQ from "../Pages/user/FAQ";
import Plans from "../components/layout/Plans";
import Ranking from "../Pages/user/Ranking";
import Materiais from "../Pages/user/Materiais";
import EventPage from "../Pages/user/eventAdd";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/CriarPerfil" element={<CreateProfile />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/loja" element={<Store />} />
      <Route path="/" element={<Home />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/SobreNos" element={<SobreNos />} />
      <Route path="/Suporte" element={<Suporte />} />
      <Route path="/Plans" element={<Plans />} />
      <Route path="/Ranking" element={<Ranking />} />
      <Route path="/Materiais" element={<Materiais />} />
      <Route path="/EventPage" element={<EventPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
