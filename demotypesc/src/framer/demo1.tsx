import React from 'react'
import { motion } from 'framer-motion'

const Demo1 = () => {
    return (
        <div>
            {/* <motion.div className="box" initial={{ x: 0 }} animate={{ x: 200 }} transition={{ duration: 2, delay: 1, ease: "easeInOut" }} /> */}
            {/* <motion.div className="box" animate={{ x: 100 }} /> */}
            {/* <motion.div className="box" animate={{ y: 100 }} /> */}

            {/* <motion.div className="box" animate={{ rotateX: 60 }} /> */}
            {/* <motion.div className="box" animate={{ rotateY: 60 }} /> */}
            {/* <motion.div className="box" animate={{ rotate: 20 }} /> */}

            {/* <motion.div className="box" animate={{ scaleX: 2 }} /> */}
            {/* <motion.div className="box" animate={{ scaleY: 2 }} /> */}
            {/* <motion.div className="box" animate={{ scale: 2 }} /> */}

            {/* <motion.div className="box" animate={{ skewX: 20 }} /> */}
            {/* <motion.div className="box" animate={{ skewY: 20 }} /> */}
            <motion.div className="box" animate={{
                scale: [1, 2, 3, 1, 2, 1, 2],
                rotate: [0, 20, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}
                transition={{ duration: 5 }} />

        </div>
    );
}

export default Demo1