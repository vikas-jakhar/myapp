import React, { useEffect } from 'react';
import secure from "../assets/image/png/secure-img.webp";
import coinbase from "../assets/image/png/coinbase.webp";
import kraken from "../assets/image/png/kraken.webp";
import kucoin from "../assets/image/png/kucoin.webp";
import okk from "../assets/image/png/okk.webp";
import uniswap from "../assets/image/png/uniswap.webp";
import coingecko from "../assets/image/png/coingecko.webp";
import ellipse from "../assets/image/png/Ellipse-right.webp";
import bglayer from "../assets/image/png/secure-img-bg-layer.webp";
import Security from "../assets/image/png/s-img.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Secure = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);
    return (
        <section className=' pt-5 pb-1 pb-lg-5 -mt-8 Secure-bg-img position-relative' id='Secure'>
            <div className="container mt-sm-130 mt-5 mb-2 my-lg-2 pt-lg-0 pt-5 position-relative z-2">
                <div className="row mt-4 mt-lg-0">
                    <div className="col-lg-6 d-flex justify-content-center position-relative" data-aos="fade-right" data-aos-duration="2000">
                        <img src={secure} alt="secure" className=' w-100 max-w-h-245 position-relative z-1' />
                        <img src={bglayer} alt="bglayer" className=' position-absolute w-100 top-37 start-47 d-none d-md-flex translate-middle' />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start mt-24 mt-lg-0" data-aos="fade-left" data-aos-duration="2000">
                        <p className=' mb-0 font-manrope fw-normal text-xl color-gray-primary text-center text-lg-start'>
                            Rest easy knowing that $CLAIR is
                        </p>
                        <h2 className=' mb-0 mt-10 font-manrope fw-semibold color-yellow text-4xl text-center text-lg-start'>
                            Fully Audited and 100% Secure.
                        </h2>
                        <p className=' mb-0 mt-10 font-manrope fw-normal text-xl color-gray-primary text-center text-lg-start'>
                            Zero Room for Rug Pulls: Invest with Confidence.
                        </p>
                        <button className=' mt-32 justify-content-center d-flex align-items-center btn-buy font-manrope fw-bold text-base color-black-secondry bg-yellow-primary gap-10'>
                            Audit
                        </button>
                    </div>
                </div>
                <span className=' d-flex w-100 h-1 bg-yellow-primary opacity-30 mt-83 mb-49' data-aos="fade-up" data-aos-duration="2000"></span>
                <div className="row mb-150">
                    <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="2000">
                        <div className=' d-flex flex-column'>
                            <h2 className=' mb-0 font-manrope fw-semibold color-yellow text-4xl text-center text-lg-start'>
                                <span className=' color-white-primary'>Listing on</span> Major Exchanges
                            </h2>
                            <p className=' mb-0 mt-10 font-manrope fw-normal text-xl color-gray-primary text-center text-lg-start max-w-475'>
                                Baby Sinclair’s Team is in action to secure the <span className=' color-yellow'>$CLAIR</span> listing on major exchanges. Exciting milestones ahead.
                            </p>
                        </div>
                    </div>
                    <div className=" col-lg-6 mt-24 mt-lg-0 position-relative" data-aos="fade-left" data-aos-duration="2000">
                        <div className=" scroll-img mx-auto me-lg-0 z-1">
                            <div className=" px-15 wrapper position-relative">
                                <div class="wrapper d-flex align-items-center w-100 overflow-hidden">
                                    <div class="marquee">
                                        <span className=' bg-white coin-box d-grid'>
                                            <img src={coinbase} alt="coinbase" />
                                        </span>
                                        <span className=' bg-white coin-box d-grid'>
                                            <img src={kraken} alt="coinbase" />
                                        </span>
                                        <span className=' bg-white coin-box d-grid'>
                                            <img src={kucoin} alt="coinbase" />
                                        </span>
                                        <span className=' bg-white coin-box d-grid'>
                                            <img src={okk} alt="coinbase" />
                                        </span>
                                        <span className=' bg-white coin-box d-grid'>
                                            <img src={uniswap} alt="coinbase" />
                                        </span>
                                        <span className=' bg-white coin-box d-grid'>
                                            <img src={coingecko} alt="coinbase" />
                                        </span>
                                    </div>
                                </div>
                                <div className=" position-absolute start-15 bottom-15 end-15 d-flex justify-content-between align-items-center">
                                    <span className=' d-flex line1 w-100 opacity-30'></span>
                                    <span className=' d-flex line1 max-w-57 w-100 opacity-30'></span>
                                    <span className=' d-flex line1 max-w-160 w-100 opacity-30'></span>
                                </div>
                            </div>
                        </div>
                        <img src={Security} alt="shelid" className=' position-absolute w-100 top-0 end-0 translate-middle-y top-50' />
                    </div>
                </div>
            </div>
            <img src={ellipse} alt="ellipse" className=' position-absolute end-0 top-0 translate-middle-y' />
        </section>
    )
}

export default Secure
