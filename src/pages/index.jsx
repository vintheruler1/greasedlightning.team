import React, { useState } from 'react';
import Clock from 'react-live-clock';
import Navbar from './NavBar';
import page from './page';
// import '../styles/styles.css';

import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
  // <Page>
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-gradient-to-b from-blue-400 to-blue-600'}`}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Home</title>
      <Analytics />
      <Navbar />
     <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      <h1 className={`text-5xl mb-4 font-bold text-center my-6 py-6 ${isDarkMode ? 'text-black' : 'text-white'}`}>
        3888 Greased Lightning
      </h1>

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className='flex gap-2'>
          <div className={`border border-blue-300 rounded-lg p-4 shadow-md text-center text-xl ${isDarkMode ? 'text-black' : 'text-white'}`}>
            <p className='text-lg'>Located in Weston, Florida. We are a FIRST (rights reserved) Tech Challenge (add wtv) Team! We compete in the South Florida Gator Bots League.</p>
          </div>
        </div>
      </div>

      <h2 className={`text-3xl font-bold text-center py-6 ${isDarkMode ? 'text-black' : 'text-white'}`}>
        Latest Robot
      </h2>

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className='flex gap-2'>
          <p className='text-lg text-center text-white'>Our newest robot, "Bad Decisions" is a off season robot used to prototype South Floridas <b>first</b> swerve drive.</p>
        </div>
      </div>

      
      

      <footer className={`text-sm align-middle text-center text-white`}>
        &copy; 3888 Greased Lightning 
      </footer>
    </div>
  // </Page>
  );
};

export default Home;