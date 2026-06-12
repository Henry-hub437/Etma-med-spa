import { Sparkles, Feather, Droplets, HeartPulse } from 'lucide-react';

export const BUSINESS = {
  name: 'Etna Med Spa',
  tagline: 'Lekki\'s Premier Wellness Center',
  rating: 4.9,
  reviewsCount: 22,
  address: '4C Bayo Olagoke Cl, Lekki Phase 1, Lagos 105102, Lagos',
  phone: '0813 672 3101',
  whatsapp: '0813 672 3101',
  hours: 'Opens 9 am',
  description: 'Experience unparalleled rejuvenation. Our expert team combines advanced medical aesthetics with serene relaxation to help you look and feel your absolute best.'
};

export const SERVICES = [
  {
    id: 'facials',
    title: 'Advanced Facials',
    description: 'Medical-grade treatments tailored to your skin type to hydrate, clear, and restore youthful radiance.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'massage',
    title: 'Massage Therapy',
    description: 'Deep tissue, Swedish, and targeted therapies to release tension, improve circulation, and soothe your mind.',
    iconName: 'Feather',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'iv-hydration',
    title: 'IV Hydration',
    description: 'Customized vitamin and mineral drips designed to boost immunity, enhance energy, and promote deep wellness.',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'body-contouring',
    title: 'Body Contouring',
    description: 'State-of-the-art, non-invasive treatments to sculpt, tone, and refine your natural silhouette.',
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS = [
  {
    id: 1,
    author: 'Sarah O.',
    text: 'Etna is genuinely exceptional. The ambiance immediately calms you down. Had the signature facial and my skin has been glowing for weeks!',
    rating: 5
  },
  {
    id: 2,
    author: 'Adeola M.',
    text: 'The best med spa experience I have had in Lagos, bar none. Professional staff, serene environment, and high-quality products.',
    rating: 5
  },
  {
    id: 3,
    author: 'Faith T.',
    text: 'I booked a massage. Easily 5 stars. They pay incredible attention to detail and make sure you are comfortable throughout.',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'Do I need to book an appointment beforehand?',
    answer: 'Yes, setting an appointment is highly recommended to guarantee that a specialist is purely dedicated to you during your preferred time.'
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit starts with a private, complimentary consultation. We discuss your aesthetic and wellness goals, perform a skin analysis if needed, and build a tailored treatment plan.'
  },
  {
    question: 'Where exactly are you located in Lekki Phase 1?',
    answer: 'We are situated at 4C Bayo Olagoke Cl, Lekki Phase 1. Check the map in the footer for easy directions via Google Maps or Apple Maps.'
  },
  {
    question: 'Do you offer customized packages?',
    answer: 'Absolutely. We offer bridal packages, monthly membership tiers for routine wellness, and custom packages tailored exactly to your goals.'
  }
];
