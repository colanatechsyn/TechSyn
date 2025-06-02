import React from "react";
// Importação das imagens dos logos dos parceiros
import Vivo from "../../assets/imgs/Topicos/carbon_concept.png";
import Samsung from "../../assets/imgs/Topicos/nonicons_c-sharp-16.png";
import Loud from "../../assets/imgs/Topicos/nonicons_java-16.png";
import Itau from "../../assets/imgs/Topicos/Vector.png";
import Microsoft from "../../assets/imgs/Topicos/Vector-1.png";
import ClaroEmpresas from "../../assets/imgs/Topicos/cib_dot-net.png";
import Amazon from "../../assets/imgs/ParceiriasImages/amazon.png";
import VivoKeyd from "../../assets/imgs/Topicos/fluent_code-js-16-regular.png";

// Imagem de fundo com padrão gráfico
import image from "../../assets/imgs/ParceiriasImages/—Pngtree—modern halftone triangular pattern design_9004244.png";

// Array com objetos contendo as imagens e nomes dos parceiros
const logos = [
  { src: Vivo, alt: "Vivo", label: "Conectividade" },
  { src: Samsung, alt: "Samsung", label: "C#" },
  { src: Itau, alt: "Itaú", label: "Games" },
  { src: Microsoft, alt: "Microsoft", label: "Tecnologia" },
  { src: ClaroEmpresas, alt: "Claro Empresas", label: ".NET" },
  { src: VivoKeyd, alt: "Vivo Keyd", label: "JavaScript" },
  { src: Loud, alt: "Vivo Keyd", label: "Java" },
];

const Topics = () => {
  return (
    // Seção que engloba tudo, com gradiente de fundo e padding, overflow hidden para controlar o conteúdo
    <section className="relative text-white overflow-hidden py-20 px-4 w-full transform translate-y-[-100px]">
      {/* Imagem de background com posição absoluta para ficar por trás dos logos */}
      {/* Container centralizado para o conteúdo com z-index para ficar acima da imagem */}
      <div className="relative z-10 max-w-7xl mx-auto font-BankGothic">
        {/* Título da seção com animação AOS (fade-right) */}

        {/* Grid para disposição dos logos, responsivo: 2 colunas no mobile e 4 colunas em telas médias */}
        <div className="grid grid-cols-2 md:grid-cols-7 gap-40 place-items-center cursor-pointer">
          {/* Mapeia o array de logos para renderizar cada um */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="p-[4px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 bg-fixed flex relative"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {/* Container branco com sombra para destacar o logo, redondo */}
              <div className="bg-white p-6 rounded-full shadow-md w-36 h-36 flex items-center justify-center">
                {/* Imagem do logo ajustada para caber bem dentro do container */}
                <img src={logo.src} alt={logo.alt} className="" />
              </div>
              <h4 className="absolute font-bold text-xl bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent bottom-[-25%] left-1/2 transform translate-x-[-50%]">
                {logo.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
