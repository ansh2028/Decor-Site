import React from 'react'
import { motion } from 'framer-motion'

const Pulsingbtn = () => {
  return (
   <motion.button
      className="px-8 py-4 text-white bg-blue-500 rounded outline-none"
      animate={{
        scale: [1, 1.1, 1],
        backgroundColor: ["#3b82f6", "#ffffffff", "#3b82f6"],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      Click Me!
    </motion.button>
  );
}

export default Pulsingbtn