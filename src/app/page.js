import { base_url } from "@/components/Helper/helper";
import Home from "@/components/Home/Home";
import MainPopDynamic from "@/components/popup/MainPopDynamic";
import MainPopup from "@/components/popup/MainPopup";
import DailyNewzMailPopup from "@/components/popup/registerpopup";
import axios from "axios";
import Script from "next/script";

// ✅ Static SEO Metadata for dailynewzmail.com
export const metadata = {
  title: "DailyNewzMail - Top News, Trends & Picks",
  description:
    "Get the latest news, trending stories, and expert picks all in one place. Stay informed with DailyNewzMail’s handpicked highlights.",
  keywords: [
    "daily news",
    "top news picks",
    "trending blogs",
    "DailyNewzMail",
    "latest updates",
  ],
  alternates: {
    canonical: "https://dailynewzmail.com",
  },
  openGraph: {
    title: "DailyNewzMail - Top News, Trends & Picks",
    description:
      "Get the latest breaking news, top headlines & trending updates across India and the world. Stay informed with DailyNewzMail.",
    url: "https://dailynewzmail.com",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "/logo.png", // 🔁 Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Hero Banner",
      },
    ],
    type: "website",
  },

  
  twitter: {
    card: "summary_large_image",
    title: "DailyNewzMail - Top News, Trends & Picks",
    description:
      "Get the latest breaking news, top headlines & trending updates across India and the world. Stay informed with DailyNewzMail..",
    images: ["https://dailynewzmail.com/images/og-banner.png"], // 🔁 Replace with actual image
  },
};



export default async function Page() {

  let news = [];

  try {
    const res = await axios.get(`${base_url}/api/blog/getAllBlog`);
    news = res.data;

    // console.log("News fetched on kjhgvcfgvhjugjkhvgbhjnknbv server:", news);
  } catch (error) {
    console.error("API error:", error);
  }

  return (
    <>


     <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://dailynewzmail.com/#organization",
            "name": "DailyNewzMail",
            "url": "https://dailynewzmail.com",
            "logo": "https://dailynewzmail.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/dailynewzmail",
              "https://twitter.com/dailynewzmail",
              "https://www.instagram.com/dailynewzmail",
              "https://www.linkedin.com/company/dailynewzmail"
            ],
            "description":
              "DailyNewzMail delivers the latest news, trending stories, and expert picks from India and around the world.",
            "foundingDate": "2023",
            "publisher": {
              "@type": "Organization",
              "name": "DailyNewzMail"
            }
          }),
        }}
      />

   
      <Home news={news} />
      <DailyNewzMailPopup />
      <MainPopup />
    </>
  );
}
