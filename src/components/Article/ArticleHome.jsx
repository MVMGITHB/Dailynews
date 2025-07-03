"use client";

import { useEffect, useState } from "react";
import { base_url } from "../Helper/helper";
import LatestNews from "../Hero/LatestNews";
import Missed from "../HeroSection/Missed";
import axios from "axios";

export const ArticleHome = ({ data }) => {
  const [news, setNews] = useState();

  const fetchdata = async () => {
    try {
      const res = await axios.get(`${base_url}/api/blog/getAllBlog`);
      setNews(res.data);

      
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);


  

  return (
    <div className="w-full px-4 py-6 bg-gray-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            {data?.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 font-medium italic">
            “{data?.subtitle}”
          </h2>
          <div className="w-full">
            <img
              src={`${base_url}${data?.image}`}
              alt="Match Image"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-md"
            />
          </div>
          <div className="text-sm bg-gray-200 text-gray-700 px-4 py-2 w-fit rounded">
            <span className="text-[#B00020] font-semibold">Updated – </span>
{new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
}).format(new Date(data?.createdAt))}          </div>

          <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
            {typeof data?.content === "string" && (
              <div
                id="artice-main"
                dangerouslySetInnerHTML={{ __html: data.content }}
                className="article"
              />
            )}
          </div>
        </div>

        {/* Sticky Sidebar */}
        <div className=" h-fit sticky top-10">
          <div className="flex flex-col gap-4">
            <LatestNews news={news} />
            <img
              src="https://mvmbs.com/images/tata_side_image.webp"
              alt="Ad"
              className="mt-4 rounded"
            />
          </div>
        </div>
      </div>

      {/* Horizontal Rules */}
      <div className="w-full px-6 mt-4">
        <div className="space-y-2 mx-auto max-w-none">
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
        </div>
      </div>

      {/* Missed Section */}
      <div className="max-w-8xl mx-auto mt-12">
        <Missed />
      </div>
    </div>
  );
};
