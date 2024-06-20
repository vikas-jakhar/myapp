import React, { useEffect } from 'react';
import chartimg from "../assets/image/png/circle-chart.png";
import dog from "../assets/image/png/dog.png";
import sinclair1 from "../assets/image/png/sinclair-img.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tokenomics = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);
    return (
        <section className=' py-3 -mt-8 position-relative bg-black'>
            <div className="container mt-32 mt-sm-100 mb-5 pb-2">
                <div className="row justify-content-center">
                    <div className="col-lg-6 d-flex justify-content-start align-items-center" data-aos="fade-right" data-aos-duration="2000">
                        <div className=" d-flex flex-column">
                            <h2 className=' mb-0 fw-semibold font-manrope text-6xl color-white-primary'>
                                Tokenomics
                            </h2>
                            <div className=" d-flex gap-16 mt-20">
                                <p className=' mb-0 color-gray-primary font-manrope text-2xl fw-normal'>
                                    Baby Sinclair
                                </p>
                                <button className=' btn-fill color-yellow font-manrope fw-normal text-2xl btn-buy'>
                                    $Clair
                                </button>
                            </div>
                            <p className=' mb-0 color-gray-primary font-manrope text-base mt-24 fw-medium'>
                                Total Tokens
                            </p>
                            <h5 className=' mb-0 mt-1 color-yellow font-manrope fw-semibold text-5xl'>
                                100,000,000,000
                            </h5>
                            <div className=" mt-32 d-flex flex-column">
                                <div className=" d-flex gap-12 align-items-end">
                                    <span>
                                        <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 23.5C20.7614 23.5 23 21.2614 23 18.5C23 15.7386 20.7614 13.5 18 13.5C15.2386 13.5 13 15.7386 13 18.5C13 21.2614 15.2386 23.5 18 23.5Z" fill="#F1F1F1" stroke="#F1F1F1" stroke-width="4" />
                                            <path d="M37.3536 18.8536C37.5488 18.6583 37.5488 18.3417 37.3536 18.1464L34.1716 14.9645C33.9763 14.7692 33.6597 14.7692 33.4645 14.9645C33.2692 15.1597 33.2692 15.4763 33.4645 15.6716L36.2929 18.5L33.4645 21.3284C33.2692 21.5237 33.2692 21.8403 33.4645 22.0355C33.6597 22.2308 33.9763 22.2308 34.1716 22.0355L37.3536 18.8536ZM22 19H37V18H22V19Z" fill="#F1F1F1" />
                                        </svg>
                                    </span>
                                    <h2 className=' mb-0 font-manrope fw-medium text-2xl color-gray-primary'>
                                        1%
                                    </h2>
                                    <p className=' mb-0 font-manrope fw-normal text-base color-gray-primary'>
                                        Presale
                                    </p>
                                </div>
                                <div className=" d-flex gap-12 align-items-end mt-12">
                                    <span>
                                        <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 23.5C20.7614 23.5 23 21.2614 23 18.5C23 15.7386 20.7614 13.5 18 13.5C15.2386 13.5 13 15.7386 13 18.5C13 21.2614 15.2386 23.5 18 23.5Z" fill="#F1F1F1" stroke="#F1F1F1" stroke-width="4" />
                                            <path d="M37.3536 18.8536C37.5488 18.6583 37.5488 18.3417 37.3536 18.1464L34.1716 14.9645C33.9763 14.7692 33.6597 14.7692 33.4645 14.9645C33.2692 15.1597 33.2692 15.4763 33.4645 15.6716L36.2929 18.5L33.4645 21.3284C33.2692 21.5237 33.2692 21.8403 33.4645 22.0355C33.6597 22.2308 33.9763 22.2308 34.1716 22.0355L37.3536 18.8536ZM22 19H37V18H22V19Z" fill="#F1F1F1" />
                                        </svg>
                                    </span>
                                    <h2 className=' mb-0 font-manrope fw-medium text-2xl color-gray-primary'>
                                        3%
                                    </h2>
                                    <p className=' mb-0 font-manrope fw-normal text-base color-gray-primary'>
                                        Marketing
                                    </p>
                                </div>
                                <div className=" d-flex gap-12 align-items-end mt-12">
                                    <span>
                                        <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 23.5C20.7614 23.5 23 21.2614 23 18.5C23 15.7386 20.7614 13.5 18 13.5C15.2386 13.5 13 15.7386 13 18.5C13 21.2614 15.2386 23.5 18 23.5Z" fill="#F1F1F1" stroke="#F1F1F1" stroke-width="4" />
                                            <path d="M37.3536 18.8536C37.5488 18.6583 37.5488 18.3417 37.3536 18.1464L34.1716 14.9645C33.9763 14.7692 33.6597 14.7692 33.4645 14.9645C33.2692 15.1597 33.2692 15.4763 33.4645 15.6716L36.2929 18.5L33.4645 21.3284C33.2692 21.5237 33.2692 21.8403 33.4645 22.0355C33.6597 22.2308 33.9763 22.2308 34.1716 22.0355L37.3536 18.8536ZM22 19H37V18H22V19Z" fill="#F1F1F1" />
                                        </svg>
                                    </span>
                                    <h2 className=' mb-0 font-manrope fw-medium text-2xl color-gray-primary'>
                                        5%
                                    </h2>
                                    <p className=' mb-0 font-manrope fw-normal text-base color-gray-primary'>
                                        Team - locked for 24 months
                                    </p>
                                </div>
                                <div className=" d-flex gap-12 align-items-end mt-12">
                                    <span>
                                        <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 23.5C20.7614 23.5 23 21.2614 23 18.5C23 15.7386 20.7614 13.5 18 13.5C15.2386 13.5 13 15.7386 13 18.5C13 21.2614 15.2386 23.5 18 23.5Z" fill="#F1F1F1" stroke="#F1F1F1" stroke-width="4" />
                                            <path d="M37.3536 18.8536C37.5488 18.6583 37.5488 18.3417 37.3536 18.1464L34.1716 14.9645C33.9763 14.7692 33.6597 14.7692 33.4645 14.9645C33.2692 15.1597 33.2692 15.4763 33.4645 15.6716L36.2929 18.5L33.4645 21.3284C33.2692 21.5237 33.2692 21.8403 33.4645 22.0355C33.6597 22.2308 33.9763 22.2308 34.1716 22.0355L37.3536 18.8536ZM22 19H37V18H22V19Z" fill="#F1F1F1" />
                                        </svg>
                                    </span>
                                    <h2 className=' mb-0 font-manrope fw-medium text-2xl color-gray-primary'>
                                        10%
                                    </h2>
                                    <p className=' mb-0 font-manrope fw-normal text-base color-gray-primary'>
                                        Investors - locked for 24 months
                                    </p>
                                </div>
                                <div className=" d-flex gap-12 align-items-end mt-12">
                                    <span>
                                        <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 23.5C20.7614 23.5 23 21.2614 23 18.5C23 15.7386 20.7614 13.5 18 13.5C15.2386 13.5 13 15.7386 13 18.5C13 21.2614 15.2386 23.5 18 23.5Z" fill="#F1F1F1" stroke="#F1F1F1" stroke-width="4" />
                                            <path d="M37.3536 18.8536C37.5488 18.6583 37.5488 18.3417 37.3536 18.1464L34.1716 14.9645C33.9763 14.7692 33.6597 14.7692 33.4645 14.9645C33.2692 15.1597 33.2692 15.4763 33.4645 15.6716L36.2929 18.5L33.4645 21.3284C33.2692 21.5237 33.2692 21.8403 33.4645 22.0355C33.6597 22.2308 33.9763 22.2308 34.1716 22.0355L37.3536 18.8536ZM22 19H37V18H22V19Z" fill="#F1F1F1" />
                                        </svg>
                                    </span>
                                    <h2 className=' mb-0 font-manrope fw-medium text-2xl color-gray-primary'>
                                        21%
                                    </h2>
                                    <p className=' mb-0 font-manrope fw-normal text-base color-gray-primary'>
                                        Exchange listings & liquidity
                                    </p>
                                </div>
                                <div className=" d-flex gap-12 align-items-end mt-12">
                                    <span>
                                        <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 23.5C20.7614 23.5 23 21.2614 23 18.5C23 15.7386 20.7614 13.5 18 13.5C15.2386 13.5 13 15.7386 13 18.5C13 21.2614 15.2386 23.5 18 23.5Z" fill="#F1F1F1" stroke="#F1F1F1" stroke-width="4" />
                                            <path d="M37.3536 18.8536C37.5488 18.6583 37.5488 18.3417 37.3536 18.1464L34.1716 14.9645C33.9763 14.7692 33.6597 14.7692 33.4645 14.9645C33.2692 15.1597 33.2692 15.4763 33.4645 15.6716L36.2929 18.5L33.4645 21.3284C33.2692 21.5237 33.2692 21.8403 33.4645 22.0355C33.6597 22.2308 33.9763 22.2308 34.1716 22.0355L37.3536 18.8536ZM22 19H37V18H22V19Z" fill="#F1F1F1" />
                                        </svg>
                                    </span>
                                    <h2 className=' mb-0 font-manrope fw-medium text-2xl color-gray-primary'>
                                        60%
                                    </h2>
                                    <p className=' mb-0 font-manrope fw-normal text-base color-gray-primary'>
                                        Rewards and burns
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-8 mt-24  mt-lg-0 d-lg-flex justify-content-lg-end" data-aos="fade-left" data-aos-duration="2000">
                        <img src={chartimg} alt="chart-img" className=' w-100 h-100 max-h-565 max-w-491' />
                    </div>
                </div>
                <div className=" w-100 token-box" data-aos="fade-up" data-aos-duration="2000">
                    <div className=' border-r-16 token-box2 d-flex justify-content-between align-items-center flex-column flex-lg-row gap-lg-4'>
                        <div className=" d-flex gap-sm-20 gap-2 align-items-center">
                            <span className='circle d-grid'>
                                <img src={dog} alt="dog" />
                            </span>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_113_529)">
                                        <path d="M16 32C15.5856 32 15.1882 31.8354 14.8951 31.5424C14.6021 31.2493 14.4375 30.8519 14.4375 30.4375V1.5625C14.4375 1.1481 14.6021 0.750671 14.8951 0.457646C15.1882 0.16462 15.5856 0 16 0C16.4144 0 16.8118 0.16462 17.1049 0.457646C17.3979 0.750671 17.5625 1.1481 17.5625 1.5625V30.4375C17.5625 30.8519 17.3979 31.2493 17.1049 31.5424C16.8118 31.8354 16.4144 32 16 32Z" fill="#F1F1F1" />
                                        <path d="M30.4375 17.5625H1.5625C1.1481 17.5625 0.750671 17.3979 0.457646 17.1049C0.16462 16.8118 0 16.4144 0 16C0 15.5856 0.16462 15.1882 0.457646 14.8951C0.750671 14.6021 1.1481 14.4375 1.5625 14.4375H30.4375C30.8519 14.4375 31.2493 14.6021 31.5424 14.8951C31.8354 15.1882 32 15.5856 32 16C32 16.4144 31.8354 16.8118 31.5424 17.1049C31.2493 17.3979 30.8519 17.5625 30.4375 17.5625Z" fill="#F1F1F1" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_113_529">
                                            <rect width="32" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </span>
                            <span className=' circle d-grid'>
                                <img src={sinclair1} alt="sinclair" />
                            </span>
                        </div>
                        <div className=" d-flex flex-column mt-3">
                            <h4 className=' mb-0 font-manrope fw-semibold text-xl color-white-primary'>
                                Baby Sinclair Stands Strong with the Shiba Inu Community
                            </h4>
                            <p className=' font-manrope fw-normal text-base color-gray-primary mb-0 mt-10'>
                                10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics
