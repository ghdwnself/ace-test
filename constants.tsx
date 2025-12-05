import React from 'react';
import { WrenchIcon, DropIcon, FireIcon, CameraIcon, ShieldCheckIcon, ClockIcon } from './components/Icons';
import { ServiceItem, Review } from './types';

export const COMPANY_NAME = "Bran Solution";
export const PHONE_NUMBER = "(949) 555-0199";
export const EMAIL_ADDRESS = "hello@bransolution.com";
export const SERVICE_AREAS = ["Irvine", "Newport Beach", "Anaheim", "Huntington Beach", "Fullerton", "Santa Ana"];
export const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/4057313/4057313-uhd_2560_1440_25fps.mp4"; // Clean, high-key water ripples

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'leak-detection',
    title: 'Leak Detection & Repair',
    description: 'Advanced electronic leak detection to find hidden leaks behind walls or underground before they cause damage.',
    icon: <DropIcon className="w-8 h-8 text-primary-600" />,
    longDescription: 'Water leaks can be elusive and destructive. Our state-of-the-art electronic leak detection technology allows us to pinpoint the exact location of a leak behind walls, under slabs, or underground without unnecessary destruction to your property. Once identified, our team provides minimally invasive repair options to restore your plumbing integrity.',
    benefits: [
      'Prevent costly structural damage and mold growth',
      'Reduce water bills significantly',
      'Non-invasive technology preserves your home',
      'Same-day detection and repair options'
    ],
    features: [
      'Acoustic Listening Devices',
      'Thermal Imaging Cameras',
      'Moisture Meter Testing',
      'Slab Leak Expertise'
    ]
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning & Hydro Jetting',
    description: 'From slow drains to major clogs, we use professional-grade snakes and hydro jetting to clear pipes.',
    icon: <WrenchIcon className="w-8 h-8 text-primary-600" />,
    longDescription: 'Stubborn clogs are no match for our industrial-grade equipment. We don\'t just poke a hole in the blockage; we clean the entire pipe. For severe grease or root buildup, our Hydro Jetting service uses high-pressure water streams to scour pipe walls clean, restoring them to like-new condition.',
    benefits: [
      'Eliminate recurring clogs instantly',
      'Remove bad odors from drains',
      'Extend the lifespan of your plumbing system',
      'Safe for old and new pipes'
    ],
    features: [
      'Video Camera Inspection',
      'High-Pressure Hydro Jetting',
      'Rooter Service',
      'Bio-Clean Maintenance'
    ]
  },
  {
    id: 'water-heaters',
    title: 'Water Heater Installation',
    description: 'Expert repair and installation of tankless and traditional water heaters. Never take a cold shower again.',
    icon: <FireIcon className="w-8 h-8 text-primary-600" />,
    longDescription: 'Hot water is essential for modern comfort. Whether your water heater is leaking, making strange noises, or simply failing to heat, we can help. We specialize in both traditional tank systems and energy-efficient tankless water heaters that provide endless hot water while lowering your energy bills.',
    benefits: [
      'Endless hot water with tankless systems',
      'Lower energy bills',
      'Compact space-saving designs',
      'Extended warranty options available'
    ],
    features: [
      'Tankless Water Heater Installation',
      'Traditional Tank Replacement',
      'Routine Maintenance & Flushing',
      'Emergency Repair'
    ]
  },
  {
    id: 'sewer-camera',
    title: 'Sewer Camera Inspection',
    description: 'Non-invasive video inspection to diagnose root intrusion, cracks, or blockages in your sewer line.',
    icon: <CameraIcon className="w-8 h-8 text-primary-600" />,
    longDescription: 'Stop guessing what the problem is. Our fiber-optic sewer cameras travel deep into your pipe lines to reveal the root cause of frequent backups. We can see tree roots, cracks, bellies, and misaligned pipes in high-definition, providing you with a copy of the footage and a clear solution.',
    benefits: [
      'Accurate diagnosis saves time and money',
      'Visual proof of pipe condition',
      'Locate buried pipes without digging',
      'Essential for home buyers'
    ],
    features: [
      'HD Color Video Recording',
      'Self-Leveling Cameras',
      'Digital Location Tracking',
      'Detailed Inspection Reports'
    ]
  },
  {
    id: 'emergency',
    title: '24/7 Emergency Service',
    description: 'Plumbing disasters don’t wait for business hours. We are available around the clock for emergencies.',
    icon: <ClockIcon className="w-8 h-8 text-primary-600" />,
    longDescription: 'A burst pipe or sewage backup is a stressful emergency that needs immediate attention. Our on-call team is ready 24/7 to halt damage and restore safety to your home. We arrive fully stocked to handle most emergencies on the spot.',
    benefits: [
      'Response times under 60 minutes for emergencies',
      'Available nights, weekends, and holidays',
      'Fully stocked trucks for immediate repairs',
      'Peace of mind when you need it most'
    ],
    features: [
      'Burst Pipe Isolation',
      'Gas Leak Shutoff',
      'Main Line Stoppage Clearing',
      'Emergency Water Shut-off'
    ]
  },
  {
    id: 'piping',
    title: 'Repiping & PEX',
    description: 'Whole-house repiping services using durable PEX or copper to replace old, corroded galvanized pipes.',
    icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
    longDescription: 'If you have low water pressure, rust-colored water, or frequent slab leaks, it might be time to repipe. We replace outdated galvanized steel pipes with modern PEX or copper solutions that are corrosion-resistant and guaranteed for decades.',
    benefits: [
      'Restore strong water pressure',
      'Clean, clear, rust-free water',
      'Increase your home\'s value',
      'Lifetime warranty on workmanship'
    ],
    features: [
      'Whole-House PEX Repiping',
      'Copper Piping Options',
      'Drywall Patching & Texture',
      'Permitting & Inspection Handling'
    ]
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Irvine, CA',
    rating: 5,
    text: "Absolutely the best plumbing experience I've had. They arrived within an hour of my call for a burst pipe and fixed it quickly. Professional and clean.",
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Newport Beach, CA',
    rating: 5,
    text: "Installed a new tankless water heater for us. The quote was transparent, no hidden fees, and the workmanship is top-notch. Highly recommend!",
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'Jessica Alverez',
    location: 'Anaheim, CA',
    rating: 5,
    text: "I used their AI chat to describe my issue, and when the plumber arrived, he already knew what to expect. Super efficient service.",
    date: '3 weeks ago'
  }
];