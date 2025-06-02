import React, { useEffect, useState } from "react";
import MaterialCard from "../../components/common/CardMaterial";
import Imageback from "../../assets/imgs/Materiais/Microsoft.png";

const Materiais = () => {
  const [materiais, setMateriais] = useState([]);

  // Simulando chamada para back-end
  useEffect(() => {
    // Aqui você pode substituir pelo seu fetch/axios
    const materiaisFake = [
      {
        id: 1,
        titulo: "MICROSOFT AZURE",
        descricao: "Introdução ao Azure para iniciantes.",
        data: "01 Mai",
        hora: "10h",
        local: "São Paulo - SP",
        imagem:
          "/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_pioneering_inn_1.webp",
        encerrado: false,
      },
      {
        id: 2,
        titulo: "GOOGLE CLOUD",
        descricao: "Workshop prático de Cloud.",
        data: "03 Mai",
        hora: "14h",
        local: "Online",
        imagem:
          "/src/assets/imgs/EventsImage/Flux_Dev_create_an_image_of_a_cuttingedge_technology_event_sho_0.webp",
        encerrado: false,
      },
      {
        id: 3,
        titulo: "AWS EXPERIENCE",
        descricao: "Evento completo sobre serviços AWS.",
        data: "05 Mai",
        hora: "16h",
        local: "Rio de Janeiro",
        imagem:
          "/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_depicting_a_bustling_technology_event_3.webp",
        encerrado: true,
      },
      {
        id: 4,
        titulo: "META HACKATHON",
        descricao: "Hackathon com prêmios em dinheiro.",
        data: "10 Mai",
        hora: "08h",
        local: "Online",
        imagem:
          "/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_of_a_bustling_technology_event_where__3.webp",
        encerrado: true,
      },
      {
        id: 5,
        titulo: "ORACLE TECH DAY",
        descricao: "Dia inteiro com tecnologia Oracle.",
        data: "12 Mai",
        hora: "13h",
        local: "Curitiba - PR",
        imagem: "/src/assets/imgs/EventsImage/digital_evento_sitio-600x450.jpg",
        encerrado: true,
      },
      {
        id: 6,
        titulo: "IBM FUTURE TECH",
        descricao: "O futuro da tecnologia segundo a IBM.",
        data: "15 Mai",
        hora: "09h",
        local: "Online",
        imagem:
          "/src/assets/imgs/EventsImage/5f8159_2e08f10003074706bb1de62d55d0aebc~mv2.avif",
        encerrado: false,
      },
      {
        id: 7,
        titulo: "TESLA TECH TOUR",
        descricao: "Tecnologias sustentáveis e inovação.",
        data: "18 Mai",
        hora: "11h",
        local: "Belo Horizonte",
        imagem:
          "/src/assets/imgs/EventsImage/AWE-Asia-Immersive-technology-event.jpg",
        encerrado: true,
      },
      {
        id: 8,
        titulo: "INTEL INOVA",
        descricao: "Novas gerações de processadores.",
        data: "20 Mai",
        hora: "15h",
        local: "Online",
        imagem:
          "/src/assets/imgs/EventsImage/5f8159_1a9a477d609742d09de9f3abe1750f41~mv2.avif",
        encerrado: true,
      },
      {
        id: 9,
        titulo: "DELL SUMMIT",
        descricao: "Discussões sobre futuro do hardware.",
        data: "22 Mai",
        hora: "12h",
        local: "Fortaleza - CE",
        imagem: "/src/assets/imgs/EventsImage/tecnologia-para-eventos.jpg",
        encerrado: false,
      },
      {
        id: 10,
        titulo: "ADOBE CREATIVE WEEK",
        descricao: "Semana com foco em design e vídeo.",
        data: "25 Mai",
        hora: "17h",
        local: "Online",
        imagem:
          "/src/assets/imgs/EventsImage/projetor-para-eventos-em-sao-paulo-1.jpg",
        encerrado: true,
      },
      {
        id: 11,
        titulo: "SAP SOLUTIONS",
        descricao: "Como aplicar SAP nas empresas.",
        data: "28 Mai",
        hora: "14h",
        local: "Recife - PE",
        imagem: "/src/assets/imgs/EventsImage/unnamed.png",
        encerrado: true,
      },
      {
        id: 12,
        titulo: "RED HAT OPEN SOURCE",
        descricao: "Open source para empresas.",
        data: "30 Mai",
        hora: "10h",
        local: "Online",
        imagem:
          "/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_pioneering_inn_1.webp",
        encerrado: true,
      },
      {
        id: 13,
        titulo: "CISCO CONNECT",
        descricao: "Conectividade e segurança digital.",
        data: "01 Jun",
        hora: "16h",
        local: "Florianópolis",
        imagem:
          "/src/assets/imgs/EventsImage/Flux_Dev_create_an_image_of_a_cuttingedge_technology_event_sho_0.webp",
        encerrado: false,
      },
      {
        id: 14,
        titulo: "NVIDIA RTX TECH",
        descricao: "Avanços em IA e gráficos RTX.",
        data: "03 Jun",
        hora: "13h",
        local: "Online",
        imagem:
          "/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_depicting_a_bustling_technology_event_3.webp",
        encerrado: false,
      },
      {
        id: 15,
        titulo: "FIGMA DESIGN DAY",
        descricao: "Design colaborativo com Figma.",
        data: "05 Jun",
        hora: "09h",
        local: "Salvador - BA",
        imagem:
          "/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_of_a_bustling_technology_event_where__3.webp",
        encerrado: false,
      },
    ];
    setMateriais(materiaisFake);
  }, []);

  return (
    <div className="w-full">
      {/* FIRST SESSAO */}
      <div className="flex flex-col items-center justify-center text-center h-[600px] bg-gradient-to-br from-[#5F54D7] to-[#972FDB]">
        <div>
          <div id="text1" className="mb-6 relative flex items-center">
            <img src={Imageback} className="w-50" />
            <h1
              className="text-white font-BankGothic"
              style={{ fontSize: "110px", textShadow: "4px 4px 6px 4px" }}
            >
              Meus Materiais
            </h1>
          </div>
        </div>
      </div>

      {/* ABAIXO */}
      <div id="sessao_abaixo" className="flex flex-row mt-[-50px] mb-50">
        {/* SESSAO2 - FILTROS */}
        <div
          id="sessao2"
          className="flex flex-col h-[550px] w-[16%] ml-[7%] mt-[10%] gap-[10%]"
        >
          <div id="first_text" className="flex flex-col">
            <div>
              <h1 className="text-[45px] bg-gradient-to-tr from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Meus
              </h1>
              <h1 className="text-[45px] text-[#5B5B5B]">Materiais</h1>
              <div className=" bg-gradient-to-tr from-purple-500 to-indigo-500 h-[3px] w-[44%]" />
            </div>
            <p className="text-[#5B5B5B] mt-[10%]">
              Acessado recentemente esses são seus últimos eventos idos
            </p>
          </div>

          <div id="search" className="border-b-2 border-[#852db4]">
            <input
              type="search"
              placeholder="Procurar Materiais"
              className="w-full p-1 outline-none"
            />
          </div>

          {/* FILTROS */}
          <div id="check_main" className="flex flex-col gap-2">
            <div className="check flex flex-row gap-1">
              <h1 className="text-[25px] text-[#5b5b5b]">
                <span className="bg-gradient-to-tr from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                  Filtrar
                </span>{" "}
                por:
              </h1>
            </div>
            <div className="check flex flex-row gap-2 items-center">
              <input type="checkbox" />
              <p>Gratuito</p>
            </div>
            <div className="check flex flex-row gap-2 items-center">
              <input type="checkbox" />
              <p>Pagos</p>
            </div>
            <div className="check flex flex-row gap-2 items-center">
              <input type="checkbox" />
              <p>Lançamentos</p>
            </div>
            <div className="check flex flex-row gap-2 items-center">
              <input type="checkbox" />
              <p>Alfabética</p>
            </div>
          </div>
        </div>

        {/* SESSAO3 - CATÁLOGO DE PRODUTOS */}
        <div
          id="sessao3"
          className="h-auto w-[1200px] ml-[5%] mt-[10%] grid grid-cols-4 gap-6"
        >
          {materiais.map((material) => (
            <MaterialCard key={material.id} {...material} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materiais;
