"use client";
import { Footer } from "@/components/furniture/Footer";
import { useBusinessStore } from "@/lib/store";
import { themeColors } from "@/lib/colorTheme";
import NavVh from "@/components/vehicles/NavVh";
import FooterVh from "@/components/vehicles/Footervh";

export default function VehicleLayout({ children }) {
  const { theme } = useBusinessStore();
  const colors = themeColors[theme];

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <NavVh currentTheme={colors} />
      <main className="min-h-screen">{children}</main>
      <FooterVh />
    </div>
  );
}
