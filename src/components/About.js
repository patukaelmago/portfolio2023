import React from 'react';
import Image from '../assets/img/about.webp';
import Image2 from '../assets/img/about3.webp';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <div className='flex flex-col ' >
            <img
              className='object-contain h-full w-full md:mx-auto m-2 lg:mx-0 rounded-2xl cursor-pointer '
              src={Image2}
              alt='diploma'
              onClick={() => window.open(Image2)}
            />
            <div >
              <img
                className='object-contain h-full w-full md:mx-auto lg:mx-0 cursor-pointer'
                src={Image}
                alt='code image'
                onClick={() => window.open(Image)}
              />

            </div>
          </div>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-5xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Me
              </h2>
              <p className='mb-4 text-accent'>
                FullStack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                In 2022, I completed 700 hours of theoretical-practical study at the  <a href="https://www.soyhenry.com/" target='_blank' className="text-blue-500"> Henry Bootcamp Academy</a> in Argentina. During my time there, I gained proficiency in a variety of technologies and frameworks, including React, Redux, NodeJs, ExpressJs, PostgresSql, Sequelize, JavaScript, Html5, Css, Bootstrap, Tailwind, Git, Github, Figma, and Firebase.    <br />
                <br />
                As a Teaching Assistant at Henry Bootcamp, I had the opportunity to guide a group of 20 students. This experience helped me develop leadership, mentoring, and communication skills. <br />
                <br />
                My level of English is B2 - Upper Intermediate, as certified by the EF SET certificate. I am confident in my ability to communicate effectively in both written and spoken English. <br />
                <br />
                In addition to my technical skills, I am an empathetic person with a positive attitude. I am prepared to work full-time and put in the necessary hours to achieve individual, group, and business goals. I have a genuine passion for technology and programming and am always eager to tackle challenging problems and find creative solutions.
                <br class="my-4" />

                Overall, I believe that my strong work ethic, problem-solving abilities and passion for technology make me a valuable asset to any team or business.
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
              Contact me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
