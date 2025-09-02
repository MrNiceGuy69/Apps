
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
    {
        question: "Is direct mail 'dead'?",
        answer: "It's the opposite. While digital is a crowded, noisy battlefield, the mailbox is a protected space. The average household gets 100+ emails a day but only 2 pieces of mail. In a world of digital fatigue, a physical, oversized 9x12 mailer is a pattern interrupt. It doesn't just get 'opened'—it gets held, considered, and acted upon."
    },
    {
        question: "What kind of businesses does this work for?",
        answer: "This works for any local service or retail business that wants more customers. We've seen massive success with gyms, plumbers, electricians, realtors, restaurants, salons, dentists, and more. If you serve a local geography, this is built for you."
    },
    {
        question: "How do I know if I actually got any leads?",
        answer: "We believe in tracking, not guessing. With our Premium package, we provide a unique call tracking number and a trackable QR code for your ad. You get a simple report showing exactly how many calls and website visits your ad generated. For the first time, you'll see a direct line from your ad dollars to your bank account."
    },
    {
        question: "Why is this so cheap compared to doing it myself?",
        answer: "That's the 'shared mailer' economic advantage. A solo 9x12 mailing to 5,000 homes would cost you over $3,000 in printing and postage alone. By sharing the mailer with a handful of non-competing businesses, you get the same 'shock and awe' impact for a fraction of the price. It's leverage."
    },
    {
        question: "What if I don't like the ad design?",
        answer: "Our pro design service is included for free, and we offer unlimited revisions. We will work with you until you are 100% thrilled with your ad design before it goes to print. Your satisfaction is non-negotiable."
    },
];

const AccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <h3>
                <button
                    onClick={onClick}
                    className="flex justify-between items-center w-full py-5 text-left font-bold text-xl text-gray-800"
                    aria-expanded={isOpen}
                >
                    <span>{item.question}</span>
                    <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
            </h3>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="py-5 pr-10 text-gray-600">
                   <p>{item.answer}</p>
                </div>
            </div>
        </div>
    );
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Still Have Questions? Let's Smash Them.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Here are the most common questions we get from smart business owners.
          </p>
        </div>
        <div className="mt-12">
            {faqData.map((item, index) => (
                <AccordionItem 
                    key={index} 
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
