import React from 'react';
import { useTranslation } from 'react-i18next';

// import components
import Projects from './Projects';

const Portfolio = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            {t('portfolio.title')}
          </h2>
          <p className='subtitle text-accent'>
          {t('portfolio.subtitle')}
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
