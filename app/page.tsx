import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import OffresSection from "@/components/OffresSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <OffresSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
