import { themeColors } from "@/lib/colorTheme";
import { useBusinessStore } from "@/lib/store";
import Link from "next/link";

function VehicleCard({ currentTheme, vehicle }) {
  return (
    <Link href={`/vehicles/${vehicle.id}`}>
      <div
        className={`overflow-hidden rounded-lg ${currentTheme.card.background} ${currentTheme.card.border} border ${currentTheme.card.shadow} ${currentTheme.card.hover} transition-all duration-300 transform hover:-translate-y-1 group`}
      >
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <h3 className={`text-xl font-bold ${currentTheme.text} truncate`}>
            {vehicle.name}
          </h3>
          <p className={`mt-1 font-semibold ${currentTheme.textAccent}`}>
            ${vehicle.price.toLocaleString()}
          </p>
          <p
            className={`mt-2 text-sm ${currentTheme.textMuted} h-10 overflow-hidden text-ellipsis`}
          >
            {vehicle.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default VehicleCard;
