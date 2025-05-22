import React from "react";

// Componente Cards recebe três props: h1 (título), pr (parágrafo) e imgs (imagem)
const Cards = ({ h1, pr, imgs }) => {
  return (
    // Container principal do card de suporte
    <div
      className="flex flex-col bg-gradient-to-r from-[#FFFFFF] to-[#ffffff] items-center justify-center bg-beige h-[280px] w-[550px] gap-[3px] text-center cursor-pointer rounded-[2px]"
      // Animações com biblioteca AOS (Animate On Scroll)
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="1400"
    >
      {/* Imagem ilustrativa centralizada */}
      <img src={imgs} alt="" className="w-[60px] h-auto" />

      {/* Título em destaque, com fonte grande e negrito */}
      <h1 className="text-[20px] select-none font-extrabold text-[#252525]">
        {h1}
      </h1>

      {/* Texto descritivo abaixo do título */}
      <p className="w-[300px] font-bold text-[#414141af]">{pr}</p>
    </div>
  );
};

export default Cards;
