"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Users,
  Building,
  Award,
  ThumbsUp,
  Briefcase,
  Clock,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const statistics = [
  {
    icon: Users,
    value: "50,000+",
    label: "Satisfied Customers",
    description: "Trusted by thousands of individuals and families",
  },
  {
    icon: Building,
    value: "100+",
    label: "Office Locations",
    description: "Serving communities across the country",
  },
  {
    icon: Award,
    value: "25+",
    label: "Years of Excellence",
    description: "Providing reliable insurance solutions since 1998",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Customer Satisfaction",
    description: "Consistently high customer satisfaction ratings",
  },
  {
    icon: Briefcase,
    value: "10,000+",
    label: "Business Clients",
    description: "Supporting businesses of all sizes",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Customer Support",
    description: "Round-the-clock assistance when you need it",
  },
  {
    icon: Shield,
    value: "$1B+",
    label: "Claims Paid",
    description: "Successfully processed and paid claims",
  },
  {
    icon: TrendingUp,
    value: "15%",
    label: "Annual Growth",
    description: "Consistent year-over-year growth",
  },
];

function CountUpAnimation({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  // Only animate numbers, not text values like "24/7"
  const numericValue = Number.parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(numericValue);
  const prefix = value.match(/^\D+/)?.[0] || "";
  const suffix = value.match(/\D+$/)?.[0] || "";

  useEffect(() => {
    if (isInView && isNumeric) {
      controls.start({
        opacity: 1,
        transform: "none",
        transition: {
          duration: 2,
          ease: "easeOut",
        },
      });
    }
  }, [isInView, controls, isNumeric]);

  if (!isNumeric) {
    return <span className="text-4xl font-bold text-primary">{value}</span>;
  }

  return (
    <span ref={ref} className="text-4xl font-bold text-primary">
      {prefix}
      {isInView ? numericValue.toLocaleString() : "0"}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section id="statistics" className="w-full py-24 bg-[#f8fbff]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Discover how we've made a difference in the lives of our customers
              and communities through our commitment to excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CountUpAnimation value={stat.value} />
                  <h3 className="text-xl font-semibold text-foreground">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            Growing Together
          </div>
          <p className="mt-4 text-lg text-muted-foreground max-w-[600px] mx-auto">
            These numbers represent more than just statistics – they represent
            trust, reliability, and our commitment to protecting what matters
            most to you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
