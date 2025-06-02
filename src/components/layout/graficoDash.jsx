import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // Importa os componentes necessários da biblioteca Recharts.

// Dados de exemplo para o gráfico de inscrições.
// Representa o número de inscrições por mês ao longo de um ano.
const data = [
  { mes: "Jan", inscricoes: 300 },
  { mes: "Fev", inscricoes: 700 },
  { mes: "Mar", inscricoes: 5550 },
  { mes: "Abr", inscricoes: 0 },
  { mes: "Mai", inscricoes: 2550 },
  { mes: "Jun", inscricoes: 0 },
  { mes: "Jul", inscricoes: 8550 },
  { mes: "Ago", inscricoes: 0 },
  { mes: "Set", inscricoes: 1000 },
  { mes: "Out", inscricoes: 0 },
  { mes: "Nov", inscricoes: 6000 },
  { mes: "Dez", inscricoes: 550 },
];

// Componente GraficoInscricoes exibe um gráfico de linha do total de inscrições ao longo do tempo.
// Este gráfico é parte do dashboard da TechSyn para as empresas.
export default function GraficoInscricoes() {
  return (
    // Container principal do gráfico.
    // Estilizado com um gradiente de fundo escuro, padding, bordas arredondadas e sombra.
    // Ocupa metade da largura disponível e possui uma altura fixa, permitindo que o conteúdo transborde visualmente.
    <div className="w-1/2 bg-gradient-to-b from-[#1C1C1C] to-[#424242] text-white p-6 rounded-2xl shadow-[1px_1px_15px_2px_black] h-[425px] overflow-visible">
      {/* Cabeçalho do gráfico, com o título "Inscrições Gerais". */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Inscrições Gerais</h2>
      </div>

      {/* Container responsivo para o gráfico de linha, garantindo que ele se adapte ao seu pai. */}
      <ResponsiveContainer width="100%" height={300}>
        {/* Componente LineChart do Recharts, que plota os dados. */}
        <LineChart data={data}>
          {/* Eixo X (horizontal) para os meses.
              O texto do eixo é de cor cinza claro. */}
          <XAxis dataKey="mes" stroke="#ccc" />
          {/* Eixo Y (vertical) para o número de inscrições.
              Define o domínio dos valores, formata os ticks com 'K' (milhares)
              e tem cor cinza claro. */}
          <YAxis
            domain={[0, 10300]} // Define a faixa de valores no eixo Y.
            tickFormatter={(tick) => `${tick}K`} // Formata os rótulos do eixo Y (ex: 1000 vira 1K).
            stroke="#ccc" // Cor da linha e rótulos do eixo Y.
          />
          {/* Tooltip que exibe informações ao passar o mouse sobre os pontos da linha.
              Estilizado com fundo escuro, bordas arredondadas e sem borda. */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              borderRadius: "8px",
              border: "none",
            }}
          />

          {/* Linha do gráfico de inscrições. */}
          <Line
            type="monotone" // Tipo da linha (curva suave).
            dataKey="inscricoes" // Qual chave dos dados será usada para plotar a linha.
            stroke="#C648E6" // Cor da linha (roxo).
            animationDuration={3000} // Duração da animação de desenho da linha (3 segundos).
            strokeWidth={3} // Espessura da linha.
            dot={{
              // Estilo dos pontos da linha.
              r: 6, // Raio do ponto.
              stroke: "#fff", // Cor da borda do ponto.
              strokeWidth: 2, // Espessura da borda do ponto.
              fill: "#8b5cf6", // Cor de preenchimento do ponto.
              filter: "drop-shadow(0 0 6px #8b5cf6)", // Sombra para o ponto.
            }}
            activeDot={{
              // Estilo do ponto ativo (ao passar o mouse).
              r: 8, // Raio maior para o ponto ativo.
              stroke: "#fff", // Cor da borda do ponto ativo.
              strokeWidth: 2, // Espessura da borda do ponto ativo.
              fill: "#8b5cf6", // Cor de preenchimento do ponto ativo.
              filter: "drop-shadow(0 0 8px #8b5cf6)", // Sombra mais proeminente para o ponto ativo.
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Div vazia para espaçamento ou futuros elementos no rodapé. */}
      <div className="flex justify-center mt-4"></div>

      {/* Estilos JSX globais para aplicar uma sombra à linha do gráfico. */}
      <style jsx>{`
        .recharts-line path {
          filter: drop-shadow(
            0 0 8px #8b5cf6
          ); /* Adiciona uma sombra à linha do gráfico. */
        }
      `}</style>
    </div>
  );
}
