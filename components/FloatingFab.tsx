import React from 'react';

const FloatingFab: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 animate-[bounceSubtle_2s_infinite]">
      <div className="flex items-center gap-3 rounded-full bg-primary px-5 py-3 shadow-xl shadow-black/40 cursor-default">
        <span className="material-symbols-outlined text-espresso">local_shipping</span>
        <span className="text-sm font-bold text-espresso whitespace-nowrap">Free Shipping on orders $50+</span>
      </div>
    </div>
  );
};

export default FloatingFab;