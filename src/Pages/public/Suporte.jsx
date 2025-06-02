import React from "react";
import BackgroundVideo from "../../assets/videos/vecteezy_white-color-complex-and-elegant-multiple-shapes-geometrical_45708154.mp4";
import Cards from "../../components/common/SupCards"; // Componente de cards de suporte
import Slider from "../../assets/imgs/AjudaImages/slider_bl.png"; // Imagem para card "Começando"
import Card from "../../assets/imgs/AjudaImages/cards_bl.png"; // Imagem para card "Conta e Cobrança"
import Engrenagem from "../../assets/imgs/AjudaImages/engrenagem_bl.png"; // Imagem para card "Solução de Problemas"
import Seta from "../../assets/imgs/AjudaImages/seta_direita.png"; // Ícone de seta para links
import Lupa from "../../assets/imgs/AjudaImages/Search_icon.png"; // Ícone de lupa para busca

const Suporte = () => {
  return (
    <>
      {/* Container principal da seção Suporte */}
      <div id="Suporte" className="text-center mb-27">
        {/* Cabeçalho com título e descrição */}
        <video
          className="h-screen lg:h-auto lg:min-h-full w-full absolute transform translate-y-[-150px]"
          src={BackgroundVideo}
          autoPlay
          loop
          muted
        ></video>
        <div className="header_content  h-120 flex flex-col justify-center items-center transform translate-y-20">
          <div id="P_and_H" className="flex flex-col items-center gap-0">
            {/* Título com destaque em gradiente */}
            <h1
              id="First_text"
              className="text-[70px] text-[#5B5B5B] select-none font-BankGothic"
              data-aos="fade-right" // Animação de entrada com AOS
              data-aos-delay="200"
              data-aos-duration="1400"
            >
              <span className="font-BankGothic bg-gradient-to-r from-[#AD3FE9] to-[#0055FF] bg-clip-text text-transparent font-bold">
                Como Podemos{" "}
              </span>
              te ajudar?
            </h1>

            {/* Descrição abaixo do título */}
            <p
              className="select-none w-[680px]  text-[#414141]"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1400"
            >
              Encontre conselhos e respostas da nossa equipe de suporte
              rapidamente ou entre em contato.
            </p>
          </div>

          {/* Caixa de busca com ícone de lupa */}
          <div
            className="input relative "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              id="Lupa_icon"
              src={Lupa}
              alt="Search"
              className="absolute top-13.5 left-4 h-[20px] filter invert "
            />
            <input
              type="search"
              id="input_resposta"
              placeholder="Buscar por Respostas...."
              className="h-12  w-[550px] focus:outline-none pl-11 bg-gradient-to-br from-white to-[#FBFBFB] shadow-sm shadow-gray-600 mt-10 rounded-[2px]"
            />
          </div>
        </div>

        {/* Seção de navegação por tópicos com fundo gradiente */}
        <div
          id="Card_superior"
          className="flex flex-col items-center justify-around gap-[35px] bg-gradient-to-tr from-[#AD3FE9] to-[#0055FF] h-[720px] mt-[10%] bg-fixed transform translate-y-[-30px]"
        >
          {/* Título da seção */}
          <h1
            id="navega"
            className="text-[40px] text-[#ffffff] select-none font-sans"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="text-white font-bold">Navegue</span> por todos os
            Tópicos
          </h1>

          {/* Container dos cards */}
          <div
            id="cards"
            className="flex flex-row transform translate-y-[-120px] items-center justify-center gap-10 w-[80%] h-[200px] brightness-120"
          >
            {/* Card 1 - Começando */}
            <Cards
              imgs={Slider}
              h1={"Começando"}
              pr={"Configure sua conta e comece em poucos passos simples."}
            />
            {/* Card 2 - Conta e Cobrança */}
            <Cards
              imgs={Card}
              h1={"Conta e Cobrança"}
              pr={
                "Gerencie sua conta, adicione novos usuários e exporte dados."
              }
            />
            {/* Card 3 - Solução de Problemas */}
            <Cards
              imgs={Engrenagem}
              h1={"Solução de Problemas"}
              pr={"Encontre respostas para problemas de configuração."}
            />
          </div>
        </div>

        {/* Seção de Perguntas Frequentes */}
        <div
          id="texto"
          className="flex flex-col gap-[60px] mt-[5%] h-[320px]  items-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {/* Título das perguntas */}
          <h1
            id="p_r"
            className="text-[20px] font-BankGothic bg-gradient-to-l from-purple-500 to-indigo-600 bg-clip-text text-transparent flex flex-col w-full transform translate-x-[-300px] font-bold "
          >
            Perguntas Recorrentes
          </h1>

          {/* Lista de perguntas com links */}
          <div
            id="perguntas"
            className="flex flex-col text-start text-[#5B5B5B] gap-[50px] w-[750px]  h-[260px] m-5"
          >
            <a href="#" className="flex items-center gap-2 font-bold">
              Promover Eventos de Tecnologia
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Carreira com Eventos de Tecnologia
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Ranking de Participantes
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Desenvolvimento de Software para Eventos
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Executar um Evento de Tecnologia Online
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
          </div>
        </div>

        {/* Linha horizontal separadora */}
        <hr className="text-[#5b5b5b6c] mx-[18%] mt-[11%]" />

        {/* Seção final de contato caso não encontre resposta */}
        <div
          id="last"
          className="flex flex-col items-center gap-[30px] mt-[4%]"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h1 className="text-[25px] text-[#5B5B5B]">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Não consegue
            </span>{" "}
            achar a resposta para sua pergunta?
          </h1>

          {/* Texto explicativo */}
          <p className="select-none w-[520px] text-[14px] text-[#414141] ">
            Encontre conselhos e respostas da nossa equipe de suporte
            rapidamente ou entre em contato.
          </p>

          {/* Botão para contato */}
          <a
            href="#"
            className="flex bg-gradient-to-r from-[#8F2EC4] to-[#0055FF] text-white h-[33px] w-[110px] items-center justify-center rounded-[2px] text-[14px]"
          >
            Contate-nos
          </a>
        </div>
      </div>
    </>
  );
};

export default Suporte;
