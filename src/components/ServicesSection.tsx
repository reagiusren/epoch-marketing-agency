'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, BarChart3, ShoppingCart, Target, type LucideProps } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  Icon: React.ComponentType<LucideProps>;
  description: string;
  benefits: string[];
  index: number;
}

const services = [
  {
    title: "Shopify Store Optimization",
    icon: ShoppingCart,
    description: "Transform your store into a high-converting sales machine with data-driven optimization and proven UX improvements.",
    benefits: [
      "Increase conversion rates",
      "Optimize checkout flow",
      "Improve user experience"
    ]
  },
  {
    title: "Facebook Ads Management",
    icon: Target,
    description: "Advanced pixel setup and CAPI integration to reduce ad costs and improve targeting accuracy.",
    benefits: [
      "Lower acquisition costs",
      "Better targeting precision",
      "Improved ROAS"
    ]
  },
  {
    title: "Analytics & Tracking",
    icon: BarChart3,
    description: "Proper GTM and GA4 setup to track every important interaction and turn data into growth opportunities.",
    benefits: [
      "Clear performance insights",
      "Revenue attribution",
      "Data-driven decisions"
    ]
  },
  {
    title: "Performance Monitoring",
    icon: Gauge,
    description: "Continuous optimization of your entire funnel to identify and capture every growth opportunity.",
    benefits: [
      "Regular optimization",
      "Proactive improvements",
      "Sustained growth"
    ]
  }
];

const ServiceCard = ({ title, Icon, description, benefits, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="flex flex-col p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/20 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-purple-500/10 rounded-lg">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-2 mt-auto">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300">
            <span className="w-1 h-1 bg-purple-400 rounded-full" />
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Grow Your E-commerce Business
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Stop losing money on inefficient marketing. Our data-driven approach helps you optimize every part of your business for maximum growth.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            Icon={service.icon}
            description={service.description}
            benefits={service.benefits}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;