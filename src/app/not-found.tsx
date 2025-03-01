"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Compass, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  {
    title: "Insurance Services",
    href: "/#services",
    icon: Shield,
  },
  {
    title: "Get a Quote",
    href: "/#get-quote",
    icon: Compass,
  },
  {
    title: "Contact Us",
    href: "/#contact",
    icon: Search,
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Navigation */}
      <header className="w-full px-4 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center space-x-2 text-primary">
          <Shield className="h-6 w-6" />
          <span className="font-bold">InsureGuard</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl mx-auto text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Text */}
              <div className="select-none pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
                <span className="text-[20rem] font-bold">404</span>
              </div>

              {/* Content */}
              <div className="relative z-10 py-16 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8"
                >
                  <Compass className="w-12 h-12 text-primary" />
                </motion.div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                  Page not found
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
                  Sorry, we couldn&apos;t find the page you&apos;re looking for.
                  But don&apos;t worry, you can find plenty of other things on
                  our homepage.
                </p>

                {/* Quick Links */}
                <div className="grid gap-4 md:grid-cols-3 mb-8">
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="group p-4 bg-white rounded-lg shadow-sm border flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:shadow-md hover:scale-105"
                      >
                        <link.icon className="w-6 h-6 text-primary" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {link.title}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/">
                      <Home className="w-4 h-4" />
                      Back to Homepage
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link href="/#contact">
                      <ArrowLeft className="w-4 h-4" />
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-grid-black/[0.02]"
            />
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: i * 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
                style={{
                  background: `radial-gradient(circle, ${
                    i === 0
                      ? "rgba(51, 143, 214, 0.1)"
                      : "rgba(51, 143, 214, 0.05)"
                  } 0%, transparent 70%)`,
                  transform: `translate(-50%, -50%) scale(${1 + i * 0.2})`,
                }}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 py-6 text-center border-t">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} InsureGuard. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
