"use client";
import { useEffect, useState } from "react";
import FirstHero from "../Hero/FirstHero";
import TopPicks from "../Hero/TopPicks";
import LatestNews from "../Hero/LatestNews";
import Trending from "../HeroSection/Trending";
import Missed from "../HeroSection/Missed";
import { base_url } from "../Helper/helper";
import axios from "axios";
import Image from "next/image"; 

const Home = () => {
  const [news, setNews] = useState();
  const fetchdata = async () => {
    try {
      const res = await axios.get(`${base_url}/api/blog/getAllBlog`);
      setNews(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="w-full mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left - Top Picks */}

        <div className="md:col-span-1">
          {/* <a href="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5743&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/Tataneu.png"
              alt="Ad"
              className="mt-4 rounded"
            />
            
          </a> */}
          <a
            href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=522&did=23841&code=314"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Image
              src="/images/aditybirla.png"
              alt="Ad"
              priority
              className="mt-4 rounded w-full h-auto object-contain"
              width={300}
              height={200}
            />
          </a>
          <TopPicks news={news} />

          {/* Three Horizontal Lines Below */}
          <div className="mt-4 space-y-1">
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
          </div>
        </div>

        {/* Center - FirstHero */}
        <div className="md:col-span-2">
          <FirstHero news={news} />
        </div>

        {/* Right - Latest News */}
        <div className="md:col-span-1">
          <LatestNews news={news} />
          <div className="mt-4 space-y-1">
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
          </div>
          {/* <a href="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5743&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D" target="_blank" rel="noopener noreferrer" >
            <img
              src="/images/Tataneu.png"
              alt="Ad"
              className="mt-4 rounded"
            />
          </a> */}
          <a
            href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=522&did=23841&code=314"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Image
              src="/images/aditybirla.png"
              alt="Ad"
              priority
              className="mt-4 rounded w-full h-auto object-contain" // ✅ Full width on mobile
              width={300}
              height={200}
            />
          </a>
        </div>
      </div>

      <div className="w-full px-6 overflow-hidden">
        <div className="space-y-2 mx-auto max-w-none">
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
        </div>
      </div>

      <div className="py-4">
        <Trending news={news} />
      </div>
      <div>
        <Missed />
      </div>
    </>
  );
};

export default Home;
