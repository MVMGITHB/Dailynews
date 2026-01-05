import Register from "@/components/Auth/Register";

export const metadata = {
  title: "Register | Top5Shots",
  description: "Create your Top5Shots account and get access to curated top shots",
  alternates: {
    canonical: "https://top5shots.com/register",
  },
  // Optional but recommended for auth pages
  robots: {
    index: false,
    follow: true,
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
