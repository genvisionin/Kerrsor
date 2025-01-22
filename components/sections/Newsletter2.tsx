"use client";
import Link from "next/link";

export default function Newsletter2() {
  return (
    <>
      <section
        className="section-newsletter-2 section-padding bg-primary position-relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(109, 77, 242, 0.8), rgba(109, 77, 242, 0.7)), url('/assets/image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="container position-relative fix">
          <div className="row align-items-center text-center position-relative z-1">
            <div className="col-lg-6 mx-auto">
              <div className="px-lg-3 text-center">
                <h4 className="my-5 text-white">
                  <span className="fw-bold" style={{ fontSize: "1.5rem" }}>
                    Trusted by Businesses Worldwide
                  </span>
                  <br />
                  <span className="fw-light" style={{ fontSize: "1.25rem" }}>
                    Discover how we can power your business with AI. Schedule a
                    free Session today!
                  </span>
                </h4>

                <Link
                  href="/page-contact-2"
                  className="btn text-purple"
                  style={{
                    backgroundColor: "white",
                    color: "#6D4DF2",
                    border: "1px solid #6D4DF2",
                  }}
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}>
                  Talk to an AI expert
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      className="stroke-primary"
                      d="M17.25 15.25V6.75H8.75"
                      stroke="#6D4DF2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="stroke-primary"
                      d="M17 7L6.75 17.25"
                      stroke="#6D4DF2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
