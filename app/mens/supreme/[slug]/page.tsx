import SupremeDetailClient from './SupremeDetailClient';

interface SupremeDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SupremeDetailPage(props: SupremeDetailPageProps) {
  const params = await props.params;

  return <SupremeDetailClient slug={params.slug} />;
}
