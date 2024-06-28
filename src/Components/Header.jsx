import React from 'react'
import hero from "../assets/image/png/hero-img.webp";

const Header = () => {
  return (
    <section className=' hero-sec min-vh-100 position-relative py-1 d-flex align-items-center' id='header1'>
      <div className="container position-relative z-2">
        <div className=' d-flex flex-column align-items-center mt-125 position-relative z-1'>
          <h2 className=' font-manrope fw-bold color-white-primary text-7xl mb-0'>
            Presale is <span className=' color-yellow'>Live</span>
          </h2>
          <p className=' max-w-702 font-manrope fw-normal text-base text-center color-gray-light mt-16 mb-0'>
            Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!
          </p>
          <button className=' mt-32 d-flex align-items-center btn-buy font-manrope fw-bold text-base color-black-secondry bg-yellow-primary gap-10'>Buy $Clair <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2555_4)">
              <path d="M1.33333 0.833252C0.873096 0.833252 0.5 1.20635 0.5 1.66659C0.5 2.12682 0.873096 2.49992 1.33333 2.49992H2.81608C2.93741 2.49992 3.05567 2.5381 3.15409 2.60904C3.25252 2.67999 3.32613 2.78011 3.36449 2.89521L6.11198 11.1392C6.23399 11.5053 6.2495 11.8994 6.15592 12.2737L5.92969 13.1803C5.59773 14.5081 6.63132 15.8333 8 15.8333H18C18.4602 15.8333 18.8333 15.4602 18.8333 14.9999C18.8333 14.5397 18.4602 14.1666 18 14.1666H8C7.67551 14.1666 7.4672 13.9003 7.5459 13.5855L7.71651 12.9041C7.74542 12.7886 7.81208 12.6862 7.90591 12.6129C7.99974 12.5397 8.11535 12.4999 8.23438 12.4999H17.1667C17.5255 12.5001 17.8441 12.2706 17.9577 11.9303L20.1794 5.26359C20.3593 4.72377 19.9574 4.16633 19.3883 4.16659H5.96224C5.84091 4.16659 5.72265 4.12841 5.62422 4.05747C5.52579 3.98652 5.45218 3.88641 5.41381 3.7713L4.62435 1.40291C4.5108 1.06255 4.19214 0.833064 3.83333 0.833252H1.33333ZM7.16667 16.6666C6.24619 16.6666 5.5 17.4128 5.5 18.3333C5.5 19.2537 6.24619 19.9999 7.16667 19.9999C8.08714 19.9999 8.83333 19.2537 8.83333 18.3333C8.83333 17.4128 8.08714 16.6666 7.16667 16.6666ZM17.1667 16.6666C16.2462 16.6666 15.5 17.4128 15.5 18.3333C15.5 19.2537 16.2462 19.9999 17.1667 19.9999C18.0871 19.9999 18.8333 19.2537 18.8333 18.3333C18.8333 17.4128 18.0871 16.6666 17.1667 16.6666Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_2555_4">
                <rect width="20" height="20" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          </button>
        </div>
        <div className=' d-flex justify-content-center'>
          <img src={hero} alt="hero" className=' w-100 position-relative -top-lg-25 max-w-810' />
        </div>
      </div>
      <a href='#Sclair' className=' next-sec position-absolute d-none d-sm-grid'>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9253 39.5604C19.7505 39.5604 19.5828 39.4909 19.4591 39.3672C19.3355 39.2436 19.266 39.0759 19.266 38.901V29.9779C19.266 29.8031 19.3355 29.6354 19.4591 29.5117C19.5828 29.3881 19.7505 29.3186 19.9253 29.3186C20.1002 29.3186 20.2679 29.3881 20.3916 29.5117C20.5152 29.6354 20.5847 29.8031 20.5847 29.9779V38.8834C20.587 38.9715 20.5717 39.0591 20.5396 39.1412C20.5075 39.2232 20.4593 39.298 20.3979 39.3611C20.3364 39.4242 20.2629 39.4743 20.1818 39.5085C20.1006 39.5428 20.0134 39.5604 19.9253 39.5604Z" fill="#F1F1F1" />
          <path d="M19.9253 39.5603C19.7632 39.5606 19.6067 39.5011 19.4857 39.3933L15.5297 35.9296C15.4647 35.8718 15.4118 35.8019 15.3739 35.7237C15.336 35.6455 15.3139 35.5607 15.3088 35.4739C15.3037 35.3872 15.3157 35.3003 15.3442 35.2182C15.3726 35.1361 15.417 35.0604 15.4747 34.9955C15.5325 34.9306 15.6024 34.8776 15.6806 34.8397C15.7588 34.8018 15.8437 34.7797 15.9304 34.7746C16.0171 34.7695 16.104 34.7815 16.1861 34.81C16.2682 34.8385 16.3439 34.8828 16.4088 34.9406L20.3648 38.4043C20.4304 38.4607 20.4841 38.5295 20.5229 38.6067C20.5617 38.6839 20.5848 38.7681 20.591 38.8543C20.5971 38.9405 20.5861 39.0271 20.5586 39.109C20.5311 39.191 20.4877 39.2667 20.4308 39.3318C20.3678 39.4039 20.2901 39.4616 20.2029 39.501C20.1157 39.5404 20.021 39.5607 19.9253 39.5603Z" fill="#F1F1F1" />
          <path d="M19.9253 39.5603C19.7906 39.5616 19.6588 39.5215 19.5475 39.4455C19.4362 39.3695 19.3509 39.2613 19.3031 39.1354C19.2552 39.0094 19.247 38.8719 19.2797 38.7412C19.3124 38.6104 19.3843 38.4929 19.4858 38.4043L23.4418 34.9406C23.5068 34.8828 23.5824 34.8385 23.6645 34.81C23.7466 34.7815 23.8335 34.7695 23.9202 34.7746C24.007 34.7797 24.0918 34.8018 24.17 34.8397C24.2482 34.8776 24.3182 34.9306 24.3759 34.9955C24.4336 35.0604 24.478 35.1361 24.5065 35.2182C24.5349 35.3003 24.547 35.3872 24.5419 35.4739C24.5368 35.5607 24.5146 35.6455 24.4767 35.7237C24.4388 35.8019 24.3859 35.8718 24.3209 35.9296L20.3649 39.3933C20.2446 39.5022 20.0876 39.5618 19.9253 39.5603Z" fill="#F1F1F1" />
          <path d="M22.3561 26.6946H17.4902C15.7294 26.6923 14.0414 25.9918 12.7963 24.7467C11.5512 23.5016 10.8507 21.8136 10.8484 20.0528V7.30559C10.8467 6.43186 11.0171 5.56634 11.35 4.75851C11.6829 3.95068 12.1717 3.21636 12.7885 2.59752C13.4053 1.97868 14.138 1.48744 14.9448 1.15188C15.7515 0.816314 16.6164 0.643005 17.4902 0.641852H22.3561C23.2292 0.640696 24.0941 0.811606 24.9012 1.14481C25.7082 1.47802 26.4417 1.967 27.0598 2.5838C27.6778 3.2006 28.1682 3.93314 28.503 4.73955C28.8378 5.54597 29.0105 6.41045 29.011 7.28361V20.0528C29.0105 20.926 28.8378 21.7905 28.503 22.5969C28.1682 23.4033 27.6778 24.1358 27.0598 24.7526C26.4417 25.3695 25.7082 25.8584 24.9012 26.1916C24.0941 26.5248 23.2292 26.6958 22.3561 26.6946ZM17.4902 1.96053C16.0787 1.9617 14.7255 2.52289 13.7275 3.52091C12.7294 4.51893 12.1682 5.8722 12.1671 7.28361V20.0528C12.1694 21.4639 12.731 22.8165 13.7287 23.8143C14.7265 24.812 16.0791 25.3736 17.4902 25.3759H22.3561C23.0561 25.3771 23.7494 25.2403 24.3965 24.9733C25.0436 24.7064 25.6317 24.3146 26.1273 23.8202C26.6229 23.3258 27.0162 22.7387 27.2847 22.0923C27.5533 21.4458 27.6918 20.7528 27.6924 20.0528V7.30559C27.6947 6.60376 27.5583 5.90838 27.2911 5.25942C27.0238 4.61045 26.631 4.02069 26.1351 3.52401C25.6392 3.02733 25.0501 2.63352 24.4016 2.36521C23.7531 2.0969 23.0579 1.95937 22.3561 1.96053H17.4902Z" fill="#F1F1F1" />
          <path d="M19.9253 11.5912C19.7505 11.5912 19.5828 11.5218 19.4591 11.3981C19.3355 11.2745 19.266 11.1067 19.266 10.9319V7.62199C19.266 7.44712 19.3355 7.27941 19.4591 7.15576C19.5828 7.03211 19.7505 6.96265 19.9253 6.96265C20.1002 6.96265 20.2679 7.03211 20.3916 7.15576C20.5152 7.27941 20.5847 7.44712 20.5847 7.62199V10.9319C20.5847 11.1067 20.5152 11.2745 20.3916 11.3981C20.2679 11.5218 20.1002 11.5912 19.9253 11.5912Z" fill="#F1F1F1" />
        </svg>
      </a>
      <span className=' position-absolute bottom-0 start-0'>
        <svg width="189" height="458" viewBox="0 0 189 458" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" filter="url(#filter0_f_113_788)">
            <circle cx="-40" cy="229" r="50" fill="#FFF624" />
          </g>
          <defs>
            <filter id="filter0_f_113_788" x="-268.8" y="0.199997" width="457.6" height="457.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="89.4" result="effect1_foregroundBlur_113_788" />
            </filter>
          </defs>
        </svg>
      </span>
    </section>
  )
}

export default Header
