import React from 'react';
import "../styles/Hero.css";
import PatImg from '../assets/img/banner-patricio1.webp';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [t] = useTranslation("global");
  return (
    
    <section
      id='home'
      className='lg:h-[125vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      
      <div className='container mx-auto h-full'>
        <div>
              <img className='w-32 hidden rounded-full' src={PatImg} alt='' />
              </div>
        <div className='flex items-center h-full'>
          <div className='flex-1 flex flex-col items-center'>
            
            <div className='name-pic-div mr-32 text-center'>
              <div className='circlePic-div md:mr-10'>
              <img className='w-40 hidden md:flex-row  md:w-60 md:block rounded-full lg:items-center' src={PatImg} alt='' />
              </div>
              <h1 className='text-center ml-10 text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl font-bold md:tracking-[-2px]'>
                <br /> Full Stack Developer
              </h1>
              
            </div>
            
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            React Redux NodeJs ExpressJs PostgreSQL Sequelize JavaScript PHP Laravel HTML5 CSS Tailwind Bootstrap Git Github  
            </p>
            <Link to="contact"
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className='transition-all duration-300'>
              <button className='btn btn-md bg-secondary hover:text-black md:btn-lg transition-all'>
              {t('hero.work')}
              </button>
            </Link>
            
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
