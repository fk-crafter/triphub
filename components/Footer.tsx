"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      ref={ref}
      className="flex flex-col text-gray-700 mt-5 border-t border-gray-200"
    >
      <motion.div
        className="flex flex-wrap justify-between gap-10 sm:px-16 px-6 py-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col items-start gap-4 w-full sm:w-auto"
          variants={fadeUpVariants}
          transition={{ delay: 0.1 }}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={24}
            className="object-contain"
          />
          <p className="text-sm max-w-xs leading-6">
            TripHub is a complete solution for your travels and discoveries,
            offering special deals and a personalized experience.
          </p>
          <p className="text-sm">&copy; 2024 TripHub. All rights reserved.</p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-10 w-full sm:w-auto"
          variants={fadeUpVariants}
          transition={{ delay: 0.2 }}
        >
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <ul className="flex flex-col gap-2">
                {item.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="text-sm text-gray-500 hover:text-gray-800 transition"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 w-full sm:w-auto"
          variants={fadeUpVariants}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold">Stay up to date</h3>
          <p className="text-sm text-gray-500">
            Receive updates on news, promotions, and exclusive offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-between items-center flex-wrap border-t border-gray-200 sm:px-16 px-6 py-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ delay: 0.4 }}
      >
        <p className="text-xs text-gray-500">
          &copy; 2024 TripHub. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-gray-500">
          <Link href="/" className="hover:text-gray-800 transition">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-gray-800 transition">
            Terms & Conditions
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
