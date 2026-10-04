import React, { useState } from 'react';
import { ProductItem } from '../types';
import { ProductCard } from './ProductCard';
import { PRODUCTS_DATA } from '../data/businessData';
import { Search, Filter, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProductGridProps {
  onEnquireProduct: (product: ProductItem) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onEnquireProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = [
    { id: 'all', label: 'All Categories' },
    { id: 'cones', label: 'Cones (Ashoka & Amber)' },
    { id: 'beverages', label: 'Shakes & Mocktails' },
    { id: 'bakery', label: 'Bakery & Ice-Cream' },
    { id: 'disposables', label: 'Party & Disposables' },
    { id: 'plates', label: 'Silver Plates' },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      item.category === selectedCategory ||
      (selectedCategory === 'disposables' && (item.category === 'disposables' || item.category === 'plates'));

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100/90 px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Wholesale & Retail Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our Products
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Explore our range of products for businesses, parties, functions and everyday requirements.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-slate-200">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-thin">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search cones, flavours, plates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={onEnquireProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <p className="text-base text-slate-600 font-medium">
              No products found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-bold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Reset Filters & View All 8 Products
            </button>
          </div>
        )}

        {/* Wholesale & Retail Note Banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-emerald-500/10 rounded-2xl p-6 border border-amber-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-slate-900 font-heading">
              Need bulk quantities for marriage functions, catering or ice cream outlets?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We provide both wholesale bulk cartons and retail individual requirements in Tri Nagar, Delhi.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition-colors whitespace-nowrap"
          >
            Request Bulk Pricing
          </a>
        </div>

      </div>
    </section>
  );
};
