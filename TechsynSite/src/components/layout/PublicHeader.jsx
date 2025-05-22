import React, { useState, useEffect } from "react";
import Logo from "../../assets/imgs/HeaderImages/Techsyn_logo.png";
import Lupa from "../../assets/imgs/HeaderImages/Search_icon.png";
import ModalLogin from "./ModalLogin";
import ModalRegistro from "./ModalRegistro";
import dark_Light from "../../assets/imgs/HeaderImages/lua.webp"; // Ícone da lua (tema escuro)
import Light_Dark from "../../assets/imgs/HeaderImages/sun.png"; // Ícone do sol (tema claro)
import Micf from "../../assets/imgs/HeaderImages/icons8-microphone-48.png";
const Header = () => {
  // Estados de controle
  const [modalAberto, setModalAberto] = useState(false); // Modal aberto ou fechado
  const [tipoModal, setTipoModal] = useState(""); // "login" ou "register"
  const [termoBusca, setTermoBusca] = useState(""); // Campo de busca
  const [isFixed, setIsFixed] = useState(false); // Header fixo ao scroll
  const [temaEscuro, setTemaEscuro] = useState(false); // Alternância de tema

  // Efeito para controlar o header fixo com base no scroll
  useEffect(() => {
    function handleScroll() {
      setIsFixed(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alternância de tema ao clicar na lua/sol
  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  // Abrir modal
  const abrirModal = (tipo) => {
    setTipoModal(tipo);
    setModalAberto(true);
  };

  // Fechar modal
  const fecharModal = () => {
    setModalAberto(false);
    setTipoModal("");
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`flex justify-between items-center p-10 py-11 m-auto font-BankGothic font-bold z-50 transition-all duration-300 2xl:w-[84%] xl:w-[100%] md:w-full
          ${
            isFixed
              ? "fixed top-0 left-0 w-full shadow-md bg-white h-20 2xl:w-full" // Quando scrolado
              : "relative w-[84%] bg-transparent " // Normal
          }
        `}
      >
        {/* LOGO E NAVEGAÇÃO */}
        <div className="flex items-center gap-8 ">
          {/* Logo com divisor */}
          <div
            id="Logo_sphere"
            className="flex items-center h-[21px] w-[240px] relative after:content-[''] after:inline-block after:h-[47px] after:w-[2px] after:ml-[23%] after:bg-[#5B5B5B5C] after:align-middle  md:w-[180px] "
          >
            <img src={Logo} alt="Logo" className="h-[50px] w-[230px]" />
          </div>

          {/* Linha vertical visível apenas em md+ */}
          <div className="w-px h-10 bg-gray-300 hidden md:block"></div>

          {/* Menu de navegação */}
          <nav className="hidden xl:flex gap-3 xl:gap-6 text-[12px] xl:text-[13px] font-bold text-[rgb(94,94,94)] tracking-[1.5px] flex-shrink-0  2xl:text-[14px]">
            {[
              { label: "HOME", href: "/" },
              { label: "SOBRE NÓS", href: "/SobreNos" },
              { label: "SUPORTE", href: "/Suporte" },
              { label: "AJUDA", href: "/FAQ" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative group overflow-hidden whitespace-nowrap"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-l from-purple-500 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* BARRA DE BUSCA */}
        <div className="search_mode flex w-[23.7%] justify-center items-center  md:w-[277px] 2xl:w-[27%]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Buscar por:", termoBusca);
            }}
            className="relative flex items-center w-full"
          >
            <input
              type="text"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              placeholder="Buscar eventos..."
              id="Search_input"
              className="w-full h-[2.5em] pl-10 pr-9 rounded-full text-[14px] text-gray-800 outline-none placeholder:opacity-100 bg-white shadow-md transition-all duration-300 border-[#21212107] border-1"
            />
            <img
              src={Lupa}
              alt="Search"
              className="absolute left-2 w-5 h-5 pointer-events-none invert"
            />
            <div className="microfone absolute right-3 border-l-1 h-[75%] flex items-center border-[#2121213a] bg-white cursor-pointer">
              <img src={Micf} alt="" className="w-5 h-5 ml-2 opacity-90" />
            </div>
          </form>
        </div>

        {/* AÇÕES (TEMA E LOGIN/REGISTRO) */}
        <div className="flex items-center gap-6 md:gap-3">
          {/* Ícone de alternância de tema */}
          <div className="dark_light">
            <div className="w-10 shadow-md h-10 rounded-full flex justify-center items-center">
              <img
                src={temaEscuro ? Light_Dark : dark_Light}
                alt="Tema"
                className="w-6 h-6 filter drop-shadow-md cursor-pointer"
                onClick={alternarTema}
              />
            </div>
          </div>

          {/* Linha vertical */}
          <div className="w-px h-10 bg-gray-300 ml-4.5 hidden md:block"></div>

          {/* Botões de login e registro */}
          <div className="flex items-center gap-6 text-sm font-semibold ml-3 w-[188px]">
            <button
              className="text-[rgb(94,94,94)] cursor-pointer"
              onClick={() => abrirModal("login")}
            >
              Log In
            </button>
            <button
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-7 py-1.5 rounded-full shadow-md hover:opacity-90 transition-all cursor-pointer"
              onClick={() => abrirModal("register")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* MODAIS */}
      {modalAberto && tipoModal === "login" && (
        <ModalLogin
          onClose={fecharModal}
          onSignUpClick={() => setTipoModal("register")}
        />
      )}

      {modalAberto && tipoModal === "register" && (
        <ModalRegistro onClose={fecharModal} />
      )}
    </>
  );
};

export default Header;
