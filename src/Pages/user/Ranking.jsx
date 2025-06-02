import Cards from "../../components/common/Cards";
import Woman from "../../assets/imgs/UsuarioPagina/woman.png"; // imagem padrão temporária
import arrow from "../../assets/imgs/Materiais/icon.png";

const Ranking = () => {
  const podium = [
    {
      rank: "2#",
      nome: "Lucas",
      score: "130.000 Techmoneys",
      imagem: null,
    },
    {
      rank: "1#",
      nome: "Douglas",
      score: "350.000 Techmoneys",
      destaque: true,
      imagem: null,
    },
    {
      rank: "3#",
      nome: "Caio",
      score: "90.000 Techmoneys",
      imagem: null,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Cabeçalho */}
      <div className="headerpos flex w-[81%] transform translate-y-[20px]">
        <div className="header flex items-end w-[73.5%] justify-between">
          <div className="flex flex-col items-center mt-1 mb-1">
            <h1 className="text-[48px] font-bold bg-gradient-to-r from-[#9C2EC4] to-[#0055FF] bg-clip-text text-transparent">
              TechSyners
            </h1>
            <p className="text-center text-[#555] transform translate-x-[-23px]">
              Ranking geral dos usuários
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-row gap-6 text-[#767676] mb-4 translate-y-[15px]">
            {["Global", "Semanal", "Mensal", "Anual"].map((item, i) => (
              <button
                key={i}
                className="cursor-pointer flex items-center gap-2"
              >
                {item}
                <img src={arrow} className="w-3 h-3" alt="arrow icon" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Área principal */}
      <div className="flex flex-row gap-8 w-[81%] justify-center mt-10">
        {/* Podium e lista principal */}
        <div className="flex flex-col bg-gradient-to-br from-[#5F54D7] to-[#972FDB] rounded-[15px] p-10 w-full">
          {/* Top 3 */}
          <div className="flex justify-center gap-10 mb-6">
            {podium.map((user, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-1 ${
                  !user.destaque ? "mt-6" : ""
                }`}
              >
                <h1 className="text-white text-lg">{user.rank}</h1>
                <div
                  className={`rounded-full shadow-md ${
                    user.destaque
                      ? "bg-gradient-to-br from-[#9C2EC4] to-[#0055FF] h-[200px] w-[200px]"
                      : "bg-[#9C2EC4] h-[150px] w-[150px]"
                  } flex items-center justify-center`}
                >
                  <div
                    className={`rounded-full bg-center bg-cover bg-no-repeat ${
                      user.destaque
                        ? "h-[194px] w-[194px]"
                        : "h-[144px] w-[144px]"
                    }`}
                    style={{
                      backgroundImage: `url(${user.imagem || Woman})`,
                    }}
                  ></div>
                </div>
                <p className="text-white text-base">{user.nome}</p>
                <p className="text-white text-xs">{user.score}</p>
              </div>
            ))}
          </div>

          {/* Lista de usuários principais */}
          <div className="flex flex-col gap-5 items-center overflow-y-auto max-h-[800px] pr-2 scroll-white p-5">
            {Array.from({ length: 36 }).map((_, index) => (
              <Cards key={index} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5 w-[500px] overflow-y-auto">
          {/* Rank atual */}
          <div className="bg-gradient-to-r from-[#5F54D7] to-[#972FDB] rounded-[15px] p-3 ">
            <div className="bg-white rounded-[15px] p-4 text-center">
              <p className="text-[12px]">
                <span className="bg-gradient-to-r from-[#8F2EC4] to-[#9C2EC4] bg-clip-text text-transparent">
                  Rank
                </span>{" "}
                Atual
              </p>
              <p className="text-[#515151]">#200.723</p>
              <div className="flex justify-center my-3 ">
                <div className="bg-gradient-to-br from-[#9C2EC4] to-[#2843B3] h-[125px] w-[125px] rounded-full flex items-center justify-center">
                  <div
                    className="h-[117px] w-[117px] rounded-full bg-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${Woman})`,
                    }}
                  ></div>
                </div>
              </div>
              <h1 className="text-[#5B5B5B]">Ana Santos</h1>
              <div className="w-full bg-white shadow-md h-[6px] rounded-full mt-2">
                <div className="bg-gradient-to-r from-[#9C2EC4] to-[#0055FF] h-[6px] w-[50%] rounded-full"></div>
              </div>
              <p className="text-[11px] text-[#5B5B5B] mt-2">
                6 more events to level up
              </p>
            </div>
          </div>

          {/* Lista complementar */}
          <div className="bg-gradient-to-r from-[#5F54D7] to-[#972FDB] rounded-[15px] py-4 px-2 flex flex-col items-center gap-4 overflow-y-auto h-[855px] scroll-white rounded-tr-none rounded-br-none">
            {Array.from({ length: 30 }).map((_, index) => (
              <Cards key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
