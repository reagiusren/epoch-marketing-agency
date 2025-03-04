'use client';

import { useState } from 'react';

const PreQualificationForm = () => {
  const [step, setStep] = useState(1);
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900/50 backdrop-blur-md rounded-xl border border-purple-500/20">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
        Let's Grow Your Business
      </h2>
      
      {/* Multi-step form */}
      <div className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <input 
              type="text"
              placeholder="Business Name"
              className="w-full p-3 bg-black/50 rounded-lg border border-purple-500/20 focus:border-purple-500"
            />
            <input 
              type="text"
              placeholder="Monthly Revenue"
              className="w-full p-3 bg-black/50 rounded-lg border border-purple-500/20 focus:border-purple-500"
            />
            <button 
              onClick={() => setStep(2)}
              className="w-full p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold"
            >
              Next
            </button>
          </div>
        )}
        
        {/* Add more steps */}
      </div>
    </div>
  );
}; 