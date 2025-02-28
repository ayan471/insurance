"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  MessageSquare,
  Calculator,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Assess Your Needs",
    description:
      "We help you identify your insurance requirements based on your specific situation.",
  },
  {
    icon: MessageSquare,
    title: "Consult with Experts",
    description:
      "Our insurance specialists provide personalized advice and recommendations.",
  },
  {
    icon: Calculator,
    title: "Get a Custom Quote",
    description:
      "Receive a tailored insurance quote that fits your budget and coverage needs.",
  },
  {
    icon: CheckCircle,
    title: "Secure Your Policy",
    description:
      "Complete the simple application process and get your policy activated quickly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Our streamlined process makes getting the right insurance coverage
              simple and hassle-free.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center z-10 relative">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary animate-ping opacity-20" />
                    <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30" />
                  </div>
                </div>

                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
