'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  MousePointerClick, 
  BarChart2, 
  TrendingUp,
  Check,
  ArrowRight,
  type LucideIcon
} from 'lucide-react';

// Define the Service type
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  features: string[];
  standalone: string;
}

const services: Service[] = [
  {
    icon: ShoppingBag,
    title: "Shopify Store Optimization",
    description: "Transform your store into a high-converting sales machine.",
    color: "from-purple-500 to-fuchsia-500",
    features: [
      "Custom theme design & development",
      "Conversion rate optimization",
      "Product page optimization",
      "Compelling product descriptions & copy",
      "Mobile responsiveness",
      "Loading speed optimization",
      "Checkout flow optimization"
    ],
    standalone: "Perfect if you need to improve your store's performance and conversion rate."
  },
  {
    icon: MousePointerClick,
    title: "Facebook & Google Ads",
    description: "Scale your business with expert paid advertising solutions.",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Complete campaign strategy & setup",
      "Meta Pixel & Conversions API implementation",
      "Google Ads conversion tracking",
      "Custom audience & remarketing setup",
      "Professional ad creative & copy",
      "A/B testing & optimization",
      "Budget management & scaling"
    ],
    standalone: "Ready to drive targeted traffic and acquire customers profitably."
  },
  {
    icon: BarChart2,
    title: "Analytics & Tracking Setup",
    description: "Get crystal-clear insights with comprehensive tracking implementation.",
    color: "from-cyan-500 to-teal-500",
    features: [
      "Google Tag Manager (GTM) setup",
      "Google Analytics 4 (GA4) configuration",
      "Custom conversion tracking",
      "Enhanced e-commerce tracking",
      "Cross-platform attribution setup",
      "Custom reporting dashboards",
      "Data accuracy verification"
    ],
    standalone: "Essential for businesses wanting accurate, comprehensive data for strategic decisions."
  },
  {
    icon: TrendingUp,
    title: "Performance Monitoring",
    description: "Continuous optimization and growth of your e-commerce ecosystem.",
    color: "from-teal-500 to-green-500",
    features: [
      "24/7 campaign monitoring",
      "Weekly performance reports",
      "ROI & ROAS analysis",
      "Conversion funnel analysis",
      "Customer journey optimization",
      "Competition monitoring",
      "Growth opportunity identification"
    ],
    standalone: "Ideal for ensuring continuous improvement and maximizing your marketing ROI."
  }
];

// Define the ServiceCardProps type
interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 10 }}
          className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4">
          {service.title}
        </h3>
        <p className="text-gray-400 mb-6">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-6">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center text-gray-300">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Standalone Message */}
        <div className="text-gray-400 italic">
          {service.standalone}
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Flexible Services for Your Needs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you need a complete marketing solution or help with specific areas,
            we've got you covered. Choose the services that match your goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 space-y-6"
        >
          <p className="text-xl text-gray-300">
            Not sure what you need? Let's talk about your goals.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesBreakdown;