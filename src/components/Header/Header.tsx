import React from 'react';

import iconMoon from '../../assets/images/icon-moon.svg';
import iconSun from '../../assets/images/icon-sun.svg';
import useDarkTheme from '../../hooks/useDarkTheme';

import styles from './Header.module.css';

const Header = () => {
  const { isDark, toggleTheme } = useDarkTheme();

  return (
    <header className={`flex ${styles}`}>
      <h1 className='text-white fs-900 fw-bold lh-heading ls-900 uppercase'>
        Todo
      </h1>
      <button className='button'>
        <img
          src={isDark ? iconSun : iconMoon}
          alt=''
          aria-hidden='true'
          onClick={toggleTheme}
        />
        <span className='visually-hidden'>Change theme</span>
      </button>
    </header>
  );
};

export default Header;
