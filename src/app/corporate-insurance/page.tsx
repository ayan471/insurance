"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Shield,
  HardHat,
  Factory,
  PauseCircle,
  Ship,
  AlertTriangle,
  Heart,
  ShipWheelIcon as Wheelchair,
  Clock,
  DollarSign,
  Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const insuranceTypes = [
  {
    title: "Group Health Insurance",
    description:
      "Offers coverage to a group of members, usually employees or organization members. Premium is paid by the organization.",
    icon: Users,
  },
  {
    title: "Property Insurance",
    description:
      "Covers loss of property due to earthquake, fire, and other perils like storm, flood, riot, strike, and malicious damage.",
    icon: Building2,
  },
  {
    title: "Professional Liability Insurance",
    description:
      "Protects business from negligence or mistakes. Essential for finance, accounting, consultancy, healthcare, and law industries.",
    icon: Shield,
  },
  {
    title: "Workmen Compensation Insurance",
    description:
      "Covers medical treatment expenses and provides repayment to workers in conditions of death or disability during working hours.",
    icon: HardHat,
  },
  {
    title: "Product Liability Insurance",
    description:
      "Caters to manufacturing units, covering losses against product manufacturing defects.",
    icon: Factory,
  },
  {
    title: "Business Interruption Insurance",
    description:
      "Covers losses against interruptions happening in business due to various unavoidable reasons.",
    icon: PauseCircle,
  },
  {
    title: "Marine Insurance",
    description:
      "Protects against loss/damage to ships and cargo during transportation to domestic or international destinations.",
    icon: Ship,
  },
];

const accidentBenefits = [
  {
    title: "Accidental Death",
    description:
      "100% of the sum insured on accidental death of the insured person",
    icon: AlertTriangle,
  },
  {
    title: "Permanent Total Disability",
    description:
      "100% payment for total disablement or loss of two limbs/eyes; 50% for loss of one limb/eye",
    icon: Wheelchair,
  },
  {
    title: "Permanent Partial Disability",
    description:
      "Specified percentage of the sum insured for permanent partial disability",
    icon: Heart,
  },
  {
    title: "Temporary Total Disability",
    description:
      "1% of capital sum insured per week (max ₹5,000/week, up to 100 weeks)",
    icon: Clock,
  },
];

export default function CorporateInsurancePage() {
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
              Corporate Insurance
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl">
              Comprehensive protection for your business, employees, and assets.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 leading-relaxed">
                Once a business is incorporated, it faces numerous risks that
                can potentially impact its operations. Even before hiring the
                first employee or setting up an office, businesses are exposed
                to various risks where one small mistake can cause significant
                damage. Fortunately, there are insurance options available to
                protect yourself, your business, employees, and customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insurance Types Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Types of Corporate Insurance
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insuranceTypes.map((insurance, index) => (
              <motion.div
                key={insurance.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <insurance.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{insurance.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600">
                    <p>{insurance.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Personal Accident Insurance Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Group Personal Accident Insurance Benefits
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {accidentBenefits.map((benefit, index) => (
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

      {/* Additional Coverage Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Additional Coverage Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Carriage of Mortal Remains
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  A lump sum of 2% of capital insured will be paid for
                  transportation in the event of accidental death outside the
                  residence (subject to maximum of ₹2,500).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Medical Expenses Extension
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <ul className="space-y-2">
                  <li>
                    Policy can be extended to cover medical expenses with extra
                    premium
                  </li>
                  <li>
                    Benefit up to 40% of compensation paid in settlement or 20%
                    of relevant sum insured, whichever is less
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <Card>
            <CardHeader>
              <CardTitle>Why Corporate Insurance Matters</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>
                Corporate Insurance is reliable and essential for any business
                entity, regardless of size. It provides comprehensive protection
                against various risks and ensures business continuity in
                challenging times.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
