import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="relative bg-background-dark py-20 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-card-dark border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="h-16 w-16 rounded-full bg-espresso-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif-display">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;