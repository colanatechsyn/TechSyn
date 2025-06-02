import Background from "../../assets/imgs/SobreNosImages/SobreNosBackGround.png";
import BackgroundPhoto from "../../assets/imgs/SobreNosImages/equipe-bvwkx0fr8aw60l9y.jpg";
import BackgroundVideo from "../../assets/videos/7952139-uhd_3840_2160_30fps.mp4";

import Caio from "../../assets/imgs/SobreNosImages/Caio.png";
import Kauany from "../../assets/imgs/SobreNosImages/Kauany.png";
import Ferreira from "../../assets/imgs/SobreNosImages/Ferreira.png";
import Ana from "../../assets/imgs/SobreNosImages/Ana.png";
import Rose from "../../assets/imgs/SobreNosImages/Rectangle 83.png";
import Douglas from "../../assets/imgs/SobreNosImages/Douglas.png";
import Jose from "../../assets/imgs/SobreNosImages/Jose.png";
import Tome from "../../assets/imgs/SobreNosImages/Tomé.png";

import linkedin_logo from "../../assets/imgs/icons8-linkedin.svg";
import instagram_logo from "../../assets/imgs/icons8-instagram.svg";

import missao from "../../assets/imgs/SobreNosImages/Goal.png";
import visao from "../../assets/imgs/SobreNosImages/Eye.png";
import valores from "../../assets/imgs/SobreNosImages/Morale.png";
import back from "../../assets/imgs/MaxineImages/MaxineBack.png";

