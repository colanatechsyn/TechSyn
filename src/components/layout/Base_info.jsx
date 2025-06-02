const Info = ({
  title,
  ft1,
  ft2,
  ft3,
  ft4,
  ft5,
  p1,
  p2,
  p3,
  p4,
  p1_2,
  p2_2,
  p3_2,
  p4_2,
  p5_2,
  p1_3,
  p2_3,
  p3_3,
  p4_3,
  p5_3,
  p1_4,
  p2_4,
  p3_4,
  p1_5,
  p2_5,
  p3_5,
  p4_5,
  p5_5,
}) => {
  // Função para renderizar cada seção do texto com título (ft = "feature/title") e parágrafos
  const renderSection = (sectionTitle, paragraphs = []) => {
    // Filtra só os parágrafos que não são nulos ou vazios
    const validParagraphs = paragraphs.filter(Boolean);
    // Se não tiver título nem parágrafos, não renderiza nada
    if (!sectionTitle && validParagraphs.length === 0) return null;

    return (
      <div className="flex flex-col gap-2 mx-[15%]">
        {/* Renderiza o título da seção se existir */}
        {sectionTitle && (
          <h1 className="text-lg bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent font-semibold bg-fixed">
            {sectionTitle}
          </h1>
        )}
        {/* Renderiza cada parágrafo da seção */}
        {validParagraphs.map((p, i) => (
          <p
            key={i}
            className="text-sm text-[#5B5B5B] leading-relaxed max-w-4xl"
          >
            {p}
          </p>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Título principal do componente */}
      <div className="flex justify-center text-5xl items-center h-48 font-BankGothic text-white font-bold bg-gradient-to-br from-[#2843B3] to-[#9C2EC4]">
        <h1 className="text-5xl">{title}</h1>
      </div>

      {/* Renderiza todas as seções com seus textos */}
      <div className="flex flex-col gap-10 px-8 md:px-20 mt-30 mb-30">
        {renderSection(ft1, [p1, p2, p3, p4])}
        {renderSection(ft2, [p1_2, p2_2, p3_2, p4_2, p5_2])}
        {renderSection(ft3, [p1_3, p2_3, p3_3, p4_3, p5_3])}
        {renderSection(ft4, [p1_4, p2_4, p3_4])}
        {renderSection(ft5, [p1_5, p2_5, p3_5, p4_5, p5_5])}
      </div>
    </>
  );
};

export default Info;
