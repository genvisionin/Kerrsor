"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
  const [isAccordion, setIsAccordion] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  const navigationItems = [
    { id: "services", label: "Services" },
    { id: "industry", label: "Industry" },
    { id: "research", label: "Research Papers" },
    { id: "pricing", label: "Pricing" },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navigationItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ): void => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
        isMobileMenu ? "sidebar-visible" : ""
      }`}>
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-logo">
          <Link
            className="navbar-brand d-flex main-logo align-items-center"
            href="/home-2">
            <img
              src="assets/kerrsor.png"
              alt="infinia"
              style={{ width: "150px", height: "auto" }}
            />
          </Link>
          <div
            className={`burger-icon burger-icon-white border rounded-3 ${
              isMobileMenu ? "burger-close" : ""
            }`}
            onClick={handleMobileMenu}>
            <span className="burger-icon-top" />
            <span className="burger-icon-mid" />
            <span className="burger-icon-bottom" />
          </div>
        </div>
        <div className="mobile-header-content-area">
          <nav>
            <ul className="mobile-menu font-heading ps-0" style={{ listStyleType: "none" }}>
              {navigationItems.map(({ id, label }, index) => (
                <li
                  key={id}
                  className={`has-children ${
                    isAccordion === index ? "active" : ""
                  }`}>
                  <span
                    className="menu-expand"
                    onClick={() =>
                      setIsAccordion((prev) => (prev === index ? null : index))
                    }>
                    <i className="arrow-small-down"></i>
                  </span>
                  <Link
                    href={`/#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className={`fw-bold ${
                      activeSection === id ? "text-primary" : "text-gray-800"
                    }`}
                    style={{ fontSize: "20px", display: "block", marginBottom: "10px" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
