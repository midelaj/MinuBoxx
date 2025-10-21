"use client";
import HeroVh from "@/components/vehicles/HeroVh";
import VehicleLayout from "./layout";
import { useBusinessStore } from "@/lib/store";
import { useEffect, useState } from "react";
import ShowVehicle from "@/components/vehicles/ShowVehicle";

export default function vehicleClassic({ businessType, data, theme }) {
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
    <VehicleLayout>
      <HeroVh />
      <ShowVehicle/>s
    </VehicleLayout>
  );
}
