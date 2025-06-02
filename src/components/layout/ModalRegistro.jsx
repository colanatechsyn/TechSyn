import React, { useState } from "react";
import maxine from "../../assets/imgs/MaxineImages/Maxine.png"; // Imagem do avatar "Maxine".
import pink from "../../assets/imgs/LoginRegisterImages/Ellipse 65.png"; // Imagem de um círculo decorativo rosa.
import blue from "../../assets/imgs/LoginRegisterImages/Ellipse 66.png"; // Imagem de um círculo decorativo azul.
import ModalRegistroUser from "../layout/ModalRegistroUser"; // Importa o modal de registro específico para usuários.

// Componente ModalRegistro é o modal inicial de registro,
// permitindo ao usuário escolher entre se registrar como "Usuário" ou "Empresa".
// Recebe uma função `onClose` para fechar o próprio modal.
const ModalRegistro = ({ onClose }) => {
  // Estado para controlar a visibilidade do ModalRegistroUser.
  const [modalRegistroUserAberto, setModalRegistroUserAberto] = useState(false);

  return (
    <>
      {/* Overlay fixo que cobre toda a tela, criando um fundo escuro e semitransparente.
          Ele centraliza o conteúdo do modal e possui um z-index alto para garantir visibilidade. */}
      <div className="fixed inset-0 bg-[#0000008a] z-50 flex justify-center items-center">
        {/* Corpo principal do modal.
            Estilizado com fundo branco, padding, bordas arredondadas e sombra.
            É um contêiner flexível em coluna com espaçamento, e oculta o conteúdo que transborda,
            mas as imagens de fundo ficam visíveis. */}
        <div className="bg-white p-6 rounded-3xl shadow-xl w-full max-w-md text-center relative flex flex-col gap-6 overflow-hidden">
          {/* Círculo decorativo rosa, posicionado absolutamente no canto inferior direito.
              Possui opacidade e uma animação de pulso para um efeito visual dinâmico. */}
          <img
            src={pink}
            alt=""
            className="absolute w-200 right-[-60px] bottom-[-160px] opacity-75 animate-pulse"
          />
          {/* Círculo decorativo azul, posicionado absolutamente no canto superior esquerdo.
              Também possui opacidade e uma animação de pulso. */}
          <img
            src={blue}
            alt=""
            className="absolute w-200 left-[-120px] top-[-80px] opacity-75 animate-pulse"
          />

          {/* Botão de fechar o modal, posicionado no canto superior direito.
              Exibe um ícone SVG de "X" e permite fechar o modal ao clicar. */}
          <button
            onClick={onClose} // Chama a função onClose passada via props para fechar o modal.
            className="text-sm text-gray-500 hover:underline absolute top-4 right-4"
          >
            <svg
              viewBox="0 0 24 24"
              width="27px"
              height="27px"
              className="cursor-pointer opacity-50"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.70711 18.7071L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071ZM17.2929 18.7071L13.8201 15.2343C13.4296 14.8438 13.4296 14.2106 13.8201 13.8201C14.2106 13.4296 14.8438 13.4296 15.2343 13.8201L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071Z"
              ></path>
            </svg>
          </button>

          {/* Título "Maxine" com estilo gradiente e fonte específica. */}
          <h3 className="text-xl font-extrabold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent mb-2 font-BankGothic">
            Maxine
          </h3>

          {/* Avatar de Maxine, com um círculo externo gradiente. */}
          <div className="flex justify-center mb-4">
            <div className="w-[186px] h-[186px] rounded-full p-[3px] bg-gradient-to-r from-purple-500 to-indigo-600 z-30 transform translate-y-[-13px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src={maxine}
                  alt="Avatar"
                  className="w-full h-full object-cover shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Bloco de texto de boas-vindas e introdução. */}
          <div className="text_content w-[70%] m-auto">
            {/* Título de boas-vindas com "TechSyner!" em gradiente. */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2 transform translate-y-[-30px]">
              Eai{" "}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                TechSyner!
              </span>
            </h2>
            {/* Frase de efeito da TechSyn. */}
            <p className="text-[14px] font-extralight text-[#1d1d1da5] mb-3 translate-y-[-30px]">
              A ponte entre talentos e oportunidades na tecnologia
            </p>
            {/* Pergunta ao usuário sobre seu tipo de registro (Usuário ou Empresa). */}
            <p className="text-sm text-[#020202c1] mb-6 font-medium w-[240px] m-auto translate-y-[-5px]">
              Você é um Usuário em busca de eventos e oportunidades? Ou
              representa uma Empresa que quer divulgar e organizar eventos?
            </p>
          </div>

          {/* Botões de seleção de tipo de registro (Empresa ou Usuário). */}
          <div className="flex justify-center gap-4 mb-4 z-30">
            {/* Container para os botões, com um gradiente de fundo que simula uma linha divisória. */}
            <div className="line rounded-full bg-gradient-to-l from-purple-500 to-indigo-600 w-[80%]">
              {/* Botão "Empresa" (atualmente não funcional neste componente). */}
              <button className="font-extrabold px-6 py-2 w-1/2 rounded-full text-white cursor-pointer">
                Empresa
              </button>
              {/* Botão "Usuário". Ao clicar, abre o ModalRegistroUser. */}
              <button
                onClick={() => setModalRegistroUserAberto(true)} // Abre o ModalRegistroUser.
                className="bg-gradient-to-r bg-white border-none px-6 py-1 rounded-full font-medium shadow-md transform translate-x-[-4px] translate-y-[-0.2px] w-1/2"
              >
                {/* Texto "Usuário" com estilo gradiente. */}
                <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent cursor-pointer font-extrabold">
                  Usuário
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Renderiza o ModalRegistroUser condicionalmente, apenas se 'modalRegistroUserAberto' for true. */}
      {modalRegistroUserAberto && (
        <ModalRegistroUser onClose={() => setModalRegistroUserAberto(false)} /> // Passa uma função para fechar este modal.
      )}
    </>
  );
};

export default ModalRegistro;
