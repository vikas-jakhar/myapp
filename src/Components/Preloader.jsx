import React, { useState, useEffect } from 'react';
import logo from "../assets/image/svg/logo.svg";

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.classList.remove('overflow-hidden');
    }, 1000);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  if (!visible) return null;

  return (
    <section className='min-vh-100 w-100 position-fixed z-50 top-0 start-0 preloader'>
      <img src={logo} alt="logo" className=' position-absolute top-50 start-50 translate-middle pre-animation' />
    </section>
  );
}

export default Preloader;
