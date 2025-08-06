// app/fashion/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "DailyNewzMail Fashion – Style Trends, Tips & Industry News",
  description:
    "Discover fashion news, style advice, trend reports and wardrobe inspiration for every season.",
  alternates: {
    canonical: "https://dailynewzmail.com/fashion",
  },
  openGraph: {
    title: "DailyNewzMail Fashion – Style Trends, Tips & Industry News",
    description:
      "Discover fashion news, style advice, trend reports and wardrobe inspiration for every season.",
    url: "https://dailynewzmail.com/fashion",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "https://dailynewzmail.com/logo.png", // ✅ Replace with real OG image if available
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyNewzMail Fashion – Style Trends, Tips & Industry News",
    description:
      "Discover fashion news, style advice, trend reports and wardrobe inspiration for every season.",
    images: ["https://dailynewzmail.com/logo.png"], // ✅ Replace if needed
    site: "@dailynewzmail", // ✅ Update to real handle if exists
    creator: "@dailynewzmail",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="fashion" />
    </div>
  );
};

export default Page;
