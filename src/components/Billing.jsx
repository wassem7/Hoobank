import React from 'react';
import { apple, google, bill } from '../assets';
import styles, { layout } from '../style';
const Billing = () => (
  <section id='billing' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt='billing'
        className='w-[100%] h-[100%] relative z-[5]'
      />
      <div className='rounded-full absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] white__gradient' />

      <div className='rounded-full absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] pink__gradient' />
    </div>

    {/* Text */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='sm:block hidden' />{' '}
        billing and invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices
        ametodio aenean neque. Fusce ipsum orci rhoncus
        aliporttitor integer platea placerat.
      </p>

      {/* Logos container */}
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img
          className='w-[128px] h-[42px] object-contain mr-5 hover:scale-105 hover:duration-150 cursor-pointer'
          src={google}
          alt='google_logo'
        />

        <img
          className='w-[128px] h-[42px] object-contain hover:scale-105 hover:duration-150 cursor-pointer'
          src={apple}
          alt='apple_logo'
        />
      </div>
    </div>
  </section>
);

export default Billing;
