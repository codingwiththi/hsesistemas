"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Background from "../../public/images/background.png";
import {
  AcademicCapIcon,
  UserGroupIcon,
  CursorArrowRippleIcon,
  CloudArrowUpIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <section id="aboutme">
      <div className="relative p-4  bg-[#fafafa] dark:bg-blue-950 z-0 overflow-clip">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14  z-10 mx-20">
          <div className="flex flex-col items-center justify-center  text-center">
            <h2 className="text-3xl  md:text-6xl  text-blue-950 mb-4">
              Aliados na busca pelo sucesso
            </h2>

            <p className="mt-3 text-blue-950 dark:text-blue-50">
              Com 8 anos de experiência, a HSE Sistemas é uma empresa líder em
              tecnologia e serviços de ponta. Oferecemos soluções adaptáveis
              para negócios de todos os setores, sempre buscando a melhoria
              contínua para atingir, juntos com nossos clientes, resultados
              expressivos e duradouros.
            </p>
            <div className="border-b-2 border-[#1cb1da] w-1/4 mt-8"></div>
            <div
              className="flex flex-col md:flex-row gap-4 mt-8"
              data-aos="zoom-y-out"
            >
              <Card
                icon={UserGroupIcon}
                title="Suporte assistido"
                description="Tenha ao seu lado uma equipe conectada e proativa para lhe ajudar a resolver seus problemas e vencer suas dificuldades."
              />
              <Card
                icon={CursorArrowRippleIcon}
                title="Customização"
                description="Softwares inovadores e customizáveis, para atender todas as legislações e necessidades do seu negócio."
              />
              <Card
                icon={MegaphoneIcon}
                title="Consultoria"
                description="Nossa consultoria na customização do seu software vai muito além do básico. Estaremos com você ao longo da sua evolução."
              />
              <Card
                icon={CloudArrowUpIcon}
                title="Backup na nuvem"
                description="Oferece segurança para os arquivos importantes do seu negócio, e além disso, você têm facilidade de acesso."
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="text-3xl  font-bold lg:text-4xl text-white">
              Conheça a HSE Sistemas - especialistas em tecnologia para negócios
            </h2>
            <p className="mt-3 text-gray-400">
              Com 8 anos de experiência, a HSE Sistemas é uma empresa líder em
              tecnologia e serviços de ponta. Oferecemos soluções adaptáveis
              para negócios de todos os setores, sempre buscando a melhoria
              contínua para atingir, juntos com nossos clientes, resultados
              expressivos e duradouros.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-500 hover:text-blue-200 cursor-pointer">
              Solicite um contato para saber mais
              <svg
                className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="flex-shrink-0 mt-2 h-6 w-6 text-white"
                width="16"
                height="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>

              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                  Nossa plataforma Controle-On
                </h3>
                <p className="mt-1 text-gray-400">
                  Especializamo-nos no desenvolvimento da plataforma
                  Controle-On, adaptada para a gestão de pequenas e médias
                  empresas de vários segmentos, como oficinas mecânicas, varejo
                  e distribuidoras. Com ela, ajudamos nossos clientes a
                  gerenciar de maneira eficiente diversas áreas de suas
                  empresas, possibilitando um melhor desempenho e crescimento.
                </p>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="flex-shrink-0 mt-2 h-6 w-6 text-white"
                width="16"
                height="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>

              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                  Equipe altamente capacitada
                </h3>
                <p className="mt-1 text-gray-400">
                  Contamos com uma equipe de colaboradores altamente capacitados
                  e comprometidos com a qualidade, inovação tecnológica e
                  sucesso dos nossos clientes. Por isso, consideramos ser uma
                  das empresas líderes no mercado de desenvolvimento de
                  software.
                </p>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="flex-shrink-0 mt-2 h-6 w-6 text-white"
                width="16"
                height="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                  Soluções adaptáveis
                </h3>
                <p className="mt-1 text-gray-400">
                  Nossas soluções são adaptáveis a diferentes necessidades,
                  proporcionando benefícios como economia de tempo e dinheiro,
                  além de ampliação moderna e simples da sua empresa. Escolha
                  HSE Sistemas e tenha acesso a tecnologias de ponta para
                  impulsionar o seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutMe;
