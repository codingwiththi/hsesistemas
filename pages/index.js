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
      <DarkModeToggle />
      <Navbar />
      <div className="px-4 h-screen dark:bg-gray-800 ">
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
