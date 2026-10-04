import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProductGrid } from './components/ProductGrid';
import { Showcase3DStage } from './components/Showcase3DStage';
import { FeaturedVisualSection } from './components/FeaturedVisualSection';
import { WhoWeServe } from './components/WhoWeServe';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { QuickContactFloating } from './components/QuickContactFloating';
import { ProductItem } from './types';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string>('');

  const handleOpenEnquiryModal = (productName?: string) => {
    setSelectedProductForEnquiry(productName || 'All Products / General Enquiry');
    setIsEnquiryModalOpen(true);
  };

  const handleProductCardEnquire = (product: ProductItem) => {
    setSelectedProductForEnquiry(product.name);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-body selection:bg-amber-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenEnquiry={handleOpenEnquiryModal} />

      <main className="flex-grow space-y-0">
        {/* 1. Hero Section with Real WebGL 3D Canvas */}
        <Hero onOpenEnquiry={handleOpenEnquiryModal} />

        {/* 2. Trust Highlight Strip with 3D Elevation */}
        <TrustBar />

        {/* 3. Product Catalog Grid with 3D Tilt Cards */}
        <ProductGrid onEnquireProduct={handleProductCardEnquire} />

        {/* 4. Interactive 3D Spatial Carousel Stage */}
        <section className="py-12 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Showcase3DStage onEnquire={handleProductCardEnquire} />
          </div>
        </section>

        {/* 5. Featured Product Visual Section with 3D Depth */}
        <FeaturedVisualSection />

        {/* 6. Who We Serve with 3D Tilt Cards */}
        <WhoWeServe />

        {/* 7. Why Choose Amit Trading with 3D Tactile Cards */}
        <WhyChooseUs />

        {/* 8. About Amit Trading with 3D Highlight Card */}
        <AboutSection />

        {/* 9. Call To Action with 3D Tactile Buttons */}
        <CallToAction onOpenEnquiry={handleOpenEnquiryModal} />

        {/* 10. Contact Section & Enquiry Form with 3D Elevation */}
        <ContactSection initialProduct={selectedProductForEnquiry} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Quick Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        selectedProduct={selectedProductForEnquiry}
      />

      {/* Floating Action Button */}
      <QuickContactFloating onOpenEnquiry={() => handleOpenEnquiryModal()} />
    </div>
  );
}
