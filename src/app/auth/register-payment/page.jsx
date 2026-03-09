"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegisterPayment() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const input =
        "w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 outline-none";

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registration submitted with payment proof");
    };
    const handleFileChange = (e) => {
        const f = e.target.files[0];
        if (!f) return;

        setFile(f);
        setPreview(URL.createObjectURL(f));
    };


    return (
        <div className="min-h-screen text-white flex flex-col">

            {/* ===== HERO / FORM SECTION WITH VIDEO BG ===== */}
            <div className="relative overflow-hidden">

                <Header />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                {/* Content */}
                <main className="relative z-10 pt-28 pb-20 px-4 max-w-4xl mx-auto">

                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8">

                        <h1 className="text-3xl font-bold mb-8">Affiliate Registration</h1>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div className="grid md:grid-cols-2 gap-4">
                                <input placeholder="First Name" className={input} required />
                                <input placeholder="Last Name" className={input} required />
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                <select className={input}>
                                    <option value="+91">+91 (India)</option>
                                    <option value="+1">+1 (USA / Canada)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+971">+971 (UAE)</option>
                                    <option value="+61">+61 (Australia)</option>
                                    <option value="+49">+49 (Germany)</option>
                                    <option value="+33">+33 (France)</option>
                                    <option value="+65">+65 (Singapore)</option>
                                    <option value="+977">+977 (Nepal)</option>
                                    <option value="+880">+880 (Bangladesh)</option>
                                    <option value="+92">+92 (Pakistan)</option>
                                    <option value="+94">+94 (Sri Lanka)</option>
                                </select>

                                <input placeholder="Contact No" className={`${input} md:col-span-2`} />
                            </div>

                            <input placeholder="Email" className={input} required />

                            <div className="grid md:grid-cols-2 gap-4">
                                <input placeholder="Password" type="password" className={input} />
                                <input placeholder="Confirm Password" type="password" className={input} />
                            </div>

                            {/* Plan Info */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <input value="Equity $2500" disabled className={input} />
                                <input value="Fee $40" disabled className={input} />
                            </div>

                            <select className={input}>
                                <option>TRC-20 USDT</option>
                                <option>BEP-20 USDT</option>
                            </select>

                            {/* Wallet */}
                            <div className="flex gap-3">
                                <input
                                    value="TEFagpjQ9pHZgZ8RRFKoZkZCSBXXwc6ST3"
                                    readOnly
                                    className={input}
                                />
                                <button
                                    type="button"
                                    className="px-4 rounded-lg bg-white/10 hover:bg-white/20"
                                    onClick={() =>
                                        navigator.clipboard.writeText(
                                            "TEFagpjQ9pHZgZ8RRFKoZkZCSBXXwc6ST3"
                                        )
                                    }
                                >
                                    Copy
                                </button>
                            </div>

                            {/* QR */}
                            <div>
                                <p className="mb-3 text-white/70">QR Code Payment</p>
                                <div className="bg-white p-4 rounded-lg w-48">
                                    <img src="/QR.png" alt="qr" />
                                </div>
                            </div>

                            {/* Upload Proof */}
                            <div>
                                <p className="mb-3 text-white/70">Upload Payment Proof</p>

                                {!preview ? (
                                    <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-white/20 rounded-xl p-8 cursor-pointer hover:border-green-400 transition bg-black/30">
                                        <span className="text-sm text-white/60">
                                            Click to upload or drag & drop
                                        </span>
                                        <span className="text-xs text-white/40">
                                            PNG, JPG, JPEG up to 5MB
                                        </span>

                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                ) : (
                                    <div className="relative border border-white/15 rounded-xl p-4 bg-black/30">
                                        <img
                                            src={preview}
                                            alt="preview"
                                            className="max-h-56 rounded-lg mx-auto"
                                        />

                                        <div className="flex justify-between items-center mt-3 text-sm text-white/70">
                                            <span className="truncate">{file?.name}</span>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFile(null);
                                                    setPreview(null);
                                                }}
                                                className="text-red-400 hover:text-red-300"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>


                            <button className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold">
                                Signup
                            </button>

                        </form>
                    </div>

                </main>
            </div>

            {/* ===== FOOTER — NO VIDEO BG ===== */}
            <Footer />

        </div>
    );
}
