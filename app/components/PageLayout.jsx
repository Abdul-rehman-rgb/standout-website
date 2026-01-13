"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  return (
    <main className="bg-white text-black overflow-x-hidden min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        {children}
      </div>
      <Footer />
    </main>
  );
}

