import FootwearDetailClient from './FootwearDetailClient';

interface FootwearDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function FootwearDetailPage(props: FootwearDetailPageProps) {
  const params = await props.params;
  
  return <FootwearDetailClient slug={params.slug} />;
}