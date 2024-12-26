'use client';

import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loader;