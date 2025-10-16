import { dummyBusinesses } from "@/lib/dummyData";

export default async function CategoryPage({ params }) {
  const business = dummyBusinesses.find((b) => b.slug === params.businessSlug);
  if (!business) return <h1>Website not found</h1>;

  const { businessType, theme, data } = business;
  const ProductDetail = (
    await import(`@/templates/${businessType}/category.jsx`)
  ).default;

  return <ProductDetail data={data} theme={theme} />;
}
