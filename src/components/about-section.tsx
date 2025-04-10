"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Expert Financial Guidance",
    description:
      "Our advisors provide personalized strategies to help you achieve your financial goals.",
    icon: TrendingUp,
  },
  {
    title: "Comprehensive Services",
    description:
      "From insurance to investments, we offer a full suite of financial solutions.",
    icon: Shield,
  },
  {
    title: "Long-Term Focus",
    description:
      "We build lasting relationships and strategies designed for your future success.",
    icon: Clock,
  },
  {
    title: "Transparent and Ethical",
    description:
      "We operate with complete transparency and the highest ethical standards.",
    icon: Users,
  },
  {
    title: "Cutting-Edge Solutions",
    description:
      "Innovative approaches and technology to maximize your financial potential.",
    icon: Zap,
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-primary/5">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70" />

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary"
              >
                About Us
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                Protecting Your Future with{" "}
                <span className="text-primary">Expert Guidance</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                At Nivesh, we are dedicated to helping individuals and
                businesses achieve their financial goals with confidence. We
                specialize in offering expert insurance and investment advisory
                services tailored to your unique needs. With years of experience
                and a client-first approach, we guide you every step of the way
                to secure a prosperous financial future.
              </motion.p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300"
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Interactive visual */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white to-primary/10 p-1 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 rounded-2xl" />

              {/* Main image */}
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/scott-graham-5fNmWej4tAA-unsplash.jpg"
                  width={800}
                  height={600}
                  alt="Financial Growth"
                  className="w-full h-auto object-cover"
                />

                {/* Floating elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-4 w-full h-full">
                    {[
                      "FUNDS",
                      "GROWTH",
                      "SECURITY",
                      "PLANNING",
                      "FUTURE",
                      "WEALTH",
                    ].map((word, index) => (
                      <motion.div
                        key={word}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: [0, 1, 0.7] } : {}}
                        transition={{
                          duration: 2,
                          delay: 0.5 + index * 0.2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          repeatDelay: index * 0.5,
                        }}
                        className="flex items-center justify-center"
                      >
                        <div
                          className={`
                          ${
                            index === 1
                              ? "bg-primary text-white scale-125"
                              : "bg-white/80 text-gray-800"
                          } 
                          backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg text-sm md:text-base font-medium
                        `}
                        >
                          {word}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated finger touch effect */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-4 right-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Trusted Expertise</span>
                </motion.div>
              </div>
            </div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 md:p-6"
            >
              <div className="flex items-center space-x-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </p>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="h-2 w-36 bg-primary/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "98%" } : {}}
                      transition={{ duration: 1, delay: 1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
