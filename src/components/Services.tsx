import { Sparkles, Feather, Droplets, HeartPulse, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6" />,
  Feather: <Feather className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />
};

export function Services() {
  return (
    <section className="py-24 bg-brand-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-medium tracking-widest uppercase text-sm mb-4 block">Our Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">Elevate Your Wellbeing</h2>
          <p className="text-lg text-brand-900/70 font-light">
            We provide a curated menu of treatments utilizing the most cutting-edge medical technologies 
            paired with tranquil, spa-like procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group flex flex-col md:flex-row bg-white hover:shadow-xl transition-all duration-300 border border-brand-100 overflow-hidden"
            >
              <div className="md:w-2/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="w-12 h-12 bg-brand-50 flex items-center justify-center text-brand-500 mb-6 rounded-full group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  {iconMap[service.iconName]}
                </div>
                <h3 className="text-2xl font-serif text-brand-900 mb-3">{service.title}</h3>
                <p className="text-brand-900/70 font-light mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a href="#book-now" className="inline-flex items-center text-sm font-medium text-brand-900 group-hover:text-brand-500 transition-colors uppercase tracking-widest">
                  Book Now <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
