// Importa imagem de fundo usada no topo da página FAQ
import faqBackground from "../../assets/imgs/FAQimages/Rectangle 90.png";

// Componente principal da página FAQ
const FAQ = () => {
  // Array com perguntas e respostas frequentes
  const faqData = [
    {
      question: "COMO ME INSCREVO EM UM EVENTO?",
      answer:
        'Para participar dos eventos da TechSyn, é necessário estar logado na sua conta. Depois de fazer o login, você poderá visualizar todos os eventos disponíveis e se inscrever facilmente clicando no botão "Inscrever-se" ao lado do evento desejado.',
    },
    {
      question: "POSSO CANCELAR MINHA INSCRIÇÃO DEPOIS DE CONFIRMADA?",
      answer:
        "Sim, você pode cancelar sua inscrição em um evento, desde que com pelo menos 24 horas de antecedência do início do evento.",
    },
    {
      question: "OS EVENTOS SÃO PAGOS OU GRATUITOS?",
      answer:
        "Os eventos podem ser gratuitos ou pagos, dependendo da empresa organizadora e da localização. Todos os detalhes estão disponíveis na página do evento.",
    },
    {
      question: "ONDE VEJO EVENTOS EM QUE ESTOU INSCRITO?",
      answer:
        'Na aba "Meus Eventos" da plataforma, você encontra todos os eventos nos quais está inscrito, com informações como data, local e status.',
    },
    {
      question: "POSSO PARTICIPAR DE EVENTOS ONLINE?",
      answer:
        "Sim. A TechSyn oferece eventos online, presenciais e híbridos. Os online são acessíveis diretamente pela plataforma.",
    },
    {
      question: "COMO FUNCIONA O RANKING DE USUÁRIOS?",
      answer:
        "Você ganha XP ao participar de eventos. Comparecendo, acumula pontos; faltando, perde XP. O ranking mostra os usuários mais engajados.",
    },
    {
      question: "O QUE GANHO AO SUBIR DE NÍVEL NA PLATAFORMA?",
      answer:
        "Você ganha Bins (moeda virtual da TechSyn), que podem ser usados em sorteios, conteúdo exclusivo e vantagens na plataforma.",
    },
    {
      question: "COMO OS PONTOS DE XP SÃO CALCULADOS?",
      answer:
        "Ao fazer check-in nos eventos (presenciais ou online), você ganha XP. A quantidade depende do tipo e duração do evento.",
    },
    {
      question: "COMO POSSO RECUPERAR MINHA SENHA?",
      answer:
        "Na tela de login, clique em 'Esqueci minha senha' e siga as instruções para redefini-la por e-mail.",
    },
    {
      question: "POSSO PARTICIPAR DE VÁRIOS EVENTOS AO MESMO TEMPO?",
      answer:
        "Sim, você pode se inscrever em quantos eventos quiser, desde que os horários não entrem em conflito.",
    },
    {
      question: "A TECHSYN É GRATUITA PARA TODOS?",
      answer:
        "Sim, o uso da plataforma é gratuito. Alguns eventos podem ter custo, mas o acesso e as funcionalidades básicas não têm cobrança.",
    },
    {
      question: "COMO FUNCIONA O CHECK-IN EM EVENTOS PRESENCIAIS?",
      answer:
        "Você deve escanear um QR Code fornecido pela organização no local do evento usando a plataforma TechSyn.",
    },
    {
      question: "O QUE SÃO OS BINS?",
      answer:
        "Bins são moedas virtuais que você acumula participando de eventos e interagindo na plataforma. Eles podem ser usados em sorteios e vantagens exclusivas.",
    },
    {
      question: "POSSO ORGANIZAR MEUS PRÓPRIOS EVENTOS?",
      answer:
        "Sim! Empresas e comunidades parceiras podem solicitar acesso ao painel de organizador para criar e gerenciar eventos.",
    },
    {
      question: "COMO ENTRAR EM CONTATO COM O SUPORTE?",
      answer:
        "Você pode entrar em contato pelo botão 'Ajuda' no rodapé da plataforma ou pelo e-mail suporte@techsyn.com.",
    },
    {
      question: "QUAL A IDADE MÍNIMA PARA PARTICIPAR DOS EVENTOS?",
      answer:
        "A maioria dos eventos é para maiores de 16 anos, mas alguns podem exigir 18+. Verifique na descrição de cada evento.",
    },
    {
      question: "HÁ CERTIFICADOS DE PARTICIPAÇÃO?",
      answer:
        "Sim! Alguns eventos oferecem certificados digitais. Eles ficam disponíveis em seu perfil após o evento.",
    },
    {
      question: "EXISTE UM LIMITE DE FALTAS?",
      answer:
        "Sim. Se você faltar 3 vezes sem justificar, será impedido de se inscrever em novos eventos por 15 dias.",
    },
    {
      question: "POSSO EDITAR MEU PERFIL DEPOIS DO CADASTRO?",
      answer:
        "Sim, vá até a aba 'Meu Perfil' e clique em 'Editar' para atualizar suas informações pessoais.",
    },
  ];

  return (
    <div className="relative z-10 overflow-hidden">
      {/* Imagem de fundo posicionada atrás de tudo */}
      <img
        src={faqBackground}
        alt="FAQ Background"
        className="absolute w-full h-full z-[-1] top-19 bg-fixed transition-all 500ms"
      />

      {/* Cabeçalho com título e introdução */}
      <div className="text-center pt-24 pb-10 rounded-b-[100px] bg-opacity-80">
        <h1
          className="text-6xl font-extrabold bg-gradient-to-b from-purple-500 to-indigo-600 bg-clip-text text-transparent font-BankGothic"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          FAQ
        </h1>
        <p
          className="text-black mt-4 text-sm font-Poppins"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Encontre conselhos e respostas da nossa equipe de suporte rapidamente
          ou entre em contato.
        </p>
      </div>

      {/* Container das perguntas e respostas */}
      <div
        className="w-full max-w-3xl mx-auto px-4 mt-10 z-20"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {faqData.map((item, index) => (
          // Cada item é um dropdown que mostra a pergunta e resposta
          <details
            key={index}
            className="group mb-4 bg-white bg-opacity-90 rounded shadow-md overflow-hidden transition-all duration-300"
          >
            {/* Título da pergunta */}
            <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-100 font-medium text-base text-gray-800">
              {item.question}
              <span className="text-xl text-purple-600 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            {/* Resposta visível ao abrir */}
            <div className="px-6 pb-4 pt-2 text-sm text-gray-700 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>

      {/* Botão de "Ver mais" no final */}
      <div className="flex justify-center items-center mt-10 mb-20">
        <button className="px-6 py-2 bg-white text-black rounded-sm text-sm hover:bg-purple-600 hover:text-white font-BankGothic transition-all">
          Ver mais
        </button>
      </div>
    </div>
  );
};

// Exporta o componente da página FAQ
export default FAQ;
