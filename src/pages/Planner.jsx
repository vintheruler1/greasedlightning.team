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
      <title>Planner | Studiously</title>
      <Navbar />
      <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white text-center my-2' />
      <div class="shape-blob"></div>
	<div class="shape-blob one"></div>
	<div class="shape-blob two"></div>
      <h1 className={`text-5xl mb-4 font-bold text-center my-6 py-6 ${isDarkMode ? 'text-black' : 'text-white'}`}>
        Planner
      </h1>
      <footer className={`text-sm align-middle text-center text-white`}>
        &copy; 2024 3888 Greased Lightning |{' '}
        <a href="/AboutUs" className="text-white hover:underline">About Us</a> |{' '}
        <a href="/terms-and-conditions" className="text-white hover:underline">Terms and Conditions</a>
      </footer>
    </div>
  );
};

export default Home;
