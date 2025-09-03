
import React, { useState } from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { StarIcon } from './icons/StarIcon';
import { Package } from '../types';

type Term = '1' | '3' | '6' | '12';

interface Tier {
    label: string;
    pricePerMonth: number;
    savings: number;
    total: number;
}

interface PricingData {
    title: string;
    basePrice: number;
    features: string[];
    tiers: Record<Term, Tier>;
}

interface PricingCardProps {
    popular?: boolean;
    data: PricingData;
    onSelect: (pkg: Package) => void;
}

const pricingData = {
    standard: {
        title: "Standard Spot",
        basePrice: 500,
        features: [
            "5,000 Home Reach",
            "Industry Exclusivity",
            "Pro Ad Design",
            "Our Ironclad Guarantee",
        ],
        tiers: {
            '1': { label: '1 Month', pricePerMonth: 500, savings: 0, total: 500 },
            '3': { label: '3 Months', pricePerMonth: 475, savings: 75, total: 1425 },
            '6': { label: '6 Months', pricePerMonth: 450, savings: 300, total: 2700 },
            '12': { label: '12 Months', pricePerMonth: 400, savings: 1200, total: 4800 },
        }
    },
    premium: {
        title: "Premium Spot",
        basePrice: 900,
        features: [
            "Everything in Standard, PLUS:",
            "Double Ad Size (Front Page)",
            "Digital Ad Match Included",
            "Lead Tracking & Analytics Report",
        ],
        tiers: {
            '1': { label: '1 Month', pricePerMonth: 900, savings: 0, total: 900 },
            '3': { label: '3 Months', pricePerMonth: 855, savings: 135, total: 2565 },
            '6': { label: '6 Months', pricePerMonth: 810, savings: 450, total: 4860 },
            '12': { label: '12 Months', pricePerMonth: 720, savings: 2160, total: 8640 },
        }
    }
};

const PricingCard: React.FC<PricingCardProps> = ({ popular, data, onSelect }) => {
    const [selectedTerm, setSelectedTerm] = useState<Term>('1');
    const activeTier = data.tiers[selectedTerm];

    const handleSelect = () => {
        onSelect({
            title: `${data.title} (${activeTier.label})`,
            price: activeTier.total
        });
    };

    return (
        <div className={`border rounded-xl p-6 md:p-8 flex flex-col ${popular ? 'border-yellow-400 border-4 bg-gray-900 text-white relative' : 'border-gray-300 bg-white'}`}>
            {popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold tracking-wider">MOST POPULAR</div>}
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <div className="mt-4 flex items-baseline">
                <span className={`text-5xl font-extrabold ${popular ? 'text-white' : 'text-gray-900'}`}>${activeTier.pricePerMonth}</span>
                <span className={`ml-1 ${popular ? 'text-gray-400' : 'text-gray-500'}`}>/ month</span>
            </div>
            <p className={`mt-1 h-6 ${popular ? 'text-yellow-400' : 'text-green-600'} font-bold`}>
                {activeTier.savings > 0 && `You Save $${activeTier.savings}!`}
            </p>
            <ul className="mt-6 space-y-4 text-left flex-grow">
                {data.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <CheckIcon className={`w-6 h-6 mr-2 flex-shrink-0 ${popular ? 'text-yellow-400' : 'text-green-500'}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Term Selector */}
            <div className="mt-8">
                <p className={`font-bold text-center mb-3 ${popular ? 'text-white' : 'text-gray-800'}`}>Long Term Rate (Save More!)</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {(Object.keys(data.tiers) as Term[]).filter(term => term !== '1').reverse().map((term) => (
                         <button key={term} onClick={() => setSelectedTerm(term)} className={`px-2 py-2 text-sm font-bold rounded-md transition-colors ${selectedTerm === term ? (popular ? 'bg-yellow-400 text-gray-900' : 'bg-red-600 text-white') : (popular ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300')}`}>
                           {data.tiers[term].label.split(' ')[0]}-Months
                        </button>
                    ))}
                     <button onClick={() => setSelectedTerm('1')} className={`px-2 py-2 text-sm font-bold rounded-md transition-colors ${selectedTerm === '1' ? (popular ? 'bg-yellow-400 text-gray-900' : 'bg-red-600 text-white') : (popular ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300')}`}>
                           Monthly
                        </button>
                </div>
            </div>

            <button onClick={handleSelect} className={`w-full mt-8 py-4 text-lg font-bold rounded-lg transition-transform transform hover:scale-105 ${popular ? 'bg-yellow-400 text-gray-900' : 'bg-red-600 text-white'}`}>
                {`Claim My Spot - $${activeTier.total}`}
            </button>
        </div>
    );
};

interface PricingProps {
    onSelectPackage: (pkg: Package) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Your Final Step to Guaranteed Growth.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          This is the easiest decision you'll make all year. The only way to lose is to do nothing.
        </p>
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
            <PricingCard 
                data={pricingData.standard}
                onSelect={onSelectPackage}
            />
             <PricingCard 
                popular
                data={pricingData.premium}
                onSelect={onSelectPackage}
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
