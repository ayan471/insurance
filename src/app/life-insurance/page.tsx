"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Lightbulb,
  GraduationCap,
  Wallet,
  PiggyBank,
  LineChart,
  Baby,
  Clock,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const insuranceTypes = [
  {
    name: "Term Life Insurance",
    description: "All eventual risks are covered under this policy.",
    icon: Shield,
  },
  {
    name: "Whole Life Insurance",
    description: "This policy provides life insurance cover till 100 years.",
    icon: Heart,
  },
  {
    name: "Endowment Life Insurance Policy",
    description: "This policy combines savings with life insurance coverage.",
    icon: PiggyBank,
  },
  {
    name: "Money Back Insurance Policy",
    description:
      "This policy provides periodic returns combined with life insurance coverage.",
    icon: Wallet,
  },
  {
    name: "Retirement Insurance Plans",
    description: "This plan helps create a corpus for retirement.",
    icon: Clock,
  },
  {
    name: "ULIP Life Insurance Plans",
    description: "This is a market-linked insurance cum investment plan.",
    icon: LineChart,
  },
  {
    name: "Child Insurance Policy",
    description:
      "This plan aims to provide financial support for a child's future needs alongside life insurance coverage.",
    icon: Baby,
  },
];

const benefits = [
  {
    title: "Financial security",
    description:
      "The money paid to the insured's family after the unfortunate death compensates for financial losses or covers certain financial obligations.",
    icon: Shield,
  },
  {
    title: "Security of child's education",
    description:
      "Certain child benefit policies help accumulate money with regular cashback to cover expenses for your child's education at various stages of life.",
    icon: GraduationCap,
  },
  {
    title: "Removes loan burden",
    description:
      "Life insurance payouts can help repay loans, ensuring the family doesn't face stress in arranging funds.",
    icon: Wallet,
  },
  {
    title: "Enjoy tax benefits",
    description:
      "Life Insurance premiums offer yearly tax deductions up to Rs. 1.5 lakhs under Sec 80C.",
    icon: PiggyBank,
  },
];

export default function LifeInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm text-primary">
              Insurance
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Life Insurance
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl">
              Securing your family&apos;s future with comprehensive life
              insurance coverage.
            </p>
          </div>
        </div>
      </section>

      {/* What is Life Insurance Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  What does life insurance mean?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  Life Insurance is a promise or legal binding between the
                  policyholder and the insurer, based on the payment of a
                  certain amount at regular intervals. It covers death—natural
                  or accidental—and provides monetary compensation to the
                  beneficiaries. Various riders can be added for critical
                  illness or other benefits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  What is the significance?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  Life Insurance is not only a contract but also a promise and
                  trust between parties. It provides financial support to
                  families in the event of untimely demise, ensuring stability
                  during uncertain times. The aspect of financial compensation
                  cannot be ignored to ensure survival.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Why do you need life insurance?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600">
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Insurance Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Types of Life Insurance
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insuranceTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{type.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600">
                    <p>{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Line Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Bottom Line
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p className="text-lg">
                Life is the most precious gift for all living beings. To ensure
                safety, one must look at the bigger picture and always say
                &quot;YES&quot; to saving it. But since life is also equally
                uncertain, insuring it becomes a necessity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
