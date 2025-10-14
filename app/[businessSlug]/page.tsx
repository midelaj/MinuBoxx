import { dummyBusinesses } from "@/lib/dummyData";

export default async function BusinessPage({
  params,
}: {
  params: { businessSlug: string };
}) {
  const business = dummyBusinesses.find((b) => b.slug === params.businessSlug);

  if (!business) return <h1>Website not found</h1>;

  const { businessType, theme, data } = business;
  const Template = (await import(`@/templates/${businessType}/${theme}.tsx`))
    .default;

  return <Template data={data} />;
}
