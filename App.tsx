import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainAgitation from './components/PainAgitation';
import Offer from './components/Offer';
import Proof from './components/Proof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SubmissionForm from './components/SubmissionForm';
import type { Package } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'form'>('landing');
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    setView('form');
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = async (formData: FormData) => {
    console.log('Final Checkout Data:', Object.fromEntries(formData.entries()));

    // --- Google Sheets Integration ---
    // IMPORTANT: To make this work:
    // 1. Create a Google Sheet.
    // 2. Go to Extensions > Apps Script.
    // 3. Paste the provided Apps Script code into the editor.
    // 4. Deploy as a Web App with anonymous access.
    // 5. Replace the URL below with your Web App URL.
    const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

    if (SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE')) {
      console.warn(
        'Google Sheets URL is not configured. Form data will not be saved. Please configure the SCRIPT_URL in App.tsx.'
      );
    } else {
      try {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          body: formData,
          mode: 'no-cors', // This is important to avoid CORS errors with Google Scripts
        });
        console.log('Submission data sent to Google Sheets.');
      } catch (error) {
        console.error('Error submitting data to Google Sheets:', error);
      }
    }
    // --- End Google Sheets Integration ---

    // --- Stripe Integration ---
    // In a real application, you would:
    // 1. Send a request to your backend with the price and package info.
    // 2. Your backend would create a Stripe Checkout Session.
    // 3. Your backend returns the session ID.
    // 4. You use Stripe.js to redirect to checkout.
    // Example:
    // const stripe = await loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');
    // await stripe.redirectToCheckout({ sessionId: 'SESSION_ID_FROM_YOUR_BACKEND' });
    
    // For now, we simulate the final step.
    alert('Form data saved! In a real app, you would now be redirected to Stripe for secure payment.');
  };

  const handleBack = () => {
    if (view === 'form') {
      setView('landing');
      setSelectedPackage(null);
    }
    window.scrollTo(0,0);
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased">
      <Header />
      <main>
        {view === 'landing' && (
          <>
            <Hero />
            <PainAgitation />
            <Offer />
            <Proof />
            <Pricing onSelectPackage={handleSelectPackage} />
            <FAQ />
          </>
        )}
        {view === 'form' && selectedPackage && (
          <SubmissionForm 
            selectedPackage={selectedPackage} 
            onSubmit={handleFormSubmit}
            onBack={handleBack}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;