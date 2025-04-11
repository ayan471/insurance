"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  About <span className="text-primary">Nivesh</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                >
                  We are dedicated to helping individuals and businesses achieve
                  their financial goals with confidence.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            >
              <Image
                src="/businessman-show-insurance-policy-260nw-704917522.webp"
                width={800}
                height={550}
                alt="About Nivesh"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-8 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Our Story
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Founded in 2010, Nivesh has grown from a small financial advisory
              firm to a comprehensive investment platform serving thousands of
              clients across India. Our journey has been driven by a simple
              mission: to make quality financial services accessible to
              everyone.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              {
                year: "2010",
                title: "Founded",
                description:
                  "Nivesh was established with a vision to democratize financial services.",
              },
              {
                year: "2015",
                title: "Digital Transformation",
                description:
                  "Launched our first online platform to reach more clients across India.",
              },
              {
                year: "2023",
                title: "Expansion",
                description:
                  "Expanded our services to include comprehensive wealth management solutions.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center space-y-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">
                    {milestone.year}
                  </span>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Join thousands of satisfied clients who have trusted Nivesh with
              their financial future.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="https://niveshonline.themfbox.com/signup">
                  Get Started
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
