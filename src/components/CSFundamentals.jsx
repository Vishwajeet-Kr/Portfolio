import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Database, Cpu, Network, HardDrive, GitBranch, Boxes } from 'lucide-react';

const CSFundamentals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedNode, setExpandedNode] = useState(null);

  const fundamentals = [
    {
      icon: Boxes,
      title: 'Data Structures',
      color: 'from-cyber-cyan to-blue-500',
      topics: [
        'Arrays & String',
        'Stacks & Queues',
        'Linked Lists & Hash Tables',
        'Trees (Binary, BST)', 
      ],
      depth: 'Strong foundation in choosing the right data structure for optimal performance',
    },
    {
      icon: GitBranch,
      title: 'Algorithms',
      color: 'from-ai-green to-green-500',
      topics: [
        'Sorting (Quick, Merge, Heap)',
        'Searching (Binary, DFS, BFS)',
        'Greedy Algorithms',
        'Divide & Conquer',
        'Dynamic Programming',
      ],
      depth: 'Problem-solving with time and space complexity analysis',
    },
    {
      icon: Cpu,
      title: 'Object-Oriented Programming',
      color: 'from-soft-violet to-purple-500',
      topics: [
        'Encapsulation & Abstraction',
        'Inheritance & Polymorphism',
        'Design Patterns',
        'SOLID Principles',
        'Code Reusability',
      ],
      depth: 'Building maintainable and scalable software architectures',
    },
    {
      icon: Database,
      title: 'Database Management',
      color: 'from-yellow-500 to-orange-500',
      topics: [
        'SQL & NoSQL Databases',
        'Normalization & Indexing',
        'Transactions & ACID',
        'Query Optimization',
        'Database Design',
      ],
      depth: 'Efficient data storage, retrieval, and management strategies',
    },
    {
      icon: HardDrive,
      title: 'Operating Systems',
      color: 'from-red-500 to-pink-500',
      topics: [
        'Process Management',
        'Memory Management',
        'File Systems',
        'Concurrency & Deadlocks',
        'CPU Scheduling',
      ],
      depth: 'Understanding system-level programming and resource management',
    },
    {
      icon: Network,
      title: 'Computer Networks',
      color: 'from-teal-500 to-cyan-500',
      topics: [
        'TCP/IP & OSI Model',
        'HTTP/HTTPS Protocols',
        'DNS & Routing',
        'Network Security',
        'APIs & WebSockets',
      ],
      depth: 'Building distributed systems and understanding network communication',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent"></div>

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
          CS <span className="gradient-text">Fundamentals</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16"
          variants={itemVariants}
        >
          Strong foundations in computer science principles
        </motion.p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-soft-violet to-ai-green"></div>

          <div className="space-y-8">
            {fundamentals.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                variants={itemVariants}
              >
                <motion.div
                  className={`absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center cursor-pointer`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setExpandedNode(expandedNode === index ? null : index)}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="glass rounded-2xl p-6 cursor-pointer"
                  whileHover={{ x: 10 }}
                  onClick={() => setExpandedNode(expandedNode === index ? null : index)}
                >
                  <h3 className={`text-2xl font-space font-semibold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.depth}</p>

                  <AnimatePresence>
                    {expandedNode === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
                          {item.topics.map((topic, topicIndex) => (
                            <motion.div
                              key={topicIndex}
                              className="flex items-center gap-2 text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: topicIndex * 0.1 }}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}></div>
                              {topic}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CSFundamentals;
