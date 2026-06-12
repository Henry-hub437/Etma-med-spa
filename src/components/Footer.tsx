import { BUSINESS } from '../data';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-50 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="font-serif text-2xl font-bold tracking-tight text-white mb-6 block">
              ETNA <span className="text-brand-500 font-medium text-lg tracking-widest pl-1 uppercase">Med Spa</span>
            </a>
            <p className="text-brand-50/70 font-light leading-relaxed mb-6">
              {BUSINESS.tagline}. Medical aesthetics and holistic therapies designed for your total harmony.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-brand-50/70 hover:text-brand-500 transition-colors font-light">Treatments & Services</a></li>
              <li><a href="#why-us" className="text-brand-50/70 hover:text-brand-500 transition-colors font-light">Why Choose Us</a></li>
              <li><a href="#reviews" className="text-brand-50/70 hover:text-brand-500 transition-colors font-light">Client Experiences</a></li>
              <li><a href="#faq" className="text-brand-50/70 hover:text-brand-500 transition-colors font-light">FAQ & Info</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xl mb-6 text-white tracking-wide">Contact Details</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start mb-4">
                  <MapPin className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="block font-medium mb-1">Our Location</span>
                    <span className="text-brand-50/70 font-light text-sm">{BUSINESS.address}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="block font-medium mb-1">Business Hours</span>
                    <span className="text-brand-50/70 font-light text-sm">{BUSINESS.hours} - Close</span>
                  </div>
                </div>
              </div>
              
              <div>
                <a href={`tel:${BUSINESS.phone.replace(/\s+/g, '')}`} className="flex items-start mb-4 hover:text-brand-500 transition-colors">
                  <Phone className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="block font-medium mb-1">Call Us</span>
                    <span className="text-brand-50/70 font-light text-sm">{BUSINESS.phone}</span>
                  </div>
                </a>
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-start hover:text-brand-500 transition-colors">
                  <MessageCircle className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="block font-medium mb-1">WhatsApp</span>
                    <span className="text-brand-50/70 font-light text-sm">{BUSINESS.whatsapp}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Sub Footer */}
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:text-left">
          <p className="text-brand-50/50 text-sm font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="space-x-6 text-sm font-light text-brand-50/50">
            <a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
