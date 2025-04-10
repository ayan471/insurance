"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Carousel content
const slides = [
  {
    title: "Protect What <span class='text-primary'>Matters Most</span>",
    description:
      "Comprehensive insurance solutions tailored to your needs. Get peace of mind knowing you're protected by industry experts.",
    image: "/jakub-zerdzicki-GQn9GnMkVQg-unsplash.jpg",
    benefits: [
      "Comprehensive Coverage",
      "24/7 Support",
      "Fast Claims Processing",
      "Competitive Rates",
    ],
    stats: {
      label: "Total Claims Paid",
      value: "$1B+",
      percentage: 80,
    },
    badge: {
      title: "Trusted Choice",
      subtitle: "Since 1998",
    },
  },
  {
    title: "Secure Your <span class='text-primary'>Family's Future</span>",
    description:
      "Life insurance plans designed to provide financial security for your loved ones when they need it most.",
    image: "/juliane-liebermann-O-RKu3Aqnsw-unsplash.jpg",
    benefits: [
      "Flexible Coverage Options",
      "Tax-Free Benefits",
      "Cash Value Growth",
      "Family Protection",
    ],
    stats: {
      label: "Families Protected",
      value: "250K+",
      percentage: 75,
    },
    badge: {
      title: "Top Rated",
      subtitle: "A+ Rating",
    },
  },
  {
    title: "Drive with <span class='text-primary'>Confidence</span>",
    description:
      "Auto insurance that goes beyond basic coverage. Enjoy the road knowing you're fully protected against the unexpected.",
    image: "/vlad-deep-mCqi3MljC4E-unsplash.jpg",
    benefits: [
      "Accident Forgiveness",
      "Roadside Assistance",
      "New Car Replacement",
      "Rental Coverage",
    ],
    stats: {
      label: "Claims Resolved",
      value: "98%",
      percentage: 90,
    },
    badge: {
      title: "Fast Service",
      subtitle: "15 Min Response",
    },
  },
];

const textVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

const imageVariants = {
  enter: {
    opacity: 0,
    scale: 0.9,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0);
      heroRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const currentContent = slides[currentSlide];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      <div
        ref={heroRef}
        className="container relative z-10 px-4 md:px-6 pt-20 pb-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content with Horizontal Animation */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm text-primary"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Trusted by 50,000+ customers
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                  dangerouslySetInnerHTML={{ __html: currentContent.title }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-muted-foreground max-w-[600px]"
                >
                  {currentContent.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="text-lg px-8">
                  <Link
                    href="https://niveshonline.themfbox.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </Link>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Link
                    href="https://niveshonline.themfbox.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-8 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  {currentContent.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Image Content with Fade Animation */}
          <div className="relative hidden lg:block">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={`image-${currentSlide}`}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <Image
                  src={currentContent.image || "/placeholder.svg"}
                  width={800}
                  height={600}
                  alt="Insurance Protection"
                  className="relative rounded-2xl shadow-2xl"
                />

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6 w-64"
                >
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      {currentContent.stats.label}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {currentContent.stats.value}
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${currentContent.stats.percentage}%` }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-4"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">
                        {currentContent.badge.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {currentContent.badge.subtitle}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <div className="text-sm text-muted-foreground">Scroll to explore</div>
        <div className="w-1 h-8 rounded-full bg-primary/20">
          <motion.div
            className="w-full h-1/2 bg-primary rounded-full"
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
