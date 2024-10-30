"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-10 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={118}
            height={18}
            className="w-[80px] md:w-[118px] h-auto"
          />
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-black text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="border rounded-full px-3 py-1 text-white transition duration-300 bg-black text-xs"
          />
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden"
            >
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-black text-2xl"
              >
                <FaTimes />
              </button>

              <CustomButton
                title="Sign in"
                btnType="button"
                containerStyles="border rounded-full px-3 py-1 text-white transition duration-300 bg-black text-xs mt-10"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
