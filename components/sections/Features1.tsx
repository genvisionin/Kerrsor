"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Features1() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="features-1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex align-items-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  Why us
                </span>
              </div>
              <h2 className="fw-medium mt-4 lh-sm">
                Partner with Experts to lead the AI revolution
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="d-flex flex-md-row flex-column align-items-center position-relative ps-lg-8 pt-lg-0 pt-10">
                <div
                  className="pe-md-3 pb-3 pb-md-0 position-relative z-1"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}>
                  <img
                    className="rounded-3 border border-3 border-white"
                    style={{ width: "400px", height: "auto" }}
                    src="/assets/WhyUS.png"
                    alt="infinia"
                  />
                </div>
                <img
                  className="position-absolute top-50 start-0 translate-middle-y z-0"
                  src="/assets/imgs/features-1/bg-ellipse.png"
                  alt="infinia"
                />
                <img
                  className="position-absolute z-2 star-lg"
                  src="/assets/imgs/features-1/star-lg.png"
                  alt="infinia"
                />
                <img
                  className="position-absolute z-2 star-md"
                  src="/assets/imgs/features-1/star-md.png"
                  alt="infinia"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-10">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={50}>
							<div className="feature-item mb-5 mb-lg-0">
								<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/tdesign_secured.png" alt="infinia" />
									</div>
								</div>
								<h6>Your Data, Fully Secured</h6>
								<p>We prioritize data privacy with strict measures to ensure your information is safe and protected</p>
							</div>
						</div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-zoom-in"
              data-aos-delay={100}>
              <div className="feature-item mb-5 mb-lg-0">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img src="/assets/Money Icon 1.png" alt="infinia" />
                  </div>
                </div>
                <h6>Expert Team, Affordable Cost</h6>
                <p>
                  Save on full-time hires -our team of Al experts delivers
                  faster, high-quality results at a fraction of the cost
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-zoom-in"
              data-aos-delay={200}>
              <div className="feature-item mb-5 mb-lg-0">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img src="/assets/cloud.png" alt="infinia" />
                  </div>
                </div>
                <h6>End to End AI services</h6>
                <p>
                  From strategy to deployment, we provide comprehensive AI
                  solutions tailored to your business needs
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-zoom-in"
              data-aos-delay={300}>
              <div className="feature-item mb-5 mb-lg-0">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img src="/assets/carbon_growth.png" alt="infinia" />
                  </div>
                </div>
                <h6>Solutions That Grow With You</h6>
                <p>
                  Our scalable AI services adapt to your evolving business
                  needs, ensuring seamless growth and innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
