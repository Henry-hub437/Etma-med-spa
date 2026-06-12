import { Star, CheckCircle, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '../data';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-brand-900" id="book-now">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000" 
          alt="Spa interior" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Hero Copy */}
          <div className="text-white pt-8">
            <div className="inline-flex items-center space-x-2 bg-brand-500/20 backdrop-blur-sm border border-brand-500/30 px-4 py-2 rounded-full mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-500 fill-brand-500" />
                ))}
              </div>
              <span className="text-sm font-medium text-brand-50">
                {BUSINESS.rating} ({BUSINESS.reviewsCount} Reviews)
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6">
              Discover Your <span className="text-brand-500 italic block mt-2">Most Radiant Self.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-brand-50/80 mb-8 max-w-lg font-light leading-relaxed">
              {BUSINESS.description}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-brand-50/90 font-light">
                <CheckCircle className="w-5 h-5 text-brand-500 mr-3 shrink-0" />
                <span>Expert, specialized medical estheticians.</span>
              </div>
              <div className="flex items-center text-brand-50/90 font-light">
                <CheckCircle className="w-5 h-5 text-brand-500 mr-3 shrink-0" />
                <span>Oasis of tranquility mapping to global standards.</span>
              </div>
              <div className="flex items-center text-brand-50/90 font-light">
                <CheckCircle className="w-5 h-5 text-brand-500 mr-3 shrink-0" />
                <span>Trusted by hundreds of glowing clients.</span>
              </div>
            </div>
          </div>

          {/* Hero Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-10 shadow-2xl relative">
              {/* Accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/20 -mt-8 -mr-8 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-200/10 -mb-8 -ml-8 rounded-full blur-3xl"></div>
              
              <div className="mb-8 relative z-10">
                <h2 className="text-3xl font-serif font-medium text-white mb-3">
                  Start Your Journey
                </h2>
                <p className="text-white/70 text-base font-light leading-relaxed">
                  Your luxury wellness experience is just a message away. Connect with our concierge to secure your preferred time.
                </p>
              </div>

              <div className="space-y-4 relative z-10">
                <a 
                  href={`https://wa.me/${BUSINESS.whatsapp.replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-500 hover:bg-brand-400 text-white font-medium py-4 px-6 transition-colors duration-300 flex items-center justify-between group rounded-sm"
                >
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    <span>Chat on WhatsApp</span>
                  </div>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href={`tel:${BUSINESS.phone.replace(/\s+/g, '')}`}
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium py-4 px-6 transition-colors duration-300 flex items-center justify-between group rounded-sm"
                >
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>Call Etna</span>
                  </div>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-sm relative z-10">
                <div className="flex items-center text-white/60 font-light mb-4 sm:mb-0">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                  <span>Available Now</span>
                </div>
                <div className="text-brand-300 font-light italic">
                  Opens at 9 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
