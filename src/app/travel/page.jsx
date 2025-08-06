// app/travel/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "DailyNewzMail Travel – Destinations, Tips & Travel Guides",
  description:
    "Explore travel destinations, expert tips, itineraries and updates to fuel your next adventure.",
  alternates: {
    canonical: "https://dailynewzmail.com/travel",
  },
  openGraph: {
    title: "DailyNewzMail Travel – Destinations, Tips & Travel Guides",
    description:
      "Explore travel destinations, expert tips, itineraries and updates to fuel your next adventure.",
    url: "https://dailynewzmail.com/travel",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "https://dailynewzmail.com/logo.png", // ✅ Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyNewzMail Travel – Destinations, Tips & Travel Guides",
    description:
      "Explore travel destinations, expert tips, itineraries and updates to fuel your next adventure.",
    images: ["https://dailynewzmail.com/logo.png"], // ✅ Replace with actual image
    site: "@dailynewzmail", // ✅ Use your real Twitter handle if available
    creator: "@dailynewzmail",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="travel" />
    </div>
  );
};

export default Page;
