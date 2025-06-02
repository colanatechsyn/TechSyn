import React from "react";
import MaxineImg from "../../assets/imgs/MaxineImages/Maxine.png"; // Imagem principal central
import image from "../../assets/imgs/MaxineImages/MaxineBack.png"; // Fundo com efeito rotacionado
import caract from "../../assets/imgs/MaxineImages/Max.png"; // Imagem decorativa para os textos

const Maxine = () => {
  return (
    <section className="w-[100%] overflow-hidden bg-gradient-to-b from-purple-600 to-blue-500 text-white py-2 px-4 transform bg-fixed relative">
      {/* Imagem de fundo com rotação, invertida e animação */}
      <img
        src={image}
        alt=""
        className="absolute rotate-180 top-140 invert animate-pulse w-full"
      />

      {/* Container centralizado */}
      <div className="max-w-7xl mx-auto text-center transform translate-y-[-50px]">
        {/* Título principal */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          style={{ textShadow: "2px 2px 4px 6px #414141" }}
          className="text-6xl md:text-[200px] font-extrabold mb-10 font-BankGothic transform translate-y-35 z-0 font-arial"
        >
          MAXINE
        </h1>

        {/* Conteúdo dividido em três colunas: esquerda, centro e direita */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Coluna esquerda com duas imagens decorativas e textos */}
          <div
            className="md:w-1/3"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              src={caract}
              alt=""
              className="transform 2xl:translate-y-[-15px] filter brightness-150"
            />
            <h1
              className="text-4xl absolute transform 2xl:translate-y-[-85px] 2xl:translate-x-[100px] font-BankGothic"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Carismática
            </h1>
            <img
              src={caract}
              alt=""
              className="transform 2xl:translate-y-[84px] 2xl:translate-x-[-120px]"
            />
            <h1
              className="text-4xl absolute 2xl:translate-y-[12px] font-BankGothic"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Inspiradora
            </h1>
          </div>

          {/* Coluna central com a imagem principal */}
          <div className="md:w-1/3 flex justify-center">
            <img src={MaxineImg} alt="Maxine" className="w-70 md:w-120 z-20" />
          </div>

          {/* Coluna direita com imagens decorativas e textos */}
          <div
            className="md:w-1/3"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              src={caract}
              alt=""
              className="transform 2xl:translate-y-[-15px] 2xl:rotate-y-180"
            />
            <h1
              className="text-4xl absolute 2xl:translate-y-[-85px] 2xl:translate-x-[155px] font-BankGothic"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Criativa
            </h1>
            <img
              src={caract}
              alt=""
              className="transform 2xl:translate-y-[84px] rotate-y-180 2xl:translate-x-[120px]"
            />
            <h1
              className="text-4xl absolute 2xl:translate-y-[12px] 2xl:translate-x-[235px] font-BankGothic"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Autêntica
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maxine;
