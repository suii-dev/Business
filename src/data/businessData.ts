import { ProductItem, ClientCategory, TrustPillar } from '../types';

// Asset imports
import heroImage from '../assets/images/hero_showcase_goods_1791103589132.jpg';
import ashokaConeImg from '../assets/images/product_ashoka_cone_1791103608530.jpg';
import amberConeImg from '../assets/images/product_amber_cone_1791103624029.jpg';
import bakeryIceCreamImg from '../assets/images/product_bakery_icecream_1791103697923.jpg';
import milkshakeMocktailImg from '../assets/images/product_milkshake_mocktail_1791103639314.jpg';
import partyDisposablesImg from '../assets/images/product_party_disposables_1791103652849.jpg';
import silverPlatesImg from '../assets/images/product_silver_plates_1791103674652.jpg';
import paperGlassesImg from '../assets/images/product_paper_glasses_1791103716017.jpg';

export const BUSINESS_INFO = {
  name: 'AMIT TRADING',
  type: 'Wholesale & Retail',
  address: '3760, Kanhiya Nagar, Tri Nagar, Delhi - 110035',
  area: 'Kanhiya Nagar, Tri Nagar',
  city: 'Delhi',
  pinCode: '110035',
  phoneNumbers: ['9971077960', '7011781814'],
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=3760+Kanhiya+Nagar+Tri+Nagar+Delhi+110035',
  tagline: 'Quality products for ice-cream, bakery, beverages, parties, functions and everyday business needs.',
  about: `Amit Trading is a wholesale and retail business located in Tri Nagar, Delhi. We deal in a wide range of products including ASHOKA CONE, AMBER CONE, Ice-Cream & Bakery Goods, Milk Shake & Mocktail Flavours, Birthday & Marriage Disposable Items, Silver Plates, Paper Glass and more. Our goal is to provide customers with a convenient place to source products for businesses, parties, functions and everyday requirements. Whether you need products for your business, an event, a party or personal requirements, Amit Trading offers both wholesale and retail options.`
};

export const HERO_IMAGE = heroImage;

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'ashoka-cone',
    name: 'ASHOKA CONE',
    category: 'cones',
    categoryLabel: 'Ice-Cream Cones',
    description: 'Quality cone products for ice-cream businesses and serving requirements.',
    image: ashokaConeImg,
    highlights: ['Crispy Texture', 'Wholesale Cartons & Retail Packs', 'Premium Finish'],
    bestFor: 'Ice-cream parlours, dessert cafes & caterers',
    availability: 'In Stock (Wholesale & Retail)'
  },
  {
    id: 'amber-cone',
    name: 'AMBER CONE',
    category: 'cones',
    categoryLabel: 'Ice-Cream Cones',
    description: 'Cone products suitable for ice-cream shops, parlours and food businesses.',
    image: amberConeImg,
    highlights: ['Reliable Quality', 'Bulk Pack Availability', 'Fresh & Crunchy'],
    bestFor: 'Soft serve points, parlours & food stalls',
    availability: 'In Stock (Wholesale & Retail)'
  },
  {
    id: 'ice-cream-bakery-goods',
    name: 'ICE-CREAM & BAKERY GOODS',
    category: 'bakery',
    categoryLabel: 'Bakery & Ice-Cream',
    description: 'A range of products for ice-cream parlours, bakeries, cafés and food businesses.',
    image: bakeryIceCreamImg,
    highlights: ['Bakery Essentials', 'Ice Cream Parlour Supplies', 'Daily Fresh Batch Supply'],
    bestFor: 'Bakeries, pastry outlets & dessert shops',
    availability: 'In Stock (Wholesale & Retail)'
  },
  {
    id: 'milk-shake-mocktail',
    name: 'MILK SHAKE & MOCKTAIL',
    category: 'beverages',
    categoryLabel: 'Flavours & Syrups',
    description: 'Milk shake and mocktail flavours for refreshing beverages and business requirements.',
    image: milkshakeMocktailImg,
    highlights: ['All Popular Flavours', 'High Yield & Rich Taste', 'Commercial & Home Sizes'],
    bestFor: 'Juice bars, cafes, restaurants & event bars',
    availability: 'In Stock (Wholesale & Retail)'
  },
  {
    id: 'birthday-marriage-disposables',
    name: 'BIRTHDAY & MARRIAGE DISPOSABLE ITEMS',
    category: 'disposables',
    categoryLabel: 'Party & Event Disposables',
    description: 'Disposable products suitable for birthdays, marriages, parties, functions and events.',
    image: partyDisposablesImg,
    highlights: ['Complete Party Range', 'Hygienic & Clean', 'Bulk Pack Discounts'],
    bestFor: 'Weddings, birthday parties, gatherings & catering',
    availability: 'In Stock (Wholesale & Retail)'
  },
  {
    id: 'silver-plates',
    name: 'SILVER PLATES',
    category: 'plates',
    categoryLabel: 'Catering & Dining',
    description: 'Disposable silver plates suitable for parties, functions, catering and events.',
    image: silverPlatesImg,
    highlights: ['Sturdy Foil Finish', 'Multiple Sizes Available', 'Ideal for Heavy Buffet Servings'],
    bestFor: 'Catering buffets, family functions & tent houses',
    availability: 'In Stock (Wholesale & Retail)'
  },
  {
    id: 'paper-glasses',
    name: 'PAPER GLASSES',
    category: 'disposables',
    categoryLabel: 'Beverage Disposables',
    description: 'Paper glasses suitable for beverages, parties, events and catering.',
    image: paperGlassesImg,
    highlights: ['Eco-friendly Options', 'Hot & Cold Liquid Safe', 'Leak Resistant'],
    bestFor: 'Beverage stalls, office events, parties & stalls',
    availability: 'In Stock (Wholesale & Retail)'
  },
  {
    id: 'other-products',
    name: 'OTHER PRODUCTS',
    category: 'other',
    categoryLabel: 'Related Supplies',
    description: 'Ask us about other products and availability.',
    image: heroImage,
    highlights: ['Custom Bulk Sourcing', 'Related Confectionery & Supplies', 'Friendly Direct Consultation'],
    bestFor: 'All commercial & personal bulk requirements',
    availability: 'Available for Bulk & Retail'
  }
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: 'Wholesale & Retail',
    description: 'Options available for both wholesale and retail customers.',
    iconName: 'store'
  },
  {
    title: 'Wide Product Range',
    description: 'Multiple product categories available for different business and event requirements.',
    iconName: 'layers'
  },
  {
    title: 'Quality Products',
    description: 'We aim to provide reliable products for business, party and everyday requirements.',
    iconName: 'award'
  },
  {
    title: 'Convenient Location',
    description: 'Conveniently located in Kanhiya Nagar, Tri Nagar, Delhi.',
    iconName: 'map-pin'
  },
  {
    title: 'Bulk Requirements',
    description: 'Suitable for customers looking for products in larger quantities.',
    iconName: 'package'
  },
  {
    title: 'Friendly Service',
    description: 'An approachable local business for your product requirements.',
    iconName: 'heart-handshake'
  }
];

