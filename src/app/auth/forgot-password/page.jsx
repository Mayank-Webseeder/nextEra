"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none placeholder:text-white/60";

  return (
    <div className="min-h-screen flex flex-col text-white bg-black">

      {/* ===== VIDEO SECTION ===== */}
      <div className="relative overflow-hidden">

        <Header />

        {/* Content */}
        <div className="relative z-10 py-8">

          <main className="flex items-center justify-center px-4 pt-24 pb-16">
            <div className="w-full max-w-md">

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 md:p-10">

                {!submitted ? (
                  <>
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold">Forgot Password</h1>
                      <p className="text-white/60 text-sm mt-2">
                        Enter your email to receive reset link
                      </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className={inputClass}
                      />

                      <button className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold">
                        Send Reset Link
                      </button>

                      <p className="text-center text-sm text-white/60">
                        Remember your password?{" "}
                        <Link
                          href="/auth/login"
                          className="text-green-400 underline"
                        >
                          Back to Login
                        </Link>
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-green-400">
                      Check Your Email
                    </h2>
                    <p className="text-white/60 text-sm">
                      We’ve sent a password reset link to your email address.
                    </p>

                    <Link
                      href="/auth/login"
                      className="inline-block mt-4 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold"
                    >
                      Back to Login
                    </Link>
                  </div>
                )}

              </div>
            </div>
          </main>

        </div>
      </div>

      {/* ===== FOOTER — DIRECT, NO BG WRAPPER ===== */}
      <Footer />

    </div>
  );
}
