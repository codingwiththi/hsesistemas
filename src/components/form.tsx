import React from "react";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  return (
    <form className="w-full px-8 py-6">
      <h1 className="block text-gray-700 font-bold mb-1 text-lg text-center">
        SOLICITE UMA PROPOSTA
      </h1>
      <h2 className="text-xs mb-2 text-gray-500">
        Nossos consultores estudarão a fundo suas necessidades e apresentarão as
        melhores soluções para a sua empresa.
      </h2>
      <div className="mb-3">
        <input
          className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Nome"
        />
      </div>
      <div className="mb-3">
        <input
          className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <input
          className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Empresa"
        />
      </div>
      <div className="mb-5">
        <input
          className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="tel"
          placeholder="Telefone"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-[#1cb1da] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Fale com um consultor
        </button>
      </div>
    </form>
  );
};

export default Form;
