import AboutUs from '@/components/about/AboutUs'
import React from 'react'


export const metadata = {
  title: " About DailyNewsMail: Daily News & Insights Platform",
  description: "Learn about DailyNewsMail, your trusted source for daily news, finance, tech, lifestyle & more. Stay updated with verified, expert-driven insights.",
  alternates: {
    canonical: "https://dailynewzmail.com/about-us",
  },
};


const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  )
}

export default page
