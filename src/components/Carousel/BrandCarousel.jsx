"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BrandCarousel({ items = [] }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!autoPlay || !loaded || items.length === 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current, autoPlay, loaded, items.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };


  console.log("BrandCarousel items:", items);

  if (!items.length) return null;

  return (
    <div className="relative w-full aspect-[16/1.5] bg-gray-100 overflow-hidden">

      {/* SLIDES */}
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
            className="relative min-w-full h-full block"
          >
            <Image
              src={item.src}
              alt="carousel-banner"
              fill
              onLoadingComplete={() => setLoaded(true)}
              className="object-cover"
              priority={index === 0}
            />
          </Link>
        ))}
      </div>

      {/* CONTROLS */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-2 rounded-full cursor-pointer border border-black ${
              current === index ? "bg-black" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
