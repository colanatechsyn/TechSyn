import { useState, useEffect } from "react";

const notifications = [
  { id: 1, name: "Polly", status: "online" },
  { id: 2, name: "Header", status: "online" },
  { id: 3, name: "Jessica", status: "away" },
  { id: 4, name: "Emilly", status: "busy" },
];

const statusColor = {
  online: "bg-green-500",
  away: "bg-yellow-400",
  busy: "bg-red-500",
};

const Notificacoes = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Inbox");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed top-23 right-32 z-50 w-80 bg-white rounded-xl shadow-lg text-sm opacity-99">
      {/* Bico da caixinha */}
      <div
        className={`connect w-10 h-6 bg-white opacity-80 absolute top-[-3%] z-0 transition rounded-2xl
        ${
          isScrolled
            ? "right-[-3.5%] transform -translate-x-1/2 transition"
            : "left-1/2 transform translate-x-[-90%] transition"
        }`}
      ></div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4">
        <h2 className="font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          Notificações
        </h2>
        <button
          onClick={onClose}
          className="text-xs text-gray-500 cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b mt-2 text-[#414141]">
        {["Inbox", "General", "Archived"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-4 py-2 ${
              activeTab === tab
                ? "border-b-2 border-gray-200 font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
                : "text-gray-400"
            }`}
          >
            {tab}
            {tab === "Inbox" ? (
              <span className="ml-1 bg-[#414141c0] text-white text-xs px-1.5 py-0.5 rounded-full">
                5
              </span>
            ) : tab === "General" ? (
              <span className="ml-1 text-xs text-gray-400">20</span>
            ) : null}
          </div>
        ))}
        <div className="ml-auto pr-4 text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </div>

      {/* Lista de notificações */}
      <div className="divide-y">
        {notifications.map((notif) => (
          <div key={notif.id} className="flex items-center px-4 py-3">
            <div className="relative ">
              <img
                src="https://i.pravatar.cc/40?img=32"
                alt={notif.name}
                className="w-10 h-10 rounded-full"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  statusColor[notif.status]
                }`}
              />
            </div>
            <div className="ml-3 flex-1 ">
              <p className="text-gray-700">
                <span className="font-semibold">{notif.name}</span> te adicionou
                na <span className="text-gray-400">lista de amigos</span>
              </p>
              <div className="flex gap-2 mt-1">
                <button className="text-[#414141] border border-gray-300 rounded px-2 py-0.5">
                  Recusar
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded px-2 py-0.5">
                  Aceitar
                </button>
              </div>
            </div>
            <span className="ml-2 w-2 h-2 bg-purple-700 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notificacoes;
