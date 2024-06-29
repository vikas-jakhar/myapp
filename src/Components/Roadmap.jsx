import React, { useEffect } from 'react';
import dotline from "../assets/image/svg/dotline.svg";
import stoke from "../assets/image/png/stoke-line.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Roadmap = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className=' py-1 pt-md-3 pb-md-5 position-relative -mt-8 roadmap' id='Roadmap'>
      <div className="container mt-sm-32 mb-130 mb-lg-0 position-relative z-2">
        <h2 className=' text-center mt-0 mt-lg-2 fw-semibold font-manrope color-white-primary text-6xl mb-0' data-aos="fade-up" data-aos-duration="2000">
          Roadmap
        </h2>
        <div className="row mt-100 justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex justify-content-left mt-24 mt-lg-0" data-aos="zoom-in" data-aos-duration="2000">
            <div className="phase1 w-100 position-relative top-lg-184">
              <div className="phase1-box d-flex flex-column">
                <h4 className=' mb-0 text-white fw-medium font-manrope text-4xl'>
                  Phase 1
                </h4>
                <div className=' d-flex align-items-center gap-10 mt-16'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Team Recruitment
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Social Media
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Audit Smart Contract
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Whitepaper
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Presale Launch
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Community Growth
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    AI Avatars Release
                  </p>
                </div>
              </div>
              <img src={dotline} alt="dotline" className=' position-absolute bottom-55 start-50 translate-middle-x d-none d-lg-flex' />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center mt-24 mt-lg-0" data-aos="zoom-in" data-aos-duration="2000">
            <div className="phase1 w-100 position-relative top-lg-78">
              <div className="phase1-box d-flex flex-column">
                <h4 className=' mb-0 text-white fw-medium font-manrope text-4xl'>
                  Phase 2
                </h4>
                <div className=' d-flex align-items-center gap-10 mt-16'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Official Launch
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Burns 5%
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Major DEX & CEX Listings
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Coinmarketcap
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    CoinGecko
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Influencers Marketing
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    More AI Avatars Release
                  </p>
                </div>
              </div>
              <img src={dotline} alt="dotline" className=' position-absolute bottom-55 start-50 translate-middle-x d-none d-lg-flex' />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-end mt-24 mt-lg-0" data-aos="zoom-in" data-aos-duration="2000">
            <div className="phase1 w-100 position-relative">
              <div className="phase1-box d-flex flex-column pb-39">
                <h4 className=' mb-0 text-white fw-medium font-manrope text-4xl'>
                  Phase 3
                </h4>
                <div className=' max-w-226'>
                <div className=' d-flex align-items-center gap-10 mt-16'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Burns (5% quarterly)
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Rewards Program
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Multiple Partnerships
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    Create your own AI Avatar Voiceover.
                  </p>
                </div>
                <div className=' d-flex align-items-center gap-10 mt-8'>
                  <span className=' dot d-flex'></span>
                  <p className=' mb-0 fw-medium text-base font-manrope color-gray-primary'>
                    AI Metaverse Avatar Play-to-Earn
                  </p>
                </div>
                </div>
              </div>
              <img src={dotline} alt="dotline" className=' position-absolute bottom-55 start-50 translate-middle-x d-none d-lg-flex' />
            </div>
          </div>
        </div>
      </div>
      <img src={stoke} alt="stoke" className=' stoke position-absolute w-100 top-25 start-0 position-lg-relative d-lg-flex' data-aos="fade-up" data-aos-duration="2000" />
      <span className=' position-absolute top-0 end-0 translate-middle-y'>
        <svg width="229" height="458" viewBox="0 0 229 458" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" filter="url(#filter0_f_113_786)">
            <circle cx="229" cy="229" r="50" fill="#FFF624" />
          </g>
          <defs>
            <filter id="filter0_f_113_786" x="0.199997" y="0.199997" width="457.6" height="457.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="89.4" result="effect1_foregroundBlur_113_786" />
            </filter>
          </defs>
        </svg>
      </span>
    </section>
  )
}

export default Roadmap
