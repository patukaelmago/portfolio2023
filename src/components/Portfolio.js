import React from 'react';
import { useTranslation } from 'react-i18next';

// import components
import Projects from './Projects';

const Portfolio = () => {
  const [t] = useTranslation("global");
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px] pb-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title pt-16'>
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
