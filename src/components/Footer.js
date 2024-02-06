import React from 'react';

// import social data
import { social } from '../data';
import { useTranslation } from 'react-i18next';

// import logo
/* import Logo from '../assets/img/logo.svg'; */

const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <p className="text-4xl font-signature bg secondary mr-4">Patricio Uskaer</p>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; {new Date().getFullYear()} Patricio Uskaer. {t('contact.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
