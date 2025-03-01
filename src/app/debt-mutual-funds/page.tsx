"use client";
import { motion } from "framer-motion";
import {
  Clock,
  Info,
  HelpCircle,
  Target,
  Calendar,
  Building2,
  Landmark,
  AlertCircle,
  BarChart,
  Timer,
  ArrowUpDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const debtFundTypes = [
  {
    name: "Overnight Fund",
    description:
      "Invests in debt securities having a maturity of 1 day. Extremely safe with negligible credit and interest rate risk.",
    icon: Clock,
  },
  {
    name: "Ultra Short Duration Fund",
    description:
      "Invests in money market instruments and debt securities with Macaulay Duration between 3-6 months.",
    icon: Timer,
  },
  {
    name: "Liquid Fund",
    description:
      "Invests in money market instruments with 91 days maturity period. Offers better returns than bank accounts.",
    icon: BarChart,
  },
  {
    name: "Money Market Fund",
    description:
      "Invests in money market instruments with 1-year maturity period. Suitable for lower-risk short-term investments.",
    icon: Building2,
  },
  {
    name: "Dynamic Bond Fund",
    description:
      "Invests in debt instruments of varying maturity periods based on interest cost system. For 3-5 year investment horizon.",
    icon: ArrowUpDown,
  },
  {
    name: "Corporate Bond Fund",
    description:
      "Invests 80% in high-rated corporate securities. Suitable for lower risk investors.",
    icon: Building2,
  },
  {
    name: "Banking and PSU Fund",
    description: "Invests 80% in debt securities of PSUs and banks.",
    icon: Landmark,
  },
  {
    name: "Gilt Fund",
    description:
      "Invests 80% in government securities across varying maturities. Carries sovereign rating with no credit risk.",
    icon: Landmark,
  },
  {
    name: "Credit Risk Fund",
    description:
      "Invests 65% in lower-rated corporate securities. Offers higher returns with higher risk.",
    icon: AlertCircle,
  },
  {
    name: "Floater Fund",
    description:
      "Invests in instruments with variable interest rates. Interest payments fluctuate with underlying rate level.",
    icon: ArrowUpDown,
  },
];

export default function DebtFundsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm text-primary">
              Mutual Funds
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Debt Mutual Funds
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
              A significant business market where individuals invest to make
              returns on their hard-earned money through various debt
              instruments.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  How do Debt Funds work?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  Each debt security has a credit rating that allows investors
                  to comprehend the debt guarantor&apos;s chance of default in
                  dispensing the principal and interest. Debt fund managers
                  utilize appraisals across the cross-section of information to
                  choose excellent debt instruments. A higher rating suggests
                  that the guarantor is less inclined to default.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Do Debt Funds invest in lower-quality debt instruments?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  Yes. Asset managers select securities dependent on different
                  factors. At times, picking lower-quality debt security offers
                  a chance to gain more significant returns. The returns are
                  proportional to prevailing interest rates, and managers choose
                  securities to optimize fund returns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Invest Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Who should invest in Debt Mutual Funds?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>For Conservative Investors</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Ideal for investors with lower risk tolerance, offering
                relatively stable returns through diversified securities.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Short-term Investors</CardTitle>
                <CardDescription>(3 months - 1 year)</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                Perfect alternative to standard bank accounts, offering better
                returns through liquid funds without compromising liquidity.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medium-term Investors</CardTitle>
                <CardDescription>(3-5 years)</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                Suitable for those seeking low-risk instruments with potentially
                better returns than fixed deposits.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Debt Funds Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Types of Debt Funds
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {debtFundTypes.map((fund, index) => (
              <motion.div
                key={fund.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <fund.icon className="h-5 w-5 text-primary" />
                      {fund.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600">
                    <p>{fund.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration Based Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Duration Based Categories
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="low">
              <AccordionTrigger>Low Duration Fund</AccordionTrigger>
              <AccordionContent>
                Invests in money market instruments and debt securities with
                Macaulay duration between six months to one year.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="short">
              <AccordionTrigger>Short Duration Fund</AccordionTrigger>
              <AccordionContent>
                Invests in money market instruments and debt securities with
                Macaulay duration between one to three years.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="medium">
              <AccordionTrigger>Medium Duration Fund</AccordionTrigger>
              <AccordionContent>
                Invests in money market instruments and debt securities with
                Macaulay duration between three to four years.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
