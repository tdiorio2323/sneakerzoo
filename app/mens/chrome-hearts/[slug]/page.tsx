import ChromeHeartsDetailClient from './ChromeHeartsDetailClient';

interface ChromeHeartsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ChromeHeartsDetailPage(props: ChromeHeartsDetailPageProps) {
  const params = await props.params;

  return <ChromeHeartsDetailClient slug={params.slug} />;
}
