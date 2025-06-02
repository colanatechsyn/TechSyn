import Caio from "../../assets/imgs/TechSynersImage/young-businessman-3d-cartoon-avatar-portrait_839035-194591.avif";
import User2 from "../../assets/imgs/TechSynersImage/male-artist-3d-cartoon-avatar-portrait_839035-198537.avif";
import Vitor from "../../assets/imgs/TechSynersImage/images.jpg";
import "../../css/TechSyners.css";
import techsyner from "../../assets/imgs/ParceiriasImages/—Pngtree—modern halftone triangular pattern design_9004244.png";

import Ground from "../../assets/imgs/TechSynersImage/pngwing.com (2).png";
function TopTechSyners() {
  const users = [
    { name: "#4 João Almeida", image: Caio },
    { name: "#5 Miguel Torres", image: User2 },
    { name: "#6 Matheus Dantas", image: Vitor },
    { name: "#7 Lucas Henrique", image: User2 },
    { name: "#8 José Freitas", image: Vitor },
    { name: "#9 Guilherme Prado", image: User2 },
    { name: "#10 Nicolas Martins", image: Vitor },
    { name: "#11 Rodrigo Oliveira", image: User2 },
    { name: "#12 Pedro Caires", image: Vitor },
    { name: "#13 Lucas Martins", image: User2 },
    { name: "#14 Bruno Lopes", image: Vitor },
    { name: "#15 Daniel Lima", image: Vitor },
    { name: "#16 Robson Ferreira", image: User2 },
    { name: "#17 Ricardo Soares", image: Vitor },
    { name: "#18 Gustavo Gouveia", image: Vitor },
    { name: "#19 Thiago Monteiro", image: Vitor },
    { name: "#20 Rafael Cardoso", image: User2 },
    { name: "#21 André Souza", image: Vitor },
    { name: "#22 Felipe Martins", image: Vitor },
    { name: "#23 Leonardo Rocha", image: User2 },
    { name: "#24 Marcelo Tavares", image: Vitor },
    { name: "#25 Bruno Cavalcante", image: User2 },
    { name: "#26 Diego Santana", image: Vitor },
    { name: "#27 Igor Almeida", image: User2 },
    { name: "#28 Fernando Lima", image: Vitor },
    { name: "#29 Alexandre Nogueira", image: User2 },
    { name: "#30 Wellington Pires", image: Vitor },
    { name: "#31 Eduardo Ramos", image: User2 },
    { name: "#32 Caíque Silva", image: Vitor },
    { name: "#33 Henrique Moraes", image: User2 },
    { name: "#34 Paulo Viana", image: Vitor },
    { name: "#35 Vinícius Ribeiro", image: User2 },
    { name: "#36 Jefferson Costa", image: Vitor },
    { name: "#37 Raul Batista", image: User2 },
  ];

  return (
    <div className="w-[100%] overflow-hidden bg-gradient-to-t from-purple-600 to-blue-500 text-white py-35 px-4 transform bg-fixed relative z-10 ">
      <img
        src={techsyner}
        alt=""
        className="absolute z-0 filter invert animate-pulse top-106 w-full grayscale-[0-2"
      ></img>

      <div className="w-full mx-auto relative transform translate-y-[-30px]">
        <h1 className="text-4xl font-bold text-center mb-12 font-BankGothic transform translate-y-[-20px]">
          Top TechSyners
        </h1>

        <div
          className="custom-scrollbox absolute top-[-57px] left-20 bg-white/10 backdrop-blur-sm p-8 rounded-lg text-sm text-white border border-white/20 max-h-[610px] overflow-y-auto drop-shadow-2xl"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2 className="font-semibold mb-4 font-BankGothic text-center">
            TechSyners
          </h2>
          <ul className="space-y-2">
            {users.map((user, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20 rounded-md px-6 py-4 text-white/90 shadow-sm cursor-pointer"
              >
                {user.image && (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                )}
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm">Acessar Perfil</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="block mt-4 text-xs underline text-white/70 text-center"
          >
            ver mais
          </a>
        </div>

        <div
          className="absolute top-10 right-50 bg-white/10 backdrop-blur-sm p-4 rounded-lg text-sm text-white border border-white/20"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="flex justify-between text-xs mb-2">
            <span>Posição Atual</span>
            <span className="font-bold">#???</span>
          </div>
          <div className="bg-white/20 rounded px-3 py-2 mt-2 drop-shadow-2xl">
            <p className="text-xs font-semibold">Faça Login para visualizar!</p>
            <p className="text-[11px] text-white/70">Venha ser um TechSyner</p>
          </div>
        </div>

        <div className="flex justify-center items-end gap-23 mt-0 mb-11">
          <div
            className="text-center mb-[-50px]"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="text-lg font-bold">#3</span>
            <img
              src={Vitor}
              alt="Vitor"
              className="w-40 h-40 rounded-full border-4 border-[#ffffff83] mx-auto mt-2 drop-shadow-2xl"
            />
            <h3 className="mt-3 font-bold text-white">Vitor</h3>
            <p className="text-sm text-white/70">102.345 techmoney</p>
          </div>

          <div
            className="text-center scale-110"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="text-lg font-bold animate-pulse">#1</span>
            <div className="w-55 h-55  rounded-full bg-gradient-to-r from-white to-pink mx-auto mt-2 drop-shadow-2xl">
              <img
                src={Caio}
                alt="Caio"
                className="w-full h-full rounded-full object-cover absolute z-20"
              />
              <div className="spinner_animation w-57 h-57 rounded-full bg-gradient-to-r via-white from-white  to-transparent mx-auto drop-shadow-2xl animate-spin transform translate-x-[-4px] translate-y-[-4px]"></div>
              <img src={Ground} className="opacity-20 w-full" />
            </div>
            <h3 className="mt-3 font-bold text-white">Caio</h3>
            <p className="text-sm text-white/70">102.345 techmoney</p>
          </div>

          <div
            className="text-center mb-[-50px]"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="text-lg font-bold">#2</span>
            <img
              src={User2}
              alt="Robson"
              className="w-40 h-40 rounded-full border-4 border-[#ffffff83] mx-auto mt-2 drop-shadow-2xl"
            />
            <h3 className="mt-3 font-bold text-white">Robson</h3>
            <p className="text-sm text-white/70">102.345 techmoney</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTechSyners;
