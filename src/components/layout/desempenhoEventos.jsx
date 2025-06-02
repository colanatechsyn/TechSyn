import { PieChart, Pie, Cell, Tooltip } from "recharts"; // Importa componentes do Recharts para gráficos de pizza.
import { useInView } from "react-intersection-observer"; // Hook para detectar quando um elemento está visível na tela.
import { useState, useEffect } from "react"; // Hooks do React para gerenciar estado e efeitos colaterais.

import Public from "../../assets/imgs/Dashboard/Group.png"; // Ícone para "Público Geral".
import Confirmed from "../../assets/imgs/Dashboard/Event Accepted.png"; // Ícone para "Confirmados".
import Canceled from "../../assets/imgs/Dashboard/Event Declined.png"; // Ícone para "Cancelados".

// Dados para o gráfico de pizza de Público Geral.
const dataGeral = [
  { name: "Público Geral", value: 80 },
  { name: "Restante", value: 20 },
];
// Dados para o gráfico de pizza de Inscrições Confirmadas.
const dataConfirmados = [
  { name: "Confirmados", value: 60 },
  { name: "Restante", value: 40 },
];
// Dados para o gráfico de pizza de Inscrições Canceladas.
const dataCancelados = [
  { name: "Cancelados", value: 30 },
  { name: "Restante", value: 70 },
];

// Cores utilizadas nos segmentos dos gráficos de pizza.
const COLORS = {
  geral: ["#3b82f6", "#2e2e2e"], // Azul e cinza escuro.
  confirmados: ["#4ade80", "#2e2e2e"], // Verde e cinza escuro.
  cancelados: ["#ef4444", "#2e2e2e"], // Vermelho e cinza escuro.
};

// Componente DesempenhoEventos, exibe um painel com gráficos de desempenho de eventos.
// Utiliza gráficos de pizza para visualização de métricas como público, confirmações e cancelamentos.
export default function DesempenhoEventos() {
  // Hook useInView para disparar animações quando o componente entra na área visível da tela.
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação ocorrerá apenas uma vez quando o componente se tornar visível.
    threshold: 0.3, // A animação será ativada quando 30% do componente estiver visível.
  });

  // Estado para controlar a ativação da animação do gráfico.
  const [animate, setAnimate] = useState(false);

  // Efeito que ativa a animação quando o componente entra na área visível.
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    // Container principal do painel de desempenho.
    // Estilizado com um gradiente de fundo escuro, padding, bordas arredondadas e sombra.
    <div
      ref={ref} // Atribui a referência para o useInView.
      className="bg-gradient-to-b from-[#1C1C1C] to-[#424242] text-white p-6 rounded-2xl shadow-[1px_1px_15px_2px_black] w-100 h-120"
    >
      {/* Cabeçalho do painel com título, subtítulo e um botão de filtro. */}
      <div className="flex justify-between items-center mb-4">
        <div>
          {/* Título do painel. */}
          <h2 className="text-lg font-semibold">Desempenho dos eventos</h2>
          {/* Descrição do painel. */}
          <p className="text-gray-400 text-sm">
            Acompanhe os resultados dos seus eventos
          </p>
        </div>
        {/* Botão para selecionar o período de exibição dos dados (ex: Mensal). */}
        <button className="bg-[rgb(49,49,49)] cursor-pointer text-white px-2 py-1 rounded text-sm hover:bg-[rgb(65,65,65)] transition transform translate-y-[-3px]">
          Mensal ▼
        </button>
      </div>

      {/* Seção do gráfico de pizza. */}
      <div className="flex justify-center">
        {/* Componente PieChart do Recharts, configurando as dimensões. */}
        <PieChart width={200} height={200}>
          {/* Tooltip que exibe informações ao passar o mouse sobre as fatias do gráfico.
            Estilizado com fundo escuro e texto branco. */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              borderRadius: "8px",
              border: "none",
            }}
            itemStyle={{ color: "#fff" }}
          />
          {/* Primeiro gráfico de pizza: Público Geral. */}
          <Pie
            data={dataGeral} // Dados para este gráfico.
            dataKey="value" // Chave do valor a ser plotado.
            cx="50%" // Posição X central.
            cy="50%" // Posição Y central.
            innerRadius={60} // Raio interno do anel.
            outerRadius={70} // Raio externo do anel.
            startAngle={90} // Ângulo inicial da primeira fatia.
            endAngle={-270} // Ângulo final da última fatia (cria um círculo completo).
            isAnimationActive={animate} // Ativa a animação baseada no estado 'animate'.
          >
            {/* Renderiza as células (fatias) do gráfico, aplicando as cores definidas. */}
            {dataGeral.map((_, index) => (
              <Cell key={`cell-geral-${index}`} fill={COLORS.geral[index]} />
            ))}
          </Pie>
          {/* Segundo gráfico de pizza: Inscrições Confirmadas.
            Posicionado em um raio maior para criar um efeito de anel concêntrico. */}
          <Pie
            data={dataConfirmados} // Dados para este gráfico.
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={75} // Raio interno maior que o anterior.
            outerRadius={85} // Raio externo maior que o anterior.
            startAngle={90}
            endAngle={-270}
            isAnimationActive={animate}
          >
            {/* Renderiza as células (fatias), aplicando as cores definidas. */}
            {dataConfirmados.map((_, index) => (
              <Cell
                key={`cell-confirmados-${index}`}
                fill={COLORS.confirmados[index]}
              />
            ))}
          </Pie>
          {/* Terceiro gráfico de pizza: Inscrições Canceladas.
            Posicionado em um raio ainda maior. */}
          <Pie
            data={dataCancelados} // Dados para este gráfico.
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={90} // Raio interno maior que o anterior.
            outerRadius={100} // Raio externo maior que o anterior.
            startAngle={90}
            endAngle={-270}
            isAnimationActive={animate}
          >
            {/* Renderiza as células (fatias), aplicando as cores definidas. */}
            {dataCancelados.map((_, index) => (
              <Cell
                key={`cell-cancelados-${index}`}
                fill={COLORS.cancelados[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Seção de legendas e detalhes das métricas, com ícones e valores. */}
      <div className="mt-6 space-y-4">
        {/* Mapeia um array de objetos que representam cada métrica (Público Geral, Confirmados, Cancelados). */}
        {[
          {
            icon: Public, // Ícone da métrica.
            label: "Público Geral", // Texto da legenda.
            cor: "text-blue-400", // Cor do texto do valor.
            badge: "bg-blue-600", // Cor do fundo do badge de porcentagem.
          },
          {
            icon: Confirmed,
            label: "Inscrições Confirmadas",
            cor: "text-green-400",
            badge: "bg-green-600",
          },
          {
            icon: Canceled,
            label: "Inscrições Canceladas",
            cor: "text-red-400",
            badge: "bg-red-600",
          },
        ].map(({ icon, label, cor, badge }, idx) => (
          // Renderiza cada item da legenda.
          <div key={idx} className="flex items-center justify-between">
            {/* Ícone e nome da métrica. */}
            <div className="flex items-center gap-2">
              <img src={icon} alt="" className="w-5 h-5" />
              <span>{label}</span>
            </div>
            {/* Valor numérico da métrica e badge de porcentagem. */}
            <div className="flex items-center gap-2">
              <span className={`${cor}`}>4.142</span>{" "}
              {/* Valor fixo, idealmente viria de dados dinâmicos. */}
              <span
                className={`${badge} text-white text-xs px-2 py-0.5 rounded animate-pulse`} // Badge com cor de fundo e animação de pulso.
              >
                +5% {/* Valor fixo, idealmente viria de dados dinâmicos. */}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
