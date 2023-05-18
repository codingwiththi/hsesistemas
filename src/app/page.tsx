import AboutMe from "@/components/about";
import Hero from "@/components/hero";
import SystemSection from "@/components/SystemSection";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <main>
      <div className="bg-[#FAFAFA] dark:bg-gray-800 h-full  ">
        <Navbar />
        <Hero />
      </div>
      <div className="p-4  bg-[#FAFAFA] dark:bg-gray-800 ">
        <SystemSection />
      </div>

      <AboutMe />
      <Solutions />
      <div className="p-4  bg-[#FAFAFA] dark:bg-gray-800 ">
        <Clients />
      </div>
      <div className="p-4  bg-[#FAFAFA] dark:bg-gray-800 ">
        {/* <Contact /> */}
      </div>
      <div className="p-4  bg-[#052F48] dark:bg-gray-800 ">
        <Footer />
      </div>
    </main>
  );
}
