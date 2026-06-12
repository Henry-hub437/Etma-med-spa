import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS } from '../data';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold tracking-tight text-brand-900">
              ETNA <span className="text-brand-500 font-medium text-lg tracking-widest pl-1 uppercase">Med Spa</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-sm font-medium text-brand-900/80 hover:text-brand-500 transition-colors uppercase tracking-wide">Treatments</a>
            <a href="#why-us" className="text-sm font-medium text-brand-900/80 hover:text-brand-500 transition-colors uppercase tracking-wide">Why Us</a>
            <a href="#reviews" className="text-sm font-medium text-brand-900/80 hover:text-brand-500 transition-colors uppercase tracking-wide">Reviews</a>
            <a href="#faq" className="text-sm font-medium text-brand-900/80 hover:text-brand-500 transition-colors uppercase tracking-wide">FAQ</a>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${BUSINESS.phone.replace(/\s+/g, '')}`} className="flex items-center text-brand-900/80 hover:text-brand-500 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">{BUSINESS.phone}</span>
            </a>
            <a href="#book-now" className="bg-brand-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-brand-500 transition-colors">
              Book Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-900 hover:text-brand-500 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-100">
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-900">Treatments</a>
            <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-900">Why Us</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-900">Reviews</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-900">FAQ</a>
            
            <div className="mt-4 pt-4 border-t border-brand-100">
              <a href={`tel:${BUSINESS.phone.replace(/\s+/g, '')}`} className="flex items-center px-3 py-2 text-base font-medium text-brand-900 mb-2">
                <Phone className="w-5 h-5 mr-3 text-brand-500" />
                Call {BUSINESS.phone}
              </a>
              <a href="#book-now" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 block w-full text-center bg-brand-900 text-white px-6 py-3 font-medium rounded-sm">
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
