import React from "react";
import Card from "../../components/common/Card";
import ImageSlider from "../../components/layout/ImageSlider";
import Banner from "../../components/layout/Banner";
import TopTechSyners from "../../components/layout/TechSyners";
import Plans from "../../components/layout/Plans";
import Maxine from "../../components/layout/Maxine";
import FriendsEnt from "../../components/layout/FriendEnt";
import Titulo from "../../components/common/Titulo";

import Randomizer from "../../assets/imgs/HomeIamges/fa_random.png";
function Home() {
  return (
    <section className="Main flex flex-col w-full items-center mt-11 gap-30">
      {/* Parte superior com slider de imagens e texto de introdução */}
      <div
        className="top_main_cont
      ent w-[90%] text-center flex flex-col gap-6 justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {/* Slider de imagens */}
        <ImageSlider data-aos="fade-up" />
        {/* Texto principal de apresentação */}
        <div className="text_content w-[600px] flex flex-col gap-4 items-center">
          {/* Título customizado */}
          <Titulo />
          {/* Parágrafo explicativo com animação */}
          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Os melhores eventos de tecnologia da TechSyn reúnem inovação,
            networking e aprendizado. Conheça palestras, workshops e painéis com
            especialistas do mercado que transformam conhecimento em
            oportunidades reais.
          </p>
        </div>
        {/* Botões principais: "Ver mais" e "Sobre" */}
        <div className="flex gap-2 justify-center cursor-pointer">
          <img src={Randomizer} className="w-12 transform translate-y-[5px]" />
        </div>
      </div>
      {/* Banner central com animação de fade */}
      <div
        className="top_middle_banner w-[90%] flex justify-center "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Banner />
      </div>
      <div
        className="Preview_catalog_Events w-[75%] grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 md:gap-15 px-4 md:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Card
          enterpriseName="Inova Solutions"
          enterpriseDescription="Soluções digitais para o futuro."
          enterpriseLogo="https://img.icons8.com/fluency/96/company.png"
          eventImage="/src/assets/imgs/EventsImage/digital_evento_sitio-600x450.jpg"
          dateLocation="15/07/2025 - Rio de Janeiro, RJ"
          tags={["Soluções", "Transformação Digital"]}
          title="Inova Summit 2025"
          description="Evento focado em inovação e tecnologia."
        />
        <Card
          enterpriseName="NextGen Tech"
          enterpriseDescription="Revolucionando o mercado de software."
          enterpriseLogo="https://img.icons8.com/fluency/96/source-code.png"
          eventImage="/src/assets/imgs/EventsImage/5f8159_2e08f10003074706bb1de62d55d0aebc~mv2.avif"
          dateLocation="10/08/2025 - São Paulo, SP"
          tags={["Software", "Startups"]}
          title="NextGen Innovation Day"
          description="Descubra as últimas tendências em startups de tecnologia."
        />
        <Card
          enterpriseName="GreenTech"
          enterpriseDescription="Tecnologia sustentável para o planeta."
          enterpriseLogo="https://img.icons8.com/fluency/96/database.png"
          eventImage="/src/assets/imgs/EventsImage/AWE-Asia-Immersive-technology-event.jpg"
          dateLocation="05/09/2025 - Curitiba, PR"
          tags={["Sustentabilidade", "Inovação"]}
          title="GreenTech Expo 2025"
          description="Tecnologias verdes que estão mudando o mundo."
        />
        <Card
          enterpriseName="HealthWave"
          enterpriseDescription="Inovação em saúde digital."
          enterpriseLogo="https://img.icons8.com/fluency/96/cloud.png"
          eventImage="/src/assets/imgs/EventsImage/5f8159_1a9a477d609742d09de9f3abe1750f41~mv2.avif"
          dateLocation="12/10/2025 - Belo Horizonte, MG"
          tags={["Saúde", "Tecnologia"]}
          title="HealthWave Conference"
          description="O futuro da saúde conectada e digital."
        />
        <Card
          enterpriseName="EduNext"
          enterpriseDescription="Educação do futuro em tecnologia."
          enterpriseLogo="https://img.icons8.com/fluency/96/training.png"
          eventImage="/src/assets/imgs/EventsImage/tecnologia-para-eventos.jpg"
          dateLocation="25/11/2025 - Florianópolis, SC"
          tags={["Educação", "Tecnologia"]}
          title="EduNext Summit"
          description="Transformando o ensino com inovação tecnológica."
        />
        <Card
          enterpriseName="Fintech Pulse"
          enterpriseDescription="Inovações financeiras e blockchain."
          enterpriseLogo="https://img.icons8.com/fluency/96/shopping-cart.png"
          eventImage="/src/assets/imgs/EventsImage/projetor-para-eventos-em-sao-paulo-1.jpg"
          dateLocation="18/12/2025 - São Paulo, SP"
          tags={["Fintech", "Blockchain"]}
          title="Fintech Pulse 2025"
          description="Novas tecnologias para o mercado financeiro."
        />
        <Card
          enterpriseName="AutoDrive"
          enterpriseDescription="Mobilidade inteligente e autônoma."
          enterpriseLogo="https://img.icons8.com/fluency/96/bar-chart.png"
          eventImage="/src/assets/imgs/EventsImage/unnamed.png"
          dateLocation="08/01/2026 - Campinas, SP"
          tags={["Mobilidade", "Automação"]}
          title="AutoDrive Expo"
          description="O futuro dos carros autônomos com tecnologia IA."
        />
        <Card
          enterpriseName="AgroTech"
          enterpriseDescription="Tecnologia que revoluciona o campo."
          enterpriseLogo="https://img.icons8.com/fluency/96/email.png"
          eventImage="/src/assets/imgs/EventsImage/eventos_de_tecnologia_e_negocios-1-994x495.jpeg"
          dateLocation="30/03/2026 - Londrina, PR"
          tags={["Agricultura", "Inovação"]}
          title="AgroTech Conference"
          description="Soluções tecnológicas para a agricultura moderna."
        />
      </div>

      <div className="more">
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-[-100px] rounded-sm text-sm hover:bg-purple-700">
          Ver mais
        </button>
      </div>

      {/* Seção com ranking dos melhores TechSyners */}
      <div className="middle_techSyn_Ranking_Preview w-full">
        <TopTechSyners />
      </div>

      {/* Seção de planos, com animação */}
      <div
        className="middle_techSyn_Plans_Preview w-full"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Plans />
      </div>

      {/* Seção Maxine, com fundo fixo */}
      <div className="maxine_preview w-full bg-fixed">
        <Maxine />
      </div>
      <div
        className="Preview_catalog_Events w-[75%] grid grid-cols-4 place-items-center gap-10"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
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
          enterpriseLogo="https://img.icons8.com/fluency/96/physics.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_a_photorealistic_image_of_a_cuttingedge_techno_3.webp"
          dateLocation="10/12/2026 - Rio de Janeiro, RJ"
          tags={["Tecnologia Quântica", "Inovação"]}
          title="QuantumLeap Expo"
          description="O salto da computação quântica com tecnologia IA."
        />
        <Card
          enterpriseName="MediaMix"
          enterpriseDescription="Tecnologia e mídia digital."
          enterpriseLogo="https://img.icons8.com/fluency/96/video-playlist.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_a_vibrant_image_that_captures_the_essence_of_i_1.webp"
          dateLocation="15/01/2027 - Belo Horizonte, MG"
          tags={["Mídia Digital", "Inovação"]}
          title="MediaMix Festival"
          description="Com tecnologia IA Transformando o consumo de mídia."
        />
        <Card
          enterpriseName="Robotics Lab"
          enterpriseDescription="Avanços em robótica e automação."
          enterpriseLogo="https://img.icons8.com/fluency/96/robot-2.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_technology_and_2.webp"
          dateLocation="20/02/2027 - São José dos Campos, SP"
          tags={["Robótica", "Automação"]}
          title="Robotics Lab Expo"
          description="O futuro dos robôs industriais com tecnologia IA."
        />
        <Card
          enterpriseName="TechNova"
          enterpriseDescription="Inovação e tecnologia para o amanhã."
          enterpriseLogo="https://img.icons8.com/fluency/96/artificial-intelligence.png"
          eventImage="/src/assets/imgs/EventsImage/267096-top-x-principais-eventos-de-marketing-digital-para-2019.webp"
          dateLocation="05/03/2027 - Porto Alegre, RS"
          tags={["Inovação", "Futuro"]}
          title="TechNova Expo 2027"
          description="Explore as novas fronteiras da tecnologia."
        />
        <Card
          enterpriseName="Digital Frontier"
          enterpriseDescription="Pioneiros em soluções digitais."
          enterpriseLogo="https://img.icons8.com/fluency/96/cloud.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_highly_detailed_and_realistic_images_depicting_0.webp"
          dateLocation="18/04/2027 - Brasília, DF"
          tags={["Digital", "Transformação"]}
          title="Digital Frontier Summit"
          description="Transformando o mundo digitalmente."
        />
        <Card
          enterpriseName="HealthTech Global"
          enterpriseDescription="Inovação na área da saúde."
          enterpriseLogo="https://img.icons8.com/fluency/96/pie-chart.png"
          eventImage="/src/assets/imgs/EventsImage/corporate-businessman-giving-presentation-large-audience.webp"
          dateLocation="20/06/2027 - Recife, PE"
          tags={["Saúde", "Tecnologia"]}
          title="HealthTech Global Forum"
          description="Tecnologia que salva vidas com tecnologia IA."
        />
        <Card
          enterpriseName="SmartAgro"
          enterpriseDescription="Agricultura inteligente e conectada."
          enterpriseLogo="https://img.icons8.com/fluency/96/tractor.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_A_vibrant_and_bustling_scene_depicting_a_reallife_tec_2.webp"
          dateLocation="10/08/2027 - Londrina, PR"
          tags={["Agricultura", "IoT"]}
          title="SmartAgro Expo"
          description="Tecnologia para um campo mais produtivo."
        />
      </div>

      <div className="more">
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-[-100px] rounded-sm text-sm hover:bg-purple-700">
          Ver mais
        </button>
      </div>
      <div
        className="maxine_preview w-full"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {/* Seção das empresas parceiras */}
        <FriendsEnt />
      </div>
      <div
        className="Preview_catalog_Events w-[75%] grid grid-cols-4 place-items-center gap-10"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Card
          enterpriseName="CloudSphere"
          enterpriseDescription="Soluções completas em nuvem."
          enterpriseLogo="https://img.icons8.com/fluency/96/source-code.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_pioneering_inn_1.webp"
          dateLocation="05/10/2027 - Belo Horizonte, MG"
          tags={["Cloud", "Infraestrutura"]}
          title="CloudSphere Summit"
          description="A revolução da nuvem para negócios."
        />
        <Card
          enterpriseName="Robotech"
          enterpriseDescription="Avanços em robótica e automação industrial."
          enterpriseLogo="https://img.icons8.com/fluency/96/computer.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_create_an_image_of_a_cuttingedge_technology_event_sho_0.webp"
          dateLocation="20/12/2027 - Campinas, SP"
          tags={["Robótica", "Automação"]}
          title="Robotech Expo"
          description="Robôs que estão mudando a indústria."
        />
        <Card
          enterpriseName="CyberSecure"
          enterpriseDescription="Protegendo dados com tecnologia avançada."
          enterpriseLogo="https://img.icons8.com/fluency/96/settings.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_depicting_a_bustling_technology_event_3.webp"
          dateLocation="08/01/2028 - Fortaleza, CE"
          tags={["Segurança", "Cibersegurança"]}
          title="CyberSecure Summit"
          description="O futuro da proteção digital e tecnologia IA."
        />
        <Card
          enterpriseName="NextGen Energy"
          enterpriseDescription="Tecnologias para energia renovável."
          enterpriseLogo="https://img.icons8.com/fluency/96/money.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_of_a_bustling_technology_event_where__3.webp"
          dateLocation="18/02/2028 - Manaus, AM"
          tags={["Energia", "Sustentabilidade"]}
          title="NextGen Energy Expo"
          description="Inovações para um mundo mais verde."
        />
      </div>
      <div className="more">
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-[-100px] rounded-sm text-sm hover:bg-purple-700">
          Ver mais
        </button>
      </div>
    </section>
  );
}
export default Home;
