import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function EventosRecentes() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const eventos = [
    {
      nome: "MICROSOFT SQL",
      data: "09/07/2022 11:00 AM",
      publico: "+4.4%",
      status: "Encerrado",
    },
    {
      nome: "MICROSOFT SQL",
      data: "09/07/2022 11:00 AM",
      publico: "+4.4%",
      status: "Encerrado",
    },
    {
      nome: "MICROSOFT SQL",
      data: "09/07/2022 11:00 AM",
      publico: "+4.4%",
      status: "Aberto",
    },
    {
      nome: "MICROSOFT SQL",
      data: "09/07/2022 11:00 AM",
      publico: "+4.4%",
      status: "Aberto",
    },
    {
      nome: "MICROSOFT SQL",
      data: "09/07/2022 11:00 AM",
      publico: "-4.4%",
      status: "Encerrado",
    },
  ];

  const getStatusClass = (status) => {
    return status === "Aberto"
      ? "text-green-500 border border-green-500"
      : "text-red-500 border border-red-500";
  };

  return (
    <div
      className="w-1/2 bg-gradient-to-b from-[#1C1C1C] to-[#424242] dark:bg-gray-900 text-white dark:text-white p-6 rounded-2xl h-120 shadow-[1px_1px_15px_2px_black] "
      data-aos="fade-up"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Eventos Recentes</h2>
        <div className="flex gap-2">
          <button className=" bg-[rgb(49,49,49)] hover:bg-[rgb(65,65,65)] cursor-pointer transition text-xs text-[white] px-3 py-2 rounded-md">
            Semanal
          </button>
          <button className=" bg-[rgb(114,114,114)] hover:bg-[rgb(65,65,65)] cursor-pointer transition text-xs text-[white] px-3 py-2 rounded-md ">
            Mensal
          </button>
          <button className=" bg-[rgb(49,49,49)] hover:bg-[rgb(65,65,65)] cursor-pointer transition text-xs text-[white] px-3 py-2 rounded-md">
            Anual
          </button>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead className="border-b-1 border-[#414141]">
          <tr>
            <th className="py-3 text-left border-b-1 border-[#414141]">
              <input type="checkbox" className="rounded-2xl border-none" />
            </th>
            <th className="py-2 text-left">Nome do Evento</th>
            <th className="py-2 text-left">Data</th>
            <th className="py-2 text-left">Público</th>
            <th className="py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento, idx) => (
            <tr key={idx} className="  ">
              <td className="py-2 border-b-1 border-[#414141]">
                <input type="checkbox" />
              </td>
              <td className="py-6 border-b-1 border-[#414141]">
                {evento.nome}
              </td>
              <td className="py-5 border-b-1 border-[#414141]">
                {evento.data}
              </td>
              <td
                className={`py-2 font-semibold border-b-1 border-[#414141] ${
                  evento.publico.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {evento.publico}
              </td>
              <td className="py-2 border-b-1 border-[#414141]">
                <span
                  className={`text-xs px-2 py-1 rounded-md ${getStatusClass(
                    evento.status
                  )}`}
                >
                  {evento.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
