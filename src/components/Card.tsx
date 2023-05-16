import { FC } from "react";

interface CardProps {
  icon: any;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6">
      <Icon className="h-16 w-16 text-blue-500 mb-4 " />
      <h2 className="font-bold text-lg mb-2 border-b-2 border-blue-500">
        {title}
      </h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Card;
