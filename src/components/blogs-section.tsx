"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample blog data - replace with your actual data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Auto Insurance: Coverage Options Explained",
    excerpt:
      "Learn about the different types of auto insurance coverage and how to choose the right policy for your needs.",
    category: "Auto Insurance",
    author: "Rahul Sharma",
    date: "April 2, 2025",
    readTime: "5 min read",
    image: "/blog.avif",
    featured: true,
  },
  {
    id: 2,
    title: "How to Choose the Right Health Insurance Plan for Your Family",
    excerpt:
      "Selecting the right health insurance plan can be overwhelming. Here's a guide to help you make the best choice.",
    category: "Health Insurance",
    author: "Priya Patel",
    date: "March 28, 2025",
    readTime: "7 min read",
    image: "/Health-insurance-770x433.avif",
    featured: false,
  },
  {
    id: 3,
    title: "5 Common Mistakes to Avoid When Filing an Insurance Claim",
    excerpt:
      "Filing an insurance claim can be stressful. Avoid these common mistakes to ensure a smooth claims process.",
    category: "Claims",
    author: "Vikram Mehta",
    date: "March 25, 2025",
    readTime: "4 min read",
    image: "/Health-Insurance-Plan.webp",
    featured: false,
  },
  {
    id: 4,
    title:
      "The Ultimate Guide to Life Insurance: Protecting Your Family's Future",
    excerpt:
      "Life insurance is a crucial part of financial planning. Learn how to secure your family's financial future.",
    category: "Life Insurance",
    author: "Ananya Singh",
    date: "March 20, 2025",
    readTime: "8 min read",
    image: "/businessman-show-insurance-policy-260nw-704917522.webp",
    featured: false,
  },
];

const categories = [
  "All",
  "Auto Insurance",
  "Health Insurance",
  "Life Insurance",
  "Home Insurance",
  "Business Insurance",
  "Claims",
];

export default function BlogsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(
        blogPosts.filter((post) => post.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-3">
            Insurance Insights
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our Latest <span className="text-primary">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-[800px] md:text-lg">
            Stay informed with the latest insights, tips, and news from the
            insurance industry. Our experts share valuable information to help
            you make better insurance decisions.
          </p>
        </motion.div>

        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-1">
              <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-background">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary hover:bg-primary/90">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    Featured Post
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="w-fit group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <Tabs defaultValue="All" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={selectedCategory} className="mt-0">
            <motion.div
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <motion.div
                    key={post.id}
                    variants={item}
                    whileHover={{ y: -5 }}
                    className="h-full"
                  >
                    <Card className="h-full overflow-hidden border-muted/30 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-primary hover:bg-primary/90">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="p-5 pb-0">
                        <h3 className="text-xl font-bold line-clamp-2 mb-2">
                          {post.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="p-5 pt-3">
                        <p className="text-muted-foreground line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-5 pt-0">
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-primary font-medium inline-flex items-center group"
                        >
                          Read More
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Button variant="outline" size="lg" className="group">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
