"use client";
import Link from "next/link";

export default function LogoCloud5() {
  return (
    <>
      <section className="section-logo-cloud section-logo-cloud-5 position-relative">
        <div className="container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
          <div className="container">
            <div className="row align-items-center">
              {/* Heading Section */}
              <div className="col-lg-3 pb-lg-0 pb-8">
                <div className="responsive-heading">
                  <h4 className="text-nowrap text-break">
                    World Class Talent <br className="d-none d-lg-inline" />
                    <span className="mobile-break">From Top Companies</span>
                  </h4>
                </div>
              </div>

              {/* Logos Section */}
              <div className="col-lg-9 ps-lg-8 d-flex flex-wrap">
                <div className="logo-container">
                  <img
                    className="logo-img"
                    src="/assets/ISRO Logo.png"
                    alt="ISRO Logo"
                  />
                </div>
                <div className="logo-container">
                  <img
                    className="logo-img"
                    src="/assets/NielsenIQ Image.png"
                    alt="NielsenIQ Logo"
                  />
                </div>
                <div className="logo-container">
                  <img
                    className="logo-img"
                    src="/assets/L&T Image 1628686751.avif"
                    alt="L&T Logo"
                  />
                </div>
                <div className="logo-container">
                  <img
                    className="logo-img"
                    src="/assets/Microsoft Logo 1920x706.jpg"
                    alt="Microsoft Logo"
                  />
                </div>
                <div className="logo-container">
                  <img
                    className="logo-img"
                    src="/assets/Siemens Image.webp"
                    alt="Siemens Logo"
                  />
                </div>
                <div className="logo-container">
                  <img
                    className="logo-img"
                    src="/assets/Amazon Logo (1).png"
                    alt="Amazon Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bouncing-blobs-container rounded-4 fix">
            <div className="bouncing-blobs-glass rounded-4" />
            <div className="bouncing-blobs">
              <div className="bouncing-blob bouncing-blob--green" />
              <div className="bouncing-blob bouncing-blob--primary" />
              <div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .logo-container {
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px; /* Adjust the width as needed */
          height: 80px; /* Adjust the height as needed */
          margin: 0.5rem; /* Adjust spacing between logos */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }

        .logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .responsive-heading {
          width: 100%;
        }

        @media (max-width: 768px) {
          .responsive-heading h4 {
            font-size: 30px; /* Adjust font size for smaller screens */
            text-align: left; /* Center-align text */
            line-height: 1.4; /* Add space between lines */
          }

          .responsive-heading h4 .mobile-break {
            display: block; /* Force break into a new line */
          }
        }
      `}</style>
    </>
  );
}