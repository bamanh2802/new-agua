"use client";
import "./BgAndNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslations, useLocale } from "next-intl";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

const BgAndNavbar = () => {
  const g = useTranslations("Global");
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Đảm bảo chỉ chạy trên client (tránh lỗi hydration)
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Tránh render trên server

  return (
    <div className="bg-container">
      <div className="bg-overlay"></div>

      <nav className="navbar">
        <Link className="navbar-brand" href={`/${locale}/`}>
          <img src="/assets/AGUA Logo_Color.png" alt="Logo" width="170" />
        </Link>

        {/* Nút mở menu */}
        <div className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} className="h-8 w-8 text-white cursor-pointer" />
        </div>

        {/* Menu chính (Desktop) */}
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link" href={`/${locale}/`}>{g("homePage")}</Link></li>
          <li className="nav-item"><Link className="nav-link" href={`/${locale}/aboutus`}>{g("aboutUs")}</Link></li>
          <li className="nav-item"><Link className="nav-link" href={`/${locale}/aguastory`}>{g("aguaStory")}</Link></li>
          <li className="nav-item"><Link className="nav-link" href={`/${locale}/news`}>{g("news")}</Link></li>
          <li className="nav-item"><Link className="nav-link" href={`/${locale}/contact`}>{g("contact")}</Link></li>
        </ul>
      </nav>

      {/* Overlay khi mở menu */}
      {menuOpen && <div className="offcanvas-overlay show" onClick={() => setMenuOpen(false)}></div>}

      {/* Offcanvas menu */}
      <div className={`offcanvas-menu ${menuOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="offcanvas-content">
          <ul className="nav-canvas flex-column">
            <li className="nav-item">
              <Link className="nav-link" href={`/${locale}/`} onClick={() => setMenuOpen(false)}>
                {g("homePage")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${locale}/aboutus`} onClick={() => setMenuOpen(false)}>
                {g("aboutUs")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${locale}/news`} onClick={() => setMenuOpen(false)}>
                {g("news")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${locale}/contact`} onClick={() => setMenuOpen(false)}>
                {g("contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="content-bg">
        <h1 className="animate-fade-down">{t("titleHero")}</h1>
        <p className="animate-fade-down">{t("descHero")}</p>
        <Link className="contact-btn config animate-slide-left" href={`/${locale}/register`}>
          <UserPlusIcon className="contact-icon-bg" />
          {t("registerHero")}
        </Link>
      </div>
    </div>
  );
};

export default BgAndNavbar;
