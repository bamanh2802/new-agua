import "./BgAndNavbar.css";
import { useTranslations, useLocale } from "next-intl";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const BgAndNavbar = () => {
  const g = useTranslations("Global");
  const t = useTranslations("HomePage");
  const locale = useLocale(); // Lấy ngôn ngữ hiện tại

  return (
    <div className="bg-container">
      <div className="bg-overlay"></div>

      <nav className="navbar">
        <Link className="navbar-brand" href={`/${locale}/`}>
          <img src="/assets/AGUA Logo_Color.png" alt="Logo" width="170" />
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" href={`/${locale}/`}>
              {g("homePage")}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={`/${locale}/aboutus`}>
              {g("aboutUs")}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={`/${locale}`}>
              {g("aguaStory")}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={`/${locale}`}>
              {g("news")}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={`/${locale}`}>
              {g("contact")}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="content-bg">
        <h1 className="animate-fade-down">{t("titleHero")}</h1>
        <p className="animate-fade-down">{t("descHero")}</p>
        <Link className="contact-btn config animate-slide-left" href={`/${locale}`}>
          <UserPlusIcon className="contact-icon-bg" />
          {t("registerHero")}
        </Link>
      </div>
    </div>
  );
};

export default BgAndNavbar;