export default function SobreNos() {
  const equipe = [
    { nome: "Caio Garcia", cargo: "Scrum-Master", imagem: Caio },
    { nome: "Ana", cargo: "Product-Onwer", imagem: Ana },
    { nome: "Kauany", cargo: "Back-End", imagem: Kauany },
    { nome: "Ferreira", cargo: "Back-End", imagem: Ferreira },
    { nome: "Rose", cargo: "Back-End", imagem: Rose },
    { nome: "Douglas", cargo: "FullStack", imagem: Douglas },
    { nome: "José", cargo: "Front-End", imagem: Jose },
    { nome: "Tomé", cargo: "FullStack", imagem: Tome },
  ];

  return (
    <section className="flex flex-col items-center gap-20">
      {/* Banner */}
      <div className="relative w-full h-screen overflow-hidden bg-center bannerHome z-0">
        <h1
          className="absolute left-1/2 top-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-extrabold text-white font-BankGothic"
          style={{ textShadow: "4px 4px 7px #111111" }}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1300"
        >
          SOBRE{" "}
          <span
            className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
            style={{ textShadow: "none" }}
          >
            NÓS
          </span>
        </h1>
        <video
          className="h-screen lg:h-auto lg:min-h-full w-full"
          src={BackgroundVideo}
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Texto principal */}
      <div className="w-[100%] flex flex-col gap-18 items-center">
        <div className="text_content w-[80%] flex flex-col md:flex-row gap-10 items-start mt-[-10px] mb-[-60px]">
          <div
            className="text-left mb-12 "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="p-[2px] w-[160px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 mb-6">
              <button className="w-full text-purple-600 bg-[#fafafd] rounded-full text-sm hover:bg-purple-100">
                <span className="inline-block font-semibold px-4 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent ">
                  💜 SOBRE NÓS 💜
                </span>
              </button>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121]">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Eventos
              </span>{" "}
              tech que conectam pessoas.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10 text-gray-600 translate-y-[50px]">
            <p
              className="md:w-1/3"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              A TechSyn conecta eventos incríveis com pessoas apaixonadas por
              tecnologia, inovação, empatia e conhecimento.
            </p>
            <p
              className="md:w-1/3"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Participe de experiências únicas, aprenda, compartilhe e cresça
              com a comunidade TechSyn, a maior de eventos.
            </p>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-0  w-[80%]">
          {[
            {
              img: missao,
              title: "Nossa Missão",
              resume: "Conectar jovens a empresas por meio de eventos tech.",
            },
            {
              img: visao,
              title: "Nossa Visão",
              resume:
                "Ser a principal plataforma de eventos tech na América Latina.",
            },
            {
              img: valores,
              title: "Nossos Valores",
              resume:
                "Personalização, Resiliência, Ousadia, Transparência e Protagonismo.",
            },
          ].map(({ img, title, resume }, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/3 flex items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1400"
            >
              <div
                className={`w-25 h-20 rounded-full flex items-center justify-center ${
                  i === 1
                    ? "bg-gray-700"
                    : "bg-gradient-to-r from-purple-500 to-indigo-600"
                }`}
              >
                <img src={img} alt={title} className="w-[50px] h-[50px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#212121]">{title}</h3>
                <p className="text-gray-500 text-sm">{resume}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Imagem + vídeo */}
        <div
          className="relative w-full flex justify-center -translate-x-[150px] scale-85  m-auto"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            src={BackgroundPhoto}
            alt="Equipe"
            className="rounded-[50px] w-[1111px] h-[757px] shadow-lg grayscale-50"
          />
          <div className="absolute top-1/2 -translate-y-1/2 w-[700px] h-[456px] border-[20px] border-[#f7f8fc] rounded-[70px] inset-shadow-2xs overflow-hidden translate-x-[600px]">
            <img
              src={Background}
              alt="Vídeo TechSyn"
              className="w-full h-full rounded-[50px] brightness-30"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="w-20 h-20 text-3xl text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform">
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* Equipe */}
        <section className=" relative py-16 pb-40 bg-gradient-to-b w-full from-violet-700 to-blue-500 text-white text-center flex justify-center overflow-hidden">
          <img
            src={back}
            alt=""
            className="absolute rotate-180 top-241 invert animate-pulse w-full opacity-50 z-[0]"
          />
          <img
            src={back}
            alt=""
            className="absolute rotate-0 top-[-1510px] invert animate-pulse w-full opacity-50 z-0"
          />
          <div className="w-[70%]">
            <div
              className="flex flex-col gap-5 mb-20"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wide border-2 border-white p-2 w-fit mx-auto rounded-full">
                💜 Nosso Time 💜
              </h2>
              <h1 className="text-3xl font-BankGothic font-bold">
                Membros do Time
              </h1>
              <p className="max-w-xl mx-auto text-sm">
                Nossas colaboradoras e companheira Inica TechSyn que nos
                ajudaram nessa jornada com muito trabalho e esforço da equipe.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-20 place-items-center">
              {equipe.map(({ nome, cargo, imagem }, idx) => (
                <div
                  key={idx}
                  className="shadow-2xl w-[270px] h-[270px] relative rounded-[40px] mb-30 z-20"
                >
                  <div className="h-[300px] shadow-2xl z-20">
                    <img
                      src={imagem}
                      alt={nome}
                      className="rounded-[40px] h-auto w-full rounded-b-none z-20"
                    />
                  </div>
                  <div className="w-[200px] h-[100px] absolute top-[220px] left-1/2 transform -translate-x-1/2 rounded-[40px] flex flex-col justify-center bg-gradient-to-r from-purple-500 to-indigo-600 opacity-90 z-10">
                    <h1 className="font-bold text-xl">{nome}</h1>
                    <h4 className="text-sm">{cargo}</h4>
                  </div>
                  <div className="flex border h-[150px] mt-[-24px] rounded-[40px] rounded-t-none bg-white justify-evenly items-center pt-5">
                    <div
                      className="w-[50px] h-[50px] bg-center bg-no-repeat bg-cover rounded-full cursor-pointer shadow-lg hover:scale-105 transition-transform flex overflow-hidden filter  p-2.5 "
                      title="LinkedIn"
                    >
                      <img
                        src={linkedin_logo}
                        alt=""
                        className="rounded-full  "
                      />
                    </div>
                    <div
                      className="w-[50px] h-[50px] bg-center bg-no-repeat bg-cover rounded-full cursor-pointer shadow-lg hover:scale-105 transition-transform flex overflow-hidden filter  p-2.5"
                      title="Instagram"
                    >
                      {" "}
                      <img
                        src={instagram_logo}
                        alt=""
                        className="rounded-full "
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
