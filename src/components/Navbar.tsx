"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/images/logohse.png";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Sobre nós", href: "/sobre" },
  { name: "Soluções", href: "/solucoes" },
  { name: "Suporte", href: "/suporte" },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <Disclosure
      as="nav"
      className={` w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white fixed backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      {({ open }) => (
        <>
          <div
            className={`${
              !top
                ? "mx-auto max-w-7xl p-1 md:p-2 lg:p-3"
                : "mx-auto max-w-7xl p-2 md:p-4 lg:p-6"
            }`}
          >
            <div className="relative flex  h-full items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    src={logo}
                    alt="HSE Sistemas"
                    width={200}
                    height={200}
                    className={`${!top ? "hidden" : "block  lg:hidden"}`}
                  />
                  <Image
                    src={logo}
                    alt="HSE Sistemas"
                    width={200}
                    height={200}
                    className={`${!top ? "hidden" : "hidden  lg:block "}`}
                  />
                  <Image
                    src={logo}
                    alt="HSE Sistemas"
                    width={150}
                    height={150}
                    className={`${!top ? "" : "hidden"}`}
                  />
                </div>
              </div>
              <div className="hidden md:ml-6 md:block">
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

          <Disclosure.Panel className="md:hidden">
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
