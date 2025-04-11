import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Left Column - Logo, Description, Subscribe */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">mNivesh</h2>
            <p className="text-primary-foreground/80 mb-6">
              There are several insurance solutions available to address
              specific needs and risks that individuals or businesses may face.
              Best solution is here.
            </p>

            <div className="mb-6">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" className="w-full md:w-auto">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <p className="mb-2 font-medium">Follow us on</p>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-md hover:bg-primary-foreground/10"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-md hover:bg-primary-foreground/10"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-md hover:bg-primary-foreground/10"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-md hover:bg-primary-foreground/10"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-md hover:bg-primary-foreground/10"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Middle Columns - Products and Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Insurance Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Auto Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Business Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Property Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">ADDRESS:</p>
                <p className="text-primary-foreground/80">
                  Shop No-193 Ground Floor Pocket-7 Sector-2,Rohini
                  <br />
                  New Delhi-110085
                </p>
              </div>

              <div>
                <p className="font-semibold">DROP YOUR QUERIES:</p>
                <p className="text-primary-foreground/80">
                  amitbatra1987@gmail.com
                </p>
              </div>

              <div>
                <p className="font-semibold">CALL US:</p>
                <p className="text-primary-foreground/80">+91 9213636781</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} niveshonline.com. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
            Powered by mNivesh Insurance
          </p>
        </div>
      </div>
    </footer>
  );
}
