"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { base_url, base_url1 } from "../Helper/helper";

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false, // ✅ added for checkbox
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!formData.agree) {
      setErrorMsg("You must agree to the terms before registering.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${base_url1}/api/users/register`, formData);
      setSuccessMsg("Registration successful!");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      if (error.response?.status === 500) {
        setErrorMsg("Server error. Please try again later.");
      } else {
        setErrorMsg(error.response?.data?.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-md mx-auto p-4 bg-[#fff5ff] border border-dashed border-[#7747ff] rounded-md text-black">
        <div className="text-2xl font-bold mb-4 text-[#1e0e4b] text-center">
          Get updated to <span className="text-[#7747ff]">Daily News</span>
        </div>

        {errorMsg && (
          <div className="text-red-600 text-sm text-center mb-2">{errorMsg}</div>
        )}
        {successMsg && (
          <div className="text-green-600 text-sm text-center mb-2">{successMsg}</div>
        )}

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1 text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded p-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded p-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-600">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded p-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border rounded p-2 text-sm"
            />
          </div>

          {/* ✅ New checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm text-gray-700">
              I agree to receive communication regarding various offers and products
              through Call, Email, SMS, Whatsapp, etc. from{" "}
              <strong>dailynewzmail.com</strong> & its partners.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#7747ff] text-white px-6 py-2 rounded text-sm mt-2 hover:bg-[#5a2aff] transition"
          >
            {loading ? "Registering..." : "Submit"}
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a className="text-[#7747ff]" href="/login">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
