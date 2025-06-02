// Importa o componente de layout Base_info, que monta a estrutura da página
import Base from "../../components/layout/Base_info";

// Componente da página "Cookies"
const Cookies = () => {
  return (
    <>
      {/* Usa o componente Base e envia os dados da página como props */}
      <Base
        title="COOKIES" // Título principal da página
        // Seção 1: O que são Cookies?
        ft1="1. O que são Cookies?" // Título da seção
        p1="Cookies são pequenos arquivos de texto armazenados no seu navegador para melhorar sua experiência de navegação." // Explicação do que são cookies
        // Seção 2: Como Utilizamos Cookies
        ft2="2. Como Utilizamos Cookies" // Título da seção
        p1_2="Utilizamos cookies para:" // Introdução dos usos
        p2_2="• Manter você conectado à plataforma." // Uso 1
        p3_2="• Entender como você utiliza a TechSyn." // Uso 2
        p4_2="• Personalizar conteúdos e anúncios." // Uso 3
        // Seção 3: Gerenciamento de Cookies
        ft3="3. Gerenciamento de Cookies" // Título da seção
        p1_3="Você pode gerenciar suas preferências de cookies nas configurações do seu navegador a qualquer momento." // Instrução sobre configuração
        p2_3="Desabilitar cookies pode limitar algumas funcionalidades da plataforma." // Aviso sobre possíveis limitações
      />
    </>
  );
};

// Exporta o componente da página "Cookies"
export default Cookies;
