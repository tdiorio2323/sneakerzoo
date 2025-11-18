import AirJordanDetailClient from './AirJordanDetailClient';

interface AirJordanDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AirJordanDetailPage(props: AirJordanDetailPageProps) {
  const params = await props.params;

  return <AirJordanDetailClient slug={params.slug} />;
}
