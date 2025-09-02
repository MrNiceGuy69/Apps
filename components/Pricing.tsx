
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { StarIcon } from './icons/StarIcon';
import { Package } from '../types';

interface PricingCardProps {
    popular?: boolean;
    title: string;
    price: number;
    features: string[];
    realCost: string;
    ctaText: string;
    onSelect: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ popular, title, price, features, realCost, ctaText, onSelect }) => (
    <div className={`border rounded-xl p-8 flex flex-col ${popular ? 'border-yellow-400 border-4 bg-gray-900 text-white relative' : 'border-gray-300 bg-white'}`}>
        {popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>}
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4">
            <span className={`text-5xl font-extrabold ${popular ? 'text-white' : 'text-gray-900'}`}>${price}</span>
            <span className={`ml-1 ${popular ? 'text-gray-400' : 'text-gray-500'}`}>/ mailing</span>
        </div>
        <p className={`mt-1 line-through ${popular ? 'text-gray-500' : 'text-gray-400'}`}>Real Cost: {realCost}</p>
        <ul className="mt-8 space-y-4 text-left flex-grow">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                    <CheckIcon className={`w-6 h-6 mr-2 flex-shrink-0 ${popular ? 'text-yellow-400' : 'text-green-500'}`} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button onClick={onSelect} className={`w-full mt-10 py-4 text-lg font-bold rounded-lg transition-transform transform hover:scale-105 ${popular ? 'bg-yellow-400 text-gray-900' : 'bg-red-600 text-white'}`}>{ctaText}</button>
    </div>
);

interface PricingProps {
    onSelectPackage: (pkg: Package) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  const standardPackage: Package = { title: 'Standard Spot', price: 500 };
  const premiumPackage: Package = { title: 'Premium Spot', price: 900 };
  
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Your Final Step to Guaranteed Growth.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          This is the easiest decision you'll make all year. The only way to lose is to do nothing.
        </p>
        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <PricingCard 
                title={standardPackage.title}
                price={standardPackage.price}
                realCost="$6,000"
                features={[
                    "5,000 Home Reach",
                    "Industry Exclusivity",
                    "Pro Ad Design",
                    "Our Ironclad Guarantee",
                ]}
                ctaText="Claim My Standard Spot"
                onSelect={() => onSelectPackage(standardPackage)}
            />
             <PricingCard 
                popular
                title={premiumPackage.title}
                price={premiumPackage.price}
                realCost="$12,500"
                features={[
                    "Everything in Standard, PLUS:",
                    "Double Ad Size (Front Page)",
                    "Digital Ad Match Included",
                    "Lead Tracking & Analytics Report",
                ]}
                ctaText="Claim My Premium Spot"
                onSelect={() => onSelectPackage(premiumPackage)}
            />
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-yellow-100 border-l-8 border-yellow-500 p-8 rounded-r-lg shadow-2xl text-left">
            <div className="flex items-center">
                <StarIcon className="w-16 h-16 text-yellow-500 hidden md:block mr-6" />
                <div>
                    <h3 className="text-3xl font-extrabold text-gray-900">Our 'Zero-Risk, All-Reward' Ironclad Guarantee</h3>
                    <p className="mt-3 text-lg text-gray-700">
                        This is simple. If your business receives <span className="font-bold">no qualified leads</span> from the mailer, we will give you <span className="font-bold text-red-600">100% of your money back</span>. No hassle, no questions asked. We'll even give you a <span className="font-bold">$100 bonus</span> just for giving us a try.
                    </p>
                     <p className="mt-4 font-bold text-gray-800 text-xl">
                        You either get a flood of new customers or you get paid. The risk is 100% on us.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
