import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [commands, setCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState(0);

  const terminalCommands = [
    { command: 'whoami', output: 'Computer Science Student & Software Developer' },
    { command: 'ls skills/', output: 'React  JavaScript   Node.js   C++   MongoDB  Python' },
    { command: 'cat interests.txt', output: 'Web Development • AI/ML • System Design • 3D Animation' },
    { command: 'echo $PASSION', output: 'Building impactful software that solves real problems' },
    { command: 'pwd', output: '/home/student/journey-to-engineer' },
    { command: 'git status', output: 'On branch main - Ready to contribute!' },
  ];

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      if (currentCommand < terminalCommands.length) {
        setCommands((prev) => [...prev, terminalCommands[currentCommand]]);
        setCurrentCommand((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView, currentCommand]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-navy via-space-navy/95 to-space-navy"></div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-space font-bold text-center mb-4"
          variants={itemVariants}
        >
          <span className="gradient-text">Terminal</span> Interface
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12"
          variants={itemVariants}
        >
          Execute commands to learn more about me
        </motion.p>

        <motion.div
          className="glass rounded-2xl overflow-hidden border border-cyber-cyan/30"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-cyber-cyan/20 to-soft-violet/20 px-6 py-3 flex items-center gap-2 border-b border-cyber-cyan/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <TerminalIcon className="w-4 h-4 text-cyber-cyan ml-4" />
            <span className="text-sm text-gray-400 font-mono">terminal@portfolio:~</span>
          </div>

          <div className="p-6 font-mono text-sm min-h-[400px] bg-black/20">
            {commands.map((cmd, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-ai-green">➜</span>
                  <span className="text-cyber-cyan">~</span>
                  <motion.span
                    className="text-gray-300"
                    initial={{ width: 0 }}
                    animate={{ width: 'auto' }}
                  >
                    {cmd.command}
                  </motion.span>
                </div>
                <motion.div
                  className="text-gray-400 ml-6 pl-4 border-l-2 border-soft-violet/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {cmd.output}
                </motion.div>
              </motion.div>
            ))}

            {commands.length > 0 && commands.length < terminalCommands.length && (
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-ai-green">➜</span>
                <span className="text-cyber-cyan">~</span>
                <motion.span
                  className="inline-block w-2 h-4 bg-cyber-cyan ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>
            )}

            {commands.length === terminalCommands.length && (
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="inline-block glass px-6 py-3 rounded-lg border border-ai-green/30">
                  <p className="text-ai-green font-semibold">
                    System Ready • All modules loaded ✓
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-6 font-mono"
          variants={itemVariants}
        >
          This is a simulated terminal showing my capabilities and interests
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Terminal;
