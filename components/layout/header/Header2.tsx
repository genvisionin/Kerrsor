import Link from "next/link";
import MobileMenu from "../MobileMenu";
import Search from "../Search";
import OffCanvas from "../OffCanvas";
import ThemeSwitch from "@/components/elements/ThemeSwitch";
import Menu from "../Menu";

export default function Header2({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffCanvas,
  handleOffCanvas,
}: any) {
  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg navbar-light w-100 z-999 ${
            scroll ? "navbar-stick" : ""
          }`}
          style={{
            position: `${scroll ? "fixed" : "relative"}`,
            top: `${scroll ? "0" : "auto"}`,
            bottom: `${scroll ? "auto" : "0"}`,
          }}>
          <div className="container-fluid px-md-8 px-2">
            <Link
              className="navbar-brand d-flex main-logo align-items-center"
              href="/">
              <img
                src="assets/kerrsor.png"
                alt="infinia"
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
            <Menu />
            <div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
              <ThemeSwitch />

              <div
                className="burger-icon burger-icon-white border rounded-3"
                onClick={handleMobileMenu}>
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </nav>

        <OffCanvas
          handleOffCanvas={handleOffCanvas}
          isOffCanvas={isOffCanvas}
        />

        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isMobileMenu={isMobileMenu}
        />
      </header>
    </>
  );
}
