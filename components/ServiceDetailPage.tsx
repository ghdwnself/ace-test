import React from 'react';
import { ServiceItem } from '../types';
import { ArrowLeftIcon, CheckCircleIcon, PhoneIcon, ShieldCheckIcon, StarIcon } from './Icons';
import { PHONE_NUMBER } from '../constants';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onBookNow: () => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onBack, onBookNow }) => {
  return (
    <div className="animate-fade-in-up bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors mb-8 font-medium"
        >
          <div className="p-2 bg-slate-100 rounded-full group-hover:bg-primary-50 transition-colors">
            <ArrowLeftIcon className="w-4 h-4" />
          </div>
          Back to Services
        </button>

        {/* Main Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="p-4 bg-primary-50 rounded-2xl w-fit">
              {service.icon}
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{service.title}</h1>
            <p className="text-lg text-slate-500">Professional {service.title} services in Orange County</p>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <p className="text-xl text-slate-600 leading-relaxed">
            {service.description}
          </p>
          <div className="my-8 border-l-4 border-primary-500 pl-6 py-2 bg-slate-50 rounded-r-lg">
            <p className="text-slate-700 italic">
              "{service.longDescription}"
            </p>
          </div>
        </div>

        {/* Features & Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              Key Benefits
            </h3>
            <ul className="space-y-4">
              {service.benefits?.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              Our Capabilities
            </h3>
            <ul className="space-y-4">
              {service.features?.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose OC Prime Plumbing? Section (Extracted from Sidebar) */}
        <div className="mb-16 border-t border-slate-100 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Why Choose Bran Solution?</h3>
            <p className="text-slate-600 mt-2">The trusted choice for Orange County homeowners.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white text-primary-600 rounded-full flex items-center justify-center shadow-sm mb-4">
                <ShieldCheckIcon className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Licensed & Insured</h4>
              <p className="text-slate-600">Fully bonded for your peace of mind and protection.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white text-primary-600 rounded-full flex items-center justify-center shadow-sm mb-4 font-bold text-2xl">
                $
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Upfront Pricing</h4>
              <p className="text-slate-600">No hidden fees or surprise charges. Honest quotes every time.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white text-primary-600 rounded-full flex items-center justify-center shadow-sm mb-4">
                <StarIcon filled className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">5-Star Rated</h4>
              <p className="text-slate-600">Hundreds of happy customers across Orange County.</p>
            </div>
          </div>
        </div>
        
        {/* CTA in Content */}
        <div className="bg-primary-900 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Need this service today?</h3>
              <p className="text-primary-100 mb-8 max-w-lg mx-auto">
                Our expert technicians are ready to help. Get a free estimate or schedule an immediate repair.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={onBookNow}
                  className="bg-white text-primary-900 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition-colors"
                >
                  Book Now
                </button>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
                  className="flex items-center justify-center gap-2 bg-primary-800 border border-primary-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailPage;