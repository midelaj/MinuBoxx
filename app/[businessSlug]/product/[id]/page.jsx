import { dummyBusinesses } from "@/lib/dummyData";

export default async function ProductPage({ params }) {
  const business = dummyBusinesses.find((b) => b.slug === params.businessSlug);
  if (!business) return <h1>Website not found</h1>;

  const { businessType, theme, data } = business;

  const paramsId = Number(params.id);
  const product = data?.products?.find((p) => p.id === paramsId);

  if (!product) return <h1>Product not founded</h1>;

  const ProductDetail = (
    await import(`@/templates/${businessType}/productDetail.jsx`)
  ).default;

  return <ProductDetail product={product} theme={theme} />;
}
