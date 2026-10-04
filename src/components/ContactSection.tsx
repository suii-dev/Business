import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Clock,
  Building,
  Info
} from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS_DATA } from '../data/businessData';
import { EnquiryFormData } from '../types';

interface ContactSectionProps {
  initialProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProduct = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    orderType: 'Wholesale',
    product: initialProduct || 'All Products / General Enquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    const cleanPhone = formData.phone.trim().replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Set submitted state for simulated preview
    setFormSubmitted(true);
    setErrorMsg('');
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      orderType: 'Wholesale',
      product: 'All Products / General Enquiry',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100/90 px-3 py-1 rounded-full uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Contact Amit Trading
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Reach out for wholesale cartons, party supplies, product availability or visit our Tri Nagar store.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Contact Numbers */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-3d-card hover:shadow-3d-hover transition-all duration-300 flex flex-col justify-between space-y-4 transform hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Contact Numbers
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Call for orders, availability and quotations
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {BUSINESS_INFO.phoneNumbers.map((phone, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 shadow-3d-sm">
                    <span className="text-sm font-bold text-slate-800 tracking-wide font-mono">
                      {phone}
                    </span>
                    <a
                      href={`tel:${phone}`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-3d-sm hover:shadow-md transition-all"
                    >
                      Call Now
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500">
              Direct connection with Amit Trading sales desk.
            </div>
          </div>

          {/* Card 2: Store Address */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-3d-card hover:shadow-3d-hover transition-all duration-300 flex flex-col justify-between space-y-4 transform hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Store Address
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Visit us in Tri Nagar, Delhi
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1 shadow-3d-sm">
                <p className="text-sm font-bold text-slate-900">AMIT TRADING</p>
                <p className="text-xs font-semibold text-amber-700">Wholesale & Retail</p>
                <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                  3760, Kanhiya Nagar,<br />
                  Tri Nagar,<br />
                  Delhi - 110035
                </p>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 text-center shadow-3d-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-700" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Card 3: Business Type & Serving Areas */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-3d-card hover:shadow-3d-hover transition-all duration-300 flex flex-col justify-between space-y-4 transform hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Business Scope
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Wholesale cartons & retail purchases
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Serving Tri Nagar & across Delhi NCR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Wholesale bulk carton orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Party, function & retail quantities</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 shadow-3d-sm">
              Location: 3760, Kanhiya Nagar, Tri Nagar, Delhi - 110035
            </div>
          </div>

        </div>

        {/* Contact Form & Map Interactive Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact / Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-3d-card">
            <div className="space-y-2 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Send Product Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out the form below to enquire about availability, wholesale pricing, or specific party orders.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-emerald-900 font-heading">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-emerald-800">
                    Your enquiry for <strong>{formData.product}</strong> ({formData.orderType}) has been recorded.
                  </p>
                  <p className="text-xs text-emerald-700 pt-1">
                    For instant confirmation, you can also call our store directly at{' '}
                    <span className="font-bold">{BUSINESS_INFO.phoneNumbers[0]}</span> or{' '}
                    <span className="font-bold">{BUSINESS_INFO.phoneNumbers[1]}</span>.
                  </p>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneNumbers[0]}`}
                    className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Amit Trading Now
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 98XXXXXXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Order / Customer Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Requirement Type
                    </label>
                    <select
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    >
                      <option value="Wholesale">Wholesale (Bulk Cartons / Commercial)</option>
                      <option value="Retail">Retail (Household / Small Quantity)</option>
                      <option value="Bulk Function / Event">Marriage / Birthday / Catering Function</option>
                    </select>
                  </div>

                  {/* Product Category Selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Product / Category
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    >
                      <option value="All Products / General Enquiry">All Products / General Enquiry</option>
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / Requirement Details */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    Message / Quantity Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Specify required quantity, delivery date, flavours, or plate sizes..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-3d-btn transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </div>

                {/* Developer note as requested */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
                  <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    Form enquiry operates in frontend simulation mode. To connect an automated backend, integrate an Express endpoint (`/api/enquiry`) or an email/SMS webhook.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right: Store Map & Direct Location Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    Store Location
                  </h4>
                  <p className="text-xs text-slate-500">Kanhiya Nagar, Tri Nagar, Delhi</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              {/* Styled Realistic Map Graphic / Direction View */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-56 flex flex-col items-center justify-center text-center p-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">AMIT TRADING</p>
                    <p className="text-xs text-slate-600">3760, Kanhiya Nagar, Tri Nagar, Delhi - 110035</p>
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-slate-700 space-y-1">
                <p className="font-bold text-blue-900">Quick Contact Line:</p>
                <div className="flex flex-wrap gap-4 font-bold text-blue-700">
                  {BUSINESS_INFO.phoneNumbers.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone}`} className="hover:underline flex items-center gap-1">
                      <Phone className="w-3 h-3 text-emerald-600" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
