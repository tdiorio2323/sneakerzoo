import GodspeedDetailClient from './GodspeedDetailClient';

interface GodspeedDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GodspeedDetailPage(props: GodspeedDetailPageProps) {
  const params = await props.params;

  return <GodspeedDetailClient slug={params.slug} />;
}
