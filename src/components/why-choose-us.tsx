"use client";

import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, Users } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description:
      "Our policies provide extensive protection against a wide range of risks and uncertainties.",
  },
  {
    icon: Clock,
    title: "Fast Claims Processing",
    description:
      "We process claims quickly and efficiently, ensuring you receive the support you need when you need it most.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description:
      "We offer affordable premiums without compromising on the quality of coverage or service.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Our dedicated team provides personalized attention to address your unique insurance needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full py-24 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Why Choose Our Insurance
            </h2>
            <p className="text-xl text-muted-foreground">
              We stand out from the competition with our commitment to
              excellence, customer satisfaction, and innovative insurance
              solutions.
            </p>

            <div className="space-y-6 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/thankyouimage.jpg"
                width={800}
                height={600}
                alt="Insurance experts helping a client"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-2xl font-bold">
                    Trusted by thousands of families and businesses
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">20+</p>
              <p>Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
