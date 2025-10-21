"use client";
import { Categories } from "@/components/furniture/Category";
import { FeaturedProducts } from "@/components/furniture/FeaturedProduct";
import { Footer } from "@/components/furniture/Footer";
import { Hero } from "@/components/furniture/Hero";
import { Nav } from "@/components/furniture/Nav";
import FurnitureLayout from "./layout";
import Button from "@/components/furniture/Button";
import { useBusinessStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function FurnitureClassic({ businessType, data, theme }) {
  const setBusiness = useBusinessStore((state) => state.setBusiness);
  const setTheme = useBusinessStore((state) => state.setTheme);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setBusiness(businessType);
    setTheme(theme);
    setInitialized(true);
  }, [businessType, theme]);

  if (!initialized) return null; // prevent flashing wrong theme

  return (
    <FurnitureLayout>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </FurnitureLayout>
  );
}
