import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <section id="shop" className="bg-background-light dark:bg-background-dark py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171412] dark:text-white font-serif-display mb-2">Our Bestsellers</h2>
            <p className="text-gray-600 dark:text-text-muted">Discover the favorites that our customers wake up to.</p>
          </div>
          <span className="text-primary/40 font-bold flex items-center gap-1 cursor-not-allowed">
            View all coffees 
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button disabled className="inline-block rounded-lg border-2 border-primary/30 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary/40 cursor-not-allowed">
            Shop All Roasts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;