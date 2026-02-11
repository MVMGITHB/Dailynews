"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";

const ArabicFooter = () => {
  const [open, setOpen] = useState(null);

  const toggle = (name) => {
    setOpen(open === name ? null : name);
  };

  // Mobile Accordion Section
  const MobileSection = ({ title, name, children }) => (
    <div className="border-b border-white/20 py-4 md:border-0 md:py-0">
      {/* Mobile Header */}
      <button
        onClick={() => toggle(name)}
        className="flex w-full items-center justify-between text-right md:hidden"
      >
        <span className="font-semibold">{title}</span>
        <span className="text-2xl font-light">{open === name ? "−" : "+"}</span>
      </button>

      {/* Mobile Content */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open === name ? "max-h-[500px] opacity-100 pt-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block">{children}</div>
    </div>
  );

  return (
    <>
      <footer dir="rtl" className="  md:block hidden w-full">
        <Image
          src="/arabic/footerImage.png"
          alt="Footer Background"
          width={1920}
          height={500}
          priority
          className="w-full h-auto object-cover"
        />
      </footer>

      <footer
        dir="rtl"
        className="relative md:hidden w-full overflow-hidden bg-[#0b6b4a] text-white pt-[10px] pb-1 "
      >
        {/* CURVED BACKGROUND */}
        <div className="absolute inset-x-0 top-0 h-[140%] bg-[#0b6b4a] clip-wave z-0" />
        {/* BACKGROUND */}
        {/* <div
          className="absolute inset-x-0 top-0 h-[1200px] w-full z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/arabic/kfh-footer-shape.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "100% auto",
            transform: "scaleX(-1)",
          }}
        /> */}

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-5">
          {/* TOP TEXT */}
          <div className="mb-1 max-w-3xl text-right">
            <h2 className="mb-4 text-3xl font-bold leading-snug">
              عراقة في تقديم الرعاية وتميز في الأداء
            </h2>

            <p className="mb-8 text-sm leading-7 text-white/90">
              خمسة عقود من الالتزام بتقديم الرعاية الصحية للمرضى من داخل وخارج
              المملكة العربية السعودية وفقًا لأعلى معايير الجودة والتميز.
            </p>

            <button className="rounded-full bg-white w-full px-14 py-3 text-sm font-semibold text-green-800">
              اتصل بنا
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-0 text-sm md:grid-cols-4 md:gap-16">
            {/* ABOUT */}
            <MobileSection title="عن الموقع" name="about">
              <h4 className="mb-6 hidden font-semibold md:block">عن الموقع</h4>
              <ul className="space-y-3 text-white/90">
                <li>عن المستشفى</li>
                <li>البحث عن طبيب</li>
                <li>الفعاليات</li>
                <li>التبرع</li>
                <li>المكتبة الصحية</li>
              </ul>
            </MobileSection>

            {/* PORTAL */}
            <MobileSection title="بوابة المستشفى" name="portal">
              <h4 className="mb-6 hidden font-semibold md:block">
                بوابة المستشفى
              </h4>
              <ul className="space-y-3 text-white/90">
                <li>الرعاية الصحية</li>
                <li>التعليم</li>
                <li>الأبحاث</li>
                <li>خدمات الموظفين الإلكترونية</li>
                <li>اتفاقية مستوى الخدمة</li>
                <li>وظائف مستشفى الملك فيصل التخصصي</li>
                <li>الأخبار</li>
              </ul>
            </MobileSection>

            {/* LINKS */}
            <MobileSection title="روابط مفيدة" name="links">
              <h4 className="mb-6 hidden font-semibold md:block">
                روابط مفيدة
              </h4>
              <ul className="space-y-3 text-white/90">
                <li>الخدمات الحكومية الموحدة</li>
                <li>منصة استطلاع</li>
                <li>وزارة الصحة</li>
                <li>الهيئة العامة للغذاء والدواء</li>
                <li>الهيئة السعودية للتخصصات الصحية</li>
                <li>وقف الخير</li>
              </ul>
            </MobileSection>

            {/* CONTACT */}
            <MobileSection title="مركز الاتصال الموحد" name="contact">
              <h4 className="mb-6 hidden font-semibold md:block">
                مركز الاتصال الموحد
              </h4>

              <p className="mb-6 text-xl font-bold">199019</p>

              {/* SOCIAL */}

              {/* STORES */}
            </MobileSection>
          </div>
          <div className="mb-6 mt-4 flex gap-5">
            <Linkedin size={18} />
            <Youtube size={18} />
            <X size={18} />
            <Instagram size={18} />
            <Facebook size={18} />
          </div>
          <div className="flex gap-3">
            <Image
              src="/arabic/google-play.png"
              alt="Google Play"
              width={140}
              height={44}
            />
            <Image
              src="/arabic/app-store.png"
              alt="App Store"
              width={140}
              height={44}
            />
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-4 flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-6 text-xs md:flex-row">
            <div className="flex flex-wrap justify-center gap-4 text-white/80 md:justify-start">
              <span>شروط الاستخدام</span>
              <span>سياسة الخصوصية</span>
              <span>سياسة المشاركة الاجتماعية</span>
              <span>حقوق إعادة الطبع</span>
            </div>

            <div className="flex items-center gap-35">
              <Image
                src="/arabic/visionlogo-01.png"
                alt="Vision 2030"
                width={90}
                height={40}
              />
              <span>KFSHRC © 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ArabicFooter;
