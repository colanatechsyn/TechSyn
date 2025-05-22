import Finish from "../../assets/imgs/planosImage/Finish Flag.png";
import TechSyner from "../../assets/imgs/planosImage/Rocket.png";
import Infinite from "../../assets/imgs/planosImage/Infinity Symbol.png";
import selectBlue from "../../assets/imgs/planosImage/gg_check-o.png";
import selectSyn from "../../assets/imgs/planosImage/gg_check-o (1).png";
import selectGray from "../../assets/imgs/planosImage/gg_check-o (2).png";

function Plans() {
  const starterFeatures = [
    "Ganha 10 Byns no primeiro evento",
    "Acesso a materiais de evento",
    "Perfil básico com 1 rede social",
    "Suporte essencial",
    "Acesso a areas limitadas do site",
  ];

  const techSynerFeatures = [
    "20 Byns/mês pra trocar por vantagens.",
    "Mais Experiencia em eventos",
    "Perfil básico com 1 rede social",
    "Suporte essencial",
    "Acesso a areas limitadas do site",
  ];

  const infiniteFeatures = [
    "Eventos ilimitados",
    "Múltiplas redes sociais no perfil",
    "Certificados gratuitos",
    "Selo premium no perfil",
    "Suporte VIP",
  ];

  return (
    <div className="px-6 py-16 text-center flex flex-col gap-7">
      <div className="text_Content">
        <h1 className="text-5xl font-bold mb-4 font-BankGothic">
          Planos{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            TechSyn
          </span>
        </h1>
        <p className="text-gray-600 m-auto w-[40%]">
          Encontre conselhos e respostas da nossa equipe de suporte rapidamente
          ou entre em contato. Encontre conselhos e respostas.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <div className="line rounded-full bg-gradient-to-r from-purple-500 to-indigo-600">
          <button className="px-6 py-2 rounded-full text-white font-medium cursor-pointer">
            Usuário
          </button>
          <button className="bg-gradient-to-r bg-white border-none px-6 py-2 rounded-full font-medium shadow-md transform translate-x-[0.5px]">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
              Empresa
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter */}
        <div className="border border-black/20 rounded-xl p-6 shadow-sm bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-gradient-to-r from-gray-500 to-gray-400 text-white p-2 rounded-3xl flex justify-center items-center">
                <img
                  src={Finish}
                  alt="Starter Icon"
                  className="transform translate-y-1 w-11"
                />
              </div>
              <h2 className="text-xl font-semibold">Starter</h2>
            </div>
            <p className="text-sm text-gray-500 mb-4 text-left">
              Busque e participe de eventos, receba materiais e ganhe 10 Byns no
              primeiro evento.
            </p>
            <p className="text-2xl font-bold text-left">
              $0{" "}
              <span className="text-gray-500 text-base font-normal">
                por mês
              </span>
            </p>
            <ul className="text-left mt-4 text-sm text-gray-700 space-y-2 mb-20">
              {starterFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img
                    src={selectGray}
                    alt="ícone"
                    className="w-4 h-4 mt-0.5"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-gradient-to-r from-gray-500 to-gray-700 text-white w-full mt-6 py-2 rounded-md font-medium">
            Começar Grátis
          </button>
        </div>

        {/* TechSyner */}
        <div className="border-2 border-purple-500 rounded-xl p-6 shadow-sm bg-white flex flex-col justify-between relative">
          <div className="p-[2px] w-[110px] rounded-full absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-indigo-600">
            <button className="w-full px-4 py-2 text-purple-600 bg-white rounded-[100px] text-[11px]">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent font-medium">
                Mais Popular
              </span>
            </button>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-2 rounded-3xl flex justify-center items-center">
                <img
                  src={TechSyner}
                  alt="TechSyner Icon"
                  className="transform translate-y-1 translate-x-[-1px] w-11"
                />
              </div>
              <h2 className="text-xl font-semibold">TechSyner</h2>
            </div>
            <p className="text-sm text-gray-500 mb-4 text-left">
              Mesmas funcionalidades do plano Infinity, com valor especial pra
              quem está na jornada de aprendizado.
            </p>
            <p className="text-2xl font-bold text-left">
              $44{" "}
              <span className="text-gray-500 text-base font-normal">
                por mês
              </span>
            </p>
            <ul className="text-left mt-4 text-sm text-gray-700 space-y-2">
              {techSynerFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img src={selectSyn} alt="ícone" className="w-4 h-4 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white w-full mt-6 py-2 rounded-md font-medium">
            Assinar TechSyner
          </button>
        </div>

        {/* Infinite */}
        <div className="border-2 border-blue-500 rounded-xl p-6 shadow-sm bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-2 rounded-3xl flex justify-center items-center">
                <img
                  src={Infinite}
                  alt="Infinite Icon"
                  className="transform translate-y-0.5 w-11"
                />
              </div>
              <h2 className="text-xl font-semibold">Infinite</h2>
            </div>
            <p className="text-sm text-gray-500 mb-4 text-left">
              Eventos ilimitados, selo premium, múltiplas redes no perfil,
              certificados gratuitos, suporte VIP e 30 Byns mensais.
            </p>
            <p className="text-2xl font-bold text-left">
              $100{" "}
              <span className="text-gray-500 text-base font-normal">
                por mês
              </span>
            </p>
            <ul className="text-left mt-4 text-sm text-gray-700 space-y-2">
              {infiniteFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img
                    src={selectBlue}
                    alt="ícone"
                    className="w-4 h-4 mt-0.5"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full mt-6 py-2 rounded-md font-medium">
            Assinar Infinite
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
