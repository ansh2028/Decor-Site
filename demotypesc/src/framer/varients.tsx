import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'


const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
};




const Variants = () => {
    const [isVisible, setIsVisible] = useState(false)


    return (
        <motion.div
            className="box"
            variants={variants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="exit"
            transition={{ duration: 0.5 }}
            onClick={() => { setIsVisible(!isVisible) }}
        ></motion.div>
    );
};

export default Variants;