import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Project = ({ item }) => {
  const [t] = useTranslation("global");
  switch (item.name) {
    case "World Developers":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title={t('project.atitle')} href="https://world-dev-front.vercel.app/" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `} />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>{t('project.wd')}</p>
          <br />
          <div>
            
            <a className='text-white hover:text-accent cursor-pointer' href="https://world-dev-front-delta.vercel.app/" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> {t('project.code')} <FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      );
    case "Dogs":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title={t('project.atitle')} href="https://dogs-front-five.vercel.app/" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>{t('project.dogs')}</p>
          <br />
          <div>
           
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/DOGS---FRONT" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> {t('project.code')} <FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      );
    case "Weather App":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title={t('project.atitle')} href="https://weather-app-ochre-tau.vercel.app" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>{t('project.weather')}</p>
          <br />
          <div>
           
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/weather-app" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> {t('project.code')}<FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      )
    case "Random Quote Machine":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title={t('project.atitle')} href="https://random-qoute-machine-tawny.vercel.app/" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>{t('project.rqm')}</p>
          <br />
          <div>
            
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/Random-Qoute-Machine" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> {t('project.code')} <FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      )
    case "Speakify":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title={t('project.atitle')} href="https://speakify.vercel.app/" target="blank" rel="noopener noreferrer" >
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>{t('project.speakify')}</p>
          <br />
          <div>
            
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/speakify" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> {t('project.code')} <FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      )
    default:
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
          <div className='mb-8 border border-sky-500 rounded-2xl'>
            
            <a title={t('project.atitle')} href="https://contador-de-clics-xi.vercel.app/" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>{t('project.nashe')}</p>
          <br />
          <div>
            
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/contador-de-clics" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> {t('project.code')} <FaLaptopCode className='ml-2' /> </i> </a>
          </div>
        </div>
      )
  }
};

export default Project;
