"use client";

import { motion, useInView } from "framer-motion";
import { Globe, Shield, Smartphone, Zap } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function AppPromoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const appFeatures = [
    {
      icon: Zap,
      title: "Fast Transactions",
      description: "Invest in seconds with our streamlined process",
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Seamlessly switch between app and website",
    },
    {
      icon: Shield,
      title: "Secure & Protected",
      description: "Bank-level security for your investments",
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full py-24 relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-primary/10"
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

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Mobile App
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
              >
                MULTI ASSET <span className="text-primary">INVESTMENT APP</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground"
              >
                Access anywhere, anytime. Transact seamlessly, switching between
                our app and website. Download the APP now.
              </motion.p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=in.mymfbox&pli=1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M3 11h18" />
                  <path d="M19 16v6" />
                  <path d="M22 19l-3-3-3 3" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.a>
              <motion.a
                href="https://apps.apple.com/sg/app/themfbox/id1594370380"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.a>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            ></motion.div>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Phone frame */}
            <motion.div
              initial={{ y: 20 }}
              animate={isInView ? { y: [20, -20, 0] } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="relative z-10"
            >
              <div className="relative w-[280px] md:w-[320px]">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  width={300}
                  height={600}
                  alt="Investment App Mockup"
                  className="rounded-[36px] shadow-2xl"
                />

                {/* App UI overlay */}
                <div className="absolute inset-0 rounded-[36px] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-primary flex items-center justify-center">
                    <span className="text-white font-medium">DASHBOARD</span>
                  </div>

                  <div className="absolute top-12 left-0 right-0 bottom-0 bg-white p-4">
                    {/* Investment categories */}
                    {["Mutual Fund", "Stocks", "Insurance", "Fixed Income"].map(
                      (category, index) => (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + index * 0.1,
                          }}
                          className="mb-4 bg-gray-50 rounded-lg p-3 flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <div
                              className="w-8 h-8 rounded-full mr-3 flex items-center justify-center"
                              style={{
                                backgroundColor:
                                  index === 0
                                    ? "#FFD700"
                                    : index === 1
                                    ? "#4CAF50"
                                    : index === 2
                                    ? "#2196F3"
                                    : "#FF9800",
                              }}
                            >
                              {index === 0
                                ? "💰"
                                : index === 1
                                ? "📈"
                                : index === 2
                                ? "🛡️"
                                : "💵"}
                            </div>
                            <div>
                              <div className="text-xs font-medium">
                                {category}
                              </div>
                              <div className="text-xs text-gray-500">
                                Current Value
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold">
                            ₹{(Math.random() * 100000 + 10000).toFixed(0)}
                          </div>
                        </motion.div>
                      )
                    )}

                    {/* Start button */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="absolute bottom-4 right-4"
                    >
                      <button className="bg-primary text-white px-6 py-2 rounded-full font-medium">
                        Start
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-1/4 -left-8 w-16 h-16 bg-yellow-400/30 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-1/4 -right-8 w-20 h-20 bg-primary/30 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-1/2 right-12 w-8 h-8 bg-green-400/40 rounded-full blur-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
