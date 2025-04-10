"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Users, Lightbulb, BookOpen, Award } from "lucide-react";

// Updated statistics based on the provided image
const statistics = [
  {
    icon: Users,
    value: "1232",
    label: "Clients",
    color: "#4ECDC4",
  },
  {
    icon: Lightbulb,
    value: "64",
    label: "Investment Strategies",
    color: "#FF6B6B",
  },
  {
    icon: BookOpen,
    value: "42",
    label: "Financial Workshops",
    color: "#9B5DE5",
  },
  {
    icon: Award,
    value: "24",
    label: "Expert Advisors",
    color: "#45B7D1",
  },
];

function CountUpAnimation({ value, color }: { value: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  // Only animate numbers, not text values
  const numericValue = Number.parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(numericValue);
  const prefix = value.match(/^\D+/)?.[0] || "";
  const suffix = value.match(/\D+$/)?.[0] || "";

  useEffect(() => {
    if (isInView && isNumeric) {
      controls.start({
        opacity: 1,
        transform: "none",
        transition: {
          duration: 2,
          ease: "easeOut",
        },
      });
    }
  }, [isInView, controls, isNumeric]);

  return (
    <span
      ref={ref}
      className="text-5xl md:text-6xl lg:text-7xl font-bold"
      style={{ color }}
    >
      {prefix}
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from(numericValue.toString()).map((digit, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
            >
              {digit}
            </motion.span>
          ))}
        </motion.span>
      ) : (
        "0"
      )}
      {suffix}
    </span>
  );
}

export default function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, white, #f8fbff)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Our track record of success is reflected in these key metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center space-y-4">
                {/* Animated background circle */}
                <motion.div
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ backgroundColor: `${stat.color}10` }}
                  initial={{ width: 0, height: 0 }}
                  animate={
                    isInView
                      ? { width: 180, height: 180, opacity: [0, 1, 0.7] }
                      : {}
                  }
                  transition={{ duration: 1, delay: index * 0.2 }}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + index * 0.1,
                  }}
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon
                    className="h-8 w-8"
                    style={{ color: stat.color }}
                  />
                </motion.div>

                {/* Counter */}
                <div className="space-y-2">
                  <CountUpAnimation value={stat.value} color={stat.color} />
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-lg font-medium text-muted-foreground"
                  >
                    {stat.label}
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-primary/10">
            <p className="text-lg text-muted-foreground">
              These numbers represent our commitment to excellence and the trust
              our clients place in us. Every number has a story of success
              behind it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
