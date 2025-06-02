import { LineChart, Line, ResponsiveContainer } from "recharts"; // Importa componentes do Recharts para gráficos de linha responsivos.

// Dados de exemplo para o gráfico de linha.
// Estes dados representam a série de valores ao longo do tempo para a tendência.
const data = [
  { value: 400 },
  { value: 600 },
  { value: 300 },
  { value: 700 },
  { value: 3030 },
  { value: 800 },
  { value: 600 },
];

// Componente Card, usado para exibir uma métrica financeira individual com sua tendência.
// Ele recebe o título da métrica, valor atual, percentual de mudança,
// se a mudança é positiva/negativa e a cor do gráfico.
function Card({ title, value, percentage, isPositive, chartColor }) {
  return (
    // Container principal do card.
    // Estilizado com um gradiente de fundo escuro, padding, bordas arredondadas e sombra.
    // Possui dimensões fixas para manter a consistência no dashboard.
    <div className="bg-gradient-to-b from-[#1C1C1C] to-[#424242] dark:bg-gray-900 text-white dark:text-white p-4 rounded-2xl shadow-[1px_1px_15px_2px_black] h-[200px] w-100 ">
      {/* Seção superior do card, contendo título, valor e o badge de porcentagem. */}
      <div className="flex justify-between items-start">
        <div>
          {/* Título da métrica (ex: "Faturamento", "Gastos"). */}
          <h3 className="text-sm text-white dark:text-gray-400">{title}</h3>
          {/* Valor principal da métrica, formatado como moeda. */}
          <p className="text-2xl font-bold">${value}</p>
        </div>
        {/* Badge que exibe o percentual de mudança e um ícone de seta.
            A cor de fundo e do texto mudam com base se a mudança é positiva ou negativa. */}
        <div
          className={`text-xs font-semibold px-2 py-1 rounded-md ${
            isPositive ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {percentage} {isPositive ? "↑" : "↓"}{" "}
          {/* Exibe o percentual e a seta correspondente. */}
        </div>
      </div>

      {/* Texto descritivo que detalha a mudança percentual em relação ao mês anterior.
          A cor do texto reflete se a mudança é positiva ou negativa. */}
      <div
        className={`text-sm mt-1 ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {isPositive ? "+" : "-"}
        {percentage} Do último mês
      </div>

      {/* Seção do gráfico de linha, responsável por exibir a tendência da métrica. */}
      <div className="mt-4">
        {/* Container responsivo para o gráfico de linha, garantindo que ele se adapte ao seu pai. */}
        <ResponsiveContainer width="100%" height={50}>
          {/* Componente LineChart do Recharts, que plota os dados da tendência. */}
          <LineChart data={data}>
            {/* Componente Line, que desenha a linha do gráfico. */}
            <Line
              type="monotone" // Tipo da linha (suave).
              dataKey="value" // Qual chave dos dados será usada para plotar a linha.
              animationDuration={3000} // Duração da animação de desenho da linha.
              stroke={chartColor} // Cor da linha, definida pela prop 'chartColor'.
              strokeWidth={3} // Espessura da linha.
              dot={false} // Não exibe pontos nos dados.
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legenda do gráfico de tendência. */}
      <div className="flex items-center space-x-2 mt-4">
        {/* Pequeno círculo colorido que representa a cor da linha do gráfico. */}
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: chartColor }} // A cor é definida pela prop 'chartColor'.
        ></span>
        {/* Texto da legenda. */}
        <span className="text-sm">Tendência</span>
      </div>
    </div>
  );
}

// Componente DashboardCards, responsável por agrupar e renderizar múltiplos Cards de métricas.
// Este é o componente principal que é utilizado no dashboard para exibir os cartões de faturamento e gastos.
export default function DashboardCards() {
  return (
    // Container flexível que organiza os cards em uma coluna com espaçamento.
    <div className="flex flex-col space-y-[25px]">
      {/* Exemplo de uso do componente Card para Faturamento. */}
      <Card
        title="Faturamento" // Título da métrica.
        value="4,416.00" // Valor atual do faturamento.
        percentage="4.4%" // Percentual de mudança.
        isPositive={true} // Indica que a mudança é positiva (cor verde).
        chartColor="#22c55e" // Cor verde para o gráfico de tendência.
      />
      {/* Exemplo de uso do componente Card para Gastos. */}
      <Card
        title="Gastos" // Título da métrica.
        value="1,766.00" // Valor atual dos gastos.
        percentage="6.4%" // Percentual de mudança.
        isPositive={false} // Indica que a mudança é negativa (cor vermelha).
        chartColor="#ef4444" // Cor vermelha para o gráfico de tendência.
      />
    </div>
  );
}
