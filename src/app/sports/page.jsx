// app/sports/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "DailyNewzMail Sports – Cricket, Football & Global Sports News",
  description:
    "Follow the latest matches, results, highlights and sports analysis from Indian and international arenas.",
  alternates: {
    canonical: "https://dailynewzmail.com/sports",
  },
  openGraph: {
    title: "DailyNewzMail Sports – Cricket, Football & Global Sports News",
    description:
      "Follow the latest matches, results, highlights and sports analysis from Indian and international arenas.",
    url: "https://dailynewzmail.com/sports",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "https://dailynewzmail.com/logo.png", // ✅ Replace with your actual image
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Sports",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyNewzMail Sports – Cricket, Football & Global Sports News",
    description:
      "Follow the latest matches, results, highlights and sports analysis from Indian and international arenas.",
    images: ["https://dailynewzmail.com/logo.png"], // ✅ Replace if needed
    site: "@dailynewzmail", // ✅ Replace with real handle if available
    creator: "@dailynewzmail",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="sports" />
    </div>
  );
};

export default Page;
