import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function ContatoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />

      {children}
      <div className="p-4  bg-[#052F48]  ">
        <Footer />
      </div>
    </section>
  );
}
