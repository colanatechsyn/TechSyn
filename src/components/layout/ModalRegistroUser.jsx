import React, { useState } from "react";
import Google from "../../assets/imgs/LoginRegisterImages/Group 232.png";

import ModalConfirmacaoEmail from "../layout/ModalConfirmacaoEmail";

const ModalRegistroUser = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Para passar o email para o modal de confirmação
  const [emailConfirmado, setEmailConfirmado] = useState("");

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um email válido");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setError("");

    // Aqui você poderia enviar dados para backend, mas vamos abrir o modal de confirmação
    setEmailConfirmado(email); // passar email para modal
    setShowConfirmModal(true);

    // Limpa os campos
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex bg-[#0000008a] justify-center items-center z-50">
        <div className="relative bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center flex flex-col gap-3">
          {/* Título */}
          <h2 className="text-2xl font-bold text-gray-800 mb-0 transform translate-y-2">
            Bem-vindo a{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              TechSyn!
            </span>
          </h2>
          <p className="text-sm text-gray-500 mb-8 translate-y-4">
            Cadastre-se para participar dos nossos eventos e aprofundar seus
            conhecimentos com o que há de mais relevante no mundo tech.
          </p>

          {/* Inputs */}
          <div className="relative w-[94%] m-auto mb-4 group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-b border-gray-300 p-3 focus:outline-none bg-transparent peer"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
          </div>

          <div className="relative w-[94%] m-auto mb-4 group">
            <input
              type="email"
              placeholder="Email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 p-3 focus:outline-none bg-transparent peer"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
          </div>

          <div className="relative w-[94%] m-auto mb-4 group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 p-3 focus:outline-none bg-transparent peer"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
          </div>

          <div className="relative w-[94%] m-auto mb-4 group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-b border-gray-300 p-3 focus:outline-none bg-transparent peer"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
          </div>

          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          {/* Termos */}
          <div className="flex justify-around items-center text-sm mb-6 gap-20 m-auto w-91">
            <label className="flex items-center space-x-2 text-gray-600">
              <span>
                Ao continuar, você concorda com nossos{" "}
                <a
                  href="#"
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent hover:underline"
                >
                  Termos de Uso
                </a>{" "}
                e{" "}
                <a
                  href="#"
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent hover:underline"
                >
                  Política de Privacidade
                </a>
              </span>
            </label>
          </div>

          {/* Botão Registrar */}
          <button
            onClick={handleSignUp}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-full py-3 rounded-full mb-2 font-semibold cursor-pointer"
          >
            Registrar
          </button>

          {/* Google Button */}
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white w-full py-3 rounded-full font-semibold relative cursor-pointer">
            <div className="background-Google absolute bg-white p-1.5 rounded-full left-1">
              <img src={Google} alt="Google" className="w-7 h-7" />
            </div>
            Continue with Google
          </button>

          {/* Botão Fechar */}
          <button
            onClick={onClose}
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
        </div>
      </div>

      {/* Modal de Confirmação de Email */}
      {showConfirmModal && (
        <ModalConfirmacaoEmail
          email={emailConfirmado}
          onClose={closeConfirmModal}
        />
      )}
    </>
  );
};

export default ModalRegistroUser;
