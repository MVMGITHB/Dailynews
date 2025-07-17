"use client";

import Link from "next/link";

function Categories() {
  const categories = [
    "Health",
    "Technology",
    "Education",
    "Travel",
    "Sports",
    "Fashion",
    "Food",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-2">
      <ul
        className="
          hidden sm:flex gap-4 md:gap-6
        "
      >
        {categories.map((cat, index) => (
          <li key={index}
           className={`pl-4 ${index !== 0 ? "border-l border-gray-300" : ""}`}
          >
            <Link
              href={`/${cat.toLowerCase()}`}
              className="text-base md:text-xl font-semibold text-gray-600 hover:text-[#B00020] transition-colors"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>

      {/* Grid layout for mobile only */}
      <ul className="grid grid-cols-2 gap-3 sm:hidden">
        {categories.map((cat, index) => (
          <li key={index}>
            <Link
              href={`/${cat.toLowerCase()}`}
              className="block text-sm font-medium text-gray-700 hover:text-[#B00020] transition-colors"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
