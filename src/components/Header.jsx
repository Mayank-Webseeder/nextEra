"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiUserCircle } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userName, setUserName] = useState("");

  const menuRef = useRef(null);
  const profileRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check login state
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      setIsLoggedIn(true);

      if (user) {
        try {
          const parsedUser = JSON.parse(user);
          setUserName(
            parsedUser.name ||
            parsedUser.email?.split("@")[0] ||
            "User"
          );
        } catch {
          setUserName("");
        }
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }

      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-full px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-white">
              NextEra
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              <Link href="/#hero" className="text-white hover:text-green-400">
                Home
              </Link>

              <Link href="/about-us" className="text-white hover:text-green-400">
                About
              </Link>

              <Link href="/#our-plans" className="text-white hover:text-green-400">
                Our Plans
              </Link>

              <Link href="/#testimonials" className="text-white hover:text-green-400">
                Testimonials
              </Link>

              <Link href="/contact-us" className="text-white hover:text-green-400">
                Contact Us
              </Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center">

              {isLoggedIn ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() =>
                      setShowProfileMenu(!showProfileMenu)
                    }
                  >
                    <HiUserCircle className="h-10 w-10 text-white" />
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-3 w-56 bg-gray-900 rounded-lg shadow-lg">

                      <div className="px-4 py-3 border-b border-gray-700 text-white">
                        {userName}
                      </div>

                      <Link
                        href="/profile"
                        className="block px-4 py-3 text-white hover:bg-gray-800"
                      >
                        Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-red-400 hover:bg-gray-800"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/auth/login"
                  className="px-4 py-1.5 rounded-md border border-green-400 text-green-400 hover:text-white transition"
                >
                  Login / Register
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                className="md:hidden ml-3 text-white mb-1"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <HiX className="h-7 w-7" />
                ) : (
                  <HiMenu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black border-t border-white/10"
        >
          <nav className="flex flex-col items-center gap-6 py-8">

            <Link href="/#hero" onClick={toggleMenu} className="text-white text-lg">
              Home
            </Link>

            <Link href="/about-us" onClick={toggleMenu} className="text-white text-lg">
              About
            </Link>

            <Link href="/#our-plans" onClick={toggleMenu} className="text-white text-lg">
              Our Plans
            </Link>

            <Link href="/#testimonials" onClick={toggleMenu} className="text-white text-lg">
              Testimonials
            </Link>

            <Link href="/contact-us" onClick={toggleMenu} className="text-white text-lg">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}