// Importa o componente de animação de digitação da biblioteca react-type-animation
import { TypeAnimation } from "react-type-animation";

// Componente Titulo, responsável por exibir o título principal animado na Home Page (sem login).
// Ele combina texto fixo com uma sequência de frases digitadas dinamicamente.
export default function Titulo() {
  return (
    // Título principal da página.
    // Estilizado com fonte grande, negrito e uma cor específica.
    // Inclui animações de fade-right (aparecendo da direita) com atraso e duração definidos, utilizando a biblioteca AOS.
    <h1
      className="text-5xl font-bold text-[#212121] font-BankGothic w-[1000px]"
      data-aos="fade-right" // Animação: o título aparece deslizando da direita.
      data-aos-delay="200" // Atraso de 200ms antes da animação iniciar.
      data-aos-duration="1000" // Duração da animação de 1000ms.
    >
      {/* Componente TypeAnimation para criar o efeito de digitação. */}
      <TypeAnimation
        // Define a sequência de texto e pausas para a animação de digitação.
        // O texto "Melhores " é exibido, depois "Melhores Momentos com", apagado,
        // seguido por "Melhores Experiências e", apagado novamente, e o ciclo se repete.
        sequence={[
          "Melhores ",
          100, // Pausa de 100ms
          "Melhores Momentos com",
          1000, // Pausa de 1000ms
          "", // Apaga o texto
          500, // Pausa de 500ms
          "Melhores Experiências e",
          1000, // Pausa de 1000ms
          "", // Apaga o texto
          500, // Pausa de 500ms
        ]}
        wrapper="span" // Renderiza a animação dentro de um elemento <span> para manter o fluxo de texto.
        speed={230} // Define a velocidade da digitação/exclusão dos caracteres.
        repeat={Infinity} // Faz com que a sequência de animação se repita infinitamente.
        className="inline" // Garante que o <span> do TypeAnimation fique na mesma linha que o próximo elemento.
      />

      {/* Palavra "Eventos" que complementa o texto animado.
          Estilizada com um gradiente de roxo a índigo, aplicado diretamente ao texto (efeito 'clip-text'). */}
      <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
        Eventos
      </span>
    </h1>
  );
}
