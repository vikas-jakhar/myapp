import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Accordion from 'react-bootstrap/Accordion';

const Accordionsec = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);
    return (
        <section className='pt-4 pb-5 py-lg-5 position-relative Accordion-sec d-flex align-items-center' id='Accordionsec'>
            <div className="container mt-78 mb-5 position-relative z-2">
                <h2 className=' mb-0 text-center font-manrope fw-semibold text-6xl color-white-primary' data-aos="fade-up" data-aos-duration="2000">
                    Frequently Asked <span className=' color-yellow'>Questions</span>
                </h2>
                <div className=" mt-60 d-flex flex-column align-items-center">
                    <Accordion defaultActiveKey="0" className=' d-flex flex-column align-items-center w-100'>
                        <Accordion.Item eventKey="0" className="accordion1 w-100" data-aos="fade-up">
                            <Accordion.Header className=' mb-0 fw-normal text-base font-manrope color-gray-light1'> WHAT IS $CLAIR?</Accordion.Header>
                            <Accordion.Body className=' mb-0 fw-normal text-base font-manrope color-gray-light1 max-w-545 pt-0 p-12 text-start'>
                                Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="accordion1 w-100 mt-24" data-aos="fade-up">
                            <Accordion.Header className=' mb-0 fw-normal text-base font-manrope color-gray-light1'> Arcu in pellentesque sit odio.</Accordion.Header>
                            <Accordion.Body className=' mb-0 fw-normal text-base font-manrope color-gray-light1 max-w-545 pt-0 p-12 text-start'>
                                Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="accordion1 w-100 mt-24" data-aos="fade-up">
                            <Accordion.Header className=' mb-0 fw-normal text-base font-manrope color-gray-light1'>Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.</Accordion.Header>
                            <Accordion.Body className=' mb-0 fw-normal text-base font-manrope color-gray-light1 max-w-545 pt-0 p-12 text-start'>
                                Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="accordion1 w-100 mt-24" data-aos="fade-up">
                            <Accordion.Header className=' mb-0 fw-normal text-base font-manrope color-gray-light1'>Metus augue dictumst sit amet.</Accordion.Header>
                            <Accordion.Body className=' mb-0 fw-normal text-base font-manrope color-gray-light1 max-w-545 pt-0 p-12 text-start'>
                                Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="accordion1 w-100 mt-24" data-aos="fade-up">
                            <Accordion.Header className=' mb-0 fw-normal text-base font-manrope color-gray-light1'>Elementum viverra tellus tincidunt nunc odio at id ipsum.</Accordion.Header>
                            <Accordion.Body className=' mb-0 fw-normal text-base font-manrope color-gray-light1 max-w-545 pt-0 p-12 text-start'>
                                Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className="accordion1 w-100 mt-24" data-aos="fade-up">
                            <Accordion.Header className=' mb-0 fw-normal text-base font-manrope color-gray-light1'>Sagittis morbi aliquam facilisis ornare lacus tempus massa.</Accordion.Header>
                            <Accordion.Body className=' mb-0 fw-normal text-base font-manrope color-gray-light1 max-w-545 pt-0 p-12 text-start'>
                                Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className="accordion1 w-100 mt-24" data-aos="fade-up">
                            <Accordion.Header className=' mb-0 fw-normal text-base font-manrope color-gray-light1'>Elementum at dui varius consequat fringilla.</Accordion.Header>
                            <Accordion.Body className=' mb-0 fw-normal text-base font-manrope color-gray-light1 max-w-545 pt-0 p-12 text-start'>
                                Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <span className=' position-absolute top-0 end-0 translate-middle-y'>
                <svg width="229" height="458" viewBox="0 0 229 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6" filter="url(#filter0_f_113_785)">
                        <circle cx="229" cy="229" r="50" fill="#FFF624" />
                    </g>
                    <defs>
                        <filter id="filter0_f_113_785" x="0.199997" y="0.199997" width="457.6" height="457.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="89.4" result="effect1_foregroundBlur_113_785" />
                        </filter>
                    </defs>
                </svg>
            </span>
            <span className=' position-absolute bottom-0 end-0 translate-middley z-1'>
                <svg width="229" height="458" viewBox="0 0 229 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6" filter="url(#filter0_f_113_783)">
                        <circle cx="229" cy="229" r="50" fill="#FFF624" />
                    </g>
                    <defs>
                        <filter id="filter0_f_113_783" x="0.199997" y="0.199997" width="457.6" height="457.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="89.4" result="effect1_foregroundBlur_113_783" />
                        </filter>
                    </defs>
                </svg>
            </span>
        </section>
    )
}

export default Accordionsec
