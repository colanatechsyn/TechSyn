import React from "react";

import userIcon from "../../assets/imgs/UsuarioPagina/icon_user.png";
import editProfileIcon from "../../assets/imgs/UsuarioPagina/Edit 2.png";
import materialIcon from "../../assets/imgs/UsuarioPagina/material_icon.png";
import helpIcon from "../../assets/imgs/UsuarioPagina/ajuda.png";
import configIcon from "../../assets/imgs/UsuarioPagina/config.png";

import x from "../../assets/imgs/UsuarioPagina/X Logo.png";
import instagram from "../../assets/imgs/UsuarioPagina/Logo Instagram.png";
import YouTube from "../../assets/imgs/UsuarioPagina/Logo YouTube.png";
import linkedin from "../../assets/imgs/UsuarioPagina/LinkedIn.png";

export default function Sidebar() {
  const links = [
    { label: "User Profile", href: "#", icon: userIcon },
    { label: "Editar Perfil", href: "#", icon: editProfileIcon },
    { label: "Materiais", href: "#", icon: materialIcon },
    { label: "Ajuda", href: "#", icon: helpIcon },
    { label: "Configurações", href: "#", icon: configIcon },
  ];

  return (
    <aside className="w-[300px] mr-8 rounded-2xl bg-[#1f1f1f70] flex flex-col justify-between pt-25 relative">
      <nav>
        <ul className="space-y-7">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="flex items-center gap-4 w-full p-4 rounded-2xl pl-8 tracking-wide text-white text-2xl hover:bg-gradient-to-l from-purple-500 to-indigo-600 transition-colors ease-in-out"
              >
                <img
                  src={link.icon}
                  alt={`${link.label} icon`}
                  className="w-6 h-6"
                />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-around mt-6 text-xl text-white p-15 w-full brightness-125">
        <a href="" className="transform translate-y-[-5px]">
          <img src={x} alt="" className="w-7" />
        </a>
        <a href="">
          <img src={instagram} alt="" className="w-7" />
        </a>
        <a href="">
          <img src={YouTube} alt="" className="w-7" />
        </a>
        <a href="">
          <img src={linkedin} alt="" className="w-7" />
        </a>
      </div>
    </aside>
  );
}
