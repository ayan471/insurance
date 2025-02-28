"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "The home insurance policy I got has been a lifesaver. When we had water damage last year, the claims process was quick and hassle-free. I couldn't be happier with the service!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "As a small business owner, finding the right insurance was crucial. The team provided excellent guidance and found a policy that perfectly fits my business needs at a competitive rate.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Driver",
    content:
      "After my car accident, I was worried about the claims process. But their team made everything so simple. My claim was processed quickly, and I was back on the road in no time.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    name: "David Thompson",
    role: "Family Provider",
    content:
      "The life insurance policy I purchased has given me peace of mind knowing my family will be taken care of. The advisors were knowledgeable and helped me find the perfect coverage.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="w-full py-24 bg-[#f8fbff]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Don&apos;t just take our word for it. Hear from our satisfied
              customers about their experience with our insurance services.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`inline-block h-6 w-6 ${
                          i < testimonials[current].rating
                            ? "text-[#338fd6] fill-[#338fd6]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                </div>

                <p className="text-xl md:text-2xl italic mb-8">
                  &quot;{testimonials[current].content}&quot;
                </p>

                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                  />
                  <AvatarFallback>
                    {testimonials[current].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h4 className="text-lg font-semibold">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`w-3 h-3 p-0 rounded-full ${
                  current === index ? "bg-primary" : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
