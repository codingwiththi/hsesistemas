import Image from "next/image";
import React from "react";
import Background from "../../public/images/background.png";
import {
  AcademicCapIcon,
  UserGroupIcon,
  CursorArrowRippleIcon,
  CloudArrowUpIcon,
  MegaphoneIcon,
  TruckIcon,
  WrenchIcon,
  ShoppingBagIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import Card from "./Card";
import CardSolutions from "./CardSolutions";

interface SolutionsProps {}

const Solutions: React.FC<SolutionsProps> = () => {
  return (
    <section id="solutions">
      <div className="relative p-4  bg-[#fafafa] dark:bg-blue-950">
        <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14  z-10 mx-20">
          <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-10 text-center">
            <h2 className="text-3xl  font-bold lg:text-4xl text-blue-950 dark:text-blue-50 ">
              A arte de transformar sonho em meta
            </h2>
            <div className="border-b-2 border-[#1cb1da] w-1/4"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <CardSolutions
                icon={TruckIcon}
                title="Distribuidoras"
                description="Controle suas mercadorias, organize seus clientes, e assessore seus vendedores."
                href="/distribuidoras"
              />
              <CardSolutions
                icon={WrenchIcon}
                title="Indústrias"
                description="Evolua no setor industrial com softwares que refletem a realidade da sua empresa."
                href="/industrias"
              />
              <CardSolutions
                icon={ShoppingBagIcon}
                title="Varejo"
                description="Ganhe mais inteligência comercial e controle todas as etapas do seu negócio."
                href="/varejo"
              />
              <CardSolutions
                icon={Cog8ToothIcon}
                title="Oficinas e Assitências"
                description="Potencialize sua marca com soluções que respeitam aspectos únicos de seus serviços."
                href="/servicos"
              />
              <CardSolutions
                icon={TruckIcon}
                title="Transporte"
                description="Ganhe tempo e rentabilidade otimizando suas logísticas com nossas ferramentas."
                href="/transporte"
              />
              <CardSolutions
                icon={TruckIcon}
                title="????"
                description="Ganhe tempo e rentabilidade otimizando suas logísticas com nossas ferramentas."
                href="/transporte"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
