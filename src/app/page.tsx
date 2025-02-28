import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import GetQuote from "@/components/get-quote";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />

      <Features />
      <Statistics />
      <Faq />
      <Testimonials />
      <GetQuote />
      <Contact />
      <Footer />
    </main>
  );
}
