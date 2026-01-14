import React from 'react';
import { HERO_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso z-10"></div>
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat transform scale-105" 
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          role="img"
          aria-label="Close up of dark roasted coffee beans and a steaming cup of latte art"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center gap-6 max-w-4xl animate-[fadeInUp_0.8s_ease-out_forwards]">
        <span className="uppercase tracking-[0.2em] text-primary text-xs font-bold mb-2">Est. 2012 • Small Batch Roasters</span>
        <h1 className="text-white font-serif-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight drop-shadow-xl">
          Roasted to <br /><span className="italic text-primary">Perfection</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed mt-4 drop-shadow-md">
          Experience the rich, bold flavors of ethically sourced beans, roasted daily in small batches for the ultimate freshness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="#shop" className="inline-flex h-14 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-espresso transition-all hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            Shop Our Roasts
          </a>
          <button disabled className="inline-flex h-14 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-8 text-base font-bold text-white/40 cursor-not-allowed transition-all">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;