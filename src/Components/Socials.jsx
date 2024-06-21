import React, { useEffect } from 'react';
import eye from "../assets/image/png/eye-img.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Socials = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <footer className=' pt-5 pb-4 -mt-8 position-relative bg-black overflow-hidden'>
      <div className="container mt-lg-108">
        <div className="w-100 d-flex justify-content-center position-relative">
          <div className="footer-box d-flex flex-column align-items-center w-100" data-aos="fade-up" data-aos-duration="2000">
            <div className="footer-box1 bg-black w-100 h-100 d-flex flex-column align-items-center">
              <h2 className=' mb-0 font-manrope fw-semibold text-4xl text-center color-gray-light mt-32 position-relative z-1'>
                Our <span className=' color-yellow'>Socials</span>
              </h2>
              <p className=' fw-normal mb-0 font-manrope text-base text-center color-gray-light1 mt-16 position-relative z-1'>
                Join us on social media for exclusive giveaways and stay connected!
              </p>
              <p className=' mb-0 mt-32 font-manrope text-xl fw-medium color-yellow text-center position-relative z-1'>
                “Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready for the Fun!"
              </p>
              <div className=" mt-32 d-flex gap-16 position-relative z-1">
                <a href="https://discord.com/" target='_blank' className='insta-icon d-grid'>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_113_766)">
                      <path d="M17.5032 4.66675C17.8054 4.66675 18.1845 4.74608 18.489 4.82075C19.5507 5.07742 20.8095 5.39592 21.7032 6.06675C22.535 6.69092 23.1814 7.77942 23.6807 8.88542C24.719 11.1896 25.4412 14.2614 25.6909 16.5971C25.8099 17.7054 25.839 18.8207 25.6255 19.5709C25.5205 19.9396 25.293 20.2172 25.1332 20.3876C24.6455 20.9044 24.0179 21.2906 23.3972 21.6417L23.0892 21.8156C22.8863 21.9284 22.6822 22.0389 22.4767 22.1469L21.8677 22.4619L21.0312 22.8784L20.358 23.2097C20.1117 23.3331 19.8296 23.3654 19.5618 23.3007C19.294 23.2361 19.0577 23.0787 18.8947 22.8565C18.7318 22.6344 18.6527 22.3617 18.6716 22.0868C18.6904 21.8119 18.806 21.5526 18.9977 21.3547L18.4914 20.3421C17.0354 20.7845 15.5214 21.0063 13.9997 21.0001C12.4014 21.0001 10.8765 20.7668 9.50802 20.3421L9.00286 21.3524C9.19531 21.5499 9.31156 21.8093 9.33099 22.0844C9.35043 22.3594 9.27178 22.6325 9.10901 22.8552C8.94624 23.0778 8.70987 23.2355 8.44184 23.3004C8.17381 23.3654 7.89145 23.3332 7.64486 23.2097L7.01019 22.8947C6.30552 22.5471 5.60086 22.1994 4.91486 21.8156C4.19852 21.4154 3.43902 20.9896 2.87086 20.3864C2.64412 20.1572 2.47534 19.8773 2.37852 19.5697C2.16386 18.8207 2.19419 17.7066 2.31202 16.5971C2.56169 14.2614 3.28386 11.1896 4.32336 8.88542C4.82152 7.77942 5.46786 6.69092 6.29969 6.06675C7.19336 5.39592 8.45219 5.07742 9.51386 4.82075C9.81836 4.74608 10.1964 4.66675 10.4997 4.66675C10.6675 4.6666 10.8333 4.70265 10.9859 4.77244C11.1385 4.84222 11.2743 4.9441 11.3839 5.07112C11.4935 5.19814 11.5745 5.34731 11.6212 5.50846C11.6679 5.66961 11.6794 5.83895 11.6547 6.00491C12.4311 5.89004 13.2149 5.83272 13.9997 5.83342C14.8059 5.83342 15.5934 5.89175 16.3494 6.00608C16.3245 5.84003 16.3358 5.67056 16.3824 5.50927C16.4291 5.34798 16.51 5.19865 16.6197 5.0715C16.7293 4.94435 16.8651 4.84236 17.0178 4.77251C17.1705 4.70265 17.3353 4.66658 17.5032 4.66675ZM19.0829 7.42358C18.9079 7.36758 18.8659 7.39208 18.8029 7.49708L18.7305 7.62775C18.542 7.95099 18.2556 8.20603 17.9129 8.35615C17.5701 8.50627 17.1885 8.54371 16.823 8.46308C15.8952 8.26391 14.9487 8.16456 13.9997 8.16675C13.0057 8.16675 12.0549 8.27175 11.1764 8.46308C10.8109 8.54371 10.4293 8.50627 10.0865 8.35615C9.74374 8.20603 9.45743 7.95099 9.26886 7.62775L9.19652 7.49825C9.13469 7.39325 9.09269 7.36875 8.91886 7.42358C8.50352 7.55542 8.05786 7.69658 7.69969 7.93342C7.36486 8.18425 6.91802 8.80842 6.45019 9.84558C5.55652 11.8254 4.85652 14.7502 4.63252 16.8456C4.58586 17.2877 4.56136 17.6669 4.55552 17.9796V18.3226C4.56019 18.5302 4.57536 18.6947 4.59636 18.8149C4.89269 19.1042 5.25902 19.3317 5.62652 19.5406L6.42219 19.9804L6.94252 20.2546L7.36719 19.4052C7.16159 19.2137 7.03204 18.9543 7.00237 18.6749C6.9727 18.3954 7.0449 18.1146 7.2057 17.8842C7.36649 17.6537 7.60508 17.489 7.87759 17.4203C8.15011 17.3517 8.43824 17.3838 8.68902 17.5106C10.1077 18.2234 11.9534 18.6667 13.9997 18.6667C16.0449 18.6667 17.8917 18.2211 19.3104 17.5117C19.5504 17.3915 19.8246 17.3577 20.0867 17.4161C20.3488 17.4745 20.5827 17.6215 20.749 17.8324C20.9152 18.0432 21.0037 18.3049 20.9994 18.5734C20.9952 18.8419 20.8984 19.1006 20.7255 19.3061L20.6322 19.4052L21.0569 20.2569C21.4045 20.0772 21.7534 19.8871 22.1034 19.6934C22.5584 19.4414 23.0367 19.1766 23.4065 18.8149C23.4275 18.6947 23.4415 18.5302 23.4474 18.3226V17.9796C23.4379 17.6003 23.4122 17.2215 23.3704 16.8444C23.1464 14.7502 22.4464 11.8254 21.5527 9.84441C21.086 8.80841 20.638 8.18425 20.3044 7.93342C19.945 7.69658 19.4994 7.55542 19.0829 7.42358ZM10.208 12.2501C10.7495 12.2501 11.2688 12.4652 11.6517 12.8481C12.0346 13.231 12.2497 13.7503 12.2497 14.2917C12.2497 14.8332 12.0346 15.3525 11.6517 15.7354C11.2688 16.1183 10.7495 16.3334 10.208 16.3334C9.66654 16.3334 9.14723 16.1183 8.76435 15.7354C8.38146 15.3525 8.16636 14.8332 8.16636 14.2917C8.16636 13.7503 8.38146 13.231 8.76435 12.8481C9.14723 12.4652 9.66654 12.2501 10.208 12.2501ZM17.7914 12.2501C18.3328 12.2501 18.8521 12.4652 19.235 12.8481C19.6179 13.231 19.833 13.7503 19.833 14.2917C19.833 14.8332 19.6179 15.3525 19.235 15.7354C18.8521 16.1183 18.3328 16.3334 17.7914 16.3334C17.2499 16.3334 16.7306 16.1183 16.3477 15.7354C15.9648 15.3525 15.7497 14.8332 15.7497 14.2917C15.7497 13.7503 15.9648 13.231 16.3477 12.8481C16.7306 12.4652 17.2499 12.2501 17.7914 12.2501Z" fill="#F1F1F1" />
                    </g>
                    <defs>
                      <clipPath id="clip0_113_766">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="https://x.com/i/flow/login" target='_blank' className='insta-icon d-grid'>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6249 5H22.8637L15.7897 13.0475L24.111 24H17.5973L12.492 17.359L6.6565 24H3.41242L10.9772 15.3902L2.99988 5H9.67891L14.289 11.07L19.6249 5ZM18.4875 22.0724H20.2811L8.70164 6.82687H6.77525L18.4875 22.0724Z" fill="#F1F1F1" />
                  </svg>
                </a>
                <a href="https://core.telegram.org/blackberry/login" target='_blank' className='insta-icon d-grid'>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.7243 4.38356C24.335 4.02687 23.7817 3.90801 23.2802 4.07328L2.00343 11.087C1.42357 11.2781 1.03035 11.7958 1.00166 12.4056C0.973024 13.0154 1.31591 13.5677 1.87521 13.8125L7.13712 16.1147C7.16279 16.2338 8.67333 23.2397 8.7247 23.4779C8.79063 23.7838 8.94589 24.0562 9.27479 24.14C9.60746 24.2248 9.8425 24.0429 10.0907 23.8571C10.2289 23.7537 13.9955 20.9332 13.9955 20.9332L18.5605 24.6688C18.8264 24.8865 19.1514 25 19.4827 25C19.6405 25 19.7997 24.9742 19.9547 24.9217C20.4351 24.7588 20.7913 24.3666 20.9074 23.8728L25.1594 5.79499C25.2803 5.28102 25.1136 4.74025 24.7243 4.38356ZM10.4309 17.4339C10.4283 17.4401 10.4257 17.447 10.4233 17.4553L9.54309 20.5306L8.5608 15.9748L15.3153 12.2219L10.5929 17.1598C10.5185 17.2375 10.4638 17.3316 10.4309 17.4339ZM10.7102 21.6178L11.11 20.221L11.4924 18.8849L12.8626 20.0062L10.7102 21.6178ZM23.7759 5.46955L19.524 23.5474C19.5219 23.5563 19.5191 23.5687 19.4983 23.5758C19.4777 23.5828 19.4676 23.5748 19.4606 23.5689L14.4654 19.4813C14.4652 19.4812 14.4651 19.4811 14.465 19.481L12.1506 17.5871L19.586 9.81259C19.8289 9.55865 19.8497 9.16539 19.6349 8.88725C19.4201 8.60907 19.0344 8.52962 18.7273 8.70033L7.7176 14.8174L2.4449 12.5104C2.42884 12.5034 2.42 12.4995 2.42127 12.4723C2.42255 12.4452 2.43172 12.4422 2.44836 12.4367L23.7251 5.42299C23.7354 5.41964 23.7471 5.41576 23.7642 5.43136C23.7813 5.44705 23.7785 5.45896 23.7759 5.46955Z" fill="#F1F1F1" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <img src={eye} alt="eye" className=' position-absolute top-0 end-0' />
        </div>
        <div className=" mt-100 py-1 d-flex flex-column align-items-center">
          <h2 className=' mb-0 text-center text-7xl font-manrope fw-semibold color-yellow mt-32'>
            $CLAIR
          </h2>
          <p className=' mb-0 mt-20 font-manrope fw-normal text-base color-gray-light1 text-center max-w-626'>
            In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
            and Baby Sinclair is wielding it with style. The bad players better watch out;
            the crypto defender is here, armed with memes and ready to act.
          </p>
          <div className=" mt-50 max-w-758 w-100 overflow-x-scroll pb-3">
            <div className=' w-758 nav-scroll d-flex justify-content-between align-items-center'>
              <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>About</a>
              <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>Tokenomics</a>
              <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>Audit</a>
              <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>Roadmap</a>
              <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>White Paper</a>
              <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>Privacy</a>
              <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>Cookies</a>
              <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>Disclaimer</a>
            </div>
          </div>
        </div>
        <span className=' d-flex w-100 h-1 opacity-25 mt-32 bg-yellow-primary'></span>
      </div>
    </footer>
  )
}

export default Socials
