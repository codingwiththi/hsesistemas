import Image from "next/image";
import React from "react";
import Mockup from "../../public/images/mockup.png";
import Mockup6 from "../../public/images/mockup6.png";

interface SystemSectionProps {}

const SystemSection: React.FC<SystemSectionProps> = () => {
  return (
    <section id="aboutme">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-[#FAFAFA] dark:bg-blue-950">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="lg:w-3/4">
            <h2 className="text-3xl  font-bold lg:text-4xl text-blue-950 dark:text-blue-50 ">
              O sistema perfeito Para o seu sucesso!
            </h2>
            <div className="lg:w-1/4 border-b-2 border-[#1cb1da] mt-8"></div>
            <p className="mt-8 text-blue-950 dark:text-blue-50">
              O ControleON é um software de gestão que incorpora todos os
              setores de uma empresa, centralizando todas as informações em um
              único sistema. Além disso, unifica a comunicação entre os
              departamentos que fazem sua empresa funcionar, como por exemplo:
              administrativo, gerencial e financeiro. Um software de gestão
              ideal para o seu negócio, vai permitir que você otimize seus
              processos e ainda auxiliar nas suas tomadas de decisões.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-[#1cb1da] hover:text-blue-200 cursor-pointer">
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
            <Image src={Mockup6} alt="Mockup" width={800} />
            {/* <!-- End Icon Block --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </section>
  );
};

export default SystemSection;
