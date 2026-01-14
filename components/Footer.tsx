import React from 'react';

const Footer: React.FC = () => {
  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-[#171412] text-white pt-16 pb-8 border-t border-[#36312b]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white mb-2">
              <span className="material-symbols-outlined text-primary text-2xl">coffee_maker</span>
              <span className="text-lg font-bold font-serif-display">Artisan Coffee Co.</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Crafting exceptional coffee moments since 2012. We believe in quality, sustainability, and community.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" onClick={handleDisabledClick} className="text-text-muted/50 cursor-not-allowed hover:text-text-muted/50" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.76 6.163 6.162 6.163 6.162-2.76 6.162-6.163c0-3.402-2.76-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
              <a href="#" onClick={handleDisabledClick} className="text-text-muted/50 cursor-not-allowed hover:text-text-muted/50" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-serif-display">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li><span className="text-text-muted/50 cursor-not-allowed">All Coffee</span></li>
              <li><span className="text-text-muted/50 cursor-not-allowed">Subscriptions</span></li>
              <li><span className="text-text-muted/50 cursor-not-allowed">Equipment</span></li>
              <li><span className="text-text-muted/50 cursor-not-allowed">Gift Cards</span></li>
            </ul>
          </div>
          
          {/* Learn Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-serif-display">Learn</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li><span className="text-text-muted/50 cursor-not-allowed">Our Story</span></li>
              <li><span className="text-text-muted/50 cursor-not-allowed">Brew Guides</span></li>
              <li><span className="text-text-muted/50 cursor-not-allowed">Blog</span></li>
              <li><span className="text-text-muted/50 cursor-not-allowed">Sustainability</span></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-serif-display">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li className="flex items-start gap-2 text-text-muted/50">
                <span className="material-symbols-outlined text-lg mt-0.5">location_on</span>
                <span>123 Roast Blvd<br />Seattle, WA 98101</span>
              </li>
              <li className="flex items-center gap-2 text-text-muted/50">
                <span className="material-symbols-outlined text-lg">phone</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-text-muted/50">
                <span className="material-symbols-outlined text-lg">email</span>
                <span>hello@artisancoffee.co</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#36312b] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6e6863]">
          <p>© 2024 Artisan Coffee Co. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-not-allowed hover:text-[#6e6863]">Privacy Policy</span>
            <span className="cursor-not-allowed hover:text-[#6e6863]">Terms of Service</span>
            <span className="cursor-not-allowed hover:text-[#6e6863]">Shipping Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;