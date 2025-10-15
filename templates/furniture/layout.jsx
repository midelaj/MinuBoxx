"use client";
import { Nav } from "@/components/furniture/Nav";
import { Footer } from "@/components/furniture/Footer";
import { useBusinessStore } from "@/lib/store";
import { themeColors } from "@/lib/colorTheme";

export default function FurnitureLayout({ children }) {
  const { theme } = useBusinessStore();
  const colors = themeColors[theme];

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <Nav />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
