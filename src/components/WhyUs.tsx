import { CheckCircle } from 'lucide-react';
import { BUSINESS } from '../data';

export function WhyUs() {
  const reasons = [
    {
      title: "Award-Winning Specialists",
      desc: "Our aestheticians and wellness staff are globally trained and locally celebrated."
    },
    {
      title: "Premium Tools & Products",
      desc: "We utilize medical-grade equipment and exclusive product lines to guarantee results."
    },
    {
      title: "Sanctuary Environment",
      desc: "Impeccably clean, exquisitely designed spaces intended to lower your cortisol instantly."
    },
    {
      title: "Tailored Consultations",
      desc: "We don't do cookie-cutter. Your biology is unique, and so is your treatment plan."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Layout */}
          <div className="relative">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-brand-50 rounded-[4rem] -rotate-6 z-0 hidden md:block"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-6 items-center">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" 
                alt="Spa details" 
                className="w-full h-[28rem] object-cover"
              />
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" 
                  alt="Relaxing environment" 
                  className="w-full h-56 object-cover"
                />
                <div className="bg-brand-900 p-8 text-white">
                  <h4 className="text-3xl font-serif mb-2">{BUSINESS.rating}/5</h4>
                  <p className="text-brand-50/80 font-light text-sm leading-relaxed">
                    Based on {BUSINESS.reviewsCount} glowing reviews from verified clients in Lekki.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-brand-500 font-medium tracking-widest uppercase text-sm mb-4 block">The Etna Standard</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">
              Why We Are Lekki's Top Choice
            </h2>
            <p className="text-lg text-brand-900/70 font-light mb-10 leading-relaxed">
              We aren't just another spa. We are a dedicated wellness sanctuary blending clinical efficacy with unmatched luxury. Here is why our clients refuse to go anywhere else.
            </p>

            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-brand-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-serif text-brand-900 mb-2">{reason.title}</h4>
                    <p className="text-brand-900/70 font-light leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <a href="#book-now" className="inline-block bg-brand-50 text-brand-900 border border-brand-200 px-8 py-3.5 font-medium hover:bg-brand-900 hover:border-brand-900 hover:text-white transition-colors duration-300">
                Experience It Yourself
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
