import React from 'react';

const Project = ({ item }) => {
  switch(item.name){
    case "World Developers":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <img className='rounded-2xl' src={item.image} alt='' />
          </div>
          <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
          <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
          <p className='text-base max-w-md'>Group project application about lodging services oriented to customers looking for relaxation and good working environment.</p>
          <br/>
          <div>
          <a  className='md:items-center pr-30 text-white hover:text-accent cursor-pointer' href="https://world-dev-front.vercel.app/" target="blank" rel="noopener noreferrer">visit </a>
          <a> / </a>
          <a  className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/WorldDev-Front" target="blank" rel="noopener noreferrer"> code</a>
          </div>
        </div>
      );
      case "Dogs":
        return (
          <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <img className='rounded-2xl' src={item.image} alt='' />
          </div>
          <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
          <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
          <p className='text-base max-w-md'>My first complete individual project using NodeJs is an application from an API related to dogs breed information.</p>
          <br/>
          <div>
          <a  className='md:items-center pr-30 text-white hover:text-accent cursor-pointer' href="https://dogs-front-five.vercel.app/" target="blank" rel="noopener noreferrer">visit </a>
          <a> / </a>
          <a  className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/Pi-Dogs" target="blank" rel="noopener noreferrer"> code</a>
          </div>
        </div>
        );
        case "Weather App":
        return (
          <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <img className='rounded-2xl' src={item.image} alt='' />
          </div>
          <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
          <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
          <p className='text-base max-w-md'>Weather App is an individual project made with React and Bootstrap during the bootcamp course.</p>
          <br/>
          <div>
          <a  className='md:items-center pr-30 text-white hover:text-accent cursor-pointer' href="https://weather-app-ochre-tau.vercel.app" target="blank" rel="noopener noreferrer">visit </a>
          <a> / </a>
          <a  className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/weather-app" target="blank" rel="noopener noreferrer"> code</a>
          </div>
        </div>
        )
      default: return <h1>Hello</h1>
  }
  
};

export default Project;
