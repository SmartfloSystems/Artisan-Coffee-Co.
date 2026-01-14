import React from 'react';
import { NEWSLETTER_BG } from '../constants';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-espresso-light py-20 border-t border-white/5 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center" 
        style={{ backgroundImage: `url('${NEWSLETTER_BG}')` }}
      ></div>
      <div className="container relative z-10 mx-auto px-6 text-center">
        <span className="material-symbols-outlined text-4xl text-primary mb-4">mail</span>
        <h2 className="text-3xl font-bold text-white font-serif-display mb-4">Join the Coffee Club</h2>
        <p className="text-text-muted mb-8 max-w-lg mx-auto">
          Subscribe for weekly brew guides, early access to limited batch roasts, and 10% off your first order.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            disabled
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow rounded-lg bg-white/5 border border-white/5 px-4 py-3 text-white/50 placeholder-white/20 focus:ring-0 cursor-not-allowed transition-all"
            required
          />
          <button 
            disabled
            type="submit"
            className="bg-primary/50 text-espresso/50 font-bold rounded-lg px-6 py-3 cursor-not-allowed whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;