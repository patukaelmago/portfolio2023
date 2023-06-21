import React from 'react';
import "../styles/Hero.css";
import PatImg from '../assets/img/banner-patricio1.webp';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[125vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full'>
          <div className='flex-1 flex flex-col items-center'>
            
            <div className='name-pic-div mr-32'>
              <div className='circlePic-div mr-10'>
              <img className='flex-row w-40 md:w-60 rounded-full lg:items-center' src={PatImg} alt='' />
              </div>
              <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl font-bold md:tracking-[-2px]'>
                <br /> Full Stack Developer
              </h1>
            </div>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            React Redux NodeJs ExpressJs PostgreSQL Sequelize JavaScript PHP Laravel HTML5 CSS Bootstrap Tailwind Bootstrap Firebase Git Github 
            </p>
            <Link to="contact"
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className='transition-all duration-300'>
              <button className='btn btn-md bg-secondary hover:text-black md:btn-lg transition-all'>
              Work with me
              </button>
            </Link>
            
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
