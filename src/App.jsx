import React from 'react';
import styles from './style';
import {
  Navbar,
  Stats,
  Business,
  Billing,
  Testimonials,
  Clients,
  CTA,
  Footer,
  Hero,
} from './components';
const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    {/* Navbar container */}
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth} `}>
        <Navbar />
      </div>
    </div>

    {/* Hero section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
      </div>
    </div>

    {/* Other section */}
    <div
      className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}
    >
      <div className={`${styles.boxWidth} text-white`}>
        {' '}
        <Stats />
        <Business />
        <Billing />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
