import React, { useState } from "react";
// Importação das imagens para o slider
import EventImage1 from "../../assets/imgs/HomeIamges/EventMain.png";
import EventImage2 from "../../assets/imgs/HomeIamges/eventos-de-tecnologia.png";
import EventImage3 from "../../assets/imgs/HomeIamges/EventMain.png";
import EventImage4 from "../../assets/imgs/HomeIamges/eventos-de-tecnologia.png";
import EventImage5 from "../../assets/imgs/HomeIamges/EventMain.png";

// Array com as imagens que serão mostradas no slider
const images = [
  EventImage1,
  EventImage2,
  EventImage3,
  EventImage4,
  EventImage5,
];

export default function ImageSlider() {
  // Estado para controlar qual imagem está centralizada (ativa)
  // Começa no índice 2 (terceira imagem)
  const [currentIndex, setCurrentIndex] = useState(2);

  // Função chamada ao clicar numa imagem para mudar a imagem central
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    // Container principal do slider, centraliza as imagens, dá espaço e adiciona animação com AOS
    <div
      className="flex items-center justify-center py-10 w-full gap-4"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      {/* Mapeia todas as imagens para renderizá-las */}
      {images.map((img, index) => {
        // Verifica se a imagem atual é a central (ativa)
        const isCenter = index === currentIndex;
        // Aplica classes diferentes para a imagem central e as laterais
        const scaleClass = isCenter
          ? "scale-110 z-10" // maior e acima das outras
          : "scale-90 opacity-70 cursor-pointer"; // menor, mais transparente e com cursor pointer
        // Transição suave para as mudanças
        const transitionClass = "transition-all duration-500 ease-in-out";

        return (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            // Ao clicar na imagem, torna ela a central
            onClick={() => handleClick(index)}
            // Aplica as classes e estilos dinâmicos
            className={`rounded-xl ${scaleClass} ${transitionClass} w-70 h-89 object-contain`}
            style={{
              // Deixa as imagens que não estão centralizadas com leve grayscale
              filter: isCenter ? "none" : "grayscale(10%)",
            }}
          />
        );
      })}
    </div>
  );
}
