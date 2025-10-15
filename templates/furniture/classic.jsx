import { Categories } from "@/components/furniture/Category";
import { FeaturedProducts } from "@/components/furniture/FeaturedProduct";
import { Footer } from "@/components/furniture/Footer";
import { Hero } from "@/components/furniture/Hero";
import { Nav } from "@/components/furniture/Nav";
import FurnitureLayout from "./layout";
import Button from "@/components/furniture/Button";

export default function FurnitureClassic({ data }) {
  return (
    <FurnitureLayout>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </FurnitureLayout>
  );
}
