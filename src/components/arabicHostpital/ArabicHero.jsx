import React from "react";
import Image from "next/image";

const ArabicHero = () => {
  return (

    
   <section className="relative h-[67vh] sm:h-[60vh] lg:h-screen w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/arabic/arabic-hero.jpg"
        alt="Healthcare Consultation"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-3xl text-white">
          {/* Heart Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative h-20 w-20">
              <Image
                src="/arabic/heart-icon.svg"
                alt="Heart Icon"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            التميز الصحي العالمي
          </h1>

          {/* Description */}
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            الرعاية المصممة خصيصًا، المعايير العالمية، تجربة خطط علاجية شخصية
            مصممة لتلبية المعايير الصحية العالمية. هنا معنا.
          </p>
        </div>
      </div>

      {/* Vertical Side Button */}
      {/* <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2">
        <button
          className="rounded-l-lg bg-red-600 px-2 py-1 text-sm font-semibold text-white"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          نسخ تجريبية
        </button>
      </div> */}
    </section>
  );
};

export default ArabicHero;
