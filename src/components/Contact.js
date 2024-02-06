import React from 'react';
import { useTranslation } from 'react-i18next';
import {FiMail, FiMapPin}from 'react-icons/fi';
// import contact data



const Contact = () => {
  const [t] = useTranslation("global");
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            {t('about.contact')}
          </h2>
          <p className='subtitle text-accent'>
          {t('contact.tellme')}
          <br/>
          {t('contact.thanks')}
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
          
                
                <div className='flex flex-col lg:flex-row gap-x-4' >
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {<FiMail/>}
                  </div>
                  <div>
                    {/* <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p> */}
                    <h4 className='font-body text-xl mb-1'>{t('contact.title')}</h4>
                    <p className='mb-1 text-paragraph'>{t('contact.subtitle')}</p>
                  </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-x-4' >
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {<FiMapPin/>}
                  </div>
                  <div>
                    {/* <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p> */}
                    <h4 className='font-body text-xl mb-1'>{t('contact.location')}</h4>
                    <p className='mb-1 text-paragraph'>{t('contact.city')}</p>
                    <p className='text-accent font-normal '>{t('contact.pd')}</p>
                  </div>
                </div>

                
            
          </div>
          <form
            action="https://getform.io/f/cb5eb6c1-aa94-4542-b5c1-c76401b2092f" method="POST"
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder={t('contact.name')} name="name" />
              <input className='input' type='email' placeholder={t('contact.email')} name="email" />
            </div>
            <input className='input' type='text' placeholder={t('contact.subject')} name="subject" />
            <textarea
              className='textarea'
              placeholder={t('contact.message')}
              name="textarea"
            ></textarea>
            <div>
              <div className="mb-8" class="g-recaptcha" data-sitekey="6LdinA8lAAAAAFDru4yJj1313N2M28Xjm4SacliP"></div>
              
            </div>
            <button className='btn btn-lg bg-secondary hover:text-black'>
              {t('contact.send')}
            </button>
           
            
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
