"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dummyEmail = "test@gmail.com";
    const dummyPassword = "12345";

    if (email.trim().toLowerCase() === dummyEmail && password === dummyPassword) {
      localStorage.setItem("token", "dummy-token-" + Date.now());
      localStorage.setItem("user", JSON.stringify({
        name: "Test User",
        email: dummyEmail,
        phone: "+91 78801 70012",
        joinDate: "Feb 19, 2025",
        referralLink: "https://nexeratrade.com/ref/test123",
        totalReferrals: 12,
        totalEarnings: 458.75,
        commissionRate: 30,
      }));

      window.dispatchEvent(new Event("storage"));

      router.push("/");
    } else {
      setError("Invalid email or password. Try test@gmail.com / 12345");
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-white bg-black">

      <div className="relative overflow-hidden">

        <Header />
        <div className="relative z-10 py-8">

          <main className="flex items-center justify-center px-4 pt-24 pb-20">
            <div className="w-full max-w-md">

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 md:p-10">

                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold">Login</h1>
                  <p className="text-white/60 text-sm mt-2">
                    Access your account
                  </p>
                </div>

                {error && (
                  <p className="text-red-400 text-center mb-6">{error}</p>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>

                  <div>
                    <label className="text-sm text-white/70 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-white/70 block mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/60"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-white/70">
                      <input type="checkbox" className="accent-green-500" />
                      Remember me
                    </label>

                    <Link
                      href="/auth/forgot-password"
                      className="text-green-400 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold">
                    Login
                  </button>

                  <p className="text-center text-sm text-white/60 pt-2">
                    Don’t have an account?{" "}
                    <Link href="/auth/register" className="text-green-400 underline">
                      Register
                    </Link>
                  </p>

                </form>
              </div>
            </div>
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
}