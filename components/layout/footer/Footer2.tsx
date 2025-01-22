"use client";
import Link from "next/link";

export default function Footer2() {
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
    <>
      <footer>
        <div className="section-footer">
          <div className="container-fluid bg-white">
            <div className=" container position-relative z-2">
              <div className="row py-90">
                <div className="col-lg-4 pe-10">
                  <Link
                    className="navbar-brand d-flex main-logo align-items-center"
                    href="/home-2">
                    <img
                      src="assets/kerrsor.png"
                      alt="infinia"
                      style={{ width: "100px", height: "auto" }}
                    />
                  </Link>
                  <div className="d-flex social-icons"></div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                      <div className="d-flex flex-column align-items-start">
                        <a
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#services"
                          onClick={(e) => scrollToSection(e, "services")}>
                          Services
                        </a>
                        <a
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#industry"
                          onClick={(e) => scrollToSection(e, "industry")}>
                          Industry
                        </a>
                        <a
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#research"
                          onClick={(e) => scrollToSection(e, "research")}>
                          Research Paper
                        </a>
                        <a
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#pricing"
                          onClick={(e) => scrollToSection(e, "pricing")}>
                          Pricing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-primary-soft">
          <div className="container">
            <div className="row">
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 border-top border-white border-opacity-10">
                <p className="text-900 opacity-50 mb-0 fs-7">
                  Copyright © 2025 by Atomina Technologies LLP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
