
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold">Local Mail Billboard</h3>
        <p className="mt-2 text-gray-400">
          The Last Marketing You'll Ever Need.
        </p>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Local Mail Billboard. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
