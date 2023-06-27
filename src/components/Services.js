import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiLayout, FiSettings, FiPenToo, FiTag, FiPenTool } from 'react-icons/fi';

// import services data
import { services } from '../data';

const Services = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            {t('services.services')}
          </h2>
          <p className='subtitle text-accent'>
            {t('services.description')}
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          
            
              <div className='bg-secondary p-6 rounded-2xl' >
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {<FiLayout/>}
                </div>
                <h4 className='text-xl font-medium mb-2'>{t('services.name1')}</h4>
                <p>{t('services.web-design')}</p>
              </div>

              <div className='bg-secondary p-6 rounded-2xl' >
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {<FiSettings/>}
                </div>
                <h4 className='text-xl font-medium mb-2'>{t('services.name2')}</h4>
                <p>{t('services.web-development')}</p>
              </div>

              <div className='bg-secondary p-6 rounded-2xl' >
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {<FiPenTool/>}
                </div>
                <h4 className='text-xl font-medium mb-2'>{t('services.name3')}</h4>
                <p>{t('services.branding')}</p>
              </div>

              <div className='bg-secondary p-6 rounded-2xl' >
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {<FiTag/>}
                </div>
                <h4 className='text-xl font-medium mb-2'>{t('services.name4')}</h4>
                <p>{t('services.cm')}</p>
              </div>
           
        </div>
      </div>
    </section>
  );
};

export default Services;
