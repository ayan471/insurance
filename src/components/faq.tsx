"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "What types of insurance do you offer?",
    answer:
      "We offer a wide range of insurance products including home, auto, health, life, business, and property insurance. Our experts can help you find the right coverage for your specific needs.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "Filing a claim is easy. You can submit a claim through our mobile app, website, or by calling our 24/7 claims hotline. Our claims team will guide you through the process and ensure a smooth experience.",
  },
  {
    question: "Can I customize my insurance policy?",
    answer:
      "Yes, we offer flexible policies that can be tailored to your specific needs. Our insurance specialists will work with you to create a customized policy that provides the right coverage at the right price.",
  },
  {
    question: "Are there discounts available for multiple policies?",
    answer:
      "Yes, we offer multi-policy discounts when you bundle different types of insurance with us. This can result in significant savings on your premiums while ensuring comprehensive coverage.",
  },
  {
    question: "How quickly can I get coverage?",
    answer:
      "In many cases, we can provide immediate coverage. The exact timeframe depends on the type of insurance and your specific situation. Our team works efficiently to get you covered as quickly as possible.",
  },
  {
    question: "What factors affect my insurance premium?",
    answer:
      "Insurance premiums are determined by various factors including your coverage needs, deductible amount, location, claim history, and risk factors specific to the type of insurance. Our experts can explain how these factors impact your premium.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Find answers to common questions about our insurance services and
              policies.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions? Contact our support team for assistance.
          </p>
          <Button className="mt-4">
            <Link
              href="https://niveshonline.themfbox.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Support
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
