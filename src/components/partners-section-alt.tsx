"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Partner logos
const partners = [
  {
    name: "Axis Mutual Fund",
    logo: "/t1.jpg",
    description: "One of India's fastest-growing asset management companies",
  },
  {
    name: "Baroda BNP Paribas Mutual Fund",
    logo: "/t2.jpg",
    description:
      "A joint venture between Bank of Baroda and BNP Paribas Asset Management",
  },
  {
    name: "DSP Mutual Fund",
    logo: "/t3.jpg",
    description:
      "Over 25 years of investment excellence and trusted by millions",
  },
  {
    name: "HDFC Mutual Fund",
    logo: "/t4.jpg",
    description: "One of India's largest asset management companies",
  },
  {
    name: "HSBC Global Asset Management",
    logo: "/t5.jpg",
    description: "Global expertise with local market insights",
  },
  {
    name: "Nippon India Mutual Fund",
    logo: "/t6.jpg",
    description:
      "One of India's largest asset managers with a strong retail focus",
  },
  {
    name: "UTI Mutual Fund",
    logo: "/t7.jpg",
    description: "India's oldest and most trusted mutual fund house",
  },
  {
    name: "SBI Funds Management Ltd.",
    logo: "/t8.jpg",
    description: "Backed by India's largest bank with extensive reach",
  },
  {
    name: "Kotak Mutual Fund",
    logo: "/t9.jpg",
    description:
      "Innovative investment solutions with a focus on risk management",
  },
  {
    name: "Union Mutual Fund",
    logo: "/t10.jpg",
    description: "Committed to creating long-term wealth for investors",
  },
  {
    name: "Mirae Asset Mutual Fund",
    logo: "/t11.jpg",
    description:
      "Global investment expertise with a strong focus on emerging markets",
  },
  {
    name: "L&T Financial Services Mutual Fund",
    logo: "/t12.jpg",
    description:
      "Backed by the engineering conglomerate with diversified offerings",
  },
];

export default function PartnersCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-white to-primary/5"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        className="absolute -top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={
          isInView ? { scale: [0.9, 1.1, 1], opacity: [0.5, 0.8, 0.6] } : {}
        }
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={
          isInView ? { scale: [1, 1.2, 0.9], opacity: [0.6, 0.8, 0.5] } : {}
        }
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm text-primary">
            Our Network
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Associated With
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We collaborate with industry-leading financial institutions to bring
            you the best investment opportunities
          </p>
        </motion.div>

        <div className="relative">
          {/* Highlighted partner info */}
          <AnimatePresence>
            {hoveredPartner !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-20 left-0 right-0 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary/10 mb-8 max-w-2xl mx-auto"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={partners[hoveredPartner].logo || "/placeholder.svg"}
                      alt={partners[hoveredPartner].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">
                      {partners[hoveredPartner].name}
                    </h3>
                    <p className="text-muted-foreground">
                      {partners[hoveredPartner].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Partner logos in a hexagonal grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
                onHoverStart={() => setHoveredPartner(index)}
                onHoverEnd={() => setHoveredPartner(null)}
                className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center h-28 transition-all duration-300 border border-gray-100 hover:border-primary/20"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  transform: "rotate(0deg)",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
