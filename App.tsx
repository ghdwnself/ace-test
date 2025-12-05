import React, { useState } from 'react';
import { COMPANY_NAME, NAV_LINKS, PHONE_NUMBER, SERVICES, REVIEWS, SERVICE_AREAS, HERO_VIDEO_URL } from './constants';
import { MenuIcon, XMarkIcon, PhoneIcon, StarIcon, ShieldCheckIcon } from './components/Icons';
import AIChat from './components/AIChat';
import ServiceDetailPage from './components/ServiceDetailPage';
import { ContactFormState } from './types';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [view, setView] = useState<'home' | 'service'>('home');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    phone: '',
    email: '',
    serviceType: 'General Inquiry',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormState({ name: '', phone: '', email: '', serviceType: 'General Inquiry', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const navigateToService = (id: string) => {
    setActiveServiceId(id);
    setView('service');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setView('home');
    setActiveServiceId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (view === 'service') {
      setView('home');
      setActiveServiceId(null);
      // Allow state update to process before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
       const element = document.querySelector(href);
       element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    // If we are on service page, go home and scroll to contact
    setView('home');
    setActiveServiceId(null);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill service type if we were looking at a specific service
      if (activeServiceId) {
         const service = SERVICES.find(s => s.id === activeServiceId);
         if (service) {
            setFormState(prev => ({ ...prev, serviceType: service.title }));
         }
      }
    }, 100);
  };

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button onClick={navigateToHome} className="flex-shrink-0 flex items-center gap-2 outline-none">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Ace<span className="text-primary-600">Hero</span> Plumber
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {NAV_LINKS.map(link => (
                <button 
                  key={link.label} 
                  onClick={() => handleNavClick(link.href)} 
                  className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="hidden md:flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-semibold hover:bg-primary-100 transition-colors">
                <PhoneIcon className="w-4 h-4" />
                {PHONE_NUMBER}
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-600">
                {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full px-4 py-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map(link => (
                <button 
                  key={link.label} 
                  onClick={() => handleNavClick(link.href)} 
                  className="text-lg font-medium text-slate-700 block py-2 border-b border-slate-50 text-left"
                >
                  {link.label}
                </button>
              ))}
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-3 rounded-lg font-bold">
                <PhoneIcon className="w-5 h-5" />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      {view === 'service' && activeServiceId ? (
        <ServiceDetailPage 
          service={SERVICES.find(s => s.id === activeServiceId)!} 
          onBack={navigateToHome}
          onBookNow={handleBookNow}
        />
      ) : (
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
               <video
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="w-full h-full object-cover opacity-20"
                 poster="https://images.pexels.com/photos/4057313/pexels-photo-4057313.jpeg"
               >
                 <source src={HERO_VIDEO_URL} type="video/mp4" />
               </video>
               {/* Gradient overlay to fade into bottom white section and ensure text readability */}
               <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in-up shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Available 24/7 in Orange County
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight drop-shadow-sm">
                Reliable Plumbing. <br className="hidden md:block"/>
                <span className="text-primary-600 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
                  Honest Pricing.
                </span>
              </h1>
              
              <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-700 font-medium mb-10">
                From leaky faucets to emergency pipe bursts, {COMPANY_NAME} delivers fast, professional service to homes across {SERVICE_AREAS.slice(0, 3).join(", ")} and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#contact" onClick={() => handleNavClick('#contact')} className="px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 shadow-lg shadow-primary-200 transition-all transform hover:-translate-y-1">
                  Book Appointment
                </a>
                <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="px-8 py-4 bg-white/90 backdrop-blur text-slate-700 border border-slate-200 text-lg font-semibold rounded-lg hover:bg-white transition-all">
                  Call {PHONE_NUMBER}
                </a>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-slate-500 grayscale opacity-80">
                 {/* Trust Badges Mockup */}
                 <div className="flex items-center gap-1 font-medium"><ShieldCheckIcon className="w-5 h-5"/> Licensed</div>
                 <div className="flex items-center gap-1 font-medium"><ShieldCheckIcon className="w-5 h-5"/> Bonded</div>
                 <div className="flex items-center gap-1 font-medium"><ShieldCheckIcon className="w-5 h-5"/> Insured</div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-20 bg-white overflow-hidden relative">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4">
                      Est. 2005
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                      More Than Just Plumbers — <br/>
                      <span className="text-primary-600">We're Your Neighbors</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {COMPANY_NAME} started as a small family operation with a single truck and a simple mission: to treat every home like our own. Over the last 18 years, we've grown into Orange County's most trusted plumbing team, but our core values haven't changed.
                    </p>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      We believe in clear communication, respecting your time, and fixing it right the first time. No shortcuts, no sales pressure—just honest work.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                         <h4 className="font-bold text-slate-900 mb-1">Local Experts</h4>
                         <p className="text-sm text-slate-500">Living and working in OC, we know the local infrastructure.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                         <h4 className="font-bold text-slate-900 mb-1">Quality Guaranteed</h4>
                         <p className="text-sm text-slate-500">We stand behind every repair with a 100% satisfaction promise.</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual for About Us */}
                  <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-100 group">
                     {/* Founder Image */}
                     <img 
                       src="https://images.pexels.com/photos/8961003/pexels-photo-8961003.jpeg" 
                       alt="Hyun Min, Founder" 
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                     
                     <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 m-6 rounded-2xl shadow-lg border border-white/50">
                        <div className="flex items-center gap-4">
                           <div className="h-14 w-14 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-primary-500">
                              <img src="https://images.pexels.com/photos/8961003/pexels-photo-8961003.jpeg" alt="Hyun Min" className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <p className="text-primary-600 text-xs font-bold uppercase tracking-wider mb-0.5">Ace Hero Plumber</p>
                              <p className="font-bold text-slate-900 text-lg">Hyun Min</p>
                              <p className="text-sm text-slate-500">Founder, Master Plumber</p>
                           </div>
                           <div className="ml-auto">
                              <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
             </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Services</h2>
                <p className="mt-4 text-lg text-slate-600">Expert solutions for every plumbing problem.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                  <button 
                    key={service.id} 
                    onClick={() => navigateToService(service.id)}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-100 transition-all group text-left h-full flex flex-col"
                  >
                    <div className="bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">{service.description}</p>
                    <div className="mt-6 flex items-center text-primary-600 font-semibold text-sm">
                       Learn More 
                       <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                       </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section id="reviews" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Happy Neighbors</h2>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} filled className="w-6 h-6" />)}
                  </div>
                  <span className="text-slate-700 font-semibold">5.0 Star Rating</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {REVIEWS.map((review) => (
                  <div key={review.id} className="bg-slate-50 p-6 rounded-2xl">
                    <div className="flex text-yellow-400 mb-4">
                       {[...Array(review.rating)].map((_, i) => <StarIcon key={i} filled className="w-4 h-4" />)}
                    </div>
                    <p className="text-slate-700 italic mb-6">"{review.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900">{review.name}</h4>
                        <span className="text-sm text-slate-500">{review.location}</span>
                      </div>
                      <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-primary-900 text-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-primary-900 opacity-90 z-0">
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-primary-800 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Contact Info */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to fix that leak?</h2>
                  <p className="text-primary-100 text-lg mb-8">
                    Fill out the form for a free estimate, or call us directly for emergency service. We respond to all inquiries within 1 hour during business hours.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary-700 p-3 rounded-full">
                        <PhoneIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-primary-200 text-sm font-medium uppercase tracking-wider">Phone</p>
                        <p className="text-xl font-bold">{PHONE_NUMBER}</p>
                        <p className="text-sm text-primary-300">Mon-Sat: 7am - 7pm / 24h Emergency</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="bg-primary-700 p-3 rounded-full">
                        <ShieldCheckIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-primary-200 text-sm font-medium uppercase tracking-wider">Service Area</p>
                        <p className="text-lg">Orange County</p>
                        <p className="text-sm text-primary-300">{SERVICE_AREAS.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl">
                  {formStatus === 'success' ? (
                    <div className="text-center py-12">
                       <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                          <ShieldCheckIcon className="h-8 w-8 text-green-600" />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900">Request Sent!</h3>
                       <p className="text-slate-600 mt-2">We'll be in touch shortly.</p>
                       <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary-600 font-semibold underline">
                          Send another message
                       </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          id="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formState.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                            placeholder="(949) ..."
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                          <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                        <select
                          name="serviceType"
                          id="serviceType"
                          value={formState.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                        >
                          <option>General Inquiry</option>
                          {SERVICES.map(s => (
                             <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                         <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                         <textarea
                           name="message"
                           id="message"
                           rows={4}
                           value={formState.message}
                           onChange={handleInputChange}
                           className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                           placeholder="Tell us about the issue..."
                         ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors flex justify-center items-center"
                      >
                        {formStatus === 'submitting' ? 'Sending...' : 'Get Free Quote'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="block text-white font-bold text-xl tracking-tight mb-2">Ace<span className="text-primary-500">Hero</span> Plumber</span>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.map(link => (
              <button key={link.label} onClick={() => handleNavClick(link.href)} className="hover:text-white transition-colors text-sm">
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;