
import React from 'react';
import { Package } from '../types';

interface PaymentProps {
    selectedPackage: Package;
    onBack: () => void;
}

const Payment: React.FC<PaymentProps> = ({ selectedPackage, onBack }) => {
    
    const handlePayment = () => {
        // This is where you would trigger the Stripe Checkout flow.
        // For now, we'll just log to the console.
        alert('Redirecting to Stripe for payment...');
        console.log(`Processing payment for ${selectedPackage.title} at $${selectedPackage.price}`);
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <button onClick={onBack} className="text-gray-600 hover:text-gray-900 font-semibold mb-8">
                    &larr; Back to Form
                </button>
                <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-xl">
                    <h2 className="text-4xl font-extrabold text-gray-900">Final Step: Payment</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        You're so close to getting a flood of new customers.
                    </p>

                    <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6 text-left">
                        <h3 className="text-lg font-bold">Order Summary</h3>
                        <div className="mt-4 flex justify-between items-center border-t pt-4">
                            <p className="text-gray-700">{selectedPackage.title}</p>
                            <p className="font-extrabold text-2xl text-gray-900">${selectedPackage.price}</p>
                        </div>
                    </div>
                    
                    <div className="mt-10">
                        <button 
                            onClick={handlePayment} 
                            className="w-full bg-green-600 text-white px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
                        >
                            Pay ${selectedPackage.price} with Stripe
                        </button>
                        <p className="mt-3 text-sm text-gray-500">You will be redirected to our secure payment processor.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;
