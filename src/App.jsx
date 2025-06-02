import React, { useEffect, useState } from "react";
import AOS from "aos"; // Importa a biblioteca AOS (Animate On Scroll) para animações de scroll.
import "aos/dist/aos.css"; // Importa os estilos CSS do AOS.

import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter para habilitar o roteamento no React.
import AppRoutes from "./Routes/Routes"; // Importa o componente AppRoutes que gerencia as definições de rota.

// Importação dos componentes de layout (cabeçalhos e rodapés).
import PublicHeader from "./components/layout/PublicHeader"; // Cabeçalho para usuários não logados.
import PublicFooter from "./components/layout/PublicFooter"; // Rodapé para usuários não logados.
import PrivateHeader from "./components/layout/PrivateHeader"; // Cabeçalho para usuários logados (não empresas).
import PrivateFooter from "./components/layout/PrivateFooter"; // Rodapé para usuários logados (não empresas).

import ChatFinal from "../src/components/layout/ChatFinal"; // Componente de chat (parece ser um chat persistente).

// O componente principal da aplicação.
function App() {
  // Estado para controlar se o usuário está logado. Inicializado como true para simulação.
  // NOTA: No ambiente de produção, este valor deveria ser obtido de um contexto de autenticação ou token.
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Comentário original: "coloque false para deslogado"
  // Estado para armazenar o tipo de perfil do usuário ("company" para empresa, "user" para usuário comum).
  const [userRole, setUserRole] = useState("user"); // Comentário original: ""company" ou "user""

  // Hook useEffect para inicializar a biblioteca AOS e simular o estado de login.
  useEffect(() => {
    // Inicializa AOS com uma duração de animação de 1000ms e para que as animações ocorram apenas uma vez.
    AOS.init({ duration: 1000, once: true });

    // Simula a verificação de login buscando dados do usuário no localStorage.
    // Esta é uma implementação temporária até que o backend de autenticação seja desenvolvido.
    const user = JSON.parse(localStorage.getItem("user")); // Tenta obter o objeto 'user' do localStorage.
    if (user) {
      // Se houver dados de usuário, define o estado de login e a função do usuário.
      setIsLoggedIn(true);
      setUserRole(user.role);
    }
  }, []); // O array vazio assegura que este efeito seja executado apenas uma vez, na montagem do componente.

  // Variável booleana para verificar se o usuário logado é uma empresa.
  const isCompany = isLoggedIn && userRole === "company";

  return (
    // <BrowserRouter> habilita o roteamento declarativo para toda a aplicação.
    <BrowserRouter>
      {/* Renderiza o componente ChatFinal, que parece ser global e persistente em todas as rotas. */}
      <ChatFinal />

      {/* Renderização condicional dos layouts (cabeçalho e rodapé) e das rotas,
          baseada no estado de login e no tipo de perfil do usuário. */}
      {isLoggedIn ? ( // Se o usuário estiver logado...
        isCompany ? ( // E se o usuário for uma empresa...
          <>
            {/* TODO: Substituir por CompanyHeader e CompanyFooter quando estiverem disponíveis. */}
            {/* O comentário indica que aqui deveriam ser colocados os componentes de cabeçalho e rodapé específicos para empresas. */}
            {/* Atualmente, não há componentes definidos para este caso, resultando em nada sendo renderizado aqui. */}
            {/* <CompanyHeader /> */}
            {/* <AppRoutes /> */}
            {/* <CompanyFooter /> */}
          </>
        ) : (
          // Se o usuário estiver logado e NÃO for uma empresa (ou seja, um usuário comum)...
          <>
            <PrivateHeader />{" "}
            {/* Renderiza o cabeçalho para usuários logados. */}
            <AppRoutes />{" "}
            {/* Renderiza as rotas da aplicação (que agora podem ser privadas). */}
            <PrivateFooter /> {/* Renderiza o rodapé para usuários logados. */}
          </>
        )
      ) : (
        // Se o usuário NÃO estiver logado (visita pública)...
        <>
          <PublicHeader /> {/* Renderiza o cabeçalho para visitantes. */}
          <AppRoutes />{" "}
          {/* Renderiza as rotas da aplicação (que serão públicas). */}
          <PublicFooter /> {/* Renderiza o rodapé para visitantes. */}
        </>
      )}
    </BrowserRouter>
  );
}

export default App; // Exporta o componente App como o componente padrão.
