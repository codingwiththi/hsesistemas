import React from "react";
import Link from "next/link";
import Form from "@/components/form";
import Image from "next/image";
// import heroimg from "@/public/images/heroimg.png";
import heroimg from "../../public/images/heroimg.png";
import mockup2 from "../../public/images/mockup2.png";
import mockup3 from "../../public/images/mockup3.png";
import mockup4 from "../../public/images/mockup4.png";
import mockup5 from "../../public/images/mockup5.png";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <div className="mx-auto px-2 sm:px-6 lg:px-20 mt-8   ">
        {/* <!-- Grid --> */}
        <div className="flex flex-col sm:flex-row  lg:items-center bg-red-500">
          <div className="flex flex-col  items-center sm:items-start text-center sm:text-start sm:w-1/2 sm:pr-16">
            <h1 className="block text-4xl font-bold text-blue-950 dark:text-blue-50  md:text-5xl lg:text-7xl ">
              O Sistema perfeito para o seu sucesso
            </h1>
            <p className="mt-3 text-lg lg:text-2xl text-blue-950 dark:text-blue-50">
              Otimize os processos da sua empresa, integrando todos os setores,
              unificando a comunicação entre os departamentos e centralizando
              todas as informações em um único sistema
            </p>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 ">
              <Link
                href="aboutme"
                scroll
                className="relative px-6 py-3 overflow-hidden font-medium text-blue-600  bg-blue-100  border border-blue-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-500 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-500 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-500 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-500 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#1cb1da] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Saiba mais
                </span>
              </Link>
              {/* <a
              className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Solicitar contato
            </a> */}
            </div>
          </div>
          {/* <!-- End Col --> */}

          {/* <div className="hidden sm:flex flex-col    justify-center items-center   bg-gray-50 rounded-lg shadow-lg border border-[#1cb1da] w-1/3">
            <Form />
          </div> */}
          <div className=" flex sm:flex-col flex-row    justify-center items-center     sm:w-1/2">
            {/* <Image src={mockup2} alt="Picture of the author" height={600} /> */}
            {/* <Image src={mockup3} alt="Picture of the author" width={300} /> */}
            <Image src={mockup5} alt="Controle On" width={600} />
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
};

export default Hero;
