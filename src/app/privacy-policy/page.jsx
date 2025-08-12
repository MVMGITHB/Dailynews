export const metadata = {
  title: "Privacy Policy | DailyNewzMail",
  description:
    "Learn how DailyNewzMail collects, uses, and protects your personal data. Your privacy is important to us.",
  alternates: {
    canonical: "https://dailynewzmail.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is our priority. Learn how we protect your data.
      </p>
      <p className="mb-4">
        Welcome to <strong>DailyNewzMail.com</strong> (referred to herein as
        "we," "us," or "our"). We are committed to protecting your privacy and
        providing a safe online experience for all our users. This Privacy
        Policy outlines the information we collect, how we use it, and the
        choices you have regarding your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-2">
        This notice applies to all information collected or submitted on our
        website. On some pages, you can make requests, register to receive
        materials, and use free webmaster tools. The types of personal
        information collected at these pages are:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Name</li>
        <li>IP Address</li>
        <li>Phone number</li>
        <li>Descriptions of business issues or queries</li>
        <li>
          Details & requirements shared by users on various lead forms on our
          website
        </li>
      </ul>
      <p className="mb-4">
        We use cookies and similar tracking technologies to enhance your
        browsing experience and collect information about your preferences.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-2">
        We may use the information we collect for various purposes, including:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Providing and improving our services.</li>
        <li>Communicating with you about our services and promotions.</li>
        <li>Analyzing trends and user behavior.</li>
        <li>Customizing content and advertising.</li>
        <li>Sharing different types of offers and products from brands.</li>
        <li>Preventing fraudulent activity.</li>
        <li>Using the email you provide to address your queries.</li>
        <li>
          To communicate with you via different channels, including but not
          limited to SMS, Email, RCS, WhatsApp, and Voice (with your consent).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your personal information from
        unauthorized access, use, or disclosure. However, please note that no
        method of transmission over the internet or electronic storage is 100%
        secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Changes to this Privacy Policy
      </h2>
      <p className="mb-4">
        We reserve the right to update or change this Privacy Policy at any
        time. Any changes will be effective immediately upon posting the revised
        Privacy Policy on our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal
        information. Contact us if you wish to make changes or request deletion.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy or our
        practices regarding your personal information, please contact us at{" "}
        <a
          href="mailto:contact@dailynewzmail.com"
          className="text-blue-600 underline"
        >
          contact@dailynewzmail.com
        </a>
        .
      </p>

      <p className="mt-6 font-semibold">
        Thank you for choosing DailyNewzMail.com!
      </p>
    </main>
  );
}
