import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah P.',
    business: 'Local Gym Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop&crop=faces',
    quote: "I was hesitant, but this was the best marketing decision I've ever made. The phone rang off the hook for a week straight. We signed up 32 new members.",
    result: '32 New Members in 1 Week',
    roi: 2500,
  },
  {
    name: 'Mike R.',
    business: 'Plumbing Company',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop&crop=faces',
    quote: "Forget Google Ads. One mailer brought in more high-quality jobs than our entire digital budget for the last quarter. The ROI is just insane.",
    result: '$15,000+ in New Jobs',
    roi: 3000,
  },
  {
    name: 'Jessica L.',
    business: 'Boutique Salon',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&fit=crop&crop=faces',
    quote: "We were fully booked for two months solid after the mailer dropped. The exclusivity bonus was huge - we were the only salon featured!",
    result: 'Fully Booked for 2 Months',
    roi: 1800,
  },
];

const ProofCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
        <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white shadow-lg" />
        <p className="mt-6 text-gray-600 italic">"{testimonial.quote}"</p>
        <div className="mt-6 w-full">
            <div className="bg-yellow-100 border-t-4 border-yellow-400 text-yellow-900 px-4 py-3 rounded-b" role="alert">
              <p className="font-bold">{testimonial.result}</p>
              <p className="text-sm">That's a <span className="font-extrabold">{testimonial.roi}% ROI</span></p>
            </div>
        </div>
        <p className="mt-4 font-bold text-lg text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.business}</p>
    </div>
);


const Proof: React.FC = () => {
  return (
    <section id="proof" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Proof: Businesses Just Like Yours Are Printing Money
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Don't take our word for it. Here are the specific, verifiable results.
          </p>
        </div>
        <div className="mt-20 grid gap-16 lg:grid-cols-3 md:grid-cols-2">
            {testimonials.map((t, index) => <ProofCard key={index} testimonial={t} />)}
        </div>
         <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-gray-800">Average ROI Reported By Our Clients: <span className="text-green-600 text-4xl">1,200%</span></p>
            <p className="text-lg text-gray-600">This isn't just marketing. It's a profit-generating machine.</p>
        </div>
      </div>
    </section>
  );
};

export default Proof;