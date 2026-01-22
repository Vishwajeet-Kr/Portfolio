import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-cyber-cyan" />
            <span className="text-2xl font-space font-bold gradient-text">
              VISHWAJEET KUMAR
            </span>
            <Code2 className="w-6 h-6 text-ai-green" />
          </div>

          <motion.p
            className="text-gray-400 italic text-lg font-space"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            "Code is not just written, it is engineered."
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Built with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>using React, Tailwind CSS & Framer Motion</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-cyber-cyan transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-cyber-cyan transition-colors text-sm">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
