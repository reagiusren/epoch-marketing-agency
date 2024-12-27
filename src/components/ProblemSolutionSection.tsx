'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  BarChart2, 
  ShoppingCart, 
  DollarSign, 
  Target,
  ChevronDown,
  ChevronUp,
  Check,
  TrendingUp,
  ArrowDown,
  ArrowUp,
  Zap,
  Layout,
  UserCheck,
  RefreshCw
} from 'lucide-react';

// Types
interface ConversionStats {
  conv: string;
  aov: string;
}

interface Stats {
  before: string | ConversionStats;
  after: string | ConversionStats;
  metric?: string;
  improvement: string | { conv: string; aov: string; };
  label?: string;
}

interface Solution {
  title: string;
  steps: { text: string; icon: JSX.Element }[];
}

interface Problem {
  title: string;
  description: string;
  icon: JSX.Element;
  stats: Stats;
  solution: Solution;
}

// Data
const problems: Problem[] = [
  {
    title: 'Low Conversion Rates & AOV',
    description: 'Struggling with low conversion rates and low average order values? We help stores see up to 156% higher conversion rates and 67% higher AOV through proven optimization strategies.',
    icon: <ArrowUpRight className="w-8 h-8 text-purple-400" />,
    stats: {
      before: {
        conv: '1.2%',
        aov: '$85'
      },
      after: {
        conv: '3.1%',
        aov: '$142'
      },
      improvement: {
        conv: '156%',
        aov: '67%'
      }
    },
    solution: {
      title: 'Complete Revenue Optimization',
      steps: [
        { text: 'High-Converting Product Page Optimization', icon: <Layout className="w-4 h-4 text-purple-400" /> },
        { text: 'Strategic Bundle & Upsell Implementation', icon: <TrendingUp className="w-4 h-4 text-purple-400" /> },
        { text: 'Smart Cross-Sell Recommendations', icon: <UserCheck className="w-4 h-4 text-purple-400" /> },
        { text: 'Abandoned Cart Recovery Systems', icon: <RefreshCw className="w-4 h-4 text-purple-400" /> },
        { text: 'Customer Journey Optimization', icon: <Zap className="w-4 h-4 text-purple-400" /> }
      ]
    }
  },
  {
    title: 'High Customer Acquisition Cost',
    description: 'Tired of wasteful ad spend? We reduce CAC by an average of 42% within 90 days while maintaining growth.',
    icon: <DollarSign className="w-8 h-8 text-blue-400" />,
    stats: {
      before: '$45',
      after: '$26',
      metric: 'Customer Acquisition Cost',
      improvement: '-42%',
      label: 'Lower CAC'
    },
    solution: {
      title: 'Advanced Ad Optimization',
      steps: [
        { text: 'Audience Refinement & Targeting', icon: <Target className="w-4 h-4 text-blue-400" /> },
        { text: 'Creative Performance Analysis', icon: <BarChart2 className="w-4 h-4 text-blue-400" /> },
        { text: 'Bid Strategy Optimization', icon: <ArrowDown className="w-4 h-4 text-blue-400" /> },
        { text: 'ROAS-Focused Scaling', icon: <ArrowUp className="w-4 h-4 text-blue-400" /> }
      ]
    }
  },
  {
    title: 'Poor Analytics & Tracking',
    description: 'Missing crucial data? We implement complete tracking solutions including GA4, GTM, Facebook Pixel, and Conversions API for precise attribution and crystal-clear insights.',
    icon: <BarChart2 className="w-8 h-8 text-purple-400" />,
    stats: {
      before: '65%',
      after: '99%',
      metric: 'Data Accuracy',
      improvement: '+52%',
      label: 'More Accurate'
    },
    solution: {
      title: 'Complete Analytics Setup',
      steps: [
        { text: 'GA4 & GTM Implementation', icon: <Check className="w-4 h-4 text-purple-400" /> },
        { text: 'Facebook Pixel & Conversions API Setup', icon: <Check className="w-4 h-4 text-purple-400" /> },
        { text: 'Server-Side Tracking Configuration', icon: <Check className="w-4 h-4 text-purple-400" /> },
        { text: 'Custom Event Tracking', icon: <Check className="w-4 h-4 text-purple-400" /> },
        { text: 'Real-time Performance Dashboard', icon: <Check className="w-4 h-4 text-purple-400" /> }
      ]
    }
  },
  {
    title: 'Inefficient Store Design',
    description: 'Outdated Shopify store? We create high-converting, modern store designs that drive more sales.',
    icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
    stats: {
      before: '2.1x',
      after: '3.4x',
      metric: 'ROAS',
      improvement: '+62%',
      label: 'Higher ROAS'
    },
    solution: {
      title: 'Store Optimization & Redesign',
      steps: [
        { text: 'UX/UI Optimization', icon: <Layout className="w-4 h-4 text-blue-400" /> },
        { text: 'Mobile-First Design', icon: <ShoppingCart className="w-4 h-4 text-blue-400" /> },
        { text: 'Speed Optimization', icon: <Zap className="w-4 h-4 text-blue-400" /> },
        { text: 'Conversion-Focused Layout', icon: <TrendingUp className="w-4 h-4 text-blue-400" /> }
      ]
    }
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ProblemSolutionSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const renderImprovement = (problem: Problem, index: number) => {
    if (index === 0) {
      const stats = problem.stats.improvement as { conv: string; aov: string };
      return `+${stats.conv} Conv / +${stats.aov} AOV`;
    }
    return `${problem.stats.improvement} ${problem.stats.label || ''}`;
  };

  const renderStats = (problem: Problem, index: number) => {
    if (index === 0) {
      // Special rendering for Conversion & AOV card
      const stats = problem.stats as { 
        before: ConversionStats; 
        after: ConversionStats;
        improvement: { conv: string; aov: string; }
      };
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-900/50">
              <p className="text-sm text-gray-400 mb-2">Before</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Conversion Rate</p>
                  <p className="text-xl font-bold text-white">{stats.before.conv}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Avg. Order Value</p>
                  <p className="text-xl font-bold text-white">{stats.before.aov}</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-purple-900/20">
              <p className="text-sm text-gray-400 mb-2">After</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Conversion Rate</p>
                  <p className="text-xl font-bold text-green-400">{stats.after.conv}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Avg. Order Value</p>
                  <p className="text-xl font-bold text-green-400">{stats.after.aov}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default rendering for other cards
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-gray-900/50">
          <p className="text-sm text-gray-400">{problem.stats.metric}</p>
          <p className="text-2xl font-bold text-white">
            {problem.stats.before as string}
          </p>
        </div>
        <div className="p-4 rounded-xl bg-purple-900/20">
          <p className="text-sm text-gray-400">After</p>
          <p className="text-2xl font-bold text-green-400">
            {problem.stats.after as string}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 md:py-24 bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4a044e19_1px,transparent_1px),linear-gradient(to_bottom,#4a044e19_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        style={{ backgroundPosition: '50% 50%' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
            Transform Your E-Commerce Performance
          </h2>
          <p className="text-base md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            We solve the critical problems holding back your growth with proven solutions that deliver measurable results
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <motion.div
                className={`h-full bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-6 md:p-8 flex flex-col transition-all duration-300 ${
                  activeCard === index ? 'ring-2 ring-purple-500/20' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-grow">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-gray-800/30">
                      {problem.icon}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-medium bg-green-400/10 px-3 py-1 rounded-full text-green-400"
                    >
                      {renderImprovement(problem, index)}
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {problem.description}
                  </p>

                  {/* Stats Comparison */}
                  {renderStats(problem, index)}

                  {/* Expandable Solution Section */}
                  <AnimatePresence>
                    {activeCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="pt-6 border-t border-gray-800">
                          <h4 className="text-lg font-semibold text-white mb-4">
                            {problem.solution.title}
                          </h4>
                          <ul className="space-y-3">
                            {problem.solution.steps.map((step, stepIndex) => (
                              <motion.li
                                key={stepIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: stepIndex * 0.1 }}
                                className="flex items-center text-gray-300"
                              >
                                <div className="w-6 h-6 flex items-center justify-center mr-3">
                                  {step.icon}
                                </div>
                                {step.text}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Interactive Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCard(activeCard === index ? null : index)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2 mt-6"
                >
                  {activeCard === index ? (
                    <>
                      Show Less
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      See Our Solution
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;