// app/technology/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "DailyNewzMail Technology – Latest Tech & Innovation News",
  description:
    "Discover the newest in gadgets, apps, AI, software and tech trends shaping tomorrow.",
  alternates: {
    canonical: "https://dailynewzmail.com/technology",
  },
  openGraph: {
    title: "DailyNewzMail Technology – Latest Tech & Innovation News",
    description:
      "Discover the newest in gadgets, apps, AI, software and tech trends shaping tomorrow.",
    url: "https://dailynewzmail.com/technology",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "https://dailynewzmail.com/logo.png", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyNewzMail Technology – Latest Tech & Innovation News",
    description:
      "Discover the newest in gadgets, apps, AI, software and tech trends shaping tomorrow.",
    images: ["https://dailynewzmail.com/logo.png"], // ✅ Replace with actual image
    site: "@dailynewzmail", // ✅ Your Twitter handle if available
    creator: "@dailynewzmail",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="technology" />
    </div>
  );
};

export default Page;
