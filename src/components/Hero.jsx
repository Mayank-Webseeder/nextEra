"use client";

import { useEffect, useState, useRef } from "react";
import { FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

function LiveMarketData() {
  const [marketData, setMarketData] = useState([
    {
      symbol: "SPY",
      name: "S&P 500 ETF",
      price: 681.75,
      change: 0.48,
      changePercent: 0.07,
      timestamp: "02/13 04:00 PM ET",
    },
    {
      symbol: "QQQ",
      name: "NASDAQ 100 ETF",
      price: 601.92,
      change: 1.28,
      changePercent: 0.21,
      timestamp: "02/13 04:00 PM ET",
    },
    {
      symbol: "BTCUSDT",
      name: "Bitcoin / USDT",
      price: 105432.15,
      change: 1245.80,
      changePercent: 1.20,
      timestamp: "Live",
    },
    {
      symbol: "ETHUSDT",
      name: "Ethereum / USDT",
      price: 4289.50,
      change: -32.10,
      changePercent: -0.74,
      timestamp: "Live",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full rounded-xl border border-white/20 bg-[#0f0f17] backdrop-blur shadow-2xl"
    >
      <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-gray-950 to-black border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
            <FaChartLine className="text-green-400 text-xl" />
          </div>

          <h3 className="text-lg font-semibold text-white">
            Live Market Data
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm text-green-400 font-medium">
            Real-time
          </span>
        </div>
      </div>

      <div className="divide-y divide-gray-800/50">
        {marketData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="px-5 py-5 hover:bg-gray-900/30 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-white font-medium text-base">
                  {item.symbol} • {item.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {item.timestamp}
                </div>
              </div>

              <div className="text-right">
                <div className="text-xl font-semibold text-white">
                  $
                  {item.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <div
                  className={`text-sm font-medium mt-1 ${
                    item.change >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.change >= 0 ? "+" : ""}
                  {item.change.toFixed(2)} (
                  {item.change >= 0 ? "+" : ""}
                  {item.changePercent.toFixed(2)}%)
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="px-5 py-3 bg-black/60 text-center text-xs text-gray-500 border-t border-gray-800">
        Powered by real-time market data
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const words = ["Alpha", "Signal", "Profit"];
  const tickerRef = useRef(null);

  const features = [
    {
      title: "Fast Exec",
      desc: "ms orders",
      Icon: FaBolt,
    },
    {
      title: "Signals",
      desc: "AI alerts",
      Icon: FaChartLine,
    },
    {
      title: "Secure",
      desc: "Protected",
      Icon: FaShieldAlt,
    },
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let interval;
    let timeout;

    const currentWord = words[wordIndex];
    let charIndex = 0;

    interval = setInterval(() => {
      if (charIndex < currentWord.length) {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        charIndex++;
        setIsTyping(true);
      } else {
        clearInterval(interval);
        setIsTyping(false);

        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setDisplayed("");
          setIsTyping(true);
        }, 900);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [wordIndex]);

  useEffect(() => {
    if (!tickerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
        { proName: "BINANCE:ETHUSDT", title: "ETH/USDT" },
        { proName: "BINANCE:SOLUSDT", title: "SOL/USDT" },
        { proName: "NASDAQ:NVDA", title: "NVDA" },
        { proName: "NASDAQ:AAPL", title: "AAPL" },
        { proName: "SP:SPX", title: "S&P 500" },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    tickerRef.current.innerHTML = "";
    tickerRef.current.appendChild(script);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen text-white overflow-hidden overflow-x-hidden bg-black"
    >

      {/* Main content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-10 pt-20 sm:pt-24 pb-20 md:pb-24 grid xl:grid-cols-2 gap-8 xl:gap-12 items-center min-h-[calc(100vh-120px)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl w-full mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight">
            Build Your Trading Edge With{" "}
            <span className="text-green-400">
              {displayed}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed">
            Analyze live markets with advanced charts, automated signals,
            and ultra-fast execution engine. Make confident decisions with
            institutional-grade trading tools built for modern traders.
            Track opportunities in real time, manage risk with smart controls,
            and execute strategies faster than ever — all from a single,
            powerful trading dashboard designed for speed and precision.
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/70">
            <div>✔ Real-time price feeds</div>
            <div>✔ 100+ technical indicators</div>
            <div>✔ One-click buy & sell</div>
            <div>✔ Smart risk controls</div>
          </div>

          <div className="mt-7 flex flex-wrap gap-6 sm:gap-8 text-sm">
            <div>
              <div className="text-green-400 font-bold text-lg sm:text-xl">
                2M+
              </div>
              <div className="text-white/60">Active Traders</div>
            </div>
            <div>
              <div className="text-green-400 font-bold text-lg sm:text-xl">
                $12B+
              </div>
              <div className="text-white/60">Monthly Volume</div>
            </div>
            <div>
              <div className="text-green-400 font-bold text-lg sm:text-xl">
                120+
              </div>
              <div className="text-white/60">Markets</div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact-us"
              className="px-6 sm:px-8 py-3 rounded-md border border-white/25 hover:bg-white/10 transition inline-block"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-5 mt-3"
        >
          <LiveMarketData />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((f, i) => {
              const Icon = f.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-xl border border-white/15 bg-white/10 backdrop-blur p-3 hover:bg-white/15 hover:border-green-400/40 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-green-400/15 border border-green-400/30 flex items-center justify-center">
                      <Icon className="text-green-400 text-base" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{f.title}</div>
                      <div className="text-xs text-white/70">{f.desc}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/80">
        <div className="tradingview-widget-container" ref={tickerRef}>
          <div className="tradingview-widget-container__widget" />
        </div>
      </div>
    </section>
  );
}