import AboutMe from "@/components/about";
import Hero from "@/components/hero";
import SystemSection from "@/components/SystemSection";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/testimonials";
import StatsComponent from "@/components/stats";

export default function Home() {
  return (
    <main>
      <div className="bg-[#FAFAFA] dark:bg-blue-950 h-full  ">
        <Navbar />
        <Hero />
      </div>
      <div className="p-4  bg-[#FAFAFA] dark:bg-blue-950 ">
        <SystemSection />
      </div>

      <AboutMe />
      <StatsComponent />
      <Solutions />
      <div className="p-4  bg-[#FAFAFA] dark:bg-blue-950 ">
        {/* <Clients /> */}
        <Testimonials />
      </div>
      <div className="p-4  bg-[#FAFAFA] dark:bg-blue-950 ">
        {/* <Contact /> */}
      </div>
      <div className="p-4  bg-[#052F48] dark:bg-blue-950 ">
        <Footer />
      </div>
    </main>
  );
}
