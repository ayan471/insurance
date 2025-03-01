"use client";

import { motion } from "framer-motion";
import {
  Info,
  Settings,
  Target,
  BarChart3,
  TrendingUp,
  Scale,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HybridFundsPage() {
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
              Hybrid Mutual Funds
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl">
              A perfect blend of equity and debt investments designed to meet
              diverse investment objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Cards */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  What are Hybrid Funds?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  Hybrid funds combine equity and debt investments, designed to
                  meet specific investment objectives through different asset
                  allocation strategies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  How do they work?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  Fund managers create balanced portfolios offering regular
                  income and long-term capital appreciation by allocating funds
                  between equity and debt instruments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Who should invest?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  Ideal for low-risk investors seeking better returns than debt
                  funds and new investors testing equity markets with debt
                  stability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Hybrid Funds */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Types of Hybrid Funds
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Equity-oriented Hybrid Funds",
                description:
                  "Invests at least 65% in equity and equity-related instruments, with remaining in debt securities.",
                icon: BarChart3,
              },
              {
                title: "Debt-oriented Hybrid Funds",
                description:
                  "Invests minimum 60% in fixed-income securities, with remaining in equity investments.",
                icon: TrendingUp,
              },
              {
                title: "Balanced Funds",
                description:
                  "Minimum 65% in equity instruments with rest in debt securities and cash.",
                icon: Scale,
              },
              {
                title: "Monthly Income Plans",
                description:
                  "Debt-oriented funds providing fixed monthly returns with minimal equity exposure.",
                icon: Calendar,
              },
              {
                title: "Arbitrage Funds",
                description:
                  "Exploit price differences between markets, with debt investments during low opportunities.",
                icon: DollarSign,
              },
            ].map((fund, index) => (
              <motion.div
                key={fund.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <fund.icon className="h-5 w-5 text-primary" />
                      {fund.title}
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

      {/* Investment Factors */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Investment Considerations
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Risk-Return Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Analyze portfolio allocation carefully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Understand stock composition (large-cap vs small/mid-cap)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Evaluate expected returns based on portfolio</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Choosing the Right Fund
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Consider risk tolerance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Align with financial goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Match investment horizon</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Tax Liability
          </h2>
          <Tabs defaultValue="equity" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="equity">Equity Component</TabsTrigger>
              <TabsTrigger value="debt">Debt Component</TabsTrigger>
            </TabsList>
            <TabsContent value="equity">
              <Card>
                <CardHeader>
                  <CardTitle>Equity Component Taxation</CardTitle>
                  <CardDescription>Taxed like equity funds</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">
                      Long-term Capital Gains (LTCG)
                    </h4>
                    <p className="text-gray-600">
                      Gains exceeding ₹1 lakh are taxed at 10% without
                      indexation
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">
                      Short-term Capital Gains (STCG)
                    </h4>
                    <p className="text-gray-600">Taxed at 15%</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="debt">
              <Card>
                <CardHeader>
                  <CardTitle>Debt Component Taxation</CardTitle>
                  <CardDescription>Taxed like pure debt funds</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Long-term Capital Gains</h4>
                    <p className="text-gray-600">
                      20% after indexation or 10% without indexation benefits
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Regular Taxation</h4>
                    <p className="text-gray-600">
                      Added to income and taxed as per applicable income tax
                      slab
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
