import React from "react";
import Link from "next/link";
import Form from "@/components/form";
import Image from "next/image";
// import heroimg from "@/public/images/heroimg.png";
import heroimg from "../../public/images/heroimg.png";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <div className="max-w-[85rem] mx-auto p-4 sm:p-6  lg:px-10  ">
        {/* <!-- Grid --> */}
        <div className="flex flex-row  lg:items-center ">
          <div className="flex flex-col  items-center sm:items-start text-center sm:text-start sm:w-2/3 sm:pr-32">
            <h1 className="block text-lg font-bold text-gray-800 sm:text-xl md:text-5xl lg:text-6xl ">
              Impulsione seu negócio com a solução de gestão mais eficiente e
              inovadora
            </h1>
            <p className="mt-3 text-lg lg:text-2xl text-gray-800 ">
              Eleve-se ao topo com ousadia, uma equipe excepcional e tecnologias
              de ponta
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
          <div className="hidden sm:flex flex-col    justify-center items-center     w-1/3">
            <Image src={heroimg} alt="Picture of the author" width={450} />
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
