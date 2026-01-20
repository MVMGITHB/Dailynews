import Register from "@/components/Auth/Register";

export const metadata = {
  title: "Create a Free Account | Daily News Mail",
  description:
    "Create your free Daily News Mail account to get personalized news updates, saved articles, and daily email alerts.",

  alternates: {
    canonical: "https://dailynewzmail.com/register",
  },
  openGraph: {
       title: "Create a Free Account | Daily News Mail",
  description:
    "Create your free Daily News Mail account to get personalized news updates, saved articles, and daily email alerts.",
        url: "https://dailynewzmail.com/register",
        type: "article",
        siteName: "dailynewzmail",
        images: [
          {
            url: "/logo.png",
            width: 1200,
            height: 630,
            alt: "Logo",
          },
      ],
    },

  robots: {
    index: true,     // ✅ indexed as requested
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },

  openGraph: {
    title: "Create Account – Daily News Mail",
    description:
      "Sign up for Daily News Mail and receive curated news updates delivered daily.",
    url: "https://dailynewzmail.com/register",
    siteName: "Daily News Mail",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Create Account – Daily News Mail",
    description:
      "Join Daily News Mail for personalized news updates and daily email alerts.",
  },
};

const Page = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

export default Page;
