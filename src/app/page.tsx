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
      <div className="bg-[#FAFAFA]  h-full  ">
        <Navbar />
        <Hero />
      </div>
      <div className="p-4  bg-[#FAFAFA]  ">
        <SystemSection />
      </div>

      <AboutMe />
      <StatsComponent />
      <Solutions />
      <div className="p-4  bg-[#FAFAFA]  ">
        {/* <Clients /> */}
        <Testimonials />
      </div>
      <div className="p-4  bg-[#FAFAFA]  ">{/* <Contact /> */}</div>
      <div className="p-4  bg-[#052F48]  ">
        <Footer />
      </div>
    </main>
  );
}
