import { dummyBusinesses } from "@/lib/dummyData";

export default async function BusinessPage({ params }) {
  const business = dummyBusinesses.find((b) => b.slug === params.businessSlug);

  if (!business) return <h1>Website not found</h1>;

  const { businessType, templ, theme, data } = business;
  const Template = (await import(`@/templates/${businessType}/${templ}.jsx`))
    .default;

  return <Template data={data} theme={theme} />;
}
