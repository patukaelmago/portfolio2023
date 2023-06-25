import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const Project = ({ item }) => {
  switch (item.name) {
    case "World Developers":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title='visit project' href="https://world-dev-front.vercel.app/" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `} />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>Group project application about lodging services oriented to customers looking for relaxation and good working environment.</p>
          <br />
          <div>
            
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/WorldDev-Front" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> code <FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      );
    case "Dogs":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title='visit project' href="https://dogs-front-five.vercel.app/" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>My first complete individual project using NodeJs is an application from an API related to dogs breed information.</p>
          <br />
          <div>
           
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/DOGS---FRONT" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> code <FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      );
    case "Weather App":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title='visit project' href="https://weather-app-ochre-tau.vercel.app" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>Weather App is an individual project made with React and Bootstrap during the bootcamp course.</p>
          <br />
          <div>
           
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/weather-app" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> code <FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      )
    case "Random Quote Machine":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title='visit project' href="https://random-qoute-machine-tawny.vercel.app/" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>Random Quote Machine is an innovative application that gives you the opportunity to access a wide variety of inspiring quotes from well-known people around the world. With just one click, you can generate a new random quote and share your favorite on Twitter in seconds. Additionally, the application features a dark mode that is not only sleek and modern but also helps reduce visual fatigue during long usage sessions. With Random Quote Machine, you will never run out of inspiration.</p>
          <br />
          <div>
            
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/Random-Qoute-Machine" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> code <FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      )
    case "Speakify":
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
            <a title='visit project' href="https://speakify.vercel.app/" target="blank" rel="noopener noreferrer" >
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>Speakify is a text-to-speech application that converts any written text into a synthetic voice. The application is easy to use and allows users to input text. Write something in the box and then listen to the text being read aloud. Speakify is a useful tool for people with visual impairments, people with reading difficulties, or anyone who prefers to listen to the text instead of reading it. In summary, Speakify is a practical and helpful application for anyone who needs a fast and easy-to-use text-to-speech tool.</p>
          <br />
          <div>
            
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/speakify" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> code <FaLaptopCode className='ml-2' /> </i></a>
          </div>
        </div>
      )
    default:
      return (
        <div key={item.id} className='flex flex-col items-center text-center'>
          <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
          <div className='mb-8 border border-sky-500 rounded-2xl'>
            
            <a title='visit project' href="https://contador-de-clics-xi.vercel.app/" target="blank" rel="noopener noreferrer">
              <img className='rounded-2xl' src={item.image} alt={`imagen de ${item.name} `}  />
            </a>
          </div>
          <p className='capitalize text-white text-sm mb-3'>{item.category}</p>
          
          <p className='text-base max-w-md'>An exciting game app designed to challenge your ability to click continuously without interruption. In Nashe Clicker, your goal is to achieve the most consecutive clicks in a given time. In addition, it has a stopwatch that allows you to measure the time elapsed during your attempts. With Nashe Clicker, you will be able to test your skills in the art of clicking. How many clicks can you do in a given time? Will you be able to beat your own records and challenge your friends? Find out with Nashe Clicker!</p>
          <br />
          <div>
            
            <a className='text-white hover:text-accent cursor-pointer' href="https://github.com/patukaelmago/contador-de-clics" target="blank" rel="noopener noreferrer"><i className='flex items-center text-accent'> code <FaLaptopCode className='ml-2' /> </i> </a>
          </div>
        </div>
      )
  }
};

export default Project;
