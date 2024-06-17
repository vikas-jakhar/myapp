import React from 'react';
import logo from "../assets/image/svg/logo.svg";

const Navbar = () => {
    return (
        <div className=' position-fixed top-0 start-0 w-100 menu z-20'>
            <div className="container">
                <nav className=' d-flex align-items-center justify-content-between py-26'>
                    <a href="#" className=' d-flex align-items-center gap-12'>
                        <img src={logo} alt="logo" />
                        <h2 className=' mb-0 fw-semibold font-manrope text-4xl color-yellow'>$CLAIR</h2>
                    </a>
                    <div className=' d-flex align-items-center gap-32 menu-list'>
                        <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>About</a>
                        <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>Tokenomics</a>
                        <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>Audit</a>
                        <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>Roadmap</a>
                        <a href="" className=' text-base fw-medium font-manrope color-gray-primary nav-heading position-relative'>White Paper</a>
                        <div className=' d-flex cursor-pointer ml-28'>
                            <svg width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4317 17.7537C12.3804 17.4968 10.6128 8.65869 10.5567 8.37862C10.4692 7.94044 10.0843 7.625 9.63747 7.625H7.76247C7.3156 7.625 6.93078 7.94044 6.84322 8.37862C6.78628 8.66344 5.01685 17.5106 4.96822 17.7536C4.86666 18.2614 5.19597 18.7553 5.70366 18.8568C6.21134 18.9583 6.70528 18.629 6.80678 18.1213L7.40603 15.125H9.99391L10.5932 18.1214C10.6947 18.6293 11.1888 18.9584 11.6963 18.8568C12.204 18.7553 12.5333 18.2614 12.4317 17.7537ZM7.78103 13.25L8.53103 9.5H8.86891L9.61891 13.25H7.78103Z" fill="#F1F1F1" />
                                <path d="M26.45 14.125H23.6375V13.1875C23.6375 12.6697 23.2177 12.25 22.7 12.25C22.1822 12.25 21.7625 12.6697 21.7625 13.1875V14.125H18.95C18.4322 14.125 18.0125 14.5447 18.0125 15.0625C18.0125 15.5803 18.4322 16 18.95 16H19.1768C19.711 17.7257 20.5153 19.0504 21.4003 20.1119C20.68 20.7708 19.9511 21.3111 19.3018 21.8304C18.8975 22.1539 18.832 22.7438 19.1555 23.1481C19.4791 23.5526 20.0691 23.6178 20.4731 23.2945C21.126 22.7722 21.9086 22.1917 22.7 21.4655C23.4919 22.1923 24.2759 22.7738 24.9268 23.2945C25.3311 23.618 25.9211 23.5524 26.2445 23.1481C26.5679 22.7438 26.5023 22.1538 26.0981 21.8304C25.4505 21.3122 24.7207 20.7714 23.9996 20.1119C24.8846 19.0504 25.6889 17.7257 26.2231 16H26.45C26.9677 16 27.3875 15.5803 27.3875 15.0625C27.3875 14.5447 26.9677 14.125 26.45 14.125ZM22.7 18.7341C22.1015 17.9828 21.5631 17.0861 21.1573 15.9937H24.2426C23.8368 17.0861 23.2984 17.9828 22.7 18.7341Z" fill="#F1F1F1" />
                                <path d="M28.3633 6.33203H15.6835L15.3068 3.30965C15.1422 1.99293 14.0174 1 12.6904 1H3.63672C2.18283 1 1 2.18283 1 3.63672V23.0312C1 24.4851 2.18283 25.668 3.63672 25.668H11.0478L11.4198 28.6904C11.5841 30.0044 12.7088 31 14.0362 31H28.3633C29.8172 31 31 29.8172 31 28.3633V8.96875C31 7.51486 29.8172 6.33203 28.3633 6.33203ZM3.63672 23.9102C3.15209 23.9102 2.75781 23.5159 2.75781 23.0312V3.63672C2.75781 3.15209 3.15209 2.75781 3.63672 2.75781H12.6904C13.1328 2.75781 13.5077 3.08875 13.5625 3.52738C13.6899 4.54902 15.977 22.8967 16.1034 23.9102H3.63672ZM13.1127 28.0557L12.8189 25.668H15.1769L13.1127 28.0557ZM29.2422 28.3633C29.2422 28.8479 28.8479 29.2422 28.3633 29.2422H14.4106L17.7565 25.3719C17.9278 25.1787 18.0046 24.9222 17.9692 24.6674L15.9027 8.08984H28.3633C28.8479 8.08984 29.2422 8.48412 29.2422 8.96875V28.3633Z" fill="#F1F1F1" />
                                <path d="M60 14L55 19L50 14" stroke="#F1F1F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
              </nav>
            </div>
        </div>
    )
}

export default Navbar
