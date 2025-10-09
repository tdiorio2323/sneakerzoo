import Image from "next/image";
const files = ["/gallery/01.jpg","/gallery/02.jpg","/gallery/03.jpg","/gallery/04.jpg","/gallery/05.jpg","/gallery/06.jpg"];
export default function GalleryPreview(){
  return (
    <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
      {files.slice(0,6).map((src,i)=>(
        <a key={src} href="/gallery" className="group relative">
          <Image src={src} alt={`Preview ${i+1}`} width={400} height={400} className="aspect-square object-cover rounded-xl" unoptimized />
          <span className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/30 transition" />
        </a>
      ))}
    </div>
  );
}