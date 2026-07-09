import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/WhyChooseUs";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Process from "@/components/sections/Process";
import Packages from "@/components/sections/Packages";
import SuccessStories from "@/components/sections/SuccessStories";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <WhoWeHelp />
      <Process />
      <Packages />
      <SuccessStories />
      <Contact />
      <Footer />
    </main>
  );
}
