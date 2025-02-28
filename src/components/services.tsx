"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Car,
  Heart,
  Briefcase,
  Shield,
  Umbrella,
  Building2,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Home Insurance",
    description: "Protect your home and belongings with comprehensive coverage",
    color: "#FF6B6B",
    features: [
      "Property damage protection",
      "Personal liability coverage",
      "Natural disaster protection",
      "Theft and vandalism coverage",
      "Additional living expenses",
    ],
    popular: false,
  },
  {
    icon: Car,
    title: "Auto Insurance",
    description:
      "Complete protection for your vehicles and peace of mind on the road",
    color: "#4ECDC4",
    features: [
      "Collision coverage",
      "Comprehensive protection",
      "Liability insurance",
      "24/7 roadside assistance",
      "Rental car coverage",
    ],
    popular: true,
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Quality healthcare coverage for you and your family",
    color: "#45B7D1",
    features: [
      "Medical coverage",
      "Prescription drug benefits",
      "Preventive care",
      "Specialist consultations",
      "Emergency services",
    ],
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "Comprehensive coverage solutions for your business needs",
    color: "#96C93D",
    features: [
      "Property protection",
      "Liability coverage",
      "Workers compensation",
      "Business interruption",
      "Cyber liability",
    ],
    popular: false,
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Secure your family's future with reliable life coverage",
    color: "#9B5DE5",
    features: [
      "Term life insurance",
      "Whole life coverage",
      "Death benefit protection",
      "Cash value accumulation",
      "Flexible premium options",
    ],
    popular: false,
  },
  {
    icon: Building2,
    title: "Property Insurance",
    description:
      "Protect your investments with comprehensive property coverage",
    color: "#F15BB5",
    features: [
      "Building coverage",
      "Contents protection",
      "Liability insurance",
      "Loss of rent coverage",
      "Natural disaster protection",
    ],
    popular: false,
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Travel with confidence knowing you're protected worldwide",
    color: "#FEE440",
    features: [
      "Trip cancellation",
      "Medical emergencies",
      "Lost baggage coverage",
      "Flight delay protection",
      "24/7 travel assistance",
    ],
    popular: false,
  },
  {
    icon: Umbrella,
    title: "Umbrella Insurance",
    description: "Additional liability coverage for complete peace of mind",
    color: "#00BBF9",
    features: [
      "Extended liability coverage",
      "Asset protection",
      "Legal defense coverage",
      "Worldwide protection",
      "Family coverage",
    ],
    popular: false,
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm text-primary">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Discover our range of insurance products designed to protect what
              matters most to you
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06]"
                  style={{
                    backgroundImage: `radial-gradient(${service.color} 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor: `${service.color}10`,
                      color: service.color,
                    }}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <AnimatePresence>
                    {hoveredService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pt-4"
                      >
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mr-2"
                                style={{ backgroundColor: service.color }}
                              />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button
                      className="w-full group/button relative overflow-hidden"
                      style={{
                        backgroundColor:
                          hoveredService === index ? service.color : undefined,
                        color: hoveredService === index ? "white" : undefined,
                      }}
                    >
                      Learn More
                      <motion.div
                        className="absolute inset-0 bg-black/10"
                        initial={{ x: "100%" }}
                        animate={{
                          x: hoveredService === index ? "0%" : "100%",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </div>
                </div>

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Popular
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which insurance is right for you?
          </p>
          <Button size="lg" variant="outline">
            Compare All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
