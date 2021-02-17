import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 } 
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const buttonVarinats = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgba(255, 255, 255)',
    boxShadow: '0px 0px 8px rgba(255, 255, 255)',
    transition: {
      yoyo: Infinity,
      duration: 0.35
    }
  },
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVarinats}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;