"use client";

import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Plans() {
  const router = useRouter();

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "25 AI requests/month",
        "Basic stock data",
        "5 price alerts",
        "AI stock analysis",
        "Trade plan generation",
      ],
      cta: "Get Started",
    },
    {
      name: "Basic",
      price: "$9.99",
      old: "$14.99",
      period: "/month",
      badge: "Most Popular",
      highlight: true,
      features: [
        "50 AI requests/month",
        "Full AI chat",
        "All stock data",
        "50 price alerts",
        "Trade plan generation",
      ],
      cta: "Subscribe",
    },
    {
      name: "Pro",
      price: "$29.99",
      old: "$49.99",
      period: "/month",
      features: [
        "150 AI requests/month",
        "Full AI chat",
        "Advanced analysis",
        "200 price alerts",
        "Priority support",
      ],
      cta: "Subscribe",
    },
    {
      name: "Ultimate",
      price: "$99.99",
      old: "$199.99",
      period: "/month",
      badge: "Best Value",
      highlight: true,
      features: [
        "1,000 AI requests/month",
        "Everything in Pro",
        "Custom AI personalities",
        "API access",
        "Dedicated support",
      ],
      cta: "Subscribe",
    },
  ];

  return (
    <section id="our-plans" className="relative py-12 px-4 bg-black overflow-hidden">

      <div className="relative max-w-8xl mx-auto px-4">

        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-semibold text-white mt-4">
            Flexible Plans for <span className="text-green-400">Every Trader</span>
          </h2>
          <p className="text-white/60 mt-3">
            Choose the plan that fits your trading style
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl p-8 flex flex-col backdrop-blur-xl border transition
              ${
                plan.highlight
                  ? "bg-green-500/10 border-green-400/60 shadow-lg shadow-green-500/10"
                  : "bg-white/5 border-white/10"
              }`}
            >

              {/* Badge */}
              {plan.badge && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-green-500 text-black font-semibold"
                >
                  {plan.badge}
                </motion.div>
              )}

              <h3 className="text-xl font-semibold mb-4 text-white">
                {plan.name}
              </h3>

              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/60">{plan.period}</span>
                </div>

                {plan.old && (
                  <div className="text-white/40 line-through text-sm mt-1">
                    {plan.old}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 text-sm text-white/85">
                {plan.features.map((f, idx) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-green-400 mt-0.5" />
                    {f}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => router.push("/auth/register-payment")}
                className={`mt-auto w-full py-3 rounded-lg font-semibold transition
                ${
                  plan.highlight
                    ? "bg-green-500 hover:bg-green-400 text-black"
                    : "border border-white/15 hover:bg-white/10 text-white"
                }`}
              >
                {plan.cta}
              </motion.button>

            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          Save 17% with annual billing • Trading involves risk • Cancel anytime
        </motion.p>

      </div>
    </section>
  );
}
