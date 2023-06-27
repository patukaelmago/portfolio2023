import React from 'react';
import Image from '../assets/img/about.webp';
import Image2 from '../assets/img/about3.webp';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <div className='flex flex-col items-center' >
            <img
              className='object-contain h-full m-4 rounded-lg w-full md:mx-auto  lg:mx-0 cursor-pointer '
              src={Image2}
              alt='diploma'
              onClick={() => window.open(Image2)}
            />
            <div >
              <img
                className='object-contain h-full w-full rounded-lg md:mx-auto lg:mx-0 cursor-pointer'
                src={Image}
                alt='code image'
                onClick={() => window.open(Image)}
              />

            </div>
          </div>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
             
              <h2 className='text-5xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                {t('about.about')}
              </h2>
              <p className='mb-4 text-accent'>
                FullStack Web Developer
              </p>
              
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                {t('about.description1')} <a href="https://www.soyhenry.com/" target='_blank' className="text-blue-500"> Henry Bootcamp </a> {t('about.description2')} {t('about.description3')}   <br />
                <br />
                {t('about.description4')}
                <br />
                <br />
                {t('about.description5')}
                <br />
                <br />
                {t('about.description6')}
                <br class="my-4" />
              </p>
            </div>
            <Link to="contact"
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className='transition-all duration-300'>
            <button className='btn btn-md bg-tertiary hover:text-black transition-all'>
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
