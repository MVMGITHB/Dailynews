"use client";

import { useEffect, useState } from "react";
import { base_url } from "../Helper/helper";
import LatestNews from "../Hero/LatestNews";
import Missed from "../HeroSection/Missed";
import axios from "axios";
import TopPicks from "../Hero/TopPicks";
import Image from "next/image";
import Link from "next/link";
import BrandCarousel from "../Carousel/BrandCarousel";
import MobileBrandCrousel from "../Carousel/MobileBrandCrousel";

export const ArticleHome = ({ data }) => {
  const [news, setNews] = useState();
 const [bannersData, setBannersData] = useState([]);
const [sideBannersData, setSideBannersData] = useState([]);


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

  // ----------------- ✅ SCHEMA LOGIC START -----------------
  const date = new Date(data?.createdAt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const formattedDate = `${day}/${month}/${year}`;


useEffect(() => {
  const getAdsBanners = async () => {
    try {
      const res = await axios.get("https://api.dailynewzmail.com/api/ads/getAdsByWebsite/dailynews");

      const ads = res.data?.data?.[0];
      if (!ads) return;

      const baseImageUrl = `${base_url}`;

      // MAIN BANNERS
      const mainBanners = ads.images.map((img) => ({
        src: baseImageUrl + img,
        link: ads.linkArray?.[0] || "#",
      }));

      // SIDE / MOBILE BANNERS
      const sideBanners = ads.sideImages.map((img) => ({
        src: baseImageUrl + img,
        link: ads.sideLinkArray?.[0] || "#",
      }));

      setBannersData(mainBanners);
      setSideBannersData(sideBanners);
    } catch (err) {
      console.error("Banners API error:", err);
    }
  };

  getAdsBanners();
}, []);




  console.log("Banners Data:", bannersData);



  const bannerImages = [
    {
      src: "/banner/acko-horizontal-banner.png",
      link: " https://offer.mvmtracking.com/api/clicks?campaign_id=520&pub_id=17&originalClick={}&sub1={your_sub}",
    },
    {
      src: "/banner/acko-horizontal-banner-2.png",
      link: " https://offer.mvmtracking.com/api/clicks?campaign_id=520&pub_id=17&originalClick={}&sub1={your_sub}",
    },
    {
      src: "/banner/acko-horizontal-banner-3.png",
      link: " https://offer.mvmtracking.com/api/clicks?campaign_id=520&pub_id=17&originalClick={}&sub1={your_sub}",
    },
  ]




  //  const bannerImagesMobile = [
  //   { src: "/brandbanner/mobile/A-HB.png", link: "https://offer.mvmtracking.com/api/clicks?campaign_id=488&pub_id=17&originalClick=" },
  //   { src: "/brandbanner/mobile/L-HB.png", link: "https://offer.mvmtracking.com/api/clicks?campaign_id=488&pub_id=17&originalClick=" },
  //   { src: "/brandbanner/mobile/M&S-HB.png", link:"https://offer.mvmtracking.com/api/clicks?campaign_id=488&pub_id=17&originalClick=" },
  //   { src: "/brandbanner/mobile/N-HB.png", link: "https://offer.mvmtracking.com/api/clicks?campaign_id=488&pub_id=17&originalClick=" },
  //   { src: "/brandbanner/mobile/RT-HB.png", link: "https://offer.mvmtracking.com/api/clicks?campaign_id=488&pub_id=17&originalClick=" },
  // ];

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Article",
    headline: data?.title,
    image: {
      "@type": "ImageObject",
      url: `${base_url}${data?.image}`,
      width: 800,
      height: 450,
    },
    author: {
      "@type": "Person",
      name: data?.author?.name,
    },
    publisher: {
      "@type": "Organization",
      name: data?.author?.name,
      logo: {
        "@type": "ImageObject",
        url: "publisherLogo",
        width: "publisherLogoWidth",
        height: "publisherLogoHeight",
      },
    },
    datePublished: formattedDate,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data?.faqs?.map((faq) => ({
      "@type": "Question",
      name: faq.ques,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.ans,
      },
    })),
  };

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${data?.author?.name}`,
    url: "https://example.com/about",
    image: `${base_url}${data?.author?.image}`,
    sameAs: ["https://twitter.com/johndoe", "https://linkedin.com/in/johndoe"],
    jobTitle: "Content Writer",
    worksFor: {
      "@type": "Organization",
      name: "MVM Business Service",
    },
  };
  // ----------------- ✅ SCHEMA LOGIC END -----------------

  return (
    <div className="w-full  bg-gray-50">
      {/* ✅ Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      {data?.faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

          <div className="hidden md:block max-w-[1500px] mx-auto pb-2">
            <BrandCarousel items={bannersData} />
          </div>

          {/* Mobile */}
          <div className="block md:hidden max-w-[1500px] mx-auto p-4">
            <MobileBrandCrousel items={sideBannersData} />
          </div>




      {/* Mobile Ad (Top)
      <div className="md:hidden w-full mb-4 px-4">
        <a
          href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
          //seo-optimized article link (include alt-txt, img-title, lazy-loading, decoding)
          src="/images/ajionew.jpeg" 
          alt="Ajio fashion sale banner – shop trendy clothes online"
          title="Ajio New Collection – Fashion Sale 2025" 
          loading= "lazy"
          decoding = "async"
          className="rounded" />
        </a>
      </div> */}

      {/* Grid Layout */}
      <div className="max-w-[1600px] px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar (Desktop) */}
        <div className="hidden md:block md:col-span-3 h-fit sticky top-10">
          <div className="flex flex-col gap-4">
            <a
              href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                //seo-optimized article link (include alt-txt, img-title, lazy-loading, decoding);
                src="/images/aditybirla.png"
                alt="Ajio fashion sale banner – shop trendy clothes online"
                title="Ajio New Collection – Fashion Sale 2025"
                loading="lazy"
                decoding="async"
                className="mt-4 rounded"
              />
            </a>
            <TopPicks news={news} />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-6 space-y-6">

         
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            {data?.title}
          </h1>
            <div className="flex  justify-center  gap-4 pb-4">
            <div className="flex gap-2 md:flex-row justify-center">
              <h3 className="text-lg text-gray-700">
                Author:{" "}
                <strong>
                  {" "}
                  <Link
                    href={`/author/${data?.author?.slug}`}
                    rel="noopner noreferrer"
                    title={`Read more articles by ${data?.author?.name}`}
                    className="text-blue-600"
                  >
                    {data?.author?.name}
                  </Link>
                </strong>
              </h3>
              {/* <h3 className="text-lg text-gray-600">
                Created At:{" "}
                <strong>
                  {new Date(data?.author?.createdAt).toLocaleDateString()}
                </strong>
              </h3> */}
              <h3 className="text-lg text-gray-600">
                Updated At:{" "}
                <strong>
                  {/* {new Date(data?.author?.updatedAt).toLocaleDateString()} */}
                    <time dateTime={data?.createdAt}>
                {new Intl.DateTimeFormat("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(data?.createdAt))}
              </time>
                </strong>
              </h3>
            </div>

            {/* <div>
             <img
            src={`${base_url}${data?.author?.image}`}
            alt={data?.author?.name || "Author"}
            className="hidden sm:block rounded-full w-24 h-24 object-cover border-2 border-gray-900 shadow-sm"
            />

          </div> */}
          </div>

          <h2 className="text-xl md:text-2xl text-gray-600 font-medium italic">
            “{data?.subtitle}”
          </h2>

          <div className="relative ">
            {
              //       <Image
              //   src={`${base_url}${data?.image}`}
              //   alt="Match Image"
              //   priority
              //   fill
              //   fetchPriority="high"
              //   className="object-cover rounded-md"
              //   sizes="(max-width: 768px) 100vw, 1200px"
              // />
            }

            <img
              //seo-optimized article link (include img-title, alt-txt, lazy-loading, async-decoding);
              src={`${base_url}${data?.image}`}
              alt={
                data?.title
                  ? `${data.title} – Fashion collection`
                  : "Fashion collection banner"
              }
              title={
                data?.title
                  ? `${data.title} | Fashion 2025`
                  : "Ajio New Collection – Fashion Sale 2025"
              }
              loading="lazy"
              decoding="async"
              className="object-cover rounded-md  w-full md:max-w-[1200px]"
            />
          </div>

          {/* <div className="text-sm bg-gray-200 text-gray-700 px-4 pt-8 w-fit rounded">
            <span className="text-[#B00020] font-semibold">Updated At – </span>
            {new Intl.DateTimeFormat("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
              timeZone: "Asia/Kolkata",
            }).format(new Date(data?.createdAt))} 

             <time dateTime={data?.createdAt}>
                {new Intl.DateTimeFormat("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(data?.createdAt))}
              </time>
          </div> */}

          <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
            {typeof data?.content === "string" && (
              <div
                id="article-main"
                dangerouslySetInnerHTML={{ __html: data.content }}
                className="prose blog-content"
              />
            )}
          </div>

          {/* FAQs */}
          {data?.faqs?.length > 0 && (
            <div className="bg-gray-50 p-6 rounded">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Frequently Asked Questions
              </h2>
              {data.faqs.map((faq, index) => (
                <div key={faq._id || index} className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Q{index + 1}: {faq.ques}
                  </h3>
                  <p className="text-base">
                    <strong>Ans:</strong> {faq.ans}
                  </p>
                </div>
              ))}
            </div>
          )}

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

          {/* Mobile Ad (Bottom) */}
          <div className="md:hidden w-full mt-6">
            <a
              href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
              //seo-optimized article link (include alt-txt, img-title, lazy-loading, async-decoding);
                src="/images/aditybirla.png"
                alt="Ajio new fashion collection banner – shop trendy clothing online"
                title="Ajio 2025 Fashion Sale – Trendy Clothes for Men and Women"
                loading="lazy"
                decoding="async"
                className="rounded"
              />
            </a>
          </div>
        </div>

        {/* Right Sidebar (Desktop) */}
        <div className="hidden md:block md:col-span-3 h-fit sticky top-10">
          <div className="flex flex-col gap-4">
            <LatestNews news={news} />
            <a
              href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/aditybirla.png"
                alt="Ad"
                className="mt-4 rounded"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
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
      {/* Mobile Ad after Missed Section */}
      <div className="md:hidden w-full mt-6 px-4">
        <a
          href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/aditybirla.png" alt="Ad" className="rounded" />
        </a>
      </div>
    </div>
  );
};
