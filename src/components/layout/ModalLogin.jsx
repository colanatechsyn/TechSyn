import React from "react";
import Google from "../../assets/imgs/LoginRegisterImages/Group 232.png";
import { useNavigate } from "react-router-dom";

const ModalLogin = ({ onClose, onSignUpClick }) => {
  return (
    <div className="fixed inset-0 flex bg-[#0000008a] justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center h-[550px] flex flex-col gap-2">
        {/* Botões Sign Up e Login */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="line rounded-full bg-gradient-to-l from-purple-500 to-indigo-600 w-[80%] ">
            <button
              className="px-6 py-2 w-1/2 rounded-full text-white font-medium cursor-pointer"
              onClick={onSignUpClick}
            >
              Sign Up
            </button>
            <button className="bg-gradient-to-r bg-white border-none px-6 py-1 rounded-full font-medium shadow-md transform translate-x-[-4px]  w-1/2  ">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
                Log in
              </span>
            </button>
          </div>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-gray-800 mb-0 transform translate-y-4">
          Bem-vindo de volta!{" "}
        </h2>
        <p className="text-sm text-gray-500 mb-8 translate-y-4">
          Sentimos sua falta! Por favor, insira seus dados.
        </p>

        {/* Inputs */}
        <div className="relative w-[94%] m-auto mb-4 group">
          <input
            type="email"
            placeholder="Email@gmail.com"
            className="w-full border-b border-gray-300 p-3 focus:outline-none bg-transparent peer"
          />
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
        </div>

        <div className="relative w-[94%] m-auto mb-4 group">
          <input
            type="password"
            placeholder="Senha"
            className="w-full border-b border-gray-300 p-3 focus:outline-none bg-transparent peer"
          />
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
        </div>

        {/* Remember me & Forgot password */}
        <div className="flex justify-around items-center text-sm mb-6 gap-20">
          <label className="flex items-center space-x-2 text-gray-600">
            <input type="checkbox" />
            <span>Lembrar-me</span>
          </label>
          <a
            href="#"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent hover:underline"
          >
            Esqueceu a senha?
          </a>
        </div>

        {/* Botão Entrar */}
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-full py-3 rounded-full  mb-2 font-semibold cursor-pointer">
          Continuar
        </button>

        {/* Google Button */}
        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white w-full py-3 rounded-full font-semibold relative cursor-pointer">
          <div className="background-Google absolute bg-white p-1.5 rounded-full left-1">
            <img src={Google} alt="Google" className="w-7 h-7" />
          </div>
          Continuar com Google
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
  );
};

export default ModalLogin;
