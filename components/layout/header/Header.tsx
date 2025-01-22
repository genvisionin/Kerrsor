"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeSwitch from "@/components/elements/ThemeSwitch";
import MobileMenu from "../MobileMenu";
import Search from "../Search";
import OffCanvas from "../OffCanvas";

interface NavigationItem {
  id: string;
  label: string;
}

const Header: React.FC = ({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffCanvas,
  handleOffCanvas,
}: any) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const navigationItems: NavigationItem[] = [
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
    <div className="mt-10">
      <div className="flex gap-4">
            <div>hi</div>
            <div>hi</div>
          </div>
      <div
        className={`w-full z-50 ${
          scroll ? "fixed top-0" : "relative"
        } bg-white shadow-md`}>
        <div className=" px-4 md:px-8">
          {/* Flex container for header */}

          <div className="flex gap-4">
            <div>hi</div>
            <div>hi</div>
          </div>

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="assets/imgs/template/favicon.svg"
              alt="snapzo"
              className="h-8 w-8"
            />
            <span className="font-bold text-xl">Snapzo</span>
          </Link>

          {/* Navigation Section */}
          <div className="mt-10">
            <ul className="flex gap-16">
              {navigationItems.map(({ id, label }) => (
                <li key={id} className=" ">
                  <Link
                    href={`/#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className={` ${
                      activeSection === id ? "text-primary" : "text-gray-800"
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                      activeSection === id ? "after:scale-x-100" : ""
                    }`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Buttons Section */}
            <div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
              {/* Search Button */}
              <button onClick={handleSearch} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    className="stroke-dark"
                    d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Theme Switch */}
              <ThemeSwitch />

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden border rounded-3 p-2"
                onClick={handleMobileMenu}>
                <div className="w-6 h-4 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-current" />
                  <span className="w-full h-0.5 bg-current" />
                  <span className="w-full h-0.5 bg-current" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <OffCanvas handleOffCanvas={handleOffCanvas} isOffCanvas={isOffCanvas} />
      <Search isSearch={isSearch} handleSearch={handleSearch} />
      <MobileMenu
        handleMobileMenu={handleMobileMenu}
        isMobileMenu={isMobileMenu}
      />
    </div>
  );
};

export default Header;
