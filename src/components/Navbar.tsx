import Image from "next/image";
import logo from "../../public/images/logohse.png";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-3 sm:py-0 ">
        <nav
          className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
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
        </nav>
      </header>
    </>
  );
};

export default Navbar;
