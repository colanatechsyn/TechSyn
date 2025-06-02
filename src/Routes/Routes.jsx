import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa os componentes necessários do React Router para definir rotas.
import PublicRoutes from "./PublicRoutes"; // Importa o componente que define as rotas públicas (acessíveis sem autenticação).
import PrivateRoutes from "./PrivateRoutes"; // Importa o componente que define as rotas privadas (para usuários autenticados).
import CompanyRoutes from "./CompanyRoutes"; // Importa o componente que define as rotas específicas para empresas.

// O componente AppRoutes é responsável por centralizar e gerenciar todas as rotas da aplicação.
// Ele utiliza o React Router para renderizar diferentes conjuntos de rotas com base no caminho da URL.
export default function AppRoutes() {
  return (
    // <Routes> é o container principal para todas as definições de rota.
    // Ele renderiza a primeira <Route> que corresponde ao caminho atual da URL.
    <Routes>
      {/* Define as rotas públicas da aplicação.
        - `path="/*"`: Este caminho curinga (`*`) significa que qualquer URL que não seja capturada por rotas mais específicas
          (como `/private/*` ou `/company/*`) será tratada como uma rota pública.
          Isso geralmente inclui a página inicial, login, registro, sobre nós, etc.
        - `element={<PublicRoutes />}`: Quando o caminho corresponde, o componente `PublicRoutes` é renderizado.
          Este componente, por sua vez, conterá suas próprias definições de <Route> para as sub-rotas públicas.
      */}
      <Route path="/*" element={<PublicRoutes />} />

      {/* Define as rotas privadas da aplicação, acessíveis apenas por usuários autenticados.
        - `path="/private/*"`: Qualquer URL que comece com `/private/` será direcionada para este grupo de rotas.
          Exemplos: `/private/dashboard`, `/private/profile`, `/private/settings`.
        - `element={<PrivateRoutes />}`: O componente `PrivateRoutes` é renderizado para lidar com essas rotas.
          Dentro de `PrivateRoutes`, haverá lógica para verificar a autenticação do usuário e, se necessário,
          redirecionar para uma página de login ou exibir o conteúdo protegido.
      */}
      <Route path="/private/*" element={<PrivateRoutes />} />

      {/* Define as rotas específicas para perfis de empresa.
        - `path="/company/*"`: Qualquer URL que comece com `/company/` será direcionada para este grupo de rotas.
          Exemplos: `/company/dashboard`, `/company/event-management`, `/company/analytics`.
        - `element={<CompanyRoutes />}`: O componente `CompanyRoutes` é renderizado.
          Este componente provavelmente terá suas próprias verificações de autenticação e autorização
          para garantir que apenas usuários com perfil de empresa possam acessá-las.
      */}
      <Route path="/company/*" element={<CompanyRoutes />} />
    </Routes>
  );
}
