import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Features from "@/components/features";
import GetQuote from "@/components/get-quote";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Magazines from "@/components/magazines";
import Services from "@/components/services";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Features />
      <Statistics />
      <Faq />
      <Testimonials />
      <Magazines />
      <GetQuote />
      <Contact />
    </main>
  );
}
