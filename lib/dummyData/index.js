import { PRODUCTS } from "@/contant";
export const dummyBusinesses = [
  {
    slug: "royal-furniture",
    businessType: "furniture",
    theme: "earthWarm",
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
    theme: "premium",
    data: {
      businessName: "Trueway Cars",
      vehicles: [
        { name: "Hyundai Creta SX", price: "₹10.8 L", image: "/creta.jpg" },
        { name: "Swift VXI", price: "₹6.5 L", image: "/swift.jpg" },
      ],
      contact: {
        phone: "+91 9876543210",
        whatsapp: "+91 9876543210",
        address: "Kozhikode, Kerala",
      },
    },
  },
];
