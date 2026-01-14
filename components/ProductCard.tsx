import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5">
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#f0f0f0] relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        {product.isBestSeller && (
          <div className="absolute top-3 left-3 bg-primary text-espresso text-xs font-bold px-3 py-1 rounded-full">
            Best Seller
          </div>
        )}
        
        <button 
          disabled
          aria-label="Quick Add" 
          className="absolute bottom-3 right-3 h-10 w-10 bg-white/80 text-espresso/40 rounded-full shadow-lg flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-not-allowed"
        >
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white font-serif-display group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              {product.roastLevel === 'Light' ? 'light_mode' : product.roastLevel === 'Medium' ? 'contrast' : 'dark_mode'}
            </span> 
            {product.roastLevel} Roast
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">location_on</span> 
            {product.origin}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;