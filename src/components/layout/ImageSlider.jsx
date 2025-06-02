import React, { useState } from "react";
import Card from "../../components/common/CardPreviewHomePage"; // Importa o componente CardPreviewHomePage para exibir os detalhes de cada evento.

// Dados estáticos que representam os eventos (testemunhos ou destaques de eventos).
// Cada objeto contém informações detalhadas para preencher um CardPreviewHomePage.
const testimonials = [
  {
    title: "TechSummit Brasil",
    description: "Colocar em prática os conhecimentos adquiridos.",
    eventImage:
      "/src/assets/imgs/EventsImage/eventos_de_tecnologia_e_negocios-1-994x495.jpeg",
    enterpriseName: "TechCorp",
    enterpriseDescription: "Empresa focada em inovação tecnológica.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "15 de Junho - São Paulo, SP",
    tags: ["prática", "conhecimento"],
  },
  {
    title: "InovaTech Conference",
    description: "Aprender com os melhores na área de tecnologia.",
    eventImage:
      "/src/assets/imgs/EventsImage/5f8159_2e08f10003074706bb1de62d55d0aebc~mv2.avif",
    enterpriseName: "CodeMasters",
    enterpriseDescription: "Especialistas em bootcamps.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "20 de Julho - Recife, PE",
    tags: ["aprendizado", "mentoria"],
  },
  {
    title: "DevCon Brasil",
    description: "Conectar com pessoas que têm os mesmos interesses.",
    eventImage: "/src/assets/imgs/EventsImage/digital_evento_sitio-600x450.jpg",
    enterpriseName: "DevNetwork",
    enterpriseDescription: "Comunidade de desenvolvedores.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "10 de Agosto - Curitiba, PR",
    tags: ["networking", "devs"],
  },
  {
    title: "FutureTech Expo",
    description: "Desenvolver-se profissional e pessoalmente.",
    eventImage:
      "/src/assets/imgs/EventsImage/267096-top-x-principais-eventos-de-marketing-digital-para-2019.webp",
    enterpriseName: "GrowthLab",
    enterpriseDescription: "Consultoria de carreira e tecnologia.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "25 de Setembro - Fortaleza, CE",
    tags: ["carreira", "desenvolvimento"],
  },
  {
    title: "CodeFest",
    description: "Estar atualizado com as novas tecnologias.",
    eventImage:
      "/src/assets/imgs/EventsImage/Flux_Dev_Create_a_vibrant_image_that_captures_the_essence_of_i_1.webp",
    enterpriseName: "FutureTech",
    enterpriseDescription: "Tecnologias emergentes.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "30 de Outubro - Porto Alegre, RS",
    tags: ["inovação", "tecnologia"],
  },
];

// Componente Carousel, responsável por exibir os Cards de eventos em um formato de carrossel 3D.
// Ele permite a navegação entre os cards e destaca o item ativo.
export default function Carousel() {
  // Estado para controlar qual card está ativo (centralizado no carrossel).
  // Inicialmente, o card na posição 2 (o terceiro) é o ativo.
  const [activeIndex, setActiveIndex] = useState(2);

  // Função `getTransformStyle` calcula as transformações CSS para cada card.
  // Isso cria o efeito 3D de carrossel, onde o card ativo fica na frente e os outros se afastam e diminuem.
  const getTransformStyle = (index) => {
    const offset = index - activeIndex; // Diferença da posição atual para o card ativo.
    const x = offset * 290; // Deslocamento horizontal (maior para cards mais distantes).
    const z = Math.abs(offset) * -30; // Deslocamento no eixo Z (aproxima/afasta o card, criando profundidade).
    const y = Math.abs(offset) * 15; // Deslocamento vertical (levanta cards mais distantes para o efeito de "pilha").
    const zIndex = 5 - Math.abs(offset); // Define a ordem de empilhamento (o card ativo fica na frente).
    return {
      transform: `translateX(${x}px) translateZ(${z}px) translateY(${y}px)`,
      zIndex,
    };
  };

  return (
    // Container principal do carrossel.
    // Garante uma altura mínima e centraliza o conteúdo.
    <div className="min-h-[385px] flex flex-col items-center justify-center relative mb-1 w-[80%]">
      {/* Container dos Cards, com perspectiva 3D para o efeito do carrossel. */}
      <div
        className="mt-4 mb-4 flex items-center justify-center relative min-h-[377px] overflow-visible rounded-2xl"
        style={{ perspective: "6400px" }} // Define a profundidade da perspectiva 3D.
      >
        {/* Mapeia o array de 'testimonials' para renderizar cada Card. */}
        {testimonials.map((t, index) => (
          <div
            key={index} // Chave única para otimização de renderização de listas.
            onClick={() => setActiveIndex(index)} // Ao clicar, define este card como o ativo.
            className="absolute transition-transform duration-500 text-left cursor-pointer rounded-2xl"
            style={getTransformStyle(index)} // Aplica as transformações CSS para o efeito 3D.
          >
            {/* Renderiza o componente CardPreviewHomePage com os dados do evento. */}
            <Card
              enterpriseName={t.enterpriseName}
              enterpriseDescription={t.enterpriseDescription}
              enterpriseLogo={t.enterpriseLogo}
              eventImage={t.eventImage}
              dateLocation={t.dateLocation}
              tags={t.tags}
              title={t.title}
              description={t.description}
            />
          </div>
        ))}
      </div>

      {/* Indicadores de navegação (bolinhas) na parte inferior do carrossel. */}
      <div className="flex justify-center mt-10 gap-3 rounded-2xl">
        {/* Mapeia os testimonials para criar uma bolinha para cada card. */}
        {testimonials.map((_, index) => (
          <span
            key={index} // Chave única para otimização de renderização de listas.
            onClick={() => setActiveIndex(index)} // Ao clicar, ativa o card correspondente.
            className={`h-[8px] w-[8px] rounded-full cursor-pointer transition-all duration-200 ${
              index === activeIndex
                ? "scale-150 bg-gradient-to-b from-purple-500 to-indigo-600" // Bolinha ativa: maior e com gradiente.
                : "bg-white border opacity-55" // Bolinha inativa: menor, branca e opaca.
            }`}
          />
        ))}
      </div>
    </div>
  );
}
