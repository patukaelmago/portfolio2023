import React from 'react';
import Image from '../assets/img/about.webp';
import Image2 from '../assets/img/about3.webp';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [t] = useTranslation("global");
  return (
    <section className='section bg-secondary md:py-24 md:pb-12' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-12'>
          
          <div className='flex flex-col items-center text-center'>
            <div className='flex flex-col'>
             
              <h2 className='text-5xl lg:text-4xl font-medium lg:font-extrabold mb-3 '>
                {t('about.about')}
              </h2>
              <p className='mb-4 text-accent'>
                FullStack Web Developer
              </p>
              
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                {t('about.description1')} <a href="https://www.soyhenry.com/" target='_blank' rel="noreferrer" className="text-blue-500"> Henry Bootcamp </a> {t('about.description2')} {t('about.description3')}   <br />
                <br />
                {t('about.description4')}
                <br />
                <br />
                {t('about.description7')} <a href="https://www.tribus.com.ar/" target='_blank' rel="noreferrer" className="text-blue-500"> Tribus</a>
                <br />
                <br />
                {t('about.description5')}
                <br />
                <br />
                {t('about.description6')}
                <br className="my-4" />
              </p>
            </div>
            <div className='flex flex-col  items-center py-6 gap-4' >
            <img
              className='object-contain rounded-lg md:mx-auto lg:mx-0 cursor-pointer w:75 '
              src={Image2}
              alt='diploma'
              onClick={() => window.open(Image2)}
            />
            
          </div>
            <Link to="contact"
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className='transition-all duration-300'>
            <button className='btn btn-md bg-tertiary hover:text-black transition-all mt-12'>
              {t('about.contact')}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
