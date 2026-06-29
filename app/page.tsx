import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Impact from "@/components/Impact";
import Newsletter from "@/components/Newsletter";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="grain">
      <Cursor />
      <Navbar />
      <Hero />
      <StatsBar />
      <Mission />
      <Products />
      <Process />
      <Impact />
      <Newsletter />
      <CtaBanner />
      <Footer />
    </main>
  );
}
