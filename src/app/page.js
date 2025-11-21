import Home from "@/components/Home/Home";
import DailyNewzMailPopup from "@/components/popup/registerpopup";

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
        url: "https://dailynewzmail.com/images/og-banner.png", // 🔁 Replace with actual OG image URL
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

export default function Page() {
  return (
    <>
      <Home />
        <DailyNewzMailPopup />
    </>
  );
}
