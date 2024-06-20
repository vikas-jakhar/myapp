import React, { useEffect } from 'react';
import ellipse from "../assets/image/png/Ellipse-left.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Address = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);
    return (
        <section className=' position-relative -mt-3 py-5 address-sec d-flex align-items-center'>
            <div className="container position-relative z-1 d-flex justify-content-center">
                <div className=" max-w-806 w-100 d-flex flex-column align-items-center">
                    <h2 className=' mb-0 fw-bold font-manrope text-6xl color-white-primary text-center' data-aos="fade-up" data-aos-duration="2000">
                        <span className=' color-yellow fw-semibold font-manrope'>$CLAIR </span>
                        Smart Contract Address
                    </h2>
                    <form id='copyform' method="get" className=' w-100 max-w-587 mt-24 d-flex align-items-center justify-content-between' data-aos="fade-up" data-aos-duration="2000">
                        <input type="text" className=' w-100 input-box font-manrope text-base color-gray-primary bg-transparent' value='0xFD1929755F73f974648daD00ab491a7C44a00eeD' />
                        <button className=' -ml-12 copy-btn justify-content-center d-flex align-items-center btn-buy font-manrope fw-bold text-base color-black-secondry bg-yellow-primary gap-10'>
                            Copy
                        </button>
                    </form>
                    <p className=' mb-0 text-center font-manrope text-base fw-normal color-gray-light1 mt-32' data-aos="fade-up" data-aos-duration="2000">
                        Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.
                    </p> 
                </div>
            </div>
            <img src={ellipse} alt="ellise" className=' position-absolute bottom-0 start-0 -translate-middle-y' />
        </section>
    )
}

export default Address
