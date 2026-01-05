"use client";

import Link from "next/link";
import Missed from "../HeroSection/Missed";
import axios from "axios";
import { base_url } from "../Helper/helper";
import { useEffect, useState } from "react";

function NewsUi({ url }) {
  let [heading, setHeading] = useState("");
  const [card, setCards] = useState();
  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `${base_url}/api/blog/getOneBlogCategoryslug/${url}`
      );
      setHeading(res?.data[0]?.category?.name);
      setCards(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {/* Section Header */}
      <div className="w-full flex items-center justify-center px-4 py-6 gap-4">
        <div className="flex flex-col justify-center gap-1 w-full">
          <hr className="h-px bg-gray-400 border-0 w-full" />
          <hr className="h-px bg-gray-400 border-0 w-full" />
          <hr className="h-px bg-gray-400 border-0 w-full" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#B00020] text-center">
          {heading
            ? `Latest ${heading} News, Updates & Highlights - ${heading}`
            : `Latest ${heading}  News`}
        </h1>

        {/* Right Lines */}
        <div className="flex flex-col justify-center gap-1 w-full">
          <hr className="h-px bg-gray-400 border-0 w-full" />
          <hr className="h-px bg-gray-400 border-0 w-full" />
          <hr className="h-px bg-gray-400 border-0 w-full" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {card && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {card.map((blog, index) => (
              <Link
                key={blog._id || index}
                href={`/${blog?.category?.slug}/${blog?.slug}?utm_source=dailynewzmail.com/&utm_medium=email&utm_campaign=${blog?.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                  <img
                    src={`${base_url}${blog?.image}`}
                    alt={blog?.title || "Blog image"}
                    className="w-full h-52  object-cover"
                  />

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    {blog?.category?.name && (
                      <span className="text-xs bg-[#B00020] text-white px-2 py-1 rounded-full w-fit mb-2">
                        {blog.category.name}
                      </span>
                    )}

                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#B00020] transition-colors line-clamp-2">
                      {blog?.title}
                    </h2>

                    <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                      {blog?.subtitle ||
                        "Voluptates sapiente atque odio sed porro, minus voluptatum error!"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Missed />
    </>
  );
}

export default NewsUi;
