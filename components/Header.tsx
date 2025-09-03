import React, { useState, useEffect } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { LogoIcon } from './icons/LogoIcon';

const Header: React.FC = () => {
  const [timeLeft] = useCountdown();
  const [spotsClaimed, setSpotsClaimed] = useState(12);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Dynamically set the number of spots claimed based on the day of the week
    const dayOfWeek = new Date().getDay(); // 0 (Sun) to 6 (Sat)
    // Sun:16, Mon:10, Tue:11, Wed:12, Thu:13, Fri:14, Sat:15
    const baseSpots = [16, 10, 11, 12, 13, 14, 15]; 
    const spots = baseSpots[dayOfWeek];
    
    // Add a little randomization on weekdays to make it feel more live
    const randomFactor = (dayOfWeek > 0 && dayOfWeek < 6) ? Math.floor(Math.random() * 2) : 0;
    
    setSpotsClaimed(Math.min(spots + randomFactor, 16)); // Ensure it doesn't go over 16
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 bg-white shadow-xl z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <LogoIcon className="h-10 w-10" />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter">
            Local Mail Billboard
            <span className="block text-xs text-red-600 font-bold">Ads That Work!</span>
          </h1>
        </div>
        <ul className={`hidden lg:flex items-center space-x-8 font-semibold transition-all duration-300 ${isScrolled ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
          <li><a href="#pain" onClick={(e) => { e.preventDefault(); scrollToSection('pain'); }} className="hover:text-red-600 transition-colors">Your Pain</a></li>
          <li><a href="#offer" onClick={(e) => { e.preventDefault(); scrollToSection('offer'); }} className="hover:text-red-600 transition-colors">The Offer</a></li>
          <li><a href="#proof" onClick={(e) => { e.preventDefault(); scrollToSection('proof'); }} className="hover:text-red-600 transition-colors">Real Proof</a></li>
        </ul>
        <button onClick={() => scrollToSection('pricing')} className="bg-red-500 text-white px-6 py-3 text-lg font-bold rounded-lg shadow-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
          Claim Your Spot
        </button>
      </nav>
      <div className="bg-black text-white text-center py-2 text-sm md:text-base font-bold">
        <span>Next Batch Closes In: {timeLeft}</span>
        <span className="mx-2 hidden sm:inline-block">|</span>
        <span className="block sm:inline-block">Spots Filling Fast: <span className="text-red-500">{spotsClaimed} of 16</span> Claimed!</span>
      </div>
    </header>
  );
};

export default Header;