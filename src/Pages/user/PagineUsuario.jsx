import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import ProfileHeader from "../../components/layout/ProfileHeader";
import UserDescription from "../../components/layout/UserDescription";
import RecentEvents from "../../components/layout/RecentEvents";
import Settings from "../../components/layout/Settings";

export default function UserProfile() {
  const [page, setPage] = useState("profile"); // profile ou settings

  // Mock userData para passar pro Settings
  const userData = {
    name: "Usuário",
    email: "email@gmail.com",
    description: "Descrição do usuário aqui...",
    photo: "",
  };

  // Função para salvar (exemplo)
  const handleSave = (data) => {
    console.log("Dados salvos:", data);
    // Aqui você pode enviar para o backend ou atualizar o estado
    setPage("profile"); // volta para profile após salvar
  };

  return (
    <div className="flex w-full min-h-220 bg-gradient-to-t from-purple-500 to-indigo-600 text-white">
      <div className="content_User_Profile flex w-[84%] m-auto h-[85%] mt-4 mb-4 scale-90">
        <Sidebar onSelectPage={setPage} />
        <div
          className="flex-1 p-20 overflow-auto rounded-2xl border border-white/30 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {page === "profile" && (
            <>
              <ProfileHeader />
              <UserDescription />
              <div className="text-[#323232]">
                <RecentEvents />
              </div>
            </>
          )}

          {page === "settings" && (
            <Settings userData={userData} onSave={handleSave} />
          )}
        </div>
      </div>
    </div>
  );
}
