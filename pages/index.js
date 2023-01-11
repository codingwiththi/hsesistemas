import { useState } from "react";
import DarkModeToggle from "../components/DarkMode";
import HeroSection from "../components/HeroSection";
import IndicacaoPremiada from "../components/IndicacaoPremiada";
import Navbar from "../components/Navbar";

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
    </>
  );
}
