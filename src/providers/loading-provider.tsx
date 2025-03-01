"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "@/components/loading-screen";
import { AnimatePresence } from "framer-motion";

const LoadingContext = createContext({
  isLoading: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsLoading: (loading: boolean) => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  // Handle route changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Shorter duration for route changes

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
