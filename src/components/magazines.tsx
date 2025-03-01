"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const magazines = [
  {
    title: "NVESTER",
    cover: "/magazine002.png",
    description: "Navigating 2025",
    pdfLink:
      "https://xqy1ign4np.ufs.sh/f/gpRmcRqPoOulzyLSlVk4oaGClreMzTPbpfujhZtUIOcxmVB0",
    date: "December 2024",
  },
  {
    title: "NVESTER",
    cover: "/magazine001.png",
    description: "Retirement Planning Made Easy",
    pdfLink:
      "https://xqy1ign4np.ufs.sh/f/gpRmcRqPoOulP11RdcueCDIoZbdvkAiO9KcGL4JmfzRl10xa",
    date: "September 2024",
  },
  //   {
  //     title: "Insurance Guide",
  //     cover: "/placeholder.svg?height=400&width=300",
  //     description: "Complete guide to insurance products and policies",
  //     pdfLink: "https://example.com/magazine3.pdf",
  //     date: "February 2024",
  //   },
  //   {
  //     title: "Investment Outlook",
  //     cover: "/placeholder.svg?height=400&width=300",
  //     description: "Market analysis and investment opportunities",
  //     pdfLink: "https://example.com/magazine4.pdf",
  //     date: "March 2024",
  //   },
];

export default function Magazines() {
  return (
    <section id="magazines" className="w-full py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm text-primary">
              Publications
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Magazines
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Stay informed with our latest publications covering finance,
              insurance, and investment insights.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {magazines.map((magazine, index) => (
            <motion.div
              key={magazine.description}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={magazine.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img
                          src={magazine.cover || "/placeholder.svg"}
                          alt={magazine.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-primary mb-2">
                          {magazine.date}
                        </p>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {magazine.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {magazine.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
            >
              View All Magazines
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
