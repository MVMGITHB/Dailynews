import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center p-10 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Us | DailyNewsMail – Your Trusted Daily News & Insights Platform
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Discover DailyNewsMail — your go-to destination for the latest updates across Politics, Automobiles, Finance, Entertainment, Technology, Sports, Fashion, and Lifestyle. Stay informed and ahead with credible, expert-driven content every day.
          </p>
        </div>

        {/* Section */}
        <div className="bg-white mt-8 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Welcome to DailyNewsMail — Your Reliable Source for Daily News & Insights
          </h2>
          <p className="mb-4">
            In today’s fast-moving digital world, staying informed is more important than ever. At DailyNewsMail, we bring you breaking news, market updates, lifestyle trends, and in-depth stories, all in one place, so you never miss what truly matters.
          </p>
          <p>
            Whether you’re an investor tracking market movements, a professional following policy updates, a sports enthusiast, or someone exploring fashion and lifestyle trends, our platform is built to deliver accurate, easy-to-understand, and actionable content tailored for modern readers.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white mt-8 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Our Mission
          </h2>
          <p>
            Our mission is to empower our readers with accurate, timely, and meaningful updates across multiple categories, helping you make smarter decisions in finance, lifestyle, and everyday life. We focus on cutting through clutter to bring you news and insights that truly add value.
          </p>
        </div>

        {/* Why Trust */}
        <div className="bg-white mt-8 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Why Trust DailyNewsMail?
          </h2>
          <p className="mb-4">
            Unlike scattered or unreliable sources, our editorial team works continuously to deliver:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Breaking news from trusted national and global sources</li>
            <li>Real-time updates on stock markets and finance</li>
            <li>Policy, taxation, and real estate insights</li>
            <li>Latest trends in automobiles, technology, and sports</li>
            <li>Entertainment, fashion, and lifestyle coverage</li>
          </ul>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-white mt-8 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            What Makes Us Different?
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md space-y-3">
            <p>
              <strong>Verified & Reliable –</strong> Content sourced from credible agencies, experts, and official platforms
            </p>
            <p>
              <strong> Comprehensive Coverage –</strong> A one-stop destination for news, finance, lifestyle, and trends
            </p>
            <p>
              <strong> Reader-First Approach –</strong> Clean, mobile-friendly experience with regularly updated content
            </p>
          </div>
        </div>

        {/* Final Section */}
        <div className="bg-white mt-8 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Start Your Day with DailyNewsMail
          </h2>
          <p className="mb-4">
            From morning headlines to evening market updates, DailyNewsMail keeps you informed across every category, from politics and business to lifestyle and entertainment.
          </p>
          <p>
            Bookmark DailyNewsMail today and stay updated, every day.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © 2026 DailyNewsMail. All Rights Reserved.
        </div>

      </div>
    </div>
  );
};

export default AboutUs;