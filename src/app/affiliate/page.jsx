"use client";

import { motion } from "framer-motion";
import {
    DollarSign,
    Users,
    BarChart3,
    ShieldCheck,
    CheckCircle2,
    Zap,
    Gift,
    Clock,
    Globe,
    Star
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthRegisterForm from "@/components/AuthRegisterForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTA from "@/components/CTA";

export default function AffiliatePage() {
    return (
        <div className="min-h-screen flex flex-col text-white bg-black">
            <Header />

            {/* ====================== HERO SECTION ====================== */}
            <section className="relative flex-grow flex items-center justify-center overflow-hidden ">
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
                    >
                        Earn Big with NextEra <span className="text-green-400">Affiliate Program</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        Invite traders to the next generation trading platform and earn up to <span className="text-green-400 font-semibold">30% lifetime commission</span> on every referral. No cap, no hidden terms — just real rewards for real growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link
                            href="/auth/register-payment"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold text-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-xl shadow-green-500/30"
                        >
                            Become an Affiliate Now
                            <Zap className="h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ====================== OVERVIEW ====================== */}
            <section className="py-12 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="text-center mb-12"
                    >
                        <motion.h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Our Affiliate Program at a Glance
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/70 max-w-2xl mx-auto"
                        >
                            Join thousands of affiliates already earning passive income with NextEra Trade.
                        </motion.p>
                    </motion.div>

                    {/* Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="grid md:grid-cols-4 gap-8"
                    >
                        {[
                            { icon: DollarSign, value: "30%", label: "Lifetime Commission" },
                            { icon: Users, value: "Unlimited", label: "Referrals" },
                            { icon: Clock, value: "Monthly", label: "Payouts" },
                            { icon: BarChart3, value: "Real-Time", label: "Tracking" },
                        ].map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={{
                                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                                    show: { opacity: 1, y: 0, scale: 1 }
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="group bg-gray-900/50 border border-gray-800 rounded-2xl px-6 py-3 text-center backdrop-blur-sm hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all"
                            >

                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 180, damping: 12 }}
                                >
                                    <stat.icon className="h-10 w-10 mx-auto mb-6 text-green-400 group-hover:text-green-300 transition" />
                                </motion.div>

                                {/* Value */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-2xl font-semibold mb-2"
                                >
                                    {stat.value}
                                </motion.div>

                                {/* Label */}
                                <p className="text-gray-400 group-hover:text-gray-300 transition">
                                    {stat.label}
                                </p>

                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ====================== AFFILIATE BENEFITS ====================== */}
            <section className="py-16 bg-black">
                <div className="max-w-8xl mx-auto px-6 lg:px-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
                        Affiliate <span className="text-green-400">Benefits</span>
                    </h2>

                    <p className="text-center text-white/70 max-w-2xl mx-auto mb-16">
                        Explore the key advantages of joining our affiliate program — earn commissions,
                        grow your network, and unlock long-term income opportunities.
                    </p>


                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Zap, title: "High Conversions", desc: "Our platform converts visitors at industry-leading rates" },
                            { icon: BarChart3, title: "Real-Time Dashboard", desc: "Track clicks, signups, and earnings instantly" },
                            { icon: Gift, title: "Marketing Assets", desc: "Banners, links, emails & social media templates provided" },
                            { icon: ShieldCheck, title: "Reliable Payments", desc: "Monthly payouts via bank, crypto, or PayPal" },
                        ].map((benefit, i) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-green-500/40 hover:shadow-green-500/10 transition-all"
                            >
                                <benefit.icon className="h-10 w-10 text-green-400 mb-6" />
                                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====================== WHY CHOOSE US ====================== */}
            <section className="py-16 bg-black">
                <div className="max-w-8xl mx-auto px-6 lg:px-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
                        Why Choose NextEra <span className="text-green-400">Affiliate Program</span>?
                    </h2>

                    <p className="text-center text-white/70 max-w-2xl mx-auto mb-16">
                        Partner with NextEra to unlock high earning potential, transparent payouts,
                        dedicated support, and a performance-driven affiliate ecosystem built for growth.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Lifetime Commissions", desc: "Earn 30% on every trade your referrals make — forever" },
                            { title: "No Caps or Limits", desc: "Refer as many people as you want, earn without restrictions" },
                            { title: "Fast & Transparent Payouts", desc: "Monthly payouts with detailed reports and no hidden fees" },
                            { title: "Dedicated Support", desc: "Personal affiliate manager + priority support" },
                            { title: "High Converting Platform", desc: "Modern design, fast execution, and strong trust signals" },
                            { title: "Marketing Materials Ready", desc: "Professional banners, videos, emails & social content" },
                        ].map((why, i) => (
                            <motion.div
                                key={why.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-green-500/40 transition-all"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-green-400">{why.title}</h3>
                                <p className="text-gray-300">{why.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className=" bg-black">
                <div className="max-w-8xl mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* LEFT: Heading + Paragraph */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                                Ready to <span className="text-green-400">Start Earning</span>?
                            </h2>

                            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-8">
                                Register now and get your unique referral link in minutes. Start inviting traders and earn up to 30% lifetime commissions — no caps, no hassle.
                                Track your performance with real-time dashboards, enjoy fast payouts, and benefit from dedicated affiliate support designed to help you scale faster.
                            </p>


                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-gray-900/80 to-black/90 border border-green-500/30 rounded-2xl p-6 md:p-8 shadow-xl shadow-green-500/10 backdrop-blur-sm max-w-md mx-auto lg:mx-0"
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                        <DollarSign className="h-6 w-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Why Join Now?</h3>
                                        <p className="text-gray-400 text-sm">Limited spots for early affiliates</p>
                                    </div>
                                </div>

                                <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                                        <span>30% recurring commission for life</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                                        <span>Real-time earnings dashboard</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                                        <span>Free marketing materials + support</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                                        <span>No minimum payout threshold</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                        {/* RIGHT: Form */}
                        <div className="">
                            <AuthRegisterForm
                                title="Affiliate Registration"
                                subtitle="Join our affiliate program and start earning commissions"
                                buttonText="Create Affiliate Account"
                                redirectText="Already an affiliate?"
                                redirectLink="/auth/login"
                                redirectLabel="Login"
                                variant="register"
                                showPhone={true}
                                showName={true}
                            />
                        </div>

                    </div>
                </div>
            </section>
            <TestimonialsSection />
            <CTA />
            <Footer />
        </div>
    );
}