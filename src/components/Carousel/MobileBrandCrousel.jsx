"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileBrandCrousel({ items = [] }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [loaded, items.length]);

  if (!items.length) return null;

  return (
    <div className="relative w-full aspect-[16/6] bg-gray-100 overflow-hidden">

      <div
        className="flex h-full transition-transform duration-700"
        style={{
          transform: loaded ? `translateX(-${current * 100}%)` : "none",
        }}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-w-full h-full"
          >
            <Image
              src={item.src}
              alt="mobile-banner"
              fill
              onLoadingComplete={() => setLoaded(true)}
              className="object-cover"
            />
          </Link>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-2 rounded-full border border-black cursor-pointer ${
              current === index ? "bg-black" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
