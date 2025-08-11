"use client";

import { useEffect, useState } from "react";
import { base_url } from "../Helper/helper";
import LatestNews from "../Hero/LatestNews";
import Missed from "../HeroSection/Missed";
import axios from "axios";
// import TataPopup from "../popup/tataneu";
import TopPicks from "../Hero/TopPicks";

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
    <div className="w-full py-6 bg-gray-50 ">
      {/* Tata Popup
      {data?.images?.[0] && data?.images?.[1] ? (
        <TataPopup
          link={data?.linkArray?.[0]}
          desImg={`${base_url}${data.images[0]}`}
          mobIg={`${base_url}${data.images[1]}`}
        />
      ) : null}

      {data?.images?.[0] && !data?.images?.[1] ? (
        <TataPopup
          link={data?.linkArray?.[0]}
          desImg={`${base_url}${data.images[0]}`}
          mobIg={`${base_url}${data.images[0]}`}
        />
      ) : null} */}

      {/* Grid Layout */}
      <div className="max-w-[1600px] px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">


        {/* Left Sidebar */}
        <div className="hidden md:block   md:col-span-3 h-fit sticky top-10">
          <div className="flex flex-col gap-4">
            {/* <a href="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5743&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/Tataneu.png"
                alt="Ad"
                className="mt-4 rounded"
              />
            </a> */}
            <TopPicks news={news} />

          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-6 space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-00 leading-snug">
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
            }).format(new Date(data?.createdAt))}
          </div>

          <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
            {typeof data?.content === "string" && (
              <div
                id="article-main"
                dangerouslySetInnerHTML={{ __html: data.content }}
                className="prose blog-content"
              />
            )}
          </div>

          {/* Conclusion */}
          {data?.conclusion && data?.conclusion.length > 0 && (
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 text-center">
                Conclusion
              </h3>
              <p className="text-gray-800 text-base md:text-xl leading-relaxed">
                {data.conclusion}
              </p>
            </div>
          )}
        </div>
        {/* Mobile Picks & News */}
        <div className="block md:hidden space-y-6">

          <TopPicks news={news} />
          {/* <a href="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5743&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/Tataneu.png"
              alt="Ad"
              className="mt-4 rounded"
            />
          </a> */}

          <LatestNews news={news} />
          {/* <a href="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5743&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/Tataneu.png"
              alt="Ad"
              className="mt-4 rounded"
            />
          </a> */}
        </div>


        {/* Right Sidebar */}
        <div className="hidden md:block  md:col-span-3 h-fit sticky top-10">
          <div className="flex flex-col gap-4">
            <LatestNews news={news} />
            {/* <a href="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5743&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/Tataneu.png"
                alt="Ad"
                className="mt-4 rounded"
              />
            </a> */}
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
