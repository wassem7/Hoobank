import React from 'react';
import { discount, robot } from '../assets';
import styles from '../style';
import GetStarted from '../components/GetStarted';
const Hero = () => (
  // Hero container
  <section
    id='home'
    className={`flex flex-col md:flex-row ${styles.paddingY}  `}
  >
    {/* Main hero container */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
    >
      {/* Discount box */}
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img
          src={discount}
          alt='discount'
          className='w-[32px] h-[32px]'
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20% </span>
          Discount for{' '}
          <span className='text-white'>1 Month </span>
          Account
        </p>
      </div>

      {/* Main Hero main text */}
      <div className='flex flex-row justify-between items-center w-full  '>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          The Next <br className='sm:block hidden' />{' '}
          <span className='text-gradient'>Generation</span>{' '}
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0 text-white'>
          <GetStarted />
        </div>
      </div>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Payment method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Our team of experts uses a methodology to identify the
        credit cards most likely to fit your needs. We examine
        annual percentage rates,annual fess.
      </p>
    </div>
    {/* Robot arms container */}
    <div
      className={`relative flex flex-1 ${styles.flexCenter} md:my-0 my-10`}
    >
      <img
        src={robot}
        alt='billing'
        className='w-[100%] h-[100%] relative z-[5]'
      />
      {/* Gradients */}
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient ' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient ' />
    </div>

    {/* Get Started on mobile devices */}
    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
