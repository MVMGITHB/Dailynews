// app/food/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "DailyNewzMail Food – Recipes, Food Trends & Culinary News",
  description:
    "Delicious recipes, food trends, cooking tips, and culinary stories to satisfy every palate.",
  alternates: {
    canonical: "https://dailynewzmail.com/food",
  },
  openGraph: {
    title: "DailyNewzMail Food – Recipes, Food Trends & Culinary News",
    description:
      "Delicious recipes, food trends, cooking tips, and culinary stories to satisfy every palate.",
    url: "https://dailynewzmail.com/food",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "https://dailynewzmail.com/logo.png", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Food",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyNewzMail Food – Recipes, Food Trends & Culinary News",
    description:
      "Delicious recipes, food trends, cooking tips, and culinary stories to satisfy every palate.",
    images: ["https://dailynewzmail.com/logo.png"], // ✅ Replace if needed
    site: "@dailynewzmail", // ✅ Update to actual handle if exists
    creator: "@dailynewzmail",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="food" />
    </div>
  );
};

export default Page;
