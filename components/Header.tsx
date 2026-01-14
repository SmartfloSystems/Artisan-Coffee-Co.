import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-espresso-light/95 backdrop-blur-sm border-b border-[#36312b]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={handleDisabledClick} className="flex items-center gap-3 text-white group hover:opacity-90 transition-opacity cursor-default">
          <span className="material-symbols-outlined text-primary text-3xl">coffee_maker</span>
          <span className="text-xl font-bold tracking-tight font-serif-display">Artisan Coffee Co.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#shop" className="text-white/90 hover:text-primary text-sm font-medium tracking-wide transition-colors">Shop</a>
          <a href="#" onClick={handleDisabledClick} className="text-white/40 cursor-not-allowed text-sm font-medium tracking-wide">Subscriptions</a>
          <a href="#" onClick={handleDisabledClick} className="text-white/40 cursor-not-allowed text-sm font-medium tracking-wide">Our Story</a>
          <a href="#" onClick={handleDisabledClick} className="text-white/40 cursor-not-allowed text-sm font-medium tracking-wide">Brew Guides</a>
        </nav>

        {/* Utilities */}
        <div className="flex items-center gap-4">
          <button disabled className="text-white/30 cursor-not-allowed p-2 rounded-full">
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>
          <button disabled className="relative text-white/30 cursor-not-allowed p-2 rounded-full">
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            <span className="absolute top-1 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary/40 text-[10px] font-bold text-espresso/70">2</span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-espresso-light border-b border-[#36312b] p-6 animate-fade-in-up">
          <nav className="flex flex-col gap-4">
            <a href="#shop" className="text-white hover:text-primary text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
            <span className="text-white/40 cursor-not-allowed text-lg font-medium">Subscriptions</span>
            <span className="text-white/40 cursor-not-allowed text-lg font-medium">Our Story</span>
            <span className="text-white/40 cursor-not-allowed text-lg font-medium">Brew Guides</span>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;