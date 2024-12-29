'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShoppingBag, 
  DollarSign,
  Users,
  ArrowRight,
  ChevronRight,
  MousePointerClick,
  BarChart2,
  Clock
} from 'lucide-react';

interface Study {
  name: string;
  industry: string;
  description: string;
  products: string;
  before: {
    storeMetrics: {
      conversionRate: string;
      monthlyRevenue: string;
      averageOrderValue: string;
      bounceRate: string;
    };
    adMetrics: {
      roas: string;
      cpa: string;
      monthlySpend: string;
      ctr: string;
    };
  };
  after: {
    storeMetrics: {
      conversionRate: string;
      monthlyRevenue: string;
      averageOrderValue: string;
      bounceRate: string;
    };
    adMetrics: {
      roas: string;
      cpa: string;
      monthlySpend: string;
      ctr: string;
    };
  };
  keyStrategies: {
    title: string;
    improvements: string[];
  }[];
  timeframe: string;
  testimonial: string;
}

const transformationData = {
  theNanoNest: {
    name: "TheNanoNest",
    industry: "Consumer Electronics",
    description: "Premium portable charging solutions",
    products: "Keychain chargers, portable power banks, ultra-thin chargers",
    before: {
      storeMetrics: {
        conversionRate: "1.2%",
        monthlyRevenue: "8,500",
        averageOrderValue: "23",
        bounceRate: "70%"
      },
      adMetrics: {
        roas: "1.0x",
        cpa: "45",
        monthlySpend: "$3,000", // $100/day
        ctr: "1.0%"
      }
    },
    after: {
      storeMetrics: {
        conversionRate: "3.5%",
        monthlyRevenue: "60,000", // $60,000 revenue
        averageOrderValue: "55",
        bounceRate: "40%"
      },
      adMetrics: {
        roas: "3.0x", // $60,000 / $20,000 = 3.0x
        cpa: "20",
        monthlySpend: "$20,000", // ~$666/day
        ctr: "2.5%"
      }
    },
    keyStrategies: [
      {
        title: "Store Optimization",
        improvements: [
          "Enhanced product page layout with better visuals and trust signals",
          "Mobile-first redesign for better user experience",
          "Streamlined checkout process reducing abandonment",
          "Added social proof and reviews integration"
        ]
      },
      {
        title: "Ad Strategy",
        improvements: [
          "Implemented advanced audience segmentation",
          "Developed multi-channel remarketing approach",
          "Created high-converting video ad creatives",
          "Optimized ad spend based on ROAS targets"
        ]
      }
    ],
    timeframe: "3 months",
    testimonial: "Epoch transformed our entire digital presence. The results speak for themselves - our revenue has increased 7x while maintaining profitable ad spend."
  },
  groundYourBody: {
    name: "GroundYourBody",
    industry: "Health & Wellness",
    description: "Premium earthing and grounding products",
    products: "Grounding bed sheets, mats, fitted sheets",
    before: {
      storeMetrics: {
        conversionRate: "1.0%",
        monthlyRevenue: "6,000",
        averageOrderValue: "90",
        bounceRate: "75%"
      },
      adMetrics: {
        roas: "1.1x",
        cpa: "80",
        monthlySpend: "$3,000", // $100/day
        ctr: "0.8%"
      }
    },
    after: {
      storeMetrics: {
        conversionRate: "3.2%",
        monthlyRevenue: "45,000", // $45,000 revenue
        averageOrderValue: "150",
        bounceRate: "45%"
      },
      adMetrics: {
        roas: "3.0x", // $45,000 / $15,000 = 3.0x
        cpa: "40",
        monthlySpend: "$15,000", // $500/day
        ctr: "2.2%"
      }
    },
    keyStrategies: [
      {
        title: "Educational Content",
        improvements: [
          "Created educational product videos and guides",
          "Developed comprehensive FAQ section",
          "Added scientific research references",
          "Implemented customer success stories"
        ]
      },
      {
        title: "Marketing Strategy",
        improvements: [
          "Built targeted wellness audience segments",
          "Created educational ad campaigns",
          "Implemented email nurture sequences",
          "Optimized for high-ticket conversions"
        ]
      }
    ],
    timeframe: "3 months",
    testimonial: "Epoch helped us educate our market while scaling sales. They understood our unique challenges and delivered exceptional results."
  }
};

