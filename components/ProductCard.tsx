import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  imageSrc: string;
  href?: string;
  price?: string;
}

export default function ProductCard({ title, imageSrc, href, price }: ProductCardProps) {
  const cardContent = (
    <div className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
      <div className="relative h-full w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="px-3 py-2 text-sm">
          <h3 className="font-medium text-white">{title}</h3>
          {price && (
            <p className="text-xs text-white/70 mt-1">{price}</p>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}