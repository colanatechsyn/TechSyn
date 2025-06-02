// components/ProductCard.jsx
import React from "react";

// Componente ProductCard exibe informações de um produto na TechStore.
// Ele é ideal para listagens de produtos, apresentando imagem, título, descrição e preço,
// além de um botão de compra.
const ProductCard = ({ image, title, description, price }) => {
  return (
    // Container principal do card do produto.
    // Estilizado com fundo branco, bordas arredondadas, sombra e ocultando o conteúdo que transborda.
    // Possui uma largura máxima definida.
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-[250px]">
      {/* Imagem do produto, cobrindo a área e centralizada. */}
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      {/* Seção de detalhes do produto, com padding interno. */}
      <div className="p-4">
        {/* Título do produto, com estilo de fonte em negrito e cor escura. */}
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {/* Descrição curta do produto, com estilo de fonte menor e cor cinza. */}
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>

      {/* Seção inferior do card, contendo o botão de compra e o preço,
          com alinhamento espaçado e padding. */}
      <div className="px-4 pb-4 flex justify-between items-center">
        {/* Botão "COMPRAR", com gradiente de fundo roxo a índigo.
            Inclui um efeito de hover e bordas arredondadas. */}
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:bg-purple-700 text-white text-sm font-bold py-1 cursor-pointer px-3 rounded ">
          COMPRAR
        </button>
        {/* Preço do produto, exibido em destaque com cor roxa e fonte seminegrito. */}
        <span className="text-purple-700 font-semibold">R$ {price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
