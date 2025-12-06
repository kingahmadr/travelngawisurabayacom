'use client';

import React from 'react';
import Image from 'next/image';

interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGridProps {
//   title: string;
  photos: Photo[];
}

export default function GalleryPhoto({ photos }: PhotoGridProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2> */}
      
      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-2">
        {/* First row */}
        <div className="col-span-12 md:col-span-6 h-[250px] relative">
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="col-span-6 md:col-span-3 h-[250px] relative">
          <Image
            src={photos[1].src}
            alt={photos[1].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
        <div className="col-span-6 md:col-span-3 h-[250px] relative">
          <Image
            src={photos[2].src}
            alt={photos[2].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
        
        {/* Second row */}
        <div className="col-span-6 md:col-span-3 h-[200px] relative">
          <Image
            src={photos[3].src}
            alt={photos[3].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
        <div className="col-span-6 md:col-span-5 h-[200px] relative">
          <Image
            src={photos[4].src}
            alt={photos[4].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 50vw, 41.67vw"
          />
        </div>
        <div className="col-span-12 md:col-span-4 h-[200px] relative">
          <Image
            src={photos[5].src}
            alt={photos[5].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 33.33vw"
          />
        </div>
      </div>
    </div>
  );
}