"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Ferme le menu lorsque l'utilisateur clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
        {/* Logo avec ajustement pour mobile */}
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={118}
            height={18}
            className="w-[80px] md:w-[118px] h-auto"
          />
        </Link>

        {/* Bouton Hamburger pour mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-black text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu principal (visible uniquement sur écrans moyens et plus) */}
        <div className="hidden md:flex items-center">
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="border rounded-full px-3 py-1 text-white transition duration-300 bg-black text-xs"
          />
        </div>

        {/* Menu mobile (visible uniquement si `isMobileMenuOpen` est vrai) */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden"
          >
            <CustomButton
              title="Sign in"
              btnType="button"
              containerStyles="border rounded-full px-3 py-1 text-white transition duration-300 bg-black text-xs"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
