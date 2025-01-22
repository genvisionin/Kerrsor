"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import WOW from "wow.js";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Footer4 from "./footer/Footer4";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Header5 from "./header/Header5";

interface LayoutProps {
  headerStyle?: Number;
  footerStyle?: Number;
  children?: React.ReactNode;
  breadcrumbTitle?: string;
}

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const handleMobileMenu = (): void => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  };

  // Search
  const [isSearch, setSearch] = useState<boolean>(false);
  const handleSearch = (): void => setSearch(!isSearch);

  // OffCanvas
  const [isOffCanvas, setOffCanvas] = useState<boolean>(false);
  const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas);

  useEffect(() => {
    // Check if 'window' is defined to ensure code runs only on the client side
    if (typeof window !== "undefined") {
      // Dynamically import 'wow.js' only on the client side
      import("wow.js").then((module) => {
        const WOW = module.default;
        const WOWInstance = new WOW({ live: false });
        WOWInstance.init();
      });

      // Initialize AOS
      AOS.init();

      const handleScroll = () => {
        const scrollCheck = window.scrollY > 100;
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scroll]);
  return (
    <>
      <div id="top" />
      {!headerStyle && (
        <Header5
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
        />
      )}
      {headerStyle == 1 ? (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
        />
      ) : null}
      {headerStyle == 2 ? (
        <Header2
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
        />
      ) : null}
      {headerStyle == 3 ? (
        <Header3
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
        />
      ) : null}
      {headerStyle == 4 ? (
        <Header4
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
        />
      ) : null}
      {headerStyle == 5 ? (
        <Header5
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
        />
      ) : null}

      <main>
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {children}
      </main>

      {!footerStyle && <Footer2 />}
      {footerStyle == 1 ? <Footer1 /> : null}
      {footerStyle == 2 ? <Footer2 /> : null}
      {footerStyle == 3 ? <Footer3 /> : null}
      {footerStyle == 4 ? <Footer4 /> : null}
      <BackToTop target="#top" />
    </>
  );
}
