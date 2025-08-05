export const metadata = {
  title: "Advertise with Us | DailyNewzMail",
  description: "Promote your brand on DailyNewzMail and reach a wide audience interested in news, finance, and more.",
  alternates: {
    canonical: "https://dailynewzmail.com/advertise",
  },
};

export default function AdvertisePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Advertise with Us</h1>
      <p className="mb-4">Want to showcase your brand to a wide audience? Contact us for advertising opportunities on DailyNewzMail.</p>
      <p>Email us at <a className="text-blue-600 underline" href="mailto:ads@dailynewzmail.com">ads@dailynewzmail.com</a></p>
    </main>
  );
}
