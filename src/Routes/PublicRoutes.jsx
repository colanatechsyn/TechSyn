import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../Pages/public/Home";
import FAQ from "../Pages/public/FAQ";
import SobreNos from "../Pages/public/SobreNos";
import Suporte from "../Pages/public/Suporte";
import Cookies from "../Pages/public/Cookies";
import SegurancaP from "../Pages/public/Seguranca_e_P";
import SobreAnuncio from "../Pages/public/SobreAnuncio";
import Legal from "../Pages/public/Legal";
import Politicap from "../Pages/public/PoliticaeP";
import Acessibilidade from "../Pages/public/Acessibilidade";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/SobreNos" element={<SobreNos />} />
      <Route path="/Suporte" element={<Suporte />} />
      <Route path="/Acessibilidade" element={<Acessibilidade />} />
      <Route path="/Politica" element={<Politicap />} />
      <Route path="/Legal" element={<Legal />} />
      <Route path="/Sobreanuncio" element={<SobreAnuncio />} />
      <Route path="/Segurancaeprivacidade" element={<SegurancaP />} />
      <Route path="/Cookies" element={<Cookies />} />
    </Routes>
  );
};

export default PublicRoutes;
