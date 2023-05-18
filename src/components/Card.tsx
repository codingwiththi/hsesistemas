import { FC } from "react";

interface CardProps {
  icon: any;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg py-6 px-4 text-center hover:shadow-2xl">
      <div className="flex flex-row w-full   justify-center items-center">
        <Icon className="h-16 w-16 text-blue-950 b-4 " />
      </div>
      <h2 className="font-bold text-lg mb-2 border-b-2 border-blue-500  ">
        {title}
      </h2>
      <div className="h-full  ">
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
