import Card from "../common/Card";

export default function RecentEvents() {
  return (
    <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
      <Card
        enterpriseName="CodeCraft"
        enterpriseDescription="Comunidade de desenvolvedores inovadores."
        enterpriseLogo="https://img.icons8.com/fluency/96/source-code.png"
        eventImage="/src/assets/imgs/EventsImage/15_de_mai._de_2025_22_18_41.webp"
        dateLocation="25/11/2026 - São Paulo, SP"
        tags={["Desenvolvimento", "Comunidade"]}
        title="CodeCraft Conference"
        description="Encontre sua próxima oportunidade em dev."
      />
      <Card
        enterpriseName="QuantumLeap"
        enterpriseDescription="Tecnologia quântica para o futuro."
        enterpriseLogo="https://img.icons8.com/fluency/96/cloud.png"
        eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_a_photorealistic_image_of_a_cuttingedge_techno_3.webp"
        dateLocation="10/12/2026 - Rio de Janeiro, RJ"
        tags={["Tecnologia Quântica", "Inovação"]}
        title="QuantumLeap Expo"
        description="O salto da computação quântica com tecnologia IA."
      />
      <Card
        enterpriseName="MediaMix"
        enterpriseDescription="Tecnologia e mídia digital."
        enterpriseLogo="https://img.icons8.com/fluency/96/database.png"
        eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_a_vibrant_image_that_captures_the_essence_of_i_1.webp"
        dateLocation="15/01/2027 - Belo Horizonte, MG"
        tags={["Mídia Digital", "Inovação"]}
        title="MediaMix Festival"
        description="Com tecnologia IA Transformando o consumo de mídia ."
      />
    </div>
  );
}
