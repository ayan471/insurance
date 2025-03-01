"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Building2,
  Ambulance,
  Award,
  Stethoscope,
  Hotel,
  Receipt,
  Users,
  User,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const benefits = [
  {
    title: "Cashless Treatment",
    description:
      "Get cashless treatments as your insurance company works in collaboration with various hospital networks.",
    icon: CreditCard,
  },
  {
    title: "Pre and Post Hospitalization",
    description:
      "Covers charges up to 60 days, depending on the insurance plans purchased.",
    icon: Building2,
  },
  {
    title: "Transportation Charges",
    description:
      "Covers ambulance charges towards the transportation of the insured.",
    icon: Ambulance,
  },
  {
    title: "No Claim Bonus (NCB)",
    description:
      "Bonus paid if no claim is filed for treatment in the previous year.",
    icon: Award,
  },
  {
    title: "Medical Checkup",
    description:
      "Options for health checkups, with free checkups based on NCBs.",
    icon: Stethoscope,
  },
  {
    title: "Room Rent",
    description: "Covers room expenses depending on the premium being paid.",
    icon: Hotel,
  },
  {
    title: "Tax Benefit",
    description:
      "Premium paid is tax deductible under section 80D of the Income Tax Act.",
    icon: Receipt,
  },
];

export default function HealthInsurancePage() {
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
              Health Insurance Plan
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl">
              Comprehensive coverage for medical and surgical expenses to
              protect you and your family.
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
                Health insurance is a type of insurance coverage wherein an
                insured can claim payments for medical and surgical expenses.
                It&apos;s crucial because medical care is expensive, especially
                in the private sector. Hospitalisation can significantly impact
                your finances, but this can be avoided by paying a small annual
                premium. A good policy typically covers doctor consultation
                fees, medical tests, ambulance charges, hospitalization costs,
                and post-hospitalization recovery costs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Benefits of Health Insurance
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Insurance Types Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Types of Health Insurance
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Individual Health Insurance</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-4">
                  Meant for a single person, covering hospitalization, surgical,
                  pre and post medication expenditures. Premium is based on age
                  and medical history.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Can cover spouse, children, and parents with extra premium
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>2-3 years waiting period for existing illnesses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Family Health Insurance</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-4">
                  Family Floater Plan secures your entire family under a single
                  cover with a single premium payment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Covers all family members including spouse, kids, and
                      elders
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Premium based on eldest member&apos;s age</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Discount applicable on premium</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Claim Process Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Health Insurance Claim Process
          </h2>
          <Tabs defaultValue="cashless" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cashless">Cashless Claim Process</TabsTrigger>
              <TabsTrigger value="reimbursement">
                Reimbursement Claim Process
              </TabsTrigger>
            </TabsList>
            <TabsContent value="cashless">
              <Card>
                <CardHeader>
                  <CardTitle>Cashless Claim Process</CardTitle>
                  <CardDescription>
                    A hassle-free process between hospital and insurance company
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <p>Provide health insurance details to the hospital</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <p>Receive treatment at the hospital</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <p>Hospital forwards bills to insurance company</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <p>
                        Insurance company audits and settles payment with
                        hospital
                      </p>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reimbursement">
              <Card>
                <CardHeader>
                  <CardTitle>Reimbursement Claim Process</CardTitle>
                  <CardDescription>
                    Process where insured pays first and claims later
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <p>Pay for treatment and hospitalization costs</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <p>Submit original bills to insurance company</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <p>Insurance company audits the claim</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <p>On approval, reimbursement is made to policyholder</p>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
