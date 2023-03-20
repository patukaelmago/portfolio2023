import React from 'react';

const Project = ({ item }) => {
  switch (item.name) {
    case "World Developers":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <img className='rounded-2xl' src={item.image} alt='' />
          </div>
          <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
          <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
          <p className='text-base max-w-md'>Group project application about lodging services oriented to customers looking for relaxation and good working environment.</p>
          <br />
          <div>
            <a className='md:items-center pr-30 text-white hover:text-accent cursor-pointer' href="https://world-dev-front.vercel.app/" target="blank" rel="noopener noreferrer">visit </a>
            <a> / </a>
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/WorldDev-Front" target="blank" rel="noopener noreferrer"> code</a>
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
          <br />
          <div>
            <a className='md:items-center pr-30 text-white hover:text-accent cursor-pointer' href="https://dogs-front-five.vercel.app/" target="blank" rel="noopener noreferrer">visit </a>
            <a> / </a>
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/Pi-Dogs" target="blank" rel="noopener noreferrer"> code</a>
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
          <br />
          <div>
            <a className='md:items-center pr-30 text-white hover:text-accent cursor-pointer' href="https://weather-app-ochre-tau.vercel.app" target="blank" rel="noopener noreferrer">visit </a>
            <a> / </a>
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/weather-app" target="blank" rel="noopener noreferrer"> code</a>
          </div>
        </div>
      )
    case "Random Quote Machine":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <img className='rounded-2xl' src={item.image} alt='' />
          </div>
          <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
          <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
          <p className='text-base max-w-md'>Random Quote Machine is an innovative application that gives you the opportunity to access a wide variety of inspiring quotes from well-known people around the world. With just one click, you can generate a new random quote and share your favorite on Twitter in seconds. Additionally, the application features a dark mode that is not only sleek and modern but also helps reduce visual fatigue during long usage sessions. With Random Quote Machine, you will never run out of inspiration. Discover new ideas and wise words every time you open the application and find the motivation you need to move forward in your projects and personal goals!</p>
          <br />
          <div>
            <a className='md:items-center pr-30 text-white hover:text-accent cursor-pointer' href="https://random-qoute-machine-tawny.vercel.app/" target="blank" rel="noopener noreferrer">visit </a>
            <a> / </a>
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/Random-Qoute-Machine" target="blank" rel="noopener noreferrer"> code</a>
          </div>
        </div>
      )
    case "Speakify":
      return (
          <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <img className='rounded-2xl' src={item.image} alt='' />
          </div>
          <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
          <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
          <p className='text-base max-w-md'>Speakify is a text-to-speech application that converts any written text into a synthetic voice. The application is easy to use and allows users to input text, select a language and a voice, and then listen to the text being read aloud. Speakify is a useful tool for people with visual impairments, people with reading difficulties, or anyone who prefers to listen to the text instead of reading it. Additionally, the application also has a translation feature that allows users to translate the text into several different languages. In summary, Speakify is a practical and helpful application for anyone who needs a fast and easy-to-use text-to-speech tool.</p>
          <br />
          <div>
            <a className='md:items-center pr-30 text-white hover:text-accent cursor-pointer' href="speakify.vercel.app" target="blank" rel="noopener noreferrer">visit </a>
            <a> / </a>
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/speakify" target="blank" rel="noopener noreferrer"> code</a>
          </div>
        </div>
        
      )
    default: return <h1>Hello</h1>
  }

};

export default Project;
