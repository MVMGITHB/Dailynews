"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { base_url } from "../Helper/helper";

const COUNTRIES = [
  "أفغانستان",
  "ألبانيا",
  "الجزائر",
  "أندورا",
  "أنغولا",
  "أنتيغوا وبربودا",
  "الأرجنتين",
  "أرمينيا",
  "أستراليا",
  "النمسا",
  "أذربيجان",
  "الباهاما",
  "البحرين",
  "بنغلاديش",
  "باربادوس",
  "روسيا البيضاء",
  "بلجيكا",
  "بليز",
  "بنين",
  "بوتان",
  "بوليفيا",
  "البوسنة والهرسك",
  "بوتسوانا",
  "البرازيل",
  "بروناي",
  "بلغاريا",
  "بوركينا فاسو",
  "بوروندي",
  "كمبوديا",
  "الكاميرون",
  "كندا",
  "تشاد",
  "تشيلي",
  "الصين",
  "كولومبيا",
  "جزر القمر",
  "الكونغو",
  "كوستاريكا",
  "كرواتيا",
  "كوبا",
  "قبرص",
  "التشيك",
  "الدنمارك",
  "جيبوتي",
  "دومينيكا",
  "جمهورية الدومينيكان",
  "الإكوادور",
  "مصر",
  "السلفادور",
  "غينيا الاستوائية",
  "إريتريا",
  "إستونيا",
  "إسواتيني",
  "إثيوبيا",
  "فيجي",
  "فنلندا",
  "فرنسا",
  "الغابون",
  "غامبيا",
  "جورجيا",
  "ألمانيا",
  "غانا",
  "اليونان",
  "غرينادا",
  "غواتيمالا",
  "غينيا",
  "غيانا",
  "هايتي",
  "هندوراس",
  "المجر",
  "آيسلندا",
  "الهند",
  "إندونيسيا",
  "إيران",
  "العراق",
  "أيرلندا",
  "إيطاليا",
  "جامايكا",
  "اليابان",
  "الأردن",
  "كازاخستان",
  "كينيا",
  "الكويت",
  "قيرغيزستان",
  "لاوس",
  "لاتفيا",
  "لبنان",
  "ليسوتو",
  "ليبيريا",
  "ليبيا",
  "ليتوانيا",
  "لوكسمبورغ",
  "مدغشقر",
  "مالاوي",
  "ماليزيا",
  "المالديف",
  "مالي",
  "مالطا",
  "موريتانيا",
  "موريشيوس",
  "المكسيك",
  "مولدوفا",
  "منغوليا",
  "الجبل الأسود",
  "المغرب",
  "موزمبيق",
  "ميانمار",
  "ناميبيا",
  "نيبال",
  "هولندا",
  "نيوزيلندا",
  "نيكاراغوا",
  "النيجر",
  "نيجيريا",
  "كوريا الشمالية",
  "النرويج",
  "عُمان",
  "باكستان",
  "بنما",
  "باراغواي",
  "بيرو",
  "الفلبين",
  "بولندا",
  "البرتغال",
  "قطر",
  "رومانيا",
  "روسيا",
  "رواندا",
  "السعودية",
  "السنغال",
  "صربيا",
  "سيشيل",
  "سيراليون",
  "سنغافورة",
  "سلوفاكيا",
  "سلوفينيا",
  "الصومال",
  "جنوب أفريقيا",
  "إسبانيا",
  "سريلانكا",
  "السودان",
  "السويد",
  "سويسرا",
  "سوريا",
  "تايوان",
  "طاجيكستان",
  "تنزانيا",
  "تايلاند",
  "تونس",
  "تركيا",
  "تركمانستان",
  "أوغندا",
  "أوكرانيا",
  "الإمارات العربية المتحدة",
  "المملكة المتحدة",
  "الولايات المتحدة",
  "الأوروغواي",
  "أوزبكستان",
  "فنزويلا",
  "فيتنام",
  "اليمن",
  "زامبيا",
  "زيمبابوي",
];

