"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Heart, Building, CreditCard } from "lucide-react";
import Link from "next/link";

// Define the 6 services from the screenshot
const services = [
  {
    icon: Shield,
    title: "NPS",
    subtitle: "National Pension System",
    description:
      "The National Pension System (NPS) is a government-sponsored retirement savings scheme in India. It allows individuals to contribute towards their retirement, offering tax benefits, corporate bonds, and government securities.",
    image: "/victoria-prymak-Nau80sZlnTY-unsplash.jpg",
    color: "#4ECDC4",
  },
  {
    icon: Heart,
    title: "Life Insurance",
    subtitle: "Secure Your Family's Future",
    description:
      "At Wealth Consulting, we prioritize your financial security and peace of mind by offering comprehensive life insurance solutions tailored to your unique needs.",
    image: "/name_-gravity-_AdUs32i0jc-unsplash.jpg",
    color: "#FF6B6B",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    subtitle: "Protect What Matters Most",
    description:
      "At Wealth Consulting, we understand the importance of protecting your health and well-being. We offer expert guidance in selecting the right health insurance plans that provide comprehensive coverage for medical expenses.",
    image: "/nappy-J5UTvRgse7Q-unsplash.jpg",
    color: "#45B7D1",
  },
  {
    icon: TrendingUp,
    title: "Mutual Fund",
    subtitle: "Grow Your Wealth",
    description:
      "Our mutual fund services provide diversified investment opportunities managed by financial experts. Invest in a portfolio of stocks, bonds, and securities to achieve your long-term financial goals.",
    image: "/austin-distel-EMPZ7yRZoGw-unsplash.jpg",
    color: "#96C93D",
  },
  {
    icon: Building,
    title: "General Insurance",
    subtitle: "Comprehensive Protection",
    description:
      "Our general insurance solutions cover a wide range of assets and liabilities, including property, vehicles, travel, and more. Get comprehensive protection against unexpected events and damages.",
    image: "/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg",
    color: "#9B5DE5",
  },
  {
    icon: CreditCard,
    title: "Loan Against Securities",
    subtitle: "Leverage Your Investments",
    description:
      "Get quick access to funds by leveraging your existing investments. Our loan against securities service offers competitive interest rates and flexible repayment options without disrupting your investment portfolio.",
    image: "/sandra-gabriel-xvR-_12QXsU-unsplash.jpg",
    color: "#F15BB5",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-24 bg-gradient-to-b from-white to-primary/5 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm text-primary">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Discover our range of financial products and services designed to
            secure your future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Service Card */}
              <div className="h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: activeService === index ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0 opacity-80"
                      style={{
                        background: `linear-gradient(to bottom right, ${service.color}CC, ${service.color}99)`,
                      }}
                    />
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  >
                    <service.icon
                      className="h-6 w-6"
                      style={{ color: service.color }}
                    />
                  </motion.div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/90">{service.subtitle}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {service.description}
                  </p>
                </div>

                {/* Animated Border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeService === index ? 1 : 0 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${service.color}50 50%, transparent 100%)`,
                    backgroundSize: "200% 100%",
                    animation:
                      activeService === index ? "shine 1.5s infinite" : "none",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 space-y-4"
        >
          <p className="text-lg text-muted-foreground">
            Need personalized advice on which service is right for you?
          </p>
          <Button size="lg" className="px-8">
            <Link
              href="https://niveshonline.themfbox.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* CSS for animated border */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
}
