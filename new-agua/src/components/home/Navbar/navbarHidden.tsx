"use client";
import React, { useEffect, useRef } from "react";
import "./navbarHidden.css"; // Import CSS nếu có
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLElement | null>(null);
  const g = useTranslations("Global");
  const locale = useLocale(); // Lấy ngôn ngữ hiện tại

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 100) {
          navbarRef.current.style.top = "0";
          navbarRef.current.style.opacity = "1";
        } else {
          navbarRef.current.style.top = "-60px";
          navbarRef.current.style.opacity = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="hidden-navbar">
      <div className="container">
        <img src="/assets/AGUA Logo_Color.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link href={`/${locale}/`}>{g("homePage")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/aboutus`}>{g("aboutUs")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/aguastory`}>{g("aguaStory")}</Link>
          </li>
          <li>
            <Link href={`/${locale}`}>{g("news")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/contact`}>{g("contact")}</Link>
          </li>
        </ul>
        <Link href={`/${locale}`} className="register-btn">
          {g("register")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
