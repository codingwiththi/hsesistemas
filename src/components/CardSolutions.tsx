import Link from "next/link";
import { FC } from "react";

interface CardSolutionsProps {
  icon: any;
  title: string;
  description: string;
  href: string;
}

const CardSolutions: FC<CardSolutionsProps> = ({
  icon: Icon,
  title,
  description,
  href,
}) => {
  return (
    <div className="flex flex-col items-center justify-center   py-6 px-4 text-center gap-4 ">
      <div className="flex flex-row w-full   justify-center items-center">
        <Icon className="h-11 w-11 text-blue-950 dark:text-blue-50 b-4 " />
      </div>
      <h2 className="font-bold text-lg mb-2 border-b-2 border-blue-500 dark:text-blue-50 ">
        {title}
      </h2>
      <div className="h-full  ">
        <p className="text-gray-600 text-center dark:text-blue-100">
          {description}
        </p>
      </div>
      <Link
        href={href}
        className="px-4 py-2 bg-[#1cb1da] rounded-md shadow-md text-white font-semibold hover:bg-blue-950"
      >
        Conhecer Soluções
      </Link>
    </div>
  );
};

export default CardSolutions;
