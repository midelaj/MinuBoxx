import { themeColors } from "@/lib/colorTheme";
import { useBusinessStore } from "@/lib/store";
import { dummy_vehicles } from "@/contant";
import { useState } from "react";
import VehicleCard from "./VehicleCard";

export default function ShowVehicle() {
  const theme = useBusinessStore((state) => state.theme);
  const currentTheme = themeColors[theme];
  const vehicles = dummy_vehicles;

  const [visibleCount, setVisibleCount] = useState(6);

  const buttonClass = `px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-300 transform hover:scale-105`;

  const showMoreVehicles = () => {
    setVisibleCount(vehicles.length);
  };

  return (
    <section
      id="vehicles"
      className="py-16 sm:py-20 bg-opacity-50"
      style={{
        backgroundColor:
          theme === "modernMinimal"
            ? "#F9FAFB"
            : theme === "luxuryDark"
            ? "#111827"
            : "#FFFFFF",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className={`text-3xl font-bold ${currentTheme.text}`}>
            Featured Vehicles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.slice(0, visibleCount).map((vehicle) => (
            <VehicleCard
              currentTheme={currentTheme}
              key={vehicle.id}
              vehicle={vehicle}
            />
          ))}
        </div>
        {visibleCount < vehicles.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMoreVehicles}
              className={`${buttonClass} ${currentTheme.button.primary} ${currentTheme.button.primaryText} ${currentTheme.button.primaryHover}`}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
