"use client";
import Link from "next/link";

export default function Services2() {
  return (
    <>
      <section className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}>
              <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                AI for every sector
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-regular">
              Helping Businesses leverage
              <br />
              <span className="fw-bold">
                AI for Smarter Outcome <br className="d-none d-lg-inline" />
              </span>
            </h3>
          </div>
          <div className="row mt-6 position-relative">
            {/* Services Cards */}
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img src="/assets/up.png" alt="infinia" />
                    </div>
                  </div>
                  <h5 className="my-3">Finance & Insurance</h5>
                  <p className="mb-6">
                    We help finance and insurance companies implement AI-powered
                    risk assessment, fraud detection, and automated customer
                    support to streamline operations and enhance
                    decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/Retail & E-commerce.png"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Retail & E-commerce</h5>
                  <p className="mb-6">
                    Our AI solutions optimize inventory, personalize customer
                    experiences, and enable demand forecasting, helping retail
                    and e-commerce businesses grow efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img src="/assets/ph_factory.png" alt="infinia" />
                    </div>
                  </div>
                  <h5 className="my-3">Manufacturing & Logistics</h5>
                  <p className="mb-6">
                    We deliver AI-driven automation for supply chains,
                    predictive maintenance, and operational optimization,
                    ensuring seamless processes and reduced costs in
                    manufacturing and logistics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img src="/assets/light.png" alt="infinia" />
                    </div>
                  </div>
                  <h5 className="my-3">Energy & Utility</h5>
                  <p className="mb-6">
                    AI tools for predictive maintenance, resource optimization,
                    and demand forecasting empower energy companies to improve
                    efficiency and sustainability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img src="/assets/media.png" alt="infinia" />
                    </div>
                  </div>
                  <h5 className="my-3">Media & Entertainment</h5>
                  <p className="mb-6">
                    We enable media companies to create personalized content,
                    optimize audience engagement, and streamline production with
                    generative AI and predictive tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img src="/assets/nano.png" alt="infinia" />
                    </div>
                  </div>
                  <h5 className="my-3">Technology</h5>
                  <p className="mb-6">
                    A business consultant provides expert advice and guidance to
                    businesses on various aspects to improve their performance,
                    efficiency, and profitability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
