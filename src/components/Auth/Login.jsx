"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../context/auth";
import { useState } from "react";
import { base_url } from "../Helper/helper";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [auth, setAuth] = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const formdata = {
        identifier: formData.email,
        password: formData.password,
      };

      const response = await axios.post(`${base_url}/api/auth/login`, formdata);
      if (response.data) {
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(response.data));
        setFormData({ email: "", password: "" });
        router.push("/");
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-[#fff5ff] mx-auto m-4 border border-[#7747ff] border-dashed">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Welcome back to <span className="text-[#7747ff]">Daily News</span>
      </div>

      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        Log in to your account
      </div>

      {err && (
        <div className="text-sm text-red-600 text-center mb-2">
          Invalid email or password
        </div>
      )}

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="block relative">
          <label
            htmlFor="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>

        <div className="block relative">
          <label
            htmlFor="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>

      <div className="text-sm text-center mt-[1.6rem]">
        Don’t have an account yet?{" "}
        <a className="text-sm text-[#7747ff]" href="/register">
          Sign up for free!
        </a>
      </div>
    </div>
  );
};

export default Login;
