import Login from "@/components/Auth/Login";

export const metadata = {
  title: "Login | Top5Shots",
  description: "Login to your Top5Shots account",
  alternates: {
    canonical: "https://dailynewzmail.com/login",
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
