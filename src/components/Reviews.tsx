import { REVIEWS } from '../data';
import { Star } from 'lucide-react';

export function Reviews() {
  return (
    <section className="py-24 bg-brand-900 text-brand-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-medium tracking-widest uppercase text-sm mb-4 block">Verified Experiences</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Words from our Clients</h2>
          <p className="text-lg text-brand-50/70 font-light">
            Don't just take our word for it. Read what your neighbors in Lagos have to say about their transformations at Etna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex mb-6 text-brand-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-brand-50/90 font-light italic text-lg leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-500 font-serif font-medium border border-brand-500/30">
                  {review.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-medium">{review.author}</div>
                  <div className="text-brand-50/50 text-sm">Verified Client</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
