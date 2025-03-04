'use client';

import { motion } from 'framer-motion';
import { Check, Shield, BarChart, Settings } from 'lucide-react';

interface Platform {
  name: string;
  image: string;
  description: string;
}

interface PlatformCategory {
  category: string;
  color: string;
  tagline: string;
  certifications?: string[];
  items: Platform[];
}

const PlatformShowcaseSection = () => {
  const platforms: PlatformCategory[] = [
    {
      category: 'Store Excellence',
      color: 'from-emerald-500/20 to-green-500/20',
      tagline: 'Build a high-converting store that sells 24/7',
      certifications: ['Shopify Plus Partner', 'Expert Developer'],
      items: [
        {
          name: 'Shopify',
          image: '/images/platforms/shopify.png', // Replace with actual path
          description: 'Custom store optimization that converts visitors into customers',
        },
        {
          name: 'Shopify Plus',
          image: '/images/platforms/shopify-plus.png', // Replace with actual path
          description: 'Enterprise-level solutions for scaling businesses',
        },
      ],
    },
    {
      category: 'Customer Acquisition',
      color: 'from-blue-500/20 to-indigo-500/20',
      tagline: 'Drive qualified traffic that\'s ready to buy',
      certifications: ['Meta Business Partner', 'Google Ads Certified'],
      items: [
        {
          name: 'Meta Ads',
          image: '/images/platforms/meta-ads.png', // Replace with actual path
          description: 'Facebook & Instagram Advertising',
        },
        {
          name: 'Google Ads',
          image: '/images/platforms/google-ads.png', // Replace with actual path
          description: 'Search & Display Networks',
        },
        {
          name: 'TikTok Ads',
          image: '/images/platforms/tiktok-ads.png', // Replace with actual path
          description: 'Short-form Video Advertising',
        },
      ],
    },
    {
      category: 'Data & Insights',
      color: 'from-purple-500/20 to-violet-500/20',
      tagline: 'Make decisions based on real, accurate data',
      certifications: ['GA4 Certified', 'GTM Specialist'],
      items: [
        {
          name: 'Google Analytics 4',
          image: '/images/platforms/ga4.png', // Replace with actual path
          description: 'Advanced Data Analytics',
        },
        {
          name: 'Google Tag Manager',
          image: '/images/platforms/gtm.png', // Replace with actual path
          description: 'Tag Implementation & Management',
        },
        {
          name: 'Meta Pixel',
          image: '/images/platforms/meta-pixel.png', // Replace with actual path
          description: 'Conversion Tracking & Optimization',
        },
      ],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a044e19_1px,transparent_1px),linear-gradient(to_bottom,#4a044e19_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            The Right Tools, Mastered For You
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stop wrestling with complex platforms. We've mastered the entire e-commerce tech stack
            so you can focus on growing your business.
          </p>
        </motion.div>

        {/* Platform Categories */}
        <div className="grid gap-8">
          {platforms.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="relative"
            >
              {/* Category Header with Grid */}
              <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center mb-6">
                <div>
                  <div className="flex items-center mb-3">
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color.replace('/20', '')} mr-4`} />
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>
                  <p className="text-gray-400">{category.tagline}</p>
                </div>
                
                {/* Certification Badges - Optional */}
                <div className="flex justify-end gap-4">
                  {category.certifications?.map((cert, i) => (
                    <div key={i} className="flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
                      <span className="text-sm text-gray-400">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platforms Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((platform, platformIndex) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (platformIndex * 0.1) }}
                    className="relative group"
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="h-10 mb-4">
                          <img
                            src={platform.image}
                            alt={platform.name}
                            className="h-full object-contain"
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">{platform.name}</h4>
                        <p className="text-sm text-gray-400">{platform.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="space-y-4">
            <p className="text-gray-400">
              Certified partners and platform experts ready to grow your business
            </p>
            <p className="text-xl text-white">
              But great tools are just the beginning...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformShowcaseSection;