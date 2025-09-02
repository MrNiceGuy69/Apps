import React from 'react';
import { StarIcon } from './icons/StarIcon';

const Hero: React.FC = () => {
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
            {/* The Image with filter */}
            <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1615599793913-915470a11953?q=80&w=1974&auto=format&fit=crop')"}}
            ></div>
            {/* The Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
          <span className="text-red-500">Tired of Wasting Money</span> on Ads That Don't Work?
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-300">
          This isn't another marketing gamble. It's a calculated investment in a system that floods local businesses with high-value customers. <span className="font-bold text-white">Stop guessing, start growing.</span>
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-2xl border-4 border-yellow-400 transform -rotate-2">
            <h3 className="text-xl font-bold mb-4">Your $12,000+ Value Stack</h3>
            <ul className="text-left space-y-2">
              <li className="flex items-center"><StarIcon className="w-5 h-5 text-yellow-500 mr-2" /> 5,000 Home Reach <span className="font-bold ml-1">($5,000 Value)</span></li>
              <li className="flex items-center"><StarIcon className="w-5 h-5 text-yellow-500 mr-2" /> Industry Exclusivity <span className="font-bold ml-1">($2,500 Value)</span></li>
              <li className="flex items-center"><StarIcon className="w-5 h-5 text-yellow-500 mr-2" /> Pro Ad Design <span className="font-bold ml-1">($500 Value)</span></li>
               <li className="flex items-center"><StarIcon className="w-5 h-5 text-yellow-500 mr-2" /> Lead Gen Report <span className="font-bold ml-1">($1,000 Value)</span></li>
              <li className="flex items-center"><StarIcon className="w-5 h-5 text-yellow-500 mr-2" /> Ironclad Guarantee <span className="font-bold ml-1">(Priceless!)</span></li>
            </ul>
          </div>
          
          <div className="max-w-md">
             <p className="text-md text-gray-400 italic mb-6">Your competitors are stealing customers while you're reading this. Are you going to let them win?</p>
             <button onClick={scrollToPricing} className="w-full bg-yellow-400 text-gray-900 px-12 py-5 text-2xl font-extrabold rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300">
                YES! I Want Guaranteed ROI
             </button>
             <p className="mt-3 text-sm text-gray-300">100% Risk-Free. No Leads = Full Refund + $100.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;