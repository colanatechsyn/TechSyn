import React from "react";
import techLogo from "../../assets/imgs/HeaderImages/Techsyn_logo.png"; // Importa o logo da TechSyn para exibição no modal.

// Componente ModalConfirmacaoEmail exibe um modal para informar ao usuário
// que um email de confirmação foi enviado.
// Recebe o 'email' para exibir e uma função 'onClose' para fechar o modal.
const ModalConfirmacaoEmail = ({ email, onClose }) => {
  return (
    // Container principal do modal.
    // Posiciona-se fixamente sobre toda a tela, com um fundo escuro e semitransparente,
    // centralizando o conteúdo do modal. Possui um z-index alto para garantir visibilidade.
    <div className="fixed inset-0 flex bg-[#0000008a] justify-center items-center z-60">
      {/* Corpo do modal.
          Estilizado com fundo branco, padding, bordas arredondadas, sombra e alinhamento central de texto.
          Organiza seus elementos em coluna com espaçamento. */}
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm text-center flex flex-col gap-5">
        {/* Imagem do logo da TechSyn. */}
        <img src={techLogo} className="w-30" />

        {/* Título do modal. */}
        <h3 className="text-xl font-bold mb-4 text-[#414141]">
          Confirmação de Email
        </h3>

        {/* Parágrafo informativo, indicando para qual email a confirmação foi enviada. */}
        <p className="mb-6 text-[#414141]">
          Um email de confirmação foi enviado para:{" "}
          {/* O endereço de email é exibido em negrito. */}
          <span className="font-semibold ">{email}</span>
        </p>

        {/* Botão "Fechar" do modal.
            Ao ser clicado, ele executa a função 'onClose' (para fechar o modal)
            e recarrega a página, útil para atualizar o estado de login ou navegação. */}
        <button
          onClick={() => {
            onClose(), window.location.reload(); // Fecha o modal e recarrega a página.
          }}
          className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:brightness-110 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalConfirmacaoEmail;
