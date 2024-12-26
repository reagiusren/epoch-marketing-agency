'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShoppingBag, BarChart2 } from 'lucide-react';

const statsData = [
  { label: 'Avg. ROAS Improvement', value: '3.2x', color: 'from-violet-500 to-fuchsia-500' },
  { label: 'CAC Reduction', value: '40%', color: 'from-blue-500 to-cyan-500' },
  { label: 'Revenue Growth', value: '125%', color: 'from-purple-500 to-indigo-500' }
];

const HeroSection = () => {
  return (
    <div id="hero" className="relative min-h-screen bg-black overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
                Welcome to
                <br />
                Epoch
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming E-Commerce businesses with cutting-edge marketing solutions. 
              From Shopify optimization to advanced analytics, we're your complete 
              digital growth partner.
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-lg font-medium text-lg shadow-lg hover:shadow-purple-500/20"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
            >
              Transform Your Business
            </motion.button>

            {/* Enhanced Stats Section */}
            <div className="pt-12 grid grid-cols-3 gap-6">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Card Container with glass effect backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-8">
              {/* Cards Grid */}
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Conversion Rate Card */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">+156%</div>
                  </div>
                  <div className="text-gray-400 text-sm mb-4">Conversion Rate</div>
                  {/* Mini graph visualization */}
                  <div className="flex items-end justify-between h-24 gap-1">
                    {[40, 25, 35, 45, 55, 85, 100].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full bg-gradient-to-t from-purple-500/20 to-purple-500/40 rounded-t group-hover:from-purple-500/30 group-hover:to-purple-500/50 transition-all"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* ROAS Card */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <ShoppingBag className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">2.4x</div>
                  </div>
                  <div className="text-gray-400 text-sm mb-4">ROAS</div>
                  {/* Circular progress visualization */}
                  <div className="h-24 flex items-center justify-center">
                    <svg className="w-20 h-20" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="stroke-blue-500/20 fill-none"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="stroke-blue-500/40 fill-none"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 0.8 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        strokeDasharray="251.2"
                        strokeDashoffset="0"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                </motion.div>

                {/* CAC Reduction Card */}
                <motion.div
                  animate={{ y: [-7, 7, -7] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all col-span-2 group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <BarChart2 className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">-42%</div>
                  </div>
                  <div className="text-gray-400 text-sm mb-4">CAC</div>
                  {/* Line graph visualization */}
                  <div className="flex items-end h-16 gap-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                      className="h-0.5 bg-gradient-to-r from-green-500/50 to-green-500/20 group-hover:from-green-500/60 group-hover:to-green-500/30 transition-all"
                    >
                      <motion.div
                        animate={{
                          y: [-2, 2, -2],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-green-400 -translate-y-1"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;