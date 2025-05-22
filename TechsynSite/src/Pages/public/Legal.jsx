import Base from "../../components/layout/Base_info";

const Legal = () => {
  return (
    <>
      {/* Componente Base responsável por estruturar a página legal */}
      <Base
        title="LEGAL"
        // Seção 1 - Termos de Uso
        ft1="1. Termos de Uso"
        p1="Bem-vindo à TechSyn!"
        p2="Ao acessar ou usar nossos serviços, você concorda em seguir nossos Termos de Uso, que têm como objetivo garantir um ambiente seguro, transparente e eficiente para todos os usuários."
        p3="O não cumprimento destes termos pode resultar na suspensão ou encerramento da sua conta."
        // Seção 2 - Direitos Autorais
        ft2="2. Direitos Autorais"
        p1_2="Todo o conteúdo disponibilizado na TechSyn, incluindo textos, imagens, logotipos, gráficos e funcionalidades, é protegido pelas leis de direitos autorais e de propriedade intelectual."
        p2_2="Nenhum conteúdo poderá ser reproduzido, distribuído ou modificado sem autorização prévia por escrito da TechSyn."
        // Seção 3 - Uso Aceitável
        ft3="3. Uso Aceitável"
        p1_3="Ao utilizar a plataforma, você concorda em:"
        p2_3="• Não violar leis locais, estaduais, nacionais ou internacionais."
        p3_3="• Não publicar conteúdo ofensivo, discriminatório ou prejudicial."
        p4_3="• Não utilizar a plataforma para fins ilícitos ou enganosos."
        p5_3="A TechSyn reserva-se o direito de remover qualquer conteúdo ou usuário que infrinja essas regras."
        // Seção 4 - Responsabilidades do Usuário
        ft4="4. Responsabilidades do Usuário"
        p1_4="Cada usuário é responsável pelas informações que publica e pelos eventos que organiza ou participa."
        p2_4="A TechSyn não se responsabiliza por danos ou prejuízos decorrentes de interações entre usuários ou entre usuários e empresas."
        // Seção 5 - Alterações dos Termos
        ft5="5. Alterações dos Termos"
        p1_5="Reservamo-nos o direito de atualizar estes termos periodicamente."
        p2_5="Sempre que houver alterações significativas, notificaremos você através da plataforma ou por e-mail cadastrado."
        p3_5="Recomendamos a revisão frequente dos Termos de Uso para estar ciente de quaisquer atualizações."
        p4_5="Última atualização: Abril de 2025"
        p5_5="Em caso de dúvidas sobre estes termos, entre em contato pelo e-mail: suporte@techsyn.com."
      />
    </>
  );
};

export default Legal;
