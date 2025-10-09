import WomensDetailClient from './WomensDetailClient';

interface WomensDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WomensDetailPage(props: WomensDetailPageProps) {
  const params = await props.params;
  
  return <WomensDetailClient slug={params.slug} />;
}