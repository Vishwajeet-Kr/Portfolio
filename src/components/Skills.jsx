import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-600', info: 'ES6+, async/await, modern frameworks' },
        { name: 'C++', level: 80, color: 'from-purple-500 to-purple-600', info: 'OOP, STL, competitive programming' },
        { name: 'React.js', level: 85, color: 'from-red-500 to-red-600', info: 'Hooks, components, API integration, Vite' },
        { name: 'Python', level: 70, color: 'from-blue-500 to-blue-600', info: 'Automation, scripting, basic ML & CV' },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'from-cyan-500 to-cyan-600', info: 'Hooks, Context, React Router, Redux' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-500 to-teal-600', info: 'Responsive design, custom configurations' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-orange-600', info: 'Semantic HTML, CSS Grid, Flexbox' },
        { name: 'API Integration', level: 70, color: 'from-blue-600 to-blue-700', info: 'REST APIs, fetch/axios, error handling' },
      ],
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600', info: 'Express, REST APIs, authentication' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-700', info: 'CRUD operations, aggregation, indexing' },
        { name: 'SQL', level: 85, color: 'from-blue-700 to-blue-800', info: 'Queries, joins, normalization' },
        // { name: 'Firebase', level: 75, color: 'from-amber-500 to-amber-600', info: 'Realtime database, authentication, hosting' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'VS Code', level: 90, color: 'from-blue-600 to-blue-700', info: 'Extensions, shortcuts, debugging' },
        { name: 'Git', level: 75, color: 'from-orange-600 to-orange-700', info: 'Version control, branching, collaboration' },
        { name: 'Github', level: 80, color: 'from-blue-500 to-blue-600', info: 'Containerization, deployment' },
        { name: 'AWS', level: 65, color: 'from-yellow-600 to-yellow-700', info: 'EC2, S3, Lambda basics' },
      ],
    },
    {
      title: 'CS Fundamentals',
      skills: [
        { name: 'Data Structures', level: 80, color: 'from-cyber-cyan to-soft-violet', info: 'Arrays, String, BST, Hash Tables' },
        { name: 'Algorithms', level: 80, color: 'from-soft-violet to-ai-green', info: 'Sorting, searching, dynamic programming' },
        { name: 'OOP', level: 80, color: 'from-ai-green to-cyber-cyan', info: 'Encapsulation, inheritance, polymorphism' },
        { name: 'System Design', level: 75, color: 'from-purple-500 to-pink-500', info: 'Scalability, load balancing, caching' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-space font-bold text-center mb-4"
          variants={itemVariants}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16"
          variants={itemVariants}
        >
          Tools & Technologies I Work With
        </motion.p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glass rounded-2xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-space font-semibold mb-6 text-cyber-cyan">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>

                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white opacity-0"
                          animate={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>

                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <motion.div
                        className="absolute top-full mt-2 left-0 right-0 glass p-3 rounded-lg z-10"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <p className="text-sm text-gray-300">{skill.info}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
