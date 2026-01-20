export const metadata = {
  title: "Advertise with Us | DailyNewzMail",
  description: "Promote your brand on DailyNewzMail and reach a wide audience interested in news, finance, and more.",
  alternates: {
    canonical: "https://dailynewzmail.com/advertise",
  },
   openGraph: {
    title: "Advertise with Us | DailyNewzMail",
    description:
      "Promote your brand on DailyNewzMail and reach a wide audience interested in news, finance, and more.",
    url: "https://dailynewzmail.com/advertise",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "/logo.png", // 🔁 Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Hero Banner",
      },
    ],
    type: "website",
  },
};

export default function AdvertisePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Advertise with Us</h1>
      <h2 className="mb-4">Want to showcase your brand to a wide audience? Contact us for advertising opportunities on DailyNewzMail.</h2>
      <p>Email us at <a className="text-blue-600 underline" href="mailto:ads@dailynewzmail.com">ads@dailynewzmail.com</a></p>
    </main>
  );
}
