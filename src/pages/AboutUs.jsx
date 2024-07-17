import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import Navbar from './NavBar';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark');
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-gradient-to-b from-blue-400 to-blue-600'}`}>
      <title>About Us | Studiously</title>
      <Navbar />
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="text-center my-6">
        <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white' />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full sm:w-11/12 lg:w-4/5 xl:w-3/5">
          <h1 className={`text-5xl mb-4 font-bold text-center py-6 ${isDarkMode ? 'text-white' : 'text-white'}`}>
            About Us
          </h1>
          <div className='flex flex-wrap gap-4 justify-center'>

            <div className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 p-4`}>
              <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
                <p className='text-2xl text-center font-bold py-2 my-2'>
                  Who are we?
                </p>
                <p className='text-white text-lg py-2 my-2'>
                  3888 Greased Lightning is a FTC Team from South Florida (USA) that competes in the FIRST Tech Challenge. We are a team of 15 students who are passionate about STEM and robotics. We are currently in our 16th year of competing in FTC and have been to the World Championship several times. 
                </p>
              </div>
            </div>

            <div className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 p-4`}>
              <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
                <p className='text-2xl text-center font-bold py-2 my-2'>
                  Donate to 3888 Greased Lightning
                </p>
                <p className='text-white text-lg py-2 my-2'>
                  If you would like to donate to support our cause, head on over to this link:  
                  <a href="  https://hcb.hackclub.com/donations/start/3888-greased-lightning" className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                       https://hcb.hackclub.com/donations/start/3888-greased-lightning
                  </a>
                </p>
              </div>
            </div>

            </div>
        </div>
      </div>

      <footer className={`text-sm align-middle text-center text-white mt-auto py-4`}>
        &copy; 2024 | 3888 Greased Lightning
         |{' '}
        <a href="/AboutUs" className="text-white hover:underline">About Us</a> |{' '}
        <a href="/terms-and-conditions" className="text-white hover:underline">Terms and Conditions</a>
      </footer>
    </div>
  );
};

export default Home;