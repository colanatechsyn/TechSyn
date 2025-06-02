import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import back from "../../assets/imgs/Dashboard/Back.png";

// Importação dos componentes gráficos e de desempenho
import Graphics from "../../components/layout/graficoDash";
import Desempenho from "../../components/layout/desempenhoEventos";
import FaturamentoGasto from "../../components/layout/Faturamento";
import Eventos from "../../components/layout/eventosR";

const Dashboard = () => {
  // Estado para controlar qual aba está ativa
  const [abaAtiva, setAbaAtiva] = useState("Dashboard");

  // Estado para controlar o hover nos links
  const [hovered, setHovered] = useState(false);

  // Efeito que inicializa o AOS para animações e sempre posiciona no topo
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação
      once: true, // animação ocorre apenas uma vez
    });

    // Faz a página rolar para o topo ao carregar
    window.scrollTo(0, 0);
  }, []);

  // Função que renderiza o conteúdo dependendo da aba ativa
  const renderConteudo = () => {
    switch (abaAtiva) {
      case "Dashboard":
        return null; // Nenhum conteúdo extra no momento
      default:
        return null;
    }
  };

  return (
    <>
      {/* Faixa superior com gradiente e navegação */}
      <div className="flex flex-row h-[450px] bg-gradient-to-t from-[#982FDC] to-[#2843B3] items-center justify-between px-[6%]">
        {/* Saudação */}
        <img
          src={back}
          alt=""
          className="h-[450px] left-[-11%] tranform translate-y-30 rotate-15 absolute z-0 invert"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        />
        <div className="flex flex-col text-white gap-[10px]">
          <h1 className="text-[40px] z-10">Olá, Amazon Enterprise!</h1>
          <p className="text-[18px] z-10">
            Bem-vindo de volta. Vamos voltar ao trabalho!
          </p>
        </div>

        {/* Navegação */}
        <div className="flex gap-[40px] text-[#fffffff6] font-bold text-[16px] transform md:translate-x-[] 2xl:translate-x-[-137px]">
          <button
            onClick={() => setAbaAtiva("Dashboard")}
            className="hover:text-[#1C1C1C] transition-colors cursor-pointer duration-300"
          >
            Dashboard
          </button>
          <button
            onClick={() => setAbaAtiva("Perfil")}
            className="hover:text-[#1C1C1C] transition-colors cursor-pointer duration-300"
          >
            Perfil
          </button>
          <button
            onClick={() => setAbaAtiva("Configurações")}
            className="hover:text-[#1C1C1C] transition-colors cursor-pointer duration-300"
          >
            Configurações
          </button>
          <button
            onClick={() => setAbaAtiva("Eventos")}
            className="hover:text-[#1C1C1C] transition-colors cursor-pointer duration-300"
          >
            Eventos
          </button>
        </div>
      </div>

      {/* Conteúdo principal abaixo da faixa */}
      <div>{renderConteudo()}</div>

      <div className="dashboard w-full place-content-center gap-10 flex flex-col m-auto transform translate-y-[-90px]">
        <div className="top_content flex w-[100%] justify-center gap-10">
          <Graphics />
          <FaturamentoGasto />
        </div>
        <div
          className="bottom_content flex w-[100%] justify-center gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Desempenho />
          <Eventos />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
