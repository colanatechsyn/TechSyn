import React from "react";

import userIcon from "../../assets/imgs/UsuarioPagina/icon_user.png";
import editProfileIcon from "../../assets/imgs/UsuarioPagina/Edit 2.png";
import materialIcon from "../../assets/imgs/UsuarioPagina/material_icon.png";
import helpIcon from "../../assets/imgs/UsuarioPagina/ajuda.png";
import configIcon from "../../assets/imgs/UsuarioPagina/config.png";

export default function Sidebar({ onSelectPage }) {
  const links = [
    { label: "User Profile", href: "#", icon: userIcon, page: "profile" },
    {
      label: "Editar Perfil",
      href: "#",
      icon: editProfileIcon,
      page: "settings",
    },
    { label: "Materiais", href: "#", icon: materialIcon, page: null },
    { label: "Ajuda", href: "#", icon: helpIcon, page: null },
    { label: "Configurações", href: "#", icon: configIcon, page: null },
  ];

  return (
    <aside
      className="min-h-200 w-[300px] mr-8 rounded-2xl flex flex-col justify-between pt-25 relative border border-white/30"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav>
        <ul className="space-y-7">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.page && onSelectPage) {
                    onSelectPage(link.page);
                  }
                }}
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
    </aside>
  );
}
