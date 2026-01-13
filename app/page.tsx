import PageLayout from "./components/PageLayout";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Services from "./components/Services";
import Team from "./components/Team";
import HeroParallaxSection from "./components/HeroParallaxSection";
import SuccessStories from "./components/SuccessStories";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Works />
      <Services />
      <Team />
      <HeroParallaxSection />
      <SuccessStories />
    </PageLayout>
  );
}
