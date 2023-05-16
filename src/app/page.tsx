import Navbar from "@/components/navbar";
import AboutMe from "@/components/about";
import Hero from "@/components/hero";
import SystemSection from "@/components/SystemSection";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-br from-blue-100 via-[#89c4e0] to-[#1cb1da] dark:bg-gray-800 h-screen ">
        <Navbar />
        <Hero />
      </div>
      <div className="p-4  bg-[#FAFAFA] dark:bg-gray-800 ">
        <SystemSection />
      </div>

      <AboutMe />
      <div className="p-4  bg-[#FAFAFA] dark:bg-gray-800 ">
        <Clients />
      </div>
      <div className="p-4  bg-[#FAFAFA] dark:bg-gray-800 ">
        <Contact />
      </div>
      <div className="p-4  bg-[#052F48] dark:bg-gray-800 ">
        <Footer />
      </div>
    </main>
  );
}
