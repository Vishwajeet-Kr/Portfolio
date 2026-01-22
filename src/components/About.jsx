import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Target, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Breaking down complex challenges',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on measurable outcomes',
    },
    {
      icon: Sparkles,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-violet/5 to-transparent"></div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-space font-bold text-center mb-4"
          variants={itemVariants}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16"
          variants={itemVariants}
        >
          Engineer. Creator. Problem Solver.
        </motion.p>

        <motion.div
          className="glass rounded-2xl p-8 md:p-12 backdrop-blur-xl"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="relative w-64 h-64 mx-auto"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-soft-violet rounded-full blur-3xl opacity-30"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-cyber-cyan/20 to-soft-violet/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyber-cyan/30">
                  <Code2 className="w-32 h-32 text-cyber-cyan" />
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-space font-semibold text-cyber-cyan">
                Building the Future, One Line at a Time
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a Computer Science student with a passion for transforming ideas into elegant,
                efficient code. My journey in software development is driven by curiosity and a
                relentless pursuit of excellence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From crafting pixel-perfect user interfaces to building smooth, interactive user experiences, I approach every project with an engineer’s mindset:
                <span className="text-ai-green font-semibold">analytical, detail-driven and performance-focused.</span>
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of clean code, solid computer science fundamentals and
                the importance of continuous learning in this ever-evolving field.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6 text-center hover:border-cyber-cyan/50 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <highlight.icon className="w-10 h-10 text-cyber-cyan mx-auto mb-3 group-hover:text-ai-green transition-colors" />
                <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
