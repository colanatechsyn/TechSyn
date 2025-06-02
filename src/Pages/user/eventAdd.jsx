import plusImg from "../../assets/imgs/EventIndvidualPage/plus.png";

const eventAdd = () => {
  const tags = [
    "#Tech",
    "#SQL",
    "#Network",
    "#Tech",
    "#Learning",
    "#IA",
    "#AWS",
    "#Google",
    "#MySql",
    "#Database",
    "#Html",
    "#Css",
    "#JS",
  ];

  return (
    <>
      <div>
        <div
          id="doug_faixa"
          className="flex flex-row justify-center items-center h-[400px] w-full gap-[65px]"
        >
          <div
            id="blocoAdd"
            className="flex justify-center items-center h-[350px] w-[600px] rounded-[30px] cursor-pointer shadow-[0px_0px_15px_2px_rgb(103,103,103)] bg-gradient-to-br from-white via-[#EDEDED] to-[#DADADA]"
          >
            <img src={plusImg} alt="" id="plu" className="h-auto w-[50px]" />
          </div>
          <div
            id="blocoAdd2"
            className="flex flex-col gap-[10px] h-[350px] w-[300px]"
          >
            <h1
              id="h1_first"
              className="text-[40px] text-white drop-shadow-[0px_5px_4px_rgba(0,0,0,0.1)]"
            >
              <span className="font-bold bg-gradient-to-r from-[#5F54D7] to-[#972FDB] bg-clip-text text-transparent">
                WorkShop
              </span>{" "}
              Amazon AWS
            </h1>
            <div className="first_line h-[2px] mr-[20%] bg-[#99989869]"></div>
            <div id="infos" className="text-[#6F6F6F] text-[12px]">
              <p>23 Abr, 18h</p>
              <p>São Paulo - SP</p>
              <p>Participantes - 1500</p>
              <p>Organizado por - AMAZON ENT </p>
              <p>Acessibilidade PCD - Inclusa</p>
            </div>
            <div className="first_line h-[2px] mr-[20%] bg-[#99989869]"></div>
            <div
              id="taggs"
              className="flex flex-wrap items-center h-[90px] w-[110%] gap-[10px]"
            >
              {Array.isArray(tags) &&
                tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-light px-2 py-0.5 h-[20px] text-[10px] rounded-full flex justify-center"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div>
          <div
            id="line1"
            className="h-[2px] w-full bg-[#99989869] mt-[3%]"
          ></div>
          <div
            id="posline_A"
            className="flex flex-row gap-[50px] pl-[16%] items-center h-[50px] text-[#5B5B5B]"
          >
            <a href="#">Sobre</a>
            <a href="#">Eventos</a>
            <a href="#">Membros</a>
            <a href="#">Organizador</a>
          </div>
        </div>
        <div
          id="maxSecond_faixa"
          className="flex flex-col items-center bg-gradient-to-br from-[#9232DA] to-[#5F54D7] w-full py-10"
        >
          <div
            id="twoBlocos"
            className="flex flex-row justify-center items-start gap-16 w-full max-w-[1200px] flex-wrap"
          >
            {/* Bloco da esquerda */}
            <div
              id="block1"
              className="flex flex-col items-center text-center gap-8 w-[550px] max-w-full"
            >
              <h1 className="text-[#F4F4F4] text-[35px] drop-shadow-[0px_1px_9px_rgb(0,0,0,0.6)]">
                WorkShop Amazon AWS
              </h1>
              <p className="text-[#F4F4F4] w-[80%]">
                Encontre conselhos e respostas da nossa equipe de suporte
                rapidamente ou entre em contato. Encontre conselhos e respostas
                da nossa equipe de suporte rapidamente ou entre em contato.
              </p>
              <div
                id="block_plus2"
                className="flex justify-center items-center rounded-[27px] h-[300px] w-full max-w-[550px] cursor-pointer shadow-[0px_0px_19px_4px_rgb(103,103,103)] bg-gradient-to-br from-white via-[#EDEDED] to-[#DADADA]"
              >
                <img src={plusImg} alt="" />
              </div>
            </div>

            {/* Linha vertical (só mostra em telas maiores) */}
            <div className="hidden lg:flex bg-[#ffffff6d] w-[2px] h-[500px]" />

            {/* Bloco da direita */}
            <div
              id="block2"
              className="flex flex-col items-start text-left gap-8 w-[440px] max-w-full"
            >
              <h1 className="text-white text-[30px] drop-shadow-[0px_3px_7px_rgba(0,0,0,0.663)]">
                Organizador
              </h1>
              <div
                id="squarezinho"
                className="flex flex-row gap-4 items-center"
              >
                <div className="h-[60px] w-[60px] bg-white rounded-full"></div>
                <div className="flex flex-col items-start gap-1">
                  <h3 className="text-white text-sm font-semibold">
                    AMAZON ENTERPRISE - COLLINS
                  </h3>
                  <p className="text-xs text-white">
                    AmazonEnterpise1234@gmail.com
                  </p>
                  <a
                    href="#"
                    className="text-xs text-white border-b border-[#5B5B5B] hover:opacity-70"
                  >
                    Acessar Perfil
                  </a>
                </div>
              </div>

              <div className="w-full">
                <h1 className="text-white text-[30px] drop-shadow-[0px_3px_7px_rgba(0,0,0,0.663)] mb-6">
                  Visualizar Inscritos
                </h1>
                <div
                  id="square_circlee"
                  className="w-full flex flex-wrap gap-4"
                >
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-gradient-to-br from-[#0055FF] to-[#9C2EC4]"
                    >
                      <div className="h-[54px] w-[54px] bg-white rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botões inferiores */}
        </div>
      </div>
    </>
  );
};

export default eventAdd;
