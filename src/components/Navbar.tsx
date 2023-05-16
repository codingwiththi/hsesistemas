import Image from "next/image";
import logo from "../../public/images/logohse.png";
import Link from "next/link";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-3 sm:py-0 ">
        <nav
          className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex items-center sm:justify-between justify-center ">
            <Image
              src={logo}
              alt="HSE Sistemas"
              width={200}
              height={200}
              className="py-4"
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Link
              href={"#home"}
              className="text-lg text-white font-semibold hover:border-b-2 border-white"
            >
              Inicio
            </Link>
            <Link
              href={"#about"}
              className="text-lg text-white font-semibold hover:border-b-2 border-white"
            >
              Sobre nós
            </Link>
            <Link
              href={"#solutions"}
              className="text-lg text-white font-semibold hover:border-b-2 border-white"
            >
              Soluções
            </Link>
            <Link
              href={"#suport"}
              className="text-lg text-white font-semibold hover:border-b-2 border-white"
            >
              Suporte
            </Link>
            <Link
              href={"#pricing"}
              className="text-lg text-white font-semibold  bg-indigo-600 px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-500"
            >
              Solicite um orçamento
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
