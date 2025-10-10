export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export function getMockProducts(category: 'mens' | 'womens' | 'footwear' | 'accessories') {
  return Array.from({ length: 16 }, (_, i) => {
    const num = i + 1;
    const title = `Product ${num}`;
    const slug = slugify(title);

    return {
      title,
      imageSrc: '/imagebox-1.jpg',
      href: `/${category}/${slug}`,
      price: category === 'accessories' ? '$29.99' : '$89.99'
    };
  });
}