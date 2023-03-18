import React from 'react';

// import contact data
import { contact } from '../data';


const Contact = () => {
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle text-accent'>
          Tell me about your project and let’s create something together.
          Thanks for the visit!
          </p>
          


        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            action="https://getform.io/f/cb5eb6c1-aa94-4542-b5c1-c76401b2092f" method="POST"
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Your name' name="name" />
              <input className='input' type='email' placeholder='Your email' name="email" />
            </div>
            <input className='input' type='text' placeholder='Subject' name="subject" />
            <textarea
              className='textarea'
              placeholder='Your message'
              name="textarea"
            ></textarea>
            <div>
              <div className="mb-8" class="g-recaptcha" data-sitekey="6LdinA8lAAAAAFDru4yJj1313N2M28Xjm4SacliP"></div>
              
            </div>
            <button className='btn btn-lg bg-secondary hover:text-black'>
              Send message
            </button>
           
            
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
