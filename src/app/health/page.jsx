// app/health/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "DailyNewzMail Health – Trusted Health News & Wellness Tips",
  description:
    "Up‑to‑date health insights, medical news, wellness advice, and fitness tips tailored for your well‑being.",
  alternates: {
    canonical: "https://dailynewzmail.com/health",
  },
  openGraph: {
    title: "DailyNewzMail Health – Trusted Health News & Wellness Tips",
    description:
      "Up‑to‑date health insights, medical news, wellness advice, and fitness tips tailored for your well‑being.",
    url: "https://dailynewzmail.com/health",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "https://dailynewzmail.com/logo.png", // 🔄 replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Health News",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyNewzMail Health – Trusted Health News & Wellness Tips",
    description:
      "Up‑to‑date health insights, medical news, wellness advice, and fitness tips tailored for your well‑being.",
    images: ["https://dailynewzmail.com/logo.png"], // 🔄 replace with actual image
    site: "@dailynewzmail", // 🔄 your Twitter handle if available
    creator: "@dailynewzmail",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="health" />
    </div>
  );
};

export default Page;
