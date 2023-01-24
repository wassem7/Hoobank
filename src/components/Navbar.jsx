import React from 'react';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className='w-full flex justify-between items-center py-6 '>
      <img
        src={logo}
        alt='Hoobank Logo'
        className='w-[124px] h-[32px]'
      />
      <ul className='list-none hidden sm:flex justify-end items-center flex-1 '>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index == navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Toggle Button */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          className='w-[28px] h-[28px] object-contain'
          onClick={() => settoggle((prev) => !prev)}
        />

        {/* Hamburger menu */}

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          {/* Hamburger List */}
          <ul className='list-none flex-col justify-end items-center flex-1 '>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index == navLinks.length - 1 ? 'mr-0' : 'mb-4'
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
