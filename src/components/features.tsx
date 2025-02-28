"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Smartphone,
  HeartHandshake,
  PiggyBank,
  Users,
  BadgeCheck,
  Headphones,
  Zap,
  Umbrella,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const features = [
  {
    category: "Digital Solutions",
    color: "#4ECDC4",
    items: [
      {
        icon: Smartphone,
        title: "Smart Digital Platform",
        description:
          "Manage your insurance on-the-go with our intuitive mobile app and web platform.",
        benefits: [
          "24/7 policy access",
          "Digital document storage",
          "Real-time updates",
          "Instant support chat",
        ],
      },
      {
        icon: Zap,
        title: "Quick Processing",
        description:
          "Experience lightning-fast claim processing and instant policy issuance.",
        benefits: [
          "5-minute sign-up",
          "Instant policy generation",
          "Fast claim settlement",
          "Automated verification",
        ],
      },
    ],
  },
  {
    category: "Protection",
    color: "#FF6B6B",
    items: [
      {
        icon: Shield,
        title: "Complete Coverage",
        description:
          "Comprehensive protection against all types of risks and uncertainties.",
        benefits: [
          "All-risk coverage",
          "Global protection",
          "No hidden exclusions",
          "Flexible limits",
        ],
      },
      {
        icon: Umbrella,
        title: "Extended Security",
        description:
          "Additional layer of protection for complete peace of mind.",
        benefits: [
          "Liability coverage",
          "Asset protection",
          "Legal defense",
          "Emergency support",
        ],
      },
    ],
  },
  {
    category: "Support",
    color: "#9B5DE5",
    items: [
      {
        icon: HeartHandshake,
        title: "24/7 Assistance",
        description:
          "Round-the-clock support from our dedicated team of insurance experts.",
        benefits: [
          "Always available",
          "Expert guidance",
          "Multiple channels",
          "Priority service",
        ],
      },
      {
        icon: Headphones,
        title: "Personal Advisory",
        description:
          "Get personalized insurance advice tailored to your specific needs.",
        benefits: [
          "Custom solutions",
          "Regular reviews",
          "Risk assessment",
          "Portfolio analysis",
        ],
      },
    ],
  },
  {
    category: "Benefits",
    color: "#96C93D",
    items: [
      {
        icon: PiggyBank,
        title: "Smart Savings",
        description:
          "Maximize your savings with our innovative rewards and discount programs.",
        benefits: [
          "Loyalty rewards",
          "Multi-policy discounts",
          "No-claim bonus",
          "Referral benefits",
        ],
      },
      {
        icon: Users,
        title: "Family Plans",
        description: "Special packages designed to protect your entire family.",
        benefits: [
          "Group coverage",
          "Family discounts",
          "Child protection",
          "Elder care benefits",
        ],
      },
    ],
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-primary/5 blur-3xl -z-10" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-primary/5 blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="inline-flex items-center justify-center space-x-2">
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-primary font-medium">Features</span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Innovative Insurance Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Discover how our features make insurance simple, accessible, and
              tailored to your needs
            </p>
          </motion.div>
        </div>

        <div className="grid gap-12">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((feature, featureIndex) => {
                    const index = categoryIndex * 2 + featureIndex;
                    return (
                      <motion.div
                        key={feature.title}
                        className="group relative"
                        onHoverStart={() => setActiveFeature(index)}
                        onHoverEnd={() => setActiveFeature(null)}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className={cn(
                            "relative p-8 h-full rounded-2xl transition-all duration-300",
                            activeFeature === index
                              ? "bg-gradient-to-br from-white to-primary/10"
                              : "bg-white hover:shadow-lg"
                          )}
                        >
                          {/* Background Pattern */}
                          <div
                            className="absolute inset-0 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06]"
                            style={{
                              backgroundImage: `radial-gradient(${category.color} 1px, transparent 1px)`,
                              backgroundSize: "24px 24px",
                            }}
                          />

                          <div className="relative space-y-6">
                            {/* Icon */}
                            <div
                              className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300"
                              style={{
                                backgroundColor: `${category.color}15`,
                                color: category.color,
                              }}
                            >
                              <feature.icon className="w-7 h-7" />
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                              <h4 className="text-xl font-semibold">
                                {feature.title}
                              </h4>
                              <p className="text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>

                            {/* Benefits */}
                            <ul className="grid grid-cols-2 gap-3">
                              {feature.benefits.map((benefit, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <BadgeCheck
                                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                                    style={{ color: category.color }}
                                  />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Action Button */}
                            <Button
                              className="w-full group/button relative overflow-hidden"
                              style={{
                                backgroundColor:
                                  activeFeature === index
                                    ? category.color
                                    : undefined,
                                color:
                                  activeFeature === index ? "white" : undefined,
                              }}
                            >
                              Learn More
                              <motion.div
                                className="absolute inset-0 bg-black/10"
                                initial={{ x: "100%" }}
                                animate={{
                                  x: activeFeature === index ? "0%" : "100%",
                                }}
                                transition={{ duration: 0.3 }}
                              />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
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
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center space-y-4">
            <p className="text-muted-foreground">
              Want to learn more about our features?
            </p>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
