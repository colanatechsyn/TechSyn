import React from "react";
import Card from "../../components/common/Card";
import Topics from "../../components/layout/Topics";
import TopTechSyners from "../../components/layout/TechSyners";
import Plans from "../../components/layout/Plans";
import Maxine from "../../components/layout/Maxine";
import FriendsEnt from "../../components/layout/FriendEnt";
import BackgroundVideo from "../../assets/videos/2646392-hd_1920_1080_30fps.mp4";

import Arrow from "../../assets/imgs/HomeIamges/left-arrow.svg";
import MaxineImg from "../../assets/imgs/MaxineImages/Maxine.png";
function Home() {
  return (
    <section className="Main flex flex-col w-full items-center gap-30">
      {/* Parte superior com slider de imagens e texto de introdução */}
      {/* Banner central com animação de fade */}
      <section className="relative bg-gradient-to-b via-indigo-500 from-purple-500  to-white text-white min-h-screen flex items-center justify-center px-6 py-10 w-full  ">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-53 items-center transform translate-y-[-60px] ">
          {/* Left Text Section */}
          <div className=" w-[1000px]">
            <h2 className="text-sm bg-purple-100 bg-clip-text text-transparent mb-2">
              CONSTRUA SEU FUTURO NA TECNOLOGIA!
            </h2>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              A melhor{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent text-shadow-xs">
                plataforma
              </span>
              <br />
              de eventos <span className="text-white">tecnológicos</span>
              <br />
              para o seu{" "}
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 brightness-120 bg-clip-text text-transparent text-shadow-2xs">
                crescimento
              </span>
              .
            </h1>

            <div className="flex items-center gap-4 mt-6">
              {/* Avatares de pessoas sorrindo */}
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/women/68.jpg",
                  "https://randomuser.me/api/portraits/men/75.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/33.jpg",
                  "https://randomuser.me/api/portraits/women/21.jpg",
                  "https://randomuser.me/api/portraits/men/12.jpg",
                ].map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-lg font-semibold">168K+</p>
                <p className="text-sm text-white-600">Membros ativos</p>
              </div>
            </div>

            <p className="text-sm text-white-600 mt-6 max-w-md">
              O TechSyn conecta desenvolvedores, designers e inovadores através
              de eventos, desafios e trilhas de aprendizado. Ganhe XP, suba no
              ranking e evolua junto com a comunidade.
            </p>

            <button className="mt-8 bg-white hover:bg-lime-500 px-6 py-3 rounded-full font-semibold shadow-lg">
              <p className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Explorar agora
              </p>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center relative w-140">
            {/* Placeholder for 2 mobile mockups */}
            <img
              src={MaxineImg}
              className="rotate-y-180 transform translate-y-"
            />
          </div>
        </div>
        <div className="verMais w-11 h-11 bottom-37  absolute rounded-full animate-bounce shadow-md ">
          <img src={Arrow} className="rotate-270 filter invert" />
        </div>
      </section>
      <div
        className="top_middle_banner w-[90%] flex justify-center "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {" "}
        <Topics />
      </div>
      <div
        className="Preview_catalog_Events w-[75%] grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 md:gap-15 px-4 md:px-0 mt-[-100px]"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Card
          enterpriseName="Inova Solutions"
          enterpriseDescription="Soluções digitais para o futuro."
          enterpriseLogo="/images/inova-logo.png"
          eventImage="/src/assets/imgs/EventsImage/digital_evento_sitio-600x450.jpg"
          dateLocation="15/07/2025 - Rio de Janeiro, RJ"
          tags={["Soluções", "Transformação Digital"]}
          title="Inova Summit 2025"
          description="Evento focado em inovação e tecnologia."
        />
        <Card
          enterpriseName="NextGen Tech"
          enterpriseDescription="Revolucionando o mercado de software."
          enterpriseLogo="/images/nextgen-logo.png"
          eventImage="/src/assets/imgs/EventsImage/5f8159_2e08f10003074706bb1de62d55d0aebc~mv2.avif"
          dateLocation="10/08/2025 - São Paulo, SP"
          tags={["Software", "Startups"]}
          title="NextGen Innovation Day"
          description="Descubra as últimas tendências em startups de tecnologia."
        />
        <Card
          enterpriseName="GreenTech"
          enterpriseDescription="Tecnologia sustentável para o planeta."
          enterpriseLogo="/images/greentech-logo.png"
          eventImage="/src/assets/imgs/EventsImage/AWE-Asia-Immersive-technology-event.jpg"
          dateLocation="05/09/2025 - Curitiba, PR"
          tags={["Sustentabilidade", "Inovação"]}
          title="GreenTech Expo 2025"
          description="Tecnologias verdes que estão mudando o mundo."
        />
        <Card
          enterpriseName="HealthWave"
          enterpriseDescription="Inovação em saúde digital."
          enterpriseLogo="/images/healthwave-logo.png"
          eventImage="/src/assets/imgs/EventsImage/5f8159_1a9a477d609742d09de9f3abe1750f41~mv2.avif"
          dateLocation="12/10/2025 - Belo Horizonte, MG"
          tags={["Saúde", "Tecnologia"]}
          title="HealthWave Conference"
          description="O futuro da saúde conectada e digital."
        />
        <Card
          enterpriseName="EduNext"
          enterpriseDescription="Educação do futuro em tecnologia."
          enterpriseLogo="/images/edunext-logo.png"
          eventImage="/src/assets/imgs/EventsImage/tecnologia-para-eventos.jpg"
          dateLocation="25/11/2025 - Florianópolis, SC"
          tags={["Educação", "Tecnologia"]}
          title="EduNext Summit"
          description="Transformando o ensino com inovação tecnológica."
        />
        <Card
          enterpriseName="Fintech Pulse"
          enterpriseDescription="Inovações financeiras e blockchain."
          enterpriseLogo="/images/fintechpulse-logo.png"
          eventImage="/src/assets/imgs/EventsImage/projetor-para-eventos-em-sao-paulo-1.jpg"
          dateLocation="18/12/2025 - São Paulo, SP"
          tags={["Fintech", "Blockchain"]}
          title="Fintech Pulse 2025"
          description="Novas tecnologias para o mercado financeiro."
        />
        <Card
          enterpriseName="AutoDrive"
          enterpriseDescription="Mobilidade inteligente e autônoma."
          enterpriseLogo="/images/autodrive-logo.png"
          eventImage="/src/assets/imgs/EventsImage/unnamed.png"
          dateLocation="08/01/2026 - Campinas, SP"
          tags={["Mobilidade", "Automação"]}
          title="AutoDrive Expo"
          description="O futuro dos carros autônomos com tecnologia IA."
        />
        <Card
          enterpriseName="AgroTech"
          enterpriseDescription="Tecnologia que revoluciona o campo."
          enterpriseLogo="/images/agrotech-logo.png"
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
          enterpriseLogo="/images/codecraft-logo.png"
          eventImage="/src/assets/imgs/EventsImage/15_de_mai._de_2025_22_18_41.webp"
          dateLocation="25/11/2026 - São Paulo, SP"
          tags={["Desenvolvimento", "Comunidade"]}
          title="CodeCraft Conference"
          description="Encontre sua próxima oportunidade em dev."
        />
        <Card
          enterpriseName="QuantumLeap"
          enterpriseDescription="Tecnologia quântica para o futuro."
          enterpriseLogo="/images/quantumleap-logo.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_a_photorealistic_image_of_a_cuttingedge_techno_3.webp"
          dateLocation="10/12/2026 - Rio de Janeiro, RJ"
          tags={["Tecnologia Quântica", "Inovação"]}
          title="QuantumLeap Expo"
          description="O salto da computação quântica com tecnologia IA."
        />
        <Card
          enterpriseName="MediaMix"
          enterpriseDescription="Tecnologia e mídia digital."
          enterpriseLogo="/images/mediamix-logo.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_a_vibrant_image_that_captures_the_essence_of_i_1.webp"
          dateLocation="15/01/2027 - Belo Horizonte, MG"
          tags={["Mídia Digital", "Inovação"]}
          title="MediaMix Festival"
          description="Com tecnologia IA Transformando o consumo de mídia ."
        />
        <Card
          enterpriseName="Robotics Lab"
          enterpriseDescription="Avanços em robótica e automação."
          enterpriseLogo="/images/roboticslab-logo.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_technology_and_2.webp"
          dateLocation="20/02/2027 - São José dos Campos, SP"
          tags={["Robótica", "Automação"]}
          title="Robotics Lab Expo"
          description="O futuro dos robôs industriais com tecnologia IA."
        />
        <Card
          enterpriseName="TechNova"
          enterpriseDescription="Inovação e tecnologia para o amanhã."
          enterpriseLogo="/images/technova-logo.png"
          eventImage="/src/assets/imgs/EventsImage/267096-top-x-principais-eventos-de-marketing-digital-para-2019.webp"
          dateLocation="05/03/2027 - Porto Alegre, RS"
          tags={["Inovação", "Futuro"]}
          title="TechNova Expo 2027"
          description="Explore as novas fronteiras da tecnologia."
        />
        <Card
          enterpriseName="Digital Frontier"
          enterpriseDescription="Pioneiros em soluções digitais."
          enterpriseLogo="/images/digitalfrontier-logo.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_highly_detailed_and_realistic_images_depicting_0.webp"
          dateLocation="18/04/2027 - Brasília, DF"
          tags={["Digital", "Transformação"]}
          title="Digital Frontier Summit"
          description="Transformando o mundo digitalmente."
        />
        <Card
          enterpriseName="HealthTech Global"
          enterpriseDescription="Inovação na área da saúde."
          enterpriseLogo="/images/healthtechglobal-logo.png"
          eventImage="/src/assets/imgs/EventsImage/corporate-businessman-giving-presentation-large-audience.webp"
          dateLocation="20/06/2027 - Recife, PE"
          tags={["Saúde", "Tecnologia"]}
          title="HealthTech Global Forum"
          description="Tecnologia que salva vidas com tecnologia IA."
        />
        <Card
          enterpriseName="SmartAgro"
          enterpriseDescription="Agricultura inteligente e conectada."
          enterpriseLogo="/images/smartagro-logo.png"
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
          enterpriseLogo="/images/cloudsphere-logo.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_pioneering_inn_1.webp"
          dateLocation="05/10/2027 - Belo Horizonte, MG"
          tags={["Cloud", "Infraestrutura"]}
          title="CloudSphere Summit"
          description="A revolução da nuvem para negócios."
        />
        <Card
          enterpriseName="Robotech"
          enterpriseDescription="Avanços em robótica e automação industrial."
          enterpriseLogo="/images/robotech-logo.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_create_an_image_of_a_cuttingedge_technology_event_sho_0.webp"
          dateLocation="20/12/2027 - Campinas, SP"
          tags={["Robótica", "Automação"]}
          title="Robotech Expo"
          description="Robôs que estão mudando a indústria."
        />
        <Card
          enterpriseName="CyberSecure"
          enterpriseDescription="Protegendo dados com tecnologia avançada."
          enterpriseLogo="/images/cybersecure-logo.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_depicting_a_bustling_technology_event_3.webp"
          dateLocation="08/01/2028 - Fortaleza, CE"
          tags={["Segurança", "Cibersegurança"]}
          title="CyberSecure Summit"
          description="O futuro da proteção digital e tecnologia IA."
        />
        <Card
          enterpriseName="NextGen Energy"
          enterpriseDescription="Tecnologias para energia renovável."
          enterpriseLogo="/images/nextgenenergy-logo.png"
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
