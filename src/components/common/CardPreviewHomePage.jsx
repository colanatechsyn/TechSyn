import React from "react";

// Componente CardPreviewHomePage exibe uma prévia de um evento, ideal para a página inicial.
// Ele foca na apresentação visual do evento, suas tags e opções de interação.
function CardPreviewHomePage({
  enterpriseName, // Nome da empresa organizadora do evento (não renderizado neste componente, mas disponível).
  enterpriseDescription, // Descrição da empresa (não renderizado neste componente, mas disponível).
  enterpriseLogo, // Logo da empresa (não renderizado neste componente, mas disponível).
  eventImage, // Imagem de destaque do evento.
  dateLocation, // Data e local do evento.
  tags, // Array de tags associadas ao evento.
  title, // Título do evento.
  description, // Descrição curta do evento.
}) {
  return (
    // Container principal do Card, com layout flexível em coluna.
    // Inclui uma transição suave para efeitos de interação.
    <div className="card flex flex-col gap-4 transition-all ease-initial">
      {/* O cabeçalho com informações da empresa foi removido desta versão do Card para focar na prévia do evento. */}

      {/* Corpo principal do card do evento, com bordas arredondadas, sombra e fundo branco. */}
      <div className="w-[300px] rounded-2xl shadow-lg overflow-hidden bg-white">
        {/* Seção da imagem do evento, com posicionamento relativo para permitir sobreposição de elementos. */}
        <div className="relative">
          {/* Container da imagem do evento, com fundo de fallback e bordas arredondadas. */}
          <div className="event_card bg-blue-500 h-55 rounded-2xl overflow-hidden">
            {/* Div para a imagem de fundo do evento, posicionada absolutamente. */}
            <div className="background_event_image absolute z-0">
              {/* Imagem principal do evento, cobrindo o espaço e centralizada. */}
              <img
                src={eventImage}
                alt={title}
                className="bg-cover bg-center h-[220px] w-[300px]"
              />
            </div>

            {/* Ícones de ações sociais (placeholder), exibidos no canto superior direito da imagem. */}
            <div className="social_functs w-full flex justify-end pr-5 pt-2 gap-2 z-20">
              <a href="#">🧷</a> {/* Ícone de compartilhamento ou anexo. */}
              <a href="#">🤍</a> {/* Ícone de favoritar ou curtir. */}
            </div>
          </div>

          {/* Elemento SVG que cria uma onda decorativa na parte inferior da imagem, sobrepondo o conteúdo abaixo. */}
          <svg
            className="absolute bottom-[-17px] left-0 w-full h-12"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            {/* Path que define a forma da onda, preenchida em branco. */}
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
            {/* Renderiza dinamicamente as tags do evento, aplicando um gradiente de fundo a cada uma. */}
            {Array.isArray(tags) &&
              tags.map((tag, index) => (
                <span
                  key={index} // Chave única para otimização de renderização de listas.
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
              {/* Botão interno com fundo branco e texto que usa o gradiente da borda. */}
              <button className="w-full px-4 py-2 text-purple-600 bg-white rounded-[6px] text-sm hover:bg-purple-100">
                {/* Span para aplicar o gradiente diretamente ao texto "Ver mais". */}
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

export default CardPreviewHomePage;
