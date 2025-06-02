// Importa o componente de layout Base_info, que provavelmente já vem com o cabeçalho, espaçamentos e organização visual padrão
import Base from "../../components/layout/Base_info";

// Componente da página "Acessibilidade"
const Acessibilidade = () => {
  return (
    <>
      {/* Usa o componente Base e passa os dados da página como props */}
      <Base
        title="ACESSIBILIDADE" // Título da página
        // Seção 1: Compromisso
        ft1="1. Nosso Compromisso" // Título da seção
        p1="A TechSyn se compromete a tornar sua plataforma acessível a todos os usuários, incluindo aqueles com deficiência." // Texto descritivo da seção
        // Seção 2: Recursos
        ft2="2. Recursos de Acessibilidade" // Título da seção
        p1_2="• Suporte a leitores de tela." // Item 1
        p2_2="• Contraste ajustável e navegação por teclado." // Item 2
        p3_2="• Design responsivo para todos os dispositivos." // Item 3
        // Seção 3: Melhorias
        ft3="3. Melhorias Contínuas" // Título da seção
        p1_3="Estamos constantemente atualizando nossa plataforma para seguir as melhores práticas de acessibilidade digital." // Texto 1
        p2_3="Se você tiver sugestões ou encontrar dificuldades, entre em contato: acessibilidade@techsyn.com." // Texto 2 com o e-mail de contato
      />
    </>
  );
};

// Exporta o componente para ser usado em outras partes do app
export default Acessibilidade;