interface MetricCardProps {
  label: string;
  before: string;
  after: string;
  prefix?: string;
}

const MetricCard = ({ label, before, after, prefix = "" }: MetricCardProps) => (
  <div className="bg-gray-800/50 rounded-lg p-4">
    <div className="text-sm text-gray-400 mb-2">{label}</div>
    <div className="flex justify-between items-center">
      <div className="text-gray-500">
        <div className="text-xs mb-1">Before</div>
        <div className="text-base">{prefix}{before}</div>
      </div>
      <ArrowRight className="w-4 h-4 text-purple-500 mx-2" />
      <div className="text-green-400">
        <div className="text-xs mb-1">After</div>
        <div className="text-base font-medium">{prefix}{after}</div>
      </div>
    </div>
  </div>
);

interface CaseStudyCardProps {
  study: Study;
}

const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  const [activeTab, setActiveTab] = useState<'performance' | 'strategy'>('performance');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-full"
    >
      <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-0">{study.name}</h3>
            <div className="flex items-center text-purple-400">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{study.timeframe} transformation</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">{study.description}</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 overflow-x-auto sm:overflow-visible">
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'performance'
                ? 'bg-purple-500/20 text-purple-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Performance Metrics
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'strategy'
                ? 'bg-purple-500/20 text-purple-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Our Strategy
          </button>
        </div>

        {/* Performance Metrics Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-6 flex-1">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Store Performance</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MetricCard
                  label="Conversion Rate"
                  before={study.before.storeMetrics.conversionRate}
                  after={study.after.storeMetrics.conversionRate}
                />
                <MetricCard
                  label="Monthly Revenue"
                  before={study.before.storeMetrics.monthlyRevenue}
                  after={study.after.storeMetrics.monthlyRevenue}
                  prefix="$"
                />
                <MetricCard
                  label="Average Order Value"
                  before={study.before.storeMetrics.averageOrderValue}
                  after={study.after.storeMetrics.averageOrderValue}
                  prefix="$"
                />
                <MetricCard
                  label="Bounce Rate"
                  before={study.before.storeMetrics.bounceRate}
                  after={study.after.storeMetrics.bounceRate}
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Ad Performance</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MetricCard
                  label="ROAS"
                  before={study.before.adMetrics.roas}
                  after={study.after.adMetrics.roas}
                />
                <MetricCard
                  label="Cost Per Acquisition"
                  before={study.before.adMetrics.cpa}
                  after={study.after.adMetrics.cpa}
                  prefix="$"
                />
                <MetricCard
                  label="Monthly Ad Spend"
                  before={study.before.adMetrics.monthlySpend}
                  after={study.after.adMetrics.monthlySpend}
                />
                <MetricCard
                  label="Click-Through Rate"
                  before={study.before.adMetrics.ctr}
                  after={study.after.adMetrics.ctr}
                />
              </div>
            </div>
          </div>
        )}

        {/* Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-6 flex-1">
            {study.keyStrategies.map((strategy: { title: string; improvements: string[] }, index: number) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-white mb-4">{strategy.title}</h4>
                <ul className="space-y-3">
                  {strategy.improvements.map((improvement: string, i: number) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <ChevronRight className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Testimonial */}
        <div className="mt-8 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
          <p className="text-gray-300 italic">"{study.testimonial}"</p>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudiesSection = () => {
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
            Transformations That Speak
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped e-commerce brands 
            achieve significant growth through our comprehensive approach.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <CaseStudyCard study={transformationData.theNanoNest} />
          <CaseStudyCard study={transformationData.groundYourBody} />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 space-y-6"
        >
          <p className="text-xl text-gray-300">
            Ready to transform your e-commerce business?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            Start Your Transformation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;