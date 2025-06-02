import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa o componente Link do React Router para navegação.

// Importação das imagens e ícones utilizados no cabeçalho.
import Logo from "../../assets/imgs/HeaderImages/Techsyn_logo.png"; // Logo principal da TechSyn.
import Lupa from "../../assets/imgs/HeaderImages/Search_icon.png"; // Ícone de lupa para a barra de busca.
import dark_Light from "../../assets/imgs/HeaderImages/lua.webp"; // Ícone de lua para o tema escuro.
import Light_Dark from "../../assets/imgs/HeaderImages/sun.png"; // Ícone de sol para o tema claro.
import Micf from "../../assets/imgs/HeaderImages/icons8-microphone-48.png"; // Ícone de microfone.
import Materials from "../../assets/imgs/HeaderImages/Icon.png"; // Ícone para a seção de Materiais.
import Events from "../../assets/imgs/HeaderImages/Heart.png"; // Ícone de coração para eventos salvos.
import Notifications from "../../assets/imgs/HeaderImages/notifications.png"; // Ícone de notificações.
import Notificações from "../layout/Notificações"; // Componente do modal de notificações.
import UserProfileModal from "../layout/UserProfileModal"; // Componente do modal de perfil do usuário.
import Woman from "../../assets/imgs/UsuarioPagina/woman.png"; // Imagem de perfil padrão do usuário.

