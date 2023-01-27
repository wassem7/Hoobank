import React from 'react';
import { clients } from '../constants';
import styles from '../style';
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] w-[100px] object-contain`}
        >
          <img
            src={client.logo}
            alt='client-logo'
            className='sm:w-[192px] w-[100px] object-contain  hover:scale-105 hover:duration-200 hover:bg-clip-text '
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
