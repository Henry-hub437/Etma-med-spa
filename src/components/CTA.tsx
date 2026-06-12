import { BUSINESS } from '../data';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=2000" 
          alt="Spa texture" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-brand-50/90 mix-blend-multiply"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-brand-900 mb-6 tracking-tight">
          Ready for your glow up?
        </h2>
        <p className="text-xl text-brand-900/70 font-light mb-10 max-w-2xl mx-auto">
          Take the first step towards radical rejuvenation. Secure your appointment at Lekki's highest rated Med Spa today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#book-now" 
            className="w-full sm:w-auto bg-brand-900 hover:bg-brand-500 text-white font-medium px-8 py-4 flex items-center justify-center transition-colors duration-300"
          >
            <span>Book Your Consultation</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a 
            href={`https://wa.me/${BUSINESS.whatsapp.replace(/\s+/g, '')}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white font-medium px-8 py-4 transition-colors duration-300 flex items-center justify-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
