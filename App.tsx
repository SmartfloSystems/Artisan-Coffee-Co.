import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingFab from './components/FloatingFab';

const App: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <main className="relative w-full flex flex-col pt-20">
        <Hero />
        <Features />
        <ProductGrid />
        <Newsletter />
        <Footer />
      </main>
      <FloatingFab />
    </div>
  );
};

export default App;