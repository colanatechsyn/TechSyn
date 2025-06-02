import React from "react";

// Componente Cards, usado na página "Sobre Nós" para exibir informações de suporte ou características da TechSyn.
// Ele apresenta um título, um parágrafo descritivo e uma imagem ilustrativa.
const Cards = ({ h1, pr, imgs }) => {
  return (
    // Container principal do card de suporte.
    // Estilizado com um gradiente de branco, centraliza seu conteúdo e possui um efeito de ponteiro (cursor).
    // Inclui animações de fade-right (aparecendo da direita) com atraso e duração definidos, utilizando a biblioteca AOS.
    <div
      className="flex flex-col bg-gradient-to-r from-[#FFFFFF] to-[#ffffff] items-center justify-center bg-beige h-[280px] w-[550px] gap-[3px] text-center cursor-pointer rounded-[2px]"
      data-aos="fade-right" // Animação: o card aparece deslizando da direita.
      data-aos-delay="200" // Atraso de 200ms antes da animação iniciar.
      data-aos-duration="1400" // Duração da animação de 1400ms.
    >
      {/* Imagem ilustrativa centralizada no topo do card. */}
      <img src={imgs} alt="" className="w-[60px] h-auto" />

      {/* Título principal do card.
          Possui fonte grande, extranegrito e cor escura.
          O texto não pode ser selecionado pelo usuário. */}
      <h1 className="text-[20px] select-none font-extrabold text-[#252525]">
        {h1}
      </h1>

      {/* Parágrafo descritivo abaixo do título.
          Com largura limitada, fonte negrito e cor cinza mais suave. */}
      <p className="w-[300px] font-bold text-[#414141af]">{pr}</p>
    </div>
  );
};

export default Cards;
