import React from 'react';

import styles from './Footer.module.css';

type FooterProps = {
  developerName: string;
  developerUrl: string;
};

const Footer = ({
  developerName = 'a human been.',
  developerUrl = 'https://127.0.0.1/',
}: FooterProps): React.ReactElement => {
  return (
    <footer className={`fs-100 text-center ${styles}`}>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer noopener'
      >
        Frontend Mentor
      </a>
      . Coded by <a href={developerUrl}>{developerName}</a>.
    </footer>
  );
};

export default Footer;
