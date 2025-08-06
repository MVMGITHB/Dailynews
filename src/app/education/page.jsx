// app/education/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "DailyNewzMail Education – Learning, Policy & Study Insights",
  description:
    "Stay informed on education news, policy updates, study tips, and academic trends for all learners.",
  alternates: {
    canonical: "https://dailynewzmail.com/education",
  },
  openGraph: {
    title: "DailyNewzMail Education – Learning, Policy & Study Insights",
    description:
      "Stay informed on education news, policy updates, study tips, and academic trends for all learners.",
    url: "https://dailynewzmail.com/education",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "https://dailynewzmail.com/logo.png", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyNewzMail Education – Learning, Policy & Study Insights",
    description:
      "Stay informed on education news, policy updates, study tips, and academic trends for all learners.",
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
      <NewsUi url="education" />
    </div>
  );
};

export default Page;