export const WHO_WE_SERVE_LIST: ClientCategory[] = [
  {
    title: 'Ice-Cream Parlours',
    iconName: 'ice-cream',
    description: 'Ashoka cone, Amber cone, syrups and serving supplies.',
    suitableFor: 'Regular daily wholesale cartons'
  },
  {
    title: 'Bakeries',
    iconName: 'cake',
    description: 'Bakery goods, packing essentials and specialized ingredients.',
    suitableFor: 'Fresh daily & weekly bulk sourcing'
  },
  {
    title: 'Cafés & Eateries',
    iconName: 'coffee',
    description: 'Mocktail mixes, shake syrups, paper glasses and cups.',
    suitableFor: 'Beverage & counter supplies'
  },
  {
    title: 'Restaurants',
    iconName: 'utensils',
    description: 'Dessert cones, beverage syrups and quality service disposables.',
    suitableFor: 'Dining & takeaway supplies'
  },
  {
    title: 'Juice & Beverage Shops',
    iconName: 'cup-soda',
    description: 'Comprehensive milkshake flavours, mocktails and paper glasses.',
    suitableFor: 'High-volume beverage supplies'
  },
  {
    title: 'Caterers & Halwais',
    iconName: 'chef-hat',
    description: 'Sturdy silver plates, disposable bowls, glasses and buffet items.',
    suitableFor: 'Large event orders & bulk discounts'
  },
  {
    title: 'Event Organisers',
    iconName: 'calendar-check',
    description: 'Complete party disposables, glasses and specialty items for events.',
    suitableFor: 'End-to-end event supply packages'
  },
  {
    title: 'Birthday Parties',
    iconName: 'party-popper',
    description: 'Colourful disposable plates, glasses, cones and party items.',
    suitableFor: 'Retail & small bulk packs'
  },
  {
    title: 'Marriage Functions',
    iconName: 'sparkles',
    description: 'Premium silver plates, bulk disposable dinnerware and cones.',
    suitableFor: 'Large wedding banquet requirements'
  },
  {
    title: 'Wholesale Buyers',
    iconName: 'truck',
    description: 'Bulk volume supply with prompt processing and reliable local stock.',
    suitableFor: 'B2B traders & regional stockists'
  },
  {
    title: 'Retail Customers',
    iconName: 'shopping-bag',
    description: 'Friendly walk-in purchases for household needs and small gatherings.',
    suitableFor: 'Individual & family purchases'
  }
];
