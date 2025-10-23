import { PRODUCTS } from "@/contant";
import { dummy_vehicles } from "@/contant";

const vehicles = dummy_vehicles;
export const dummyBusinesses = [
  {
    slug: "royal-furniture",
    businessType: "furniture",
    theme: "modernMinimal",
    templ: "classic",
    data: {
      businessName: "Royal Furniture Nilambur",
      products: [...PRODUCTS],

      contact: {
        phone: "+91 9876543210",
        whatsapp: "+91 9876543210",
        address: "Nilambur, Kerala",
      },
    },
  },
  {
    slug: "trueway-cars",
    businessType: "vehicle",
    theme: "luxuryDark",
    templ: "classic",
    data: {
      businessName: "Trueway Cars",
      products: [...vehicles],
      contact: {
        phone: "+91 9876543210",
        whatsapp: "+91 9876543210",
        address: "Kozhikode, Kerala",
      },
    },
  },
];
