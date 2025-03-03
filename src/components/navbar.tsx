"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import Image from "next/image";

const navigation = [
  {
    name: "Mutual Funds",
    submenu: [
      { name: "Equity MF", href: "/equity-mutual-funds" },
      { name: "Debt MF", href: "/debt-mutual-funds" },
      { name: "Hybrid MF", href: "/hybrid-mutual-funds" },
    ],
  },
  {
    name: "FD and Bonds",
    submenu: [
      { name: "Fixed Deposit", href: "#" },
      { name: "Bonds", href: "https://mnivesh.aspero.in/sign-in" },
      { name: "Government", href: "#" },
      { name: "Corporate", href: "#" },
      { name: "Tax-Free", href: "#" },
    ],
  },
  {
    name: "Insurance",
    submenu: [
      { name: "Life Insurance", href: "/life-insurance" },
      { name: "Health Insurance", href: "/health-insurance" },
      { name: "Corporate Insurance", href: "/corporate-insurance" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 w-full ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      } transition-all duration-200`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-primary">
            {/* <Image src={"/logo1.png"} alt="Logo" width={120} height={120} /> */}
            <span>Insurance</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {subItem.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button variant="ghost" asChild>
              <Link
                href="https://wealthconsulting.themfbox.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </Link>
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("get-quote")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center space-x-2 text-primary">
                      <Shield className="h-6 w-6" />
                      <span className="text-xl font-bold">InsureGuard</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    {navigation.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2 pl-4">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="pt-4 space-y-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link
                        href="https://wealthconsulting.themfbox.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Login
                      </Link>
                    </Button>
                    <Button className="w-full">Get a Quote</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
