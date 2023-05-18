// import Image from "next/image";
// import logo from "../../public/images/logohse.png";
// import Link from "next/link";

// interface NavbarProps {}

// const Navbar: React.FC<NavbarProps> = () => {
//   return (
//     <>
//       <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-3 sm:py-0 ">
//         <nav
//           className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 "
//           aria-label="Global"
//         >
//           <div className="flex items-center sm:justify-between justify-center ">
//             <Image
//               src={logo}
//               alt="HSE Sistemas"
//               width={200}
//               height={200}
//               className="py-4"
//             />
//           </div>
//           <div className="flex flex-row gap-4 items-center">
//             <Link
//               href={"#home"}
//               className="text-lg text-blue-950 font-semibold hover:border-b-2 border-white"
//             >
//               Inicio
//             </Link>
//             <Link
//               href={"#about"}
//               className="text-lg text-blue-950 font-semibold hover:border-b-2 border-white"
//             >
//               Sobre nós
//             </Link>
//             <Link
//               href={"#solutions"}
//               className="text-lg text-blue-950 font-semibold hover:border-b-2 border-white"
//             >
//               Soluções
//             </Link>
//             <Link
//               href={"#suport"}
//               className="text-lg text-blue-950 font-semibold hover:border-b-2 border-white"
//             >
//               Suporte
//             </Link>
//             <Link
//               href={"/contato"}
//               className="text-lg text-white font-semibold  bg-[#1cb1da] px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500"
//             >
//               Solicite um orçamento
//             </Link>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;
"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/images/logohse.png";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre nós", href: "/sobre" },
  { name: "Soluções", href: "/solucoes" },
  { name: "Suporte", href: "/suporte" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#fafafa]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-32 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-950 hover:bg-blue-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    src={logo}
                    alt="HSE Sistemas"
                    width={200}
                    height={200}
                    className="block  lg:hidden"
                  />
                  <Image
                    src={logo}
                    alt="HSE Sistemas"
                    width={200}
                    height={200}
                    className="hidden  lg:block"
                  />
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex flex-row justify-center items-center space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={
                        "text-blue-950 hover:bg-blue-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Link
                    href={"/contato"}
                    className="text-lg text-white font-semibold  bg-[#1cb1da] px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500"
                  >
                    Solicite um orçamento
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col gap-4 space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-blue-950 text-white"
                      : "text-blue-950 hover:bg-blue-950 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Link
                href={"/contato"}
                className="text-lg text-white font-semibold  bg-[#1cb1da] px-4 py-2 mt-8 rounded-lg shadow-lg hover:bg-blue-500"
              >
                Solicite um orçamento
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
