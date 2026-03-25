import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Ending from "@/components/Ending";
import ThankYou from "@/components/ThankYou";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Ending />
      <ThankYou />
      <Footer />
    </main>
  );
};

export default Index;
