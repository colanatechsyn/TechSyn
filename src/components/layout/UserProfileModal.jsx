// components/UserProfileModal.jsx
import React from "react";
import { Link } from "react-router-dom";
import User from "../../assets/imgs/Notifications/User.png";
import Materials from "../../assets/imgs/Notifications/Microsoft.png";
import Configs from "../../assets/imgs/Notifications/Settings.png";
import Help from "../../assets/imgs/Notifications/Help.png";
import Woman from "../../assets/imgs/UsuarioPagina/woman.png";

const UserProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-start top-23 right-15 justify-end">
      <div className="bg-white w-[300px] rounded-2xl shadow-lg p-6 relative opacity-99 ">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✕
        </button>
        <div className="flex flex-col items-center">
          <div className="top_Content flex gap-10 items-center">
            <img
              src={Woman}
              alt="User"
              className="w-15 h-15 rounded-full mb-2 shadow-md"
            />
            <div className="top_middle_infos_account transform translate-x-[-20px]">
              <h2 className="text-lg font-bold">Ana Santos</h2>
              <p className="text-sm text-gray-400 mb-4">Ana77@gmail.com</p>
            </div>
          </div>

          <div className="w-full text-sm flex gap-2.5 flex-col mt-2">
            <hr className="my-2 text-gray-200" />
            <Link
              to="/private/User"
              className="flex items-center gap-2 py-2 w-full text-left hover:bg-gray-100 px-2 rounded"
            >
              <img src={User} className="w-6" alt="Perfil" /> Perfil de Usuário
            </Link>
            <Link
              to="/private/Materiais"
              className="flex items-center gap-2 py-2 w-full text-left hover:bg-gray-100 px-2 rounded"
            >
              <img src={Materials} className="w-6" alt="Materiais" /> Meus
              Materiais
            </Link>
            <Link
              to="/private/Suporte"
              className="flex items-center gap-2 py-2 w-full text-left hover:bg-gray-100 px-2 rounded"
            >
              <img src={Configs} className="w-6" alt="Suporte" /> Suporte
            </Link>
            <Link
              to="/private/FAQ"
              className="flex items-center gap-2 py-2 w-full text-left hover:bg-gray-100 px-2 rounded"
            >
              <img src={Help} className="w-6" alt="FAQ" /> FAQ
            </Link>
            <hr className="my-2 text-gray-200" />
            <div className="flex justify-between items-center px-2 text-sm">
              <div>
                <p className="font-semibold">Plano Grátis</p>
                <p className="text-gray-400">1646 credits</p>
              </div>
              <Link
                to="/private/plans"
                className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded cursor-pointer"
              >
                Atualizar
              </Link>
            </div>
            <hr className="my-2 text-gray-200" />
            <Link
              to="/logout"
              className="flex items-center gap-2 py-2 w-full text-left hover:bg-gray-100 px-2 rounded text-red-500 mt-2"
            >
              ⛔ Sair
            </Link>
            <div className="connect w-10 h-2 bg-white opacity-91 absolute top-[-1.5%] left-1/2 transform translate-x-[-50%] z-50 rounded-t-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
