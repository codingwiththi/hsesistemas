import { useState } from "react";
import AboutMe from "../components/AboutMe";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import DarkModeToggle from "../components/DarkMode";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import IndicacaoPremiada from "../components/IndicacaoPremiada";
import Navbar from "../components/Navbar";
import Resources from "../components/Resources";

export default function Home() {
  const [indicacaoOpen, setIndicacaoOpen] = useState(true);
  return (
    <>
      {indicacaoOpen && (
        <IndicacaoPremiada open={indicacaoOpen} setOpen={setIndicacaoOpen} />
      )}
      {/* <DarkModeToggle /> */}
      <div className="bg-gradient-to-br from-blue-100 via-[#89c4e0] to-[#1cb1da] dark:bg-gray-800 h-screen ">
        <Navbar />
        <HeroSection />
      </div>
      <div className="p-4  bg-blue-900 dark:bg-gray-800 ">
        <AboutMe />
      </div>
      <div className="p-4  dark:bg-gray-800 ">
        <Resources />
      </div>
      <Clients />
      <div className="p-4   dark:bg-gray-800 ">
        <Contact />
      </div>
      <div className="p-4  dark:bg-gray-800 ">
        <Footer />
      </div>
    </>
  );
}
