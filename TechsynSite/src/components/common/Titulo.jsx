// Importa o componente de animação de digitação da biblioteca react-type-animation
import { TypeAnimation } from "react-type-animation";

// Componente funcional Titulo
export default function Titulo() {
  return (
    // Título principal estilizado e animado com AOS (fade in da direita)
    <h1
      className="text-5xl font-bold text-[#212121] font-BankGothic w-[1000px]"
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      {/* 
        Animação de digitação com a sequência abaixo:
        - Escreve "Melhores ", espera 100ms
        - Continua com "Melhores Momentos com", espera 1000ms
        - Apaga, espera 500ms
        - Escreve "Melhores Experiências e", espera 1000ms
        - Apaga, espera 500ms
        - Repete infinitamente
      */}
      <TypeAnimation
        sequence={[
          "Melhores ",
          100,
          "Melhores Momentos com",
          1000,
          "",
          500,
          "Melhores Experiências e",
          1000,
          "",
          500,
        ]}
        wrapper="span" // Envolve o texto animado em um <span>
        speed={230} // Velocidade da digitação
        repeat={Infinity} // Repete a animação infinitamente
        className="inline" // Exibe o texto na mesma linha que o próximo <span>
      />

      {/* Palavra "Eventos" */}
      <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
        Eventos
      </span>
    </h1>
  );
}
