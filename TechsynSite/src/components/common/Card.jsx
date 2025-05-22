import React from "react";

// Componente funcional Card recebe várias props relacionadas a um evento
function Card({
  enterpriseName,
  enterpriseDescription,
  enterpriseLogo,
  eventImage,
  dateLocation,
  tags,
  title,
  description,
}) {
  return (
    // Container principal do Card
    <div className="card flex flex-col gap-4 hover:scale-116 transition-all ease-initial">
      {/* Cabeçalho do card com informações da empresa criadora do evento */}
      <div className="header_card flex justify-start gap-3 items-center">
        {/* Logo da empresa com borda colorida e sombra */}
        <div className="image_enterprise_event_maker">
          <div className="p-[3px] w-15 h-15 rounded-full bg-gradient-to-r drop-shadow-sm from-purple-500 to-indigo-600">
            <img
              src={enterpriseLogo}
              alt={enterpriseName}
              className="w-full h-full rounded-full bg-white"
            />
          </div>
        </div>

        {/* Nome e descrição da empresa */}
        <div className="info_enterprise flex flex-col justify-center h-14.5 w-57">
          <h1 className="text-[20px]">{enterpriseName}</h1>
          <p className="text-[8px] w-[80%]">{enterpriseDescription}</p>
        </div>
      </div>

      {/* Corpo principal do card */}
      <div className="w-[300px] rounded-2xl shadow-lg overflow-hidden bg-white">
        {/* Imagem do evento com ícones sociais e uma borda SVG decorativa */}
        <div className="relative">
          <div className="event_card bg-blue-500 h-55">
            {/* Imagem de fundo do evento */}
            <div className="background_event_image absolute z-0">
              <img
                src={eventImage}
                alt={title}
                className="bg-cover bg-center h-[220px] w-[300px]"
              />
            </div>

            {/* Ícones de ações sociais (placeholder) */}
            <div className="social_functs w-full flex justify-end pr-5 pt-2 gap-2 z-20">
              <a href="#">🧷</a>
              <a href="#">🤍</a>
            </div>
          </div>

          {/* Onda decorativa na parte inferior da imagem */}
          <svg
            className="absolute bottom-[-17px] left-0 w-full h-12"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.79,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="fill-white"
            />
          </svg>
        </div>

        {/* Informações textuais e botões abaixo da imagem */}
        <div className="p-4">
          {/* Data e local do evento */}
          <div className="text-xs text-gray-500 mb-2">{dateLocation}</div>

          {/* Lista de tags do evento */}
          <div className="flex gap-2 text-xs font-semibold mb-2">
            {Array.isArray(tags) &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-light px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* Título e descrição do evento */}
          <h2 className="pl-2 text-xl font-bold">{title}</h2>
          <p className="pl-2 text-sm text-gray-600 mb-4">{description}</p>

          {/* Botões de ação */}
          <div className="flex gap-2 m-auto w-[94%]">
            {/* Botão 'Ver mais' com borda gradiente */}
            <div className="p-[2px] w-1/2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600">
              <button className="w-full px-4 py-2 text-purple-600 bg-white rounded-[6px] text-sm hover:bg-purple-100">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent font-semibold">
                  Ver mais
                </span>
              </button>
            </div>

            {/* Botão 'Inscrever-se' com fundo gradiente */}
            <button className="px-4 py-2 w-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-sm hover:bg-purple-700">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