const ArabicForm = ({ page }) => {
  console.log("Page is ", page);

  const [form, setForm] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    phoneCountry: "",
    email: "",
    country: "",
    reason: "",
    page: page || "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm((prev) => ({ ...prev, page }));
  }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      //   const res = await fetch("/api/patient", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(form),
      //   });

      console.log("base Url is ", base_url);

      const res = await axios.post(
        `${base_url}/api/arabic/createPatient`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await res.data;

      //   if (!res.ok) throw new Error(data.message);

      setMessage("تم إرسال البيانات بنجاح ✅");
      setForm({
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: "",
        phone: "",
        phoneCountry: "",
        email: "",
        country: "",
        reason: "",
      });

       
    router.push("/new123/thankyou#thankyou");

    } catch (err) {
      setMessage(err.message || "حدث خطأ ما");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-20">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md px-4 text-right"
        dir="rtl"
      >
        <h2 className="mb-8  text-[28px] font-semibold text-gray-700">
          معلومات المريض
        </h2>

        <h3 className="mb-4 text-[22px] font-semibold text-gray-600">
          المعلومات الشخصية
        </h3>

        <select
          name="title"
          value={form.title}
          onChange={handleChange}
          className="mb-5 h-12 w-full rounded border border-gray-300 px-4 text-sm"
        >
          <option value="">اللقب *</option>
          <option>السيد</option>
          <option>السيدة</option>
        </select>

        <div className="mb-5 grid grid-cols-2 gap-4">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="h-12 rounded border border-gray-300 px-4 text-sm"
            placeholder="الاسم الأول *"
          />
          <input
            name="middleName"
            value={form.middleName}
            onChange={handleChange}
            className="h-12 rounded border border-gray-300 px-4 text-sm"
            placeholder="الاسم الأوسط"
          />
        </div>

        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          className="mb-5 h-12 w-full rounded border border-gray-300 px-4 text-sm"
          placeholder="الاسم الأخير *"
        />

        <div className="mb-8 grid grid-cols-2 gap-4">
          {/* DOB */}
          <div className="relative">
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="peer h-12 w-full rounded border border-gray-300 bg-white px-4 text-sm focus:border-gray-500 focus:outline-none"
              required
            />
            <label className="absolute right-3 top-1/2 -translate-y-1/2 bg-white px-1 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:text-xs peer-valid:top-0 peer-valid:text-xs">
              تاريخ الميلاد *
            </label>
          </div>

          {/* Gender */}
          <div className="relative">
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="peer h-12 w-full rounded border border-gray-300 bg-white px-4 text-sm focus:border-gray-500 focus:outline-none"
              required
            >
              <option value="" disabled></option>
              <option>ذكر</option>
              <option>أنثى</option>
            </select>
            <label className="absolute right-3 top-1/2 -translate-y-1/2 bg-white px-1 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:text-xs peer-valid:top-0 peer-valid:text-xs">
              الجنس *
            </label>
          </div>
        </div>

        <h3 className="mb-4 text-sm font-semibold text-gray-600">
          معلومات التواصل
        </h3>

        <div className="mb-5 grid grid-cols-2 gap-4">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="h-12 rounded border border-gray-300 px-4 text-sm"
            placeholder="رقم الهاتف المتحرك *"
          />
          <select
            name="phoneCountry"
            value={form.phoneCountry}
            onChange={handleChange}
            className="h-12 rounded border border-gray-300 px-4 text-sm"
          >
            <option value="">الدولة</option>
            {COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mb-5 h-12 w-full rounded border border-gray-300 px-4 text-sm"
          placeholder="البريد الإلكتروني *"
        />

        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className="mb-8 h-12 w-full rounded border border-gray-300 px-4 text-sm"
        >
          <option value="">الدولة *</option>
          {COUNTRIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <h3 className="mb-4 text-sm font-semibold text-gray-600">
          معلومات الزيارة
        </h3>

        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          rows={4}
          className="mb-8 w-full resize-none rounded border border-gray-300 px-4 py-3 text-sm"
          placeholder="سبب الزيارة / المشكلة / الاستفسار *"
        />

        {message && (
          <p className="mb-4 text-center text-sm text-green-600">{message}</p>
        )}

        <div className="flex justify-center">
          <button
            disabled={loading}
            className="rounded-full bg-gray-600 px-12 py-3 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading ? "جاري الإرسال..." : "إرسال"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ArabicForm;
