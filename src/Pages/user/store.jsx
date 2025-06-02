// src/pages/Techstore.jsx
import React from "react";
import ProductCard from "../../components/common/Product"; // ajuste o caminho conforme necessário
import Lupa from "../../assets/imgs/HeaderImages/Search_icon.png";

const Techstore = () => {
  const produtos = [
    {
      id: 1,
      image: "/src/assets/imgs/TechStore/Rectangle 203 (1).png",
      title: "Borda Sakura - Pink",
      description: "Borda animada que remete às flores de sakura do Japão",
      price: "5,50",
    },
    {
      id: 2,
      image: "/src/assets/imgs/TechStore/Rectangle 203 (2).png",
      title: "Borda Cyber - Blue",
      description: "Estilo futurista com cores neon azuladas",
      price: "7,90",
    },
    {
      id: 3,
      image: "/src/assets/imgs/TechStore/Rectangle 203 (3).png",
      title: "Borda Retro - Green",
      description: "Visual nostálgico dos anos 80 em verde neon",
      price: "6,00",
    },
    {
      id: 4,
      image: "/src/assets/imgs/TechStore/Rectangle 203 (4).png",
      title: "Borda Futurista - Purple",
      description: "Design com formas geométricas e tons roxos vibrantes",
      price: "8,20",
    },
    {
      id: 5,
      image: "/src/assets/imgs/TechStore/Rectangle 203 (5).png",
      title: "Borda Fire - Red",
      description: "Chamas animadas para um visual explosivo",
      price: "7,50",
    },
    {
      id: 6,
      image: "/src/assets/imgs/TechStore/Rectangle 203 (6).png",
      title: "Borda Ocean - Aqua",
      description: "Ondas suaves e tons aquáticos refrescantes",
      price: "6,90",
    },
    {
      id: 7,
      image: "/src/assets/imgs/TechStore/Rectangle 203 (7).png",
      title: "Borda Matrix - Green",
      description: "Inspirado no estilo digital da Matrix",
      price: "7,70",
    },
    {
      id: 8,
      image: "/src/assets/imgs/TechStore/Rectangle 203 (8).png",
      title: "Borda Espacial - Galaxy",
      description: "Estrelas e galáxias em movimento",
      price: "9,00",
    },
    {
      id: 9,
      image: "/src/assets/imgs/TechStore/Rectangle 203 (9).png",
      title: "Borda Neon - Pink",
      description: "Neon rosa forte com efeito pulsante",
      price: "6,30",
    },
    {
      id: 10,
      image: "/src/assets/imgs/TechStore/Rectangle 203.png",
      title: "Borda Tech - Silver",
      description: "Estilo metálico com circuitos e animações",
      price: "8,00",
    },
  ];

  return (
    <div className="w-full">
      {/* FIRST SESSAO */}
      <div className="flex flex-col items-center justify-center text-center h-[600px] bg-gradient-to-br from-[#5F54D7] to-[#972FDB]">
        <div>
          <div id="text1" className="mb-6">
            <h1 className="text-white text-[70px] font-BankGothic">
              Tech Store
            </h1>
            <p className="text-[#B7B7B7] w-270">
              Na TechStore, você encontra tudo o que precisa para elevar seus
              projetos ao próximo nível. Oferecemos temas, ferramentas e
              recursos digitais de qualidade, pensados para facilitar sua
              jornada e acelerar seus resultados.
            </p>
          </div>
          <div className="input relative">
            <input
              type="search"
              placeholder="Buscar por produtos..."
              className="h-[55px] w-[550px] mt-8 bg-gradient-to-br from-white to-[#EBEBEB] shadow-md placeholder:text-[15px] outline-none border-none pl-15 border-white"
            />
            <img src={Lupa} className="absolute left-70 top-12 w-6 invert" />
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
              <h1 className="text-[45px]  bg-gradient-to-tr from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Produtos
              </h1>
              <h1 className="text-[45px] text-[#5B5B5B]">Techsyn</h1>
              <div className=" bg-gradient-to-tr from-purple-500 to-indigo-500 h-[3px] w-[44%]" />
            </div>
            <p className="text-[#5B5B5B] mt-[10%]">
              Acessado recentemente esses são seus últimos eventos idos
            </p>
          </div>

          <div id="search" className="border-b-2 border-[#852db4]">
            <input
              type="search"
              placeholder="Procurar Eventos"
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
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              image={produto.image}
              title={produto.title}
              description={produto.description}
              price={produto.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstore;
