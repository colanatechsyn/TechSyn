// Importa a imagem de fundo utilizada no banner
import backgroundBanner from "../../assets/imgs/HomeIamges/computador-de-alta-performance.jpg";

// Componente de banner principal da tela de cadastro de eventos
function Banner() {
  return (
    <section
      // Container principal do banner
      className="banner_Enterprise w-[80%] h-[670px] rounded-[77px] flex bg-cover"
      style={{
        backgroundImage: `url(${backgroundBanner})`, // Define a imagem de fundo
        filter: "brightness(1.0)", // Mantém o brilho normal da imagem
      }}
    >
      {/* Conteúdo à esquerda do banner (texto e botões) */}
      <div className="p-18 pb-12 w-[61%] gap-8 flex justify-end flex-col rounded-[77px_0_0_77px]">
        {/* Título principal com efeito de sombra */}
        <h1
          className="text-6xl font-bold text-[#ffffff] font-BankGothic"
          style={{ textShadow: "4px 4px 7px #111111" }}
        >
          Registre seu{" "}
          <span
            className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
            style={{ textShadow: "none" }}
          >
            Evento
          </span>
        </h1>

        {/* Parágrafo explicativo chamando o usuário para criar um evento */}
        <p className="text-white" style={{ textShadow: "4px 4px 7px #111111" }}>
          Tem interesse em fazer parte da TechSyn? Se sim, venha criar um evento
          conosco. É simples, fácil e rápido! Só precisamos que você entre com a
          sua empresa.
        </p>

        {/* Botões de ação do banner */}
        <div className="buttons_Enterprise_banner flex gap-4">
          {/* Botão principal: Inscrever-se */}
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-sm hover:bg-purple-700">
            Inscrever-se
          </button>

          {/* Botão secundário: Ver mais */}
          <div className="p-[2px] rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600">
            <button className="w-full px-4 py-2 text-purple-600 bg-[#c5cacc] rounded-[6px] text-sm hover:bg-purple-100">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent font-semibold">
                Ver mais
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exporta o componente para ser usado em outras partes do projeto
export default Banner;
