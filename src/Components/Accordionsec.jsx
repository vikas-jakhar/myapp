import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Accordion from 'react-bootstrap/Accordion';

const Accordionsec = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);
    return (
        <section className='py-5 position-relative Accordion-sec d-flex align-items-center'>
            <div className="container mt-78 mb-5">
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
        </section>
    )
}

export default Accordionsec
