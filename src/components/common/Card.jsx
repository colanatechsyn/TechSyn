import React from "react";

// Componente Card para exibir informações detalhadas de um evento.
// Ele recebe todas as informações do evento via props para renderização dinâmica.
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
    // Container principal do Card, com layout flexível em coluna.
    // Inclui um efeito de escala suave ao passar o mouse para feedback visual.
    <div className="card flex flex-col gap-4 hover:scale-116 transition-all ease-initial">
      {/* Seção do cabeçalho do card, exibindo as informações da empresa organizadora do evento. */}
      <div className="header_card flex justify-start gap-3 items-center">
        {/* Wrapper para a imagem do logo da empresa, aplicando uma borda gradiente. */}
        <div className="image_enterprise_event_maker">
          {/* Div que cria o efeito de borda gradiente e sombra ao redor do logo. */}
          <div className="p-[3px] w-15 h-15 rounded-full bg-gradient-to-r drop-shadow-sm from-purple-500 to-indigo-600">
            {/* Imagem do logo da empresa. */}
            <img
              src={enterpriseLogo}
              alt={enterpriseName}
              className="w-full h-full rounded-full bg-white"
            />
          </div>
        </div>

        {/* Container para o nome e descrição da empresa. */}
        <div className="info_enterprise flex flex-col justify-center h-14.5 w-57">
          {/* Nome da empresa. */}
          <h1 className="text-[20px]">{enterpriseName}</h1>
          {/* Breve descrição da empresa. */}
          <p className="text-[8px] w-[80%]">{enterpriseDescription}</p>
        </div>
      </div>

      {/* Corpo principal do card do evento, contendo a imagem do evento e seus detalhes. */}
      <div className="w-[300px] rounded-2xl shadow-lg overflow-hidden bg-white">
        {/* Seção da imagem do evento, com posicionamento relativo para elementos sobrepostos. */}
        <div className="relative">
          {/* Container da imagem do evento. */}
          <div className="event_card bg-blue-500 h-55">
            {/* Div para a imagem de fundo do evento, posicionada absolutamente. */}
            <div className="background_event_image absolute z-0">
              {/* Imagem principal do evento. */}
              <img
                src={eventImage}
                alt={title}
                className="bg-cover bg-center h-[220px] w-[300px]"
              />
            </div>

            {/* Ícones de ações sociais (placeholder) exibidos no canto superior direito da imagem. */}
            <div className="social_functs w-full flex justify-end pr-5 pt-2 gap-2 z-20">
              <a href="#">🧷</a> {/* Ícone de compartilhar ou anexar. */}
              <a href="#">🤍</a> {/* Ícone de favoritar ou curtir. */}
            </div>
          </div>

          {/* Elemento SVG que cria uma onda decorativa na parte inferior da imagem. */}
          <svg
            className="absolute bottom-[-17px] left-0 w-full h-12"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            {/* Path que define o formato da onda, preenchida em branco. */}
            <path
              d="M0.00,49.98 C150.00,150.00 349.79,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="fill-white"
            />
          </svg>
        </div>

        {/* Seção de conteúdo textual e botões, com padding interno. */}
        <div className="p-4">
          {/* Exibe a data e o local do evento. */}
          <div className="text-xs text-gray-500 mb-2">{dateLocation}</div>

          {/* Container para as tags do evento. */}
          <div className="flex gap-2 text-xs font-semibold mb-2">
            {/* Renderiza dinamicamente as tags, aplicando um gradiente de fundo a cada uma. */}
            {Array.isArray(tags) &&
              tags.map((tag, index) => (
                <span
                  key={index} // Chave única para renderização de listas no React.
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-light px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* Título do evento. */}
          <h2 className="pl-2 text-xl font-bold">{title}</h2>
          {/* Descrição curta do evento. */}
          <p className="pl-2 text-sm text-gray-600 mb-4">{description}</p>

          {/* Seção de botões de ação para o evento. */}
          <div className="flex gap-2 m-auto w-[94%]">
            {/* Botão 'Ver mais', estilizado com uma borda gradiente. */}
            <div className="p-[2px] w-1/2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600">
              {/* Botão interno com texto que usa o gradiente da borda. */}
              <button className="w-full px-4 py-2 text-purple-600 bg-white rounded-[6px] text-sm hover:bg-purple-100">
                {/* Span para aplicar o gradiente diretamente ao texto. */}
                <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent font-semibold">
                  Ver mais
                </span>
              </button>
            </div>

            {/* Botão 'Inscrever-se', com fundo gradiente. */}
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
