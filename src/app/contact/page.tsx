"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Have questions about our services? Our team is here to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out to us through any of these channels for assistance.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    details: [
                      "Shop No-193 Ground Floor Pocket-7 Sector-2",
                      "Rohini, New Delhi-110085",
                      "India",
                    ],
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    details: ["+91 9213636781"],
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    details: ["amitbatra1987@gmail.com"],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <div className="mt-1 space-y-1">
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sign Up CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl border bg-card p-6 shadow-sm flex flex-col justify-center"
            >
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
                  <p className="text-muted-foreground">
                    Create an account to access our full range of investment
                    services and start your financial journey today.
                  </p>
                </div>

                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>

                <div className="space-y-4 pt-4">
                  <Button size="lg" className="w-full text-base py-6" asChild>
                    <Link href="https://niveshonline.themfbox.com/signup">
                      Sign Up Now
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-base"
                    asChild
                  >
                    <Link href="https://niveshonline.themfbox.com/login">
                      Already have an account? Log In
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
    </main>
  );
}
