import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Particles from './Particles';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = [
    'Building scalable solutions',
    'Turning ideas into code',
    'Obsessed with performance & design',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let currentIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting && currentIndex <= currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, currentIndex));
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        setTypedText(currentPhrase.slice(0, currentIndex));
        currentIndex--;
      }

      if (currentIndex > currentPhrase.length && !isDeleting) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }

      if (currentIndex < 0 && isDeleting) {
        isDeleting = false;
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        currentIndex = 0;
      }
    };

    const interval = setInterval(type, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, [phraseIndex]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-space text-6xl md:text-8xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">VISHWAJEET KUMAR</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-4"
          variants={itemVariants}
        >
          Computer Science Student | Software Developer | Problem Solver
        </motion.p>

        <motion.div
          className="h-16 flex items-center justify-center mb-8"
          variants={itemVariants}
        >
          <p className="text-cyber-cyan text-2xl font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-cyber-cyan"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-space-navy font-semibold opacity-0 group-hover:opacity-100 transition-opacity z-20">
              View Projects
            </span>
          </motion.button>

          <motion.a
            href="/Vishwajeet_0126.pdf" 
            download="Vishwajeet_Resume.pdf"
            className="px-8 py-4 bg-gradient-to-r from-cyber-cyan to-soft-violet text-white font-semibold rounded-lg shadow-lg neon-border"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 245, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>

          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-ai-green text-ai-green font-semibold rounded-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            <span className="relative z-10">Contact Me</span>
            <motion.div
              className="absolute inset-0 bg-ai-green"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-space-navy font-semibold opacity-0 group-hover:opacity-100 transition-opacity z-20">
              Contact Me
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-cyber-cyan w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
