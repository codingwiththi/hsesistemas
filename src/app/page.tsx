import Navbar from "@/components/navbar";
import AboutMe from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-br from-blue-100 via-[#89c4e0] to-[#1cb1da] dark:bg-gray-800 h-screen ">
        <Navbar />
        <Hero />
      </div>
      <div className="p-4  bg-blue-900 dark:bg-gray-800 ">
        <AboutMe />
      </div>
    </main>
  );
}
