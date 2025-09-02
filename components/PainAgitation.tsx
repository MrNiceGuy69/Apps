
import React from 'react';
import { FlameIcon } from './icons/FlameIcon';
import { TrashIcon } from './icons/TrashIcon';

const PainPoint: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
        <div className="flex items-center mb-2">
            <span className="text-red-500">{icon}</span>
            <h3 className="ml-3 text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-700">{children}</p>
    </div>
);

const PainAgitation: React.FC = () => {
  return (
    <section id="pain" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            The Vicious Cycle of 'Modern' Marketing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            (And why it's designed to drain your bank account.)
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
            <PainPoint icon={<FlameIcon className="w-8 h-8"/>} title="The Digital Black Hole">
                You pour <span className="font-bold text-red-600">$1,000s into Facebook and Google</span>, hoping for a return. Instead, you get vanity metrics like 'clicks' and 'impressions' from tire-kickers. You're paying for fleeting digital dust, not paying customers.
            </PainPoint>
            <PainPoint icon={<TrashIcon className="w-8 h-8"/>} title="The Invisibility Problem">
                With a <span className="font-bold">20% email open rate</span> and <span className="font-bold">2% social media engagement</span>, your message is a whisper in a hurricane of digital noise. You're not just being ignored; you're functionally invisible to your best customers.
            </PainPoint>
        </div>
        <div className="mt-12 text-center bg-gray-100 p-8 rounded-lg">
            <p className="text-2xl font-bold text-gray-800">
                The painful truth? Marketing waste isn't just a line item, it's the silent killer of promising local businesses. Every dollar you spend on ads that don't convert is a choice to let your competitors win.
            </p>
            <p className="mt-4 text-xl text-gray-600">
                It's time to stop gambling and start <span className="font-bold underline">guaranteeing</span> results.
            </p>
        </div>
      </div>
    </section>
  );
};

export default PainAgitation;
