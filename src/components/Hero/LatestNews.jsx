import Link from "next/link";
import React from "react";

function LatestNews({ news }) {
  return (
    <div className="p-2">
      <h4 className="text-3xl font-bold text-[#B00020] text-center mb-6">
        Latest News
      </h4>

      <div className="relative ml-6">
        <div className="absolute top-0 left-1.5 w-px h-full bg-gray-300 z-0"></div>

        <div className="flex flex-col gap-6">
        {news?.slice(0)?.sort(() => Math.random() - 0.5)?.slice(0, 5)?.map((item, index) => (
  <Link
    href={`/${item?.category?.slug}/${item?.slug}`}
    key={index}
    className="relative flex gap-3 items-start z-10"
  >
    {/* Circle */}
    <div className="mt-1">
      <div
        className={`w-3 h-3 rounded-full ${
          index === 0
            ? "bg-[#B00020]"
            : "border-2 border-[#B00020] bg-white"
        }`}
      ></div>
    </div>

    <div>
      <p className="text-lg font-medium hover:underline cursor-pointer">
        {item?.title}
      </p>
      <h5 className="text-xs underline uppercase font-bold text-gray-600">
        {item.source}
      </h5>
    </div>
  </Link>
))}

        </div>
      </div>
    </div>
  );
}

export default LatestNews;
