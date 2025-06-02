const Card = ({ posicao, nome, pontos }) => {
  return (
    // Componente Card de Ranqueamento de Usuários.
    // Exibe a posição, nome e pontuação de um usuário em um ranking.
    // O container principal possui layout flexível horizontal, com um gradiente de fundo,
    // bordas arredondadas e uma sombra para destacá-lo.
    <div className="flex flex-row bg-gradient-to-br from-[#ebebeb] to-white w-[90%] h-[65px] rounded-[16px] shadow-[1px_3px_17px_black] items-center px-[10px] flex-shrink-0">
      {/* Container externo para o círculo que exibe a posição do usuário no ranking.
        Aplica um gradiente de roxo a azul. */}
      <div className="flex h-[46px] w-[46px] rounded-full bg-gradient-to-br from-[#9C2EC4] to-[#0055FF] ml-[2%] items-center justify-center">
        {/* Container interno branco que envolve o número da posição, criando um efeito de borda. */}
        <div className="flex h-[42px] w-[42px] rounded-full bg-white items-center justify-center text-[23px]">
          {/* Título que exibe a posição do usuário, com o texto estilizado com um gradiente. */}
          <h1 className="bg-gradient-to-r from-[#9C2EC4] to-[#0055FF] bg-clip-text text-transparent">
            {posicao}
          </h1>
        </div>
      </div>
      {/* Parágrafo que exibe o nome do usuário ranqueado. */}
      <p className="text-[10px] ml-[6%]">{nome}</p>
      {/* Container para a pontuação e a unidade 'techmoney', alinhados à direita do card. */}
      <div className="ml-auto text-[10px] flex gap-[10px]">
        {/* Exibe a quantidade de pontos do usuário. */}
        <p>{pontos}</p>
        {/* Exibe a unidade de pontos 'techmoney', estilizada com um gradiente e em negrito. */}
        <p className="bg-gradient-to-r from-[#9C2EC4] to-[#0055FF] bg-clip-text text-transparent font-bold">
          techmoney
        </p>
      </div>
    </div>
  );
};

export default Card;
