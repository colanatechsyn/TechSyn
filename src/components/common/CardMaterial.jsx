import { Download, MapPin, CalendarDays, Clock, Lock } from "lucide-react";

// Componente CardMaterial exibe um cartão com detalhes de um evento ou material.
// Ele ajusta seu visual e funcionalidades com base no status 'encerrado' do evento.
export default function CardMaterial({
  titulo,
  descricao,
  data,
  hora,
  local,
  imagem,
  encerrado, // Booleano que indica se o evento/material está encerrado ou não.
  organizador, // Propriedade atualmente não utilizada no JSX.
}) {
  return (
    // Container principal do card, com fundo branco, bordas arredondadas e sombra.
    <div className="bg-white rounded-xl shadow-md w-72">
      {/* Seção da imagem e ícones sobrepostos, com posicionamento relativo. */}
      <div className="relative">
        {/* Imagem do evento ou um placeholder padrão.
          A imagem fica em escala de cinza se o evento estiver encerrado. */}
        <img
          src={imagem || "https://via.placeholder.com/300x200"}
          alt={`Imagem do evento ${titulo}`}
          className={`rounded-t-xl w-full h-48 object-cover ${
            encerrado ? "" : "grayscale" // Aplica grayscale se o evento NÃO estiver encerrado.
          }`}
        />

        {/* Indicador de status do evento (Encerrado ou Aberto), posicionado no canto superior esquerdo.
          A cor do texto muda com base no status. */}
        <span
          className={`absolute top-2 left-2 text-sm font-semibold ${
            encerrado ? "text-red-500" : "text-green-600"
          }`}
        >
          {encerrado ? "🔴 Encerrado" : "🟢 Aberto"}
        </span>

        {/* Ícone central dinâmico:
          Exibe um ícone de Download se o evento estiver encerrado (indicando material disponível).
          Exibe um ícone de Cadeado se o evento não estiver encerrado (indicando material bloqueado/futuro). */}
        {encerrado ? (
          // Ícone de Download, visível quando o evento está encerrado.
          // Possui um fundo semitransparente e é clicável.
          <Download className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-16 h-16 bg-black bg-opacity-40 rounded-full p-4 cursor-pointer" />
        ) : (
          // Ícone de Cadeado, visível quando o evento não está encerrado.
          // Possui um fundo semitransparente.
          <Lock className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-16 h-16 bg-black bg-opacity-40 rounded-full p-4" />
        )}
      </div>

      {/* Seção de conteúdo textual do card, com padding. */}
      <div className="p-4">
        {/* Título do evento. */}
        <h3 className="font-bold text-lg text-black">{titulo}</h3>
        {/* Descrição curta do evento. */}
        <p className="text-sm text-gray-500 mt-1">{descricao}</p>

        {/* Container para as informações de data, hora e local, organizadas horizontalmente. */}
        <div className="flex items-center text-sm text-gray-600 mt-3 space-x-3">
          {/* Informação de Data do evento, com ícone de calendário. */}
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            <span>{data}</span>
          </div>
          {/* Informação de Hora do evento, com ícone de relógio. */}
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{hora}</span>
          </div>
          {/* Informação de Local do evento, com ícone de pino de mapa. */}
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{local}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