// Componente HeaderPrivate representa o cabeçalho da aplicação para usuários autenticados.
// Ele inclui navegação, funcionalidade de busca, alternador de tema e acesso a modais de perfil e notificações.
const HeaderPrivate = () => {
  // Estado para armazenar o termo de busca digitado pelo usuário.
  const [termoBusca, setTermoBusca] = useState("");
  // Estado que controla se o cabeçalho deve estar fixo no topo da página.
  const [isFixed, setIsFixed] = useState(false);
  // Estado que controla o tema da aplicação (verdadeiro para tema escuro, falso para tema claro).
  const [temaEscuro, setTemaEscuro] = useState(false);
  // Estado que controla a visibilidade do modal de perfil do usuário.
  const [modalPerfilAberto, setModalPerfilAberto] = useState(false);
  // Estado que controla a visibilidade do modal de notificações.
  const [modalNotificacaoAberto, setModalNotificacaoAberto] = useState(false);

  // Hook useEffect para adicionar e remover um event listener de scroll.
  // Ele monitora a posição de rolagem da página para fixar o cabeçalho quando o usuário rola para baixo.
  useEffect(() => {
    function handleScroll() {
      // Define `isFixed` como true se a rolagem vertical for maior que 50px.
      setIsFixed(window.scrollY > 50);
    }
    // Adiciona o event listener de scroll quando o componente é montado.
    window.addEventListener("scroll", handleScroll);
    // Remove o event listener quando o componente é desmontado para evitar vazamentos de memória.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // O array vazio assegura que o efeito seja executado apenas uma vez, na montagem.

  // Função para alternar o estado do tema (claro/escuro).
  const alternarTema = () => setTemaEscuro(!temaEscuro);

  // Função para abrir o modal de perfil. Garante que o modal de notificação seja fechado primeiro.
  const abrirModalPerfil = () => {
    setModalNotificacaoAberto(false); // Fecha o modal de notificação, se estiver aberto.
    setModalPerfilAberto(true); // Abre o modal de perfil.
  };

  // Função para fechar o modal de perfil.
  const fecharModalPerfil = () => setModalPerfilAberto(false);

  // Função para abrir o modal de notificação. Garante que o modal de perfil seja fechado primeiro.
  const abrirModalNotificacao = () => {
    setModalPerfilAberto(false); // Fecha o modal de perfil, se estiver aberto.
    setModalNotificacaoAberto(true); // Abre o modal de notificação.
  };

  // Função para fechar o modal de notificação.
  const fecharModalNotificacao = () => setModalNotificacaoAberto(false);

  return (
    <>
      {/* Elemento <header> principal do cabeçalho.
          Suas classes Tailwind CSS controlam o layout, responsividade e o comportamento fixo/relativo.
          A classe `isFixed` alterna entre a posição fixa e relativa, adicionando uma sombra e um fundo branco quando fixo. */}
      <header
        className={`flex justify-between items-center p-10 py-11 m-auto font-BankGothic font-bold z-50 transition-all duration-300 2xl:w-[84%] xl:w-[100%] md:w-full ${
          isFixed
            ? "fixed top-0 left-0 w-full shadow-md bg-white h-20 2xl:w-full" // Estilos aplicados quando o cabeçalho está fixo.
            : "relative w-[84%] bg-transparent" // Estilos aplicados quando o cabeçalho está em sua posição normal.
        }`}
      >
        {/* Container para o logo e a navegação principal (esquerda do cabeçalho). */}
        <div className="flex items-center gap-8 ">
          {/* Div para o logo da TechSyn. Inclui um pseudo-elemento `after` para uma linha divisória vertical. */}
          <div
            id="Logo_sphere"
            className="flex items-center h-[21px] w-[240px] relative after:content-[''] after:inline-block after:h-[47px] after:w-[2px] after:ml-[23%] after:bg-[#5B5B5B5C] after:align-middle  md:w-[180px] "
          >
            <img src={Logo} alt="Logo" className="h-[50px] w-[230px]" />
          </div>

          {/* Divisor vertical que aparece em telas médias e maiores. */}
          <div className="w-px h-10 bg-gray-300 hidden md:block"></div>

          {/* Componente de navegação (nav).
              Oculto em telas menores e visível em telas extra-grandes e maiores.
              Define os links para as diferentes seções da aplicação. */}
          <nav className="hidden xl:flex gap-3 xl:gap-6 text-[12px] xl:text-[13px] font-bold text-[rgb(94,94,94)] tracking-[1.5px] flex-shrink-0  2xl:text-[14px]">
            {/* Mapeia um array de objetos para criar os links de navegação. */}
            {[
              { label: "HOME", to: "/private" },
              { label: "SOBRE NÓS", to: "/private/Sobrenos" },
              { label: "RANKING", to: "/private/Ranking" },
              { label: "LOJA", to: "/private/loja" },
            ].map((item, index) => (
              <Link
                key={index} // Chave única para cada item na lista.
                to={item.to} // URL de destino do link.
                className="relative group overflow-hidden whitespace-nowrap" // Classes para o efeito de sublinhado animado.
              >
                <span className="relative z-10">{item.label}</span>
                {/* Elemento que cria o sublinhado animado ao passar o mouse. */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-l from-purple-500 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Container para a barra de busca (seção central do cabeçalho). */}
        <div className="search_mode flex w-[23.7%] justify-center items-center  md:w-[277px] 2xl:w-[27%] ">
          {/* Formulário de busca. Ao submeter (pressionar Enter), loga o termo de busca. */}
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Previne o comportamento padrão de recarregar a página ao submeter o formulário.
              console.log("Buscar por:", termoBusca); // Exibe o termo de busca no console.
            }}
            className="relative flex items-center w-full"
          >
            {/* Campo de input para digitar o termo de busca. */}
            <input
              type="text"
              value={termoBusca} // O valor do input é controlado pelo estado `termoBusca`.
              onChange={(e) => setTermoBusca(e.target.value)} // Atualiza o estado conforme o usuário digita.
              placeholder="Buscar eventos..." // Texto de placeholder.
              id="Search_input"
              className="w-full h-[2.5em] pl-10 pr-9 rounded-full text-[14px] text-gray-800 outline-none placeholder:opacity-100 bg-white shadow-md transition-all duration-300 border-[#21212107] border-1"
            />
            {/* Ícone de lupa posicionado absolutamente dentro do input, à esquerda. */}
            <img
              src={Lupa}
              alt="Search"
              className="absolute left-3 w-5 h-5 pointer-events-none invert" // `pointer-events-none` faz com que o clique passe para o input.
            />
            {/* Ícone de microfone posicionado absolutamente dentro do input, à direita. */}
            <div className="microfone absolute right-3 border-l-1 h-[75%] flex items-center border-[#8484856f] bg-white cursor-pointer">
              <img src={Micf} alt="" className="w-5 h-5 ml-2 opacity-50" />
            </div>
          </form>
        </div>

        {/* Container para os ícones de utilidade e o perfil do usuário (direita do cabeçalho). */}
        <div className="flex items-center justify-center gap-6 md:gap-3  ">
          {/* Alternador de tema (claro/escuro). */}
          <div className="dark_light  ">
            <div className="w-10 shadow-md h-10 rounded-full flex justify-center items-center">
              <img
                src={temaEscuro ? Light_Dark : dark_Light} // Exibe o ícone de sol se `temaEscuro` for verdadeiro, senão o de lua.
                alt="Tema"
                className="w-6 h-6 filter drop-shadow-md cursor-pointer"
                onClick={alternarTema} // Ao clicar, alterna o tema.
              />
            </div>
          </div>
          {/* Seção de navegação para materiais, eventos salvos e notificações. */}
          <div className="navegation  flex items-center gap-5 ml-5">
            <Link to="/private/materiais" title="Perfil do usuário">
              <img
                src={Materials}
                alt=""
                className="w-4.5 brightness-70 transform translate-y-[-0.20px]"
              />
            </Link>
            <Link to="/private/user" title="Eventos salvos">
              <img src={Events} alt="" className="w-5 brightness-55" />
            </Link>
            <button
              onClick={() =>
                modalNotificacaoAberto
                  ? fecharModalNotificacao()
                  : abrirModalNotificacao()
              }
              title="Notificações"
              className="focus:outline-none z-60"
            >
              <img
                src={Notifications}
                alt="Notificações"
                className="w-auto brightness-70 transform translate-y-[0.6px] cursor-pointer z-20"
              />
            </button>
          </div>
          {/* Divisor vertical que aparece em telas médias e maiores. */}
          <div className="w-px h-10 bg-gray-300 ml-4.5 mr-2 hidden md:block "></div>

          {/* Seção do perfil do usuário. */}
          <div className="flex items-center gap-6 text-sm font-semibold ml-3">
            {/* Div com um gradiente de borda para o botão de perfil. */}
            <div className="bg-gradient-to-b from-purple-500 to-indigo-600 p-[2px] rounded-full">
              {/* Botão de perfil do usuário. Ao clicar, alterna a visibilidade do modal de perfil. */}
              <button
                onClick={() =>
                  modalPerfilAberto ? fecharModalPerfil() : abrirModalPerfil()
                }
                className="user w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-white shadow-md overflow-hidden"
                title="Perfil do usuário"
              >
                {/* Imagem de perfil do usuário. */}
                <img
                  src={Woman}
                  alt="Foto de perfil"
                  className="w-full h-full object-cover rounded-full p-[0.10px] brightness-110"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Renderiza o Modal do Perfil do Usuário.
          A visibilidade é controlada pela prop `isOpen` e a função `onClose` é passada para fechar o modal. */}
      <UserProfileModal
        isOpen={modalPerfilAberto}
        onClose={fecharModalPerfil}
      />

      {/* Renderiza o Modal de Notificações.
          A visibilidade é controlada pela prop `isOpen` e a função `onClose` é passada para fechar o modal. */}
      <Notificações
        isOpen={modalNotificacaoAberto}
        onClose={fecharModalNotificacao}
      />
    </>
  );
};

export default HeaderPrivate;
