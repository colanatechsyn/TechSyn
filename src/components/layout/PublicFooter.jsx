import React from "react";
import linkedin_logo from "../../assets/imgs/icons8-linkedin.svg";
import instagram_logo from "../../assets/imgs/icons8-instagram.svg";
import Logo_icon from "../../assets/imgs/HeaderImages/Techsyn_logo.png";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <footer className="relative  w-full pt-0 px-6 md:px-20 overflow-hidden h-[500px] ">
      <div className="absolute top-0 left-0 w-full h-full bg-transparent clip-triangle z-0 " />
      {/* Acima você define a cor de fundo do footer*/}

      <div className="relative z-10 flex flex-col md:flex-row justify-evenly items-center h-full">
        {/* Sessão 1 */}
        <div className="flex flex-col items-center max-w-xs gap-4">
          <img
            src={Logo_icon}
            alt="TechSyn Logo"
            className="w-[150px] h-auto"
          />
          <p className="text-[11px] text-[#5B5B5B] text-center">
            Plataforma que conecta apaixonados por tecnologia a eventos
            transformadores. Por meio de experiências gamificadas, acessíveis e
            com foco em networking, unimos empresas e talentos para impulsionar
            o futuro da inovação.
          </p>
          <p className="text-[11px] text-[#5B5B5B]">
            © 2025 TechSyn. Todos os direitos reservados
          </p>
          <div className="flex gap-2">
            <img
              src={linkedin_logo}
              alt="LinkedIn"
              className="w-[23px] h-auto filter invert"
            />
            <img
              src={instagram_logo}
              alt="Instagram"
              className="w-[23px] h-auto filter invert"
            />
          </div>
        </div>

        {/* Sessão 2 */}
        <div className="text_section flex gap-20">
          <div className="flex flex-col gap-3 mt-10 md:mt-0">
            <p className="font-semibold text-[#5B5B5B]">Techsyn</p>
            <div className="flex flex-col gap-1 text-[14px] text-[#5B5B5B]">
              <a href="/Legal">Legal</a>
              <a href="/Cookies">Cookies</a>
              <a href="/Segurancaeprivacidade">Segurança</a>
              <a href="/Politica">Privacidade</a>
              <a href="/Acessibilidade">Acessibilidade</a>
              <a href="/Sobreanuncio">Sobre anúncio</a>
            </div>
          </div>

          {/* Sessão 3 */}
          <div className="flex flex-col gap-3 mt-10 md:mt-0">
            <p className="font-semibold text-[#5B5B5B]">Contato</p>
            <div className="flex flex-col gap-1 text-[14px] text-[#5B5B5B]">
              <p>(11) 4002-8922</p>
              <p>techsyn@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
