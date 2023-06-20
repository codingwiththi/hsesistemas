import React from "react";

interface StatProps {
  label: string;
  value: string;
}

const Stat: React.FC<StatProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-4xl font-bold text-center">{value}</h2>
        {/* <p className="text-4xl font-bold">{value}</p> */}
        <p className="text-blue-50">{label}</p>
      </div>
    </div>
  );
};

const StatsComponent: React.FC = () => {
  return (
    <section className=" bg-blue-950  text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center  text-center">
          <h2 className="text-6xl mb-4">Experiência em diferentes setores</h2>
          <p className="text-xl text-blue-50" data-aos="zoom-y-out">
            Com ampla expertise em várias áreas, podemos oferecer soluções
            confiáveis e eficientes para os desafios específicos de cada setor.
          </p>
          <div className="lg:w-1/4 border-b-2 border-[#1cb1da] mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Stat label="Transactions every 24 hours" value={"44 million"} />
          <Stat label="Assets under holding" value={"$119 trillion"} />
          <Stat label="New users annually" value={"46,000"} />
          {/* <Stat label="Receita" value={98} /> */}
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;
