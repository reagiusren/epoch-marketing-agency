'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Settings, 
  Zap, 
  LineChart,
  ArrowRight,
  Check
} from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Audit",
    description: "We analyze your current setup, identify gaps in your marketing, and uncover opportunities for rapid growth.",
    details: [
      "Store performance analysis",
      "Traffic quality assessment",
      "Conversion funnel review",
      "Competition research"
    ],
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: Settings,
    title: "Strategic Planning",
    description: "Using proven frameworks, we develop a custom strategy aligned with your business goals and market position.",
    details: [
      "Custom marketing roadmap",
      "Campaign structure planning",
      "Budget allocation strategy",
      "Growth targets definition"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Implementation",
    description: "Our team handles the technical heavy lifting, from store optimization to campaign setup and tracking implementation.",
    details: [
      "Store optimization",
      "Ad campaign setup",
      "Analytics configuration",
      "Quality assurance"
    ],
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: LineChart,
    title: "Growth & Optimization",
    description: "We continuously monitor, optimize, and scale what works while identifying new opportunities for expansion.",
    details: [
      "Performance monitoring",
      "Data-driven optimization",
      "ROI maximization",
      "Strategic scaling"
    ],
    color: "from-teal-500 to-green-500"
  }
];

const ProcessSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
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
            Our Proven Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A systematic approach to transforming your e-commerce performance, 
            combining expert analysis with strategic execution.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-green-500/50 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-sm text-gray-400">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-300 mb-4 text-base">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 space-y-6"
        >
          <p className="text-xl text-gray-300">
            Ready to transform your e-commerce business? Let’s get started!
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;