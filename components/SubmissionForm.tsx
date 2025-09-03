
import React, { useState } from 'react';
import { Package } from '../types';

interface SubmissionFormProps {
    selectedPackage: Package;
    onSubmit: (formData: FormData) => Promise<void>;
    onBack: () => void;
}

const InputField: React.FC<{ label: string; name: string; type?: string; placeholder?: string; required?: boolean }> = ({ label, name, type = 'text', placeholder, required = true }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-bold text-gray-700">{label}</label>
        <input 
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder}
            required={required}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        />
    </div>
);

const TextAreaField: React.FC<{ label: string; name: string; placeholder?: string; required?: boolean; rows?: number }> = ({ label, name, placeholder, required = true, rows = 3 }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-bold text-gray-700">{label}</label>
        <textarea
            name={name}
            id={name}
            rows={rows}
            placeholder={placeholder}
            required={required}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        ></textarea>
    </div>
);


const SubmissionForm: React.FC<SubmissionFormProps> = ({ selectedPackage, onSubmit, onBack }) => {
    const [adDesignChoice, setAdDesignChoice] = useState<'yes' | 'no' | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);
        formData.append('totalPrice', selectedPackage.price.toString());
        formData.append('selectedPackage', selectedPackage.title);
        await onSubmit(formData);
        // The alert in the parent will block, so no need to setIsSubmitting(false)
    };

    const totalPrice = selectedPackage.price;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={onBack} className="text-gray-600 hover:text-gray-900 font-semibold mb-8">
                    &larr; Back to Packages
                </button>
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">You're One Step Away from Guaranteed Growth.</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        You've selected the <span className="font-bold text-yellow-600">{selectedPackage.title}</span>. Let's finalize the details.
                    </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-10 bg-gray-50 p-8 rounded-lg shadow-lg">
                    <fieldset className="space-y-6">
                        <legend className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Step 1: Your Contact Information</legend>
                        <InputField label="City for Marketing" name="city" placeholder="e.g., San Francisco" />
                        <InputField label="Your Name" name="name" placeholder="John Doe" />
                        <InputField label="Business Name" name="businessName" placeholder="John's Plumbing" />
                        <InputField label="Email Address" name="email" type="email" placeholder="you@example.com" />
                        <InputField label="Phone Number" name="phone" type="tel" placeholder="(555) 123-4567" />
                    </fieldset>

                    <fieldset className="space-y-4">
                        <legend className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Step 2: Your Ad Design</legend>
                        <p className="text-sm font-bold text-gray-700">Will you be submitting your own ad design?</p>
                        <div className="flex items-center space-x-6">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" name="adDesignChoice" value="yes" required onChange={() => setAdDesignChoice('yes')} className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                                <span>Yes, I will provide my own design.</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" name="adDesignChoice" value="no" required onChange={() => setAdDesignChoice('no')} className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                                <span>No, please design one for me (FREE).</span>
                            </label>
                        </div>
                    </fieldset>

                    {adDesignChoice === 'yes' && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg space-y-4">
                            <h3 className="text-xl font-bold text-yellow-800">Ad Submission Guidelines</h3>
                            <p className="text-yellow-700">Please follow these specifications carefully to ensure your ad prints perfectly:</p>
                            <ul className="list-disc list-inside space-y-2 text-yellow-700">
                                <li><strong>Ad Dimensions:</strong> Your ad space is 3.8 inches TALL by 2.8 inches WIDE. Please do not reverse these dimensions.</li>
                                <li><strong>File Format:</strong> Submit your final design in <span className="font-bold">.PNG</span> format for the highest quality.</li>
                                <li><strong>Download Template:</strong> <a href="#" className="font-bold underline hover:text-yellow-900">Click here to download our free Canva template</a> to make design easy.</li>
                            </ul>
                        </div>
                    )}

                    {adDesignChoice === 'no' && (
                         <fieldset className="space-y-6 animate-fade-in">
                            <legend className="text-xl font-bold text-gray-800">Tell Us About Your Ad</legend>
                            <p className="text-sm text-gray-600">Provide the following details and our designers will create a masterpiece for you.</p>
                            <TextAreaField label="Contact Info for the Ad" name="adContact" placeholder="e.g., Your Business Phone, Website, Address" />
                            <div>
                               <label htmlFor="logo" className="block text-sm font-bold text-gray-700">Your Logo</label>
                               <input type="file" name="logo" id="logo" accept="image/png, image/jpeg, image/svg+xml" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"/>
                            </div>
                            <TextAreaField label="What is your offer?" name="adOffer" placeholder="e.g., '20% Off First Service', 'Free Consultation'" required={false} />
                             <TextAreaField label="What would you like the ad to say?" name="adCopy" placeholder="e.g., 'Your Trusted Local Plumber for 20 Years!'" />
                              <TextAreaField label="Design/Branding Notes" name="adBranding" placeholder="e.g., 'Use our brand colors: blue and orange. We like a clean, modern look.'" required={false} />
                        </fieldset>
                    )}
                    
                    {/* Payment Section */}
                    <div className="pt-8 border-t-2 border-gray-200">
                         <h3 className="text-2xl font-bold text-gray-800">Step 3: Secure Payment</h3>
                         <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold">Order Summary</h4>
                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-700">{selectedPackage.title}</p>
                                    <p className="font-bold text-gray-900">${selectedPackage.price}</p>
                                </div>
                                <div className="flex justify-between items-center border-t pt-4 mt-4">
                                    <p className="font-extrabold text-xl">Total Due Today</p>
                                    <p className="font-extrabold text-3xl text-gray-900">${totalPrice}</p>
                                </div>
                            </div>
                         </div>
                         <button type="submit" disabled={!adDesignChoice || isSubmitting} className="w-full mt-8 bg-green-600 text-white px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300">
                           {isSubmitting ? 'Processing...' : `Pay $${totalPrice} with Stripe & Finalize`}
                       </button>
                       <p className="mt-3 text-sm text-gray-500 text-center">You will be redirected to our secure payment processor.</p>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default SubmissionForm;
