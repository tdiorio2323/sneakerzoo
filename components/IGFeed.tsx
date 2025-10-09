"use client";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const thumbs = ["/gallery/01.jpg","/gallery/02.jpg","/gallery/03.jpg"];

export default function IGFeed({ handle = BUSINESS.instagram }: { handle?: string }) {
  const url = `https://instagram.com/${handle ?? ""}`;
  return (
    <div className="card-surface p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold">@{handle}</p>
        <a className="btn-ghost" href={url} target="_blank" rel="noreferrer">Open Instagram</a>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {thumbs.map((src,i)=>(
          <Image key={src} src={src} alt={`IG ${i+1}`} width={400} height={400} className="aspect-square object-cover rounded-lg" unoptimized/>
        ))}
      </div>
    </div>
  );
}