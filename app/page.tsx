import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Team from "./components/Team";
import HeroParallaxSection from "./components/HeroParallaxSection";
import SuccessStories from "./components/SuccessStories";

export default function Home() {
  return (
    <main className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Services />
      <Team />
      <HeroParallaxSection />
      <SuccessStories />
      <Footer />
    </main>
  );
}
