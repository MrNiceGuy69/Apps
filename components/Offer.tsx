
import React, { useState, useMemo } from 'react';
import { CheckIcon } from './icons/CheckIcon';

const OfferItem: React.FC<{ title: string; value: string; children: React.ReactNode }> = ({ title, value, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-100 hover:border-yellow-400 hover:scale-105 transition-all duration-300">
        <div className="flex justify-between items-baseline">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">{value} Value</span>
        </div>
        <p className="mt-3 text-gray-600">{children}</p>
    </div>
);


const Offer: React.FC = () => {
    const [customerValue, setCustomerValue] = useState(500);
    const [leads, setLeads] = useState(20);

    const totalRevenue = useMemo(() => customerValue * leads, [customerValue, leads]);
    const profit = useMemo(() => totalRevenue - 500, [totalRevenue]);

  return (
    <section id="offer" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            The Unbeatable Offer: How We Engineered Your Success
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We stacked the deck so you literally cannot lose. Here's the math.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <OfferItem title="Core Offer: 5,000 Mailboxes" value="$5,000">
                Your ad, in a massive 9x12 mailer, delivered directly to 5,000 high-income households in your area. Unignorable and impossible to miss.
            </OfferItem>
             <OfferItem title="Bonus #1: Industry Exclusivity" value="$2,500">
                You will be the ONLY business of your type on the mailer. No competitors. All leads for your category are yours.
            </OfferItem>
             <OfferItem title="Bonus #2: Pro Ad Design" value="$500">
                Our expert design team will create a stunning, high-converting ad for you, 100% FREE. No more ugly, ineffective ads.
            </OfferItem>
             <OfferItem title="Bonus #3: Digital Ad Match" value="$2,000">
                We'll run a targeted digital ad campaign mirroring the mailer to the same zip codes, doubling your exposure for FREE.
            </OfferItem>
             <OfferItem title="Bonus #4: Lead Tracking Report" value="$1,000">
                We use call tracking and QR codes to show you exactly how many leads your ad generated. No more guessing if your marketing works.
            </OfferItem>
             <OfferItem title="Bonus #5: 'You Win or We Pay You' Guarantee" value="Priceless">
                If your business receives no qualified leads from the campaign, you get a 100% refund plus $100 for your time. We take all the risk.
            </OfferItem>
        </div>

        <div className="mt-20 bg-gray-900 text-white p-8 md:p-12 rounded-lg shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-400">Calculate Your Profit</h3>
            <p className="text-center mt-2 text-gray-300">See how this offer becomes a no-brainer.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="customerValue" className="block text-sm font-medium text-gray-300">Your Avg. Customer Value</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input type="number" name="customerValue" id="customerValue" value={customerValue} onChange={e => setCustomerValue(Number(e.target.value))} className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-7 pr-12 sm:text-sm border-gray-600 bg-gray-800 rounded-md py-3 text-white"/>
                        </div>
                    </div>
                     <div>
                        <label htmlFor="leads" className="block text-sm font-medium text-gray-300">Estimated Leads (Conservative)</label>
                        <input type="number" name="leads" id="leads" value={leads} onChange={e => setLeads(Number(e.target.value))} className="focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-600 bg-gray-800 rounded-md py-3 text-white"/>
                    </div>
                </div>
                <div className="text-center bg-gray-800 p-6 rounded-lg">
                    <p className="text-lg text-gray-400">Your Potential Profit</p>
                    <p className="text-4xl lg:text-5xl font-extrabold text-green-400 mt-1">
                        ${profit.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">(${totalRevenue.toLocaleString()} Revenue - $500 Cost)</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
