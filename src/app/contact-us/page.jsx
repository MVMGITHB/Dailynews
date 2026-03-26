export const metadata = {
  title: "Help & Support | DailyNewzMail",
  description: "Need assistance? Get help with technical issues, account queries, or content-related questions.",
  alternates: {
    canonical: "https://dailynewzmail.com/contact-us",
  },
};

export default function ContactUs() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact & Support</h1>
      <h2 className="mb-4">Need help using DailyNewzMail? Reach out to us anytime and we’ll be happy to assist you.</h2>
      <p>Email: <a className="text-blue-600 underline" href="mailto:support@dailynewzmail.com">support@dailynewzmail.com</a></p>
    </main>
  );
}
