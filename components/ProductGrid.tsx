import ProductCard from './ProductCard';

interface ProductGridItem {
  title: string;
  imageSrc: string;
  href?: string;
  price?: string;
}

interface ProductGridProps {
  items: ProductGridItem[];
}

export default function ProductGrid({ items }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item, index) => (
        <ProductCard
          key={index}
          title={item.title}
          imageSrc={item.imageSrc}
          href={item.href}
          price={item.price}
        />
      ))}
    </div>
  );
}