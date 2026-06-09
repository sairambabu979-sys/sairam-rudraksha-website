import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Collection } from "@/components/site/Collection";
import { Authenticity } from "@/components/site/Authenticity";
import { MukhiGuide } from "@/components/site/MukhiGuide";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Collection />
        <Authenticity />
        <MukhiGuide />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
