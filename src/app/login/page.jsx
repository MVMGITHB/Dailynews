import Login from "@/components/Auth/Login";

export const metadata = {
  title: "Login to Daily News Mail | Secure Account Access",
  description:
    "Securely log in to your Daily News Mail account to access personalized news updates, saved articles, and daily email alerts.",

  alternates: {
    canonical: "https://dailynewzmail.com/login",
  },
   openGraph: {
       title: "Login to Daily News Mail | Secure Account Access",
  description:
    "Securely log in to your Daily News Mail account to access personalized news updates, saved articles, and daily email alerts.",
        url: "https://dailynewzmail.com/login",
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
    title: "Login – Daily News Mail",
    description:
      "Access your Daily News Mail account securely and stay updated with personalized news delivered daily.",
    url: "https://dailynewzmail.com/login",
    siteName: "Daily News Mail",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Login – Daily News Mail",
    description:
      "Secure login to Daily News Mail for personalized news and email alerts.",
  },
};

const Page = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Page;
