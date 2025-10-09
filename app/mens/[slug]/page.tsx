import MensDetailClient from './MensDetailClient';

interface MensDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MensDetailPage(props: MensDetailPageProps) {
  const params = await props.params;
  
  return <MensDetailClient slug={params.slug} />;
}