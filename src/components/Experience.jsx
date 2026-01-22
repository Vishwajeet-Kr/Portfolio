import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Trophy } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      year: '2025',
      type: 'internship',
      icon: Briefcase,
      title: 'Web Developer Intern',
      organization: 'Pinnacle Labs',
      description:'Developed responsive web dashboards using real-time APIs and modern JavaScript.',
      achievements: ['Built real-time weather dashboard using REST APIs',
      'Integrated third-party APIs using Fetch and async workflows',
      ],
      color: 'cyber-cyan',
    },
    {
      year: '2025',
      type: ' IBM National Hackathon',
      icon: Trophy,
      title: '• Finalist',
      organization: 'IBM National Hackathon',
      description: 'Led a team of four to build a full-fledged file deduplication system within 24 hours, earning finalist recognition and certification from IBM.',
      achievements: ['Built in 24 hours', 'Won the finalist certificate',],
      color: 'ai-green',
    },
    {
      year: '2022',
      type: 'education',
      icon: GraduationCap,
      title: 'Started Computer Science Degree',
      organization: 'Amity University Ranchi',
      description: 'Began Bachelor of Science in Computer Science with focus on software engineering',
      achievements: ['7.4 CGPA(current)', 'MERN Stack Developer', 'Cultural fest coordinator'],
      color: 'cyber-cyan',
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,124,255,0.1)_0%,transparent_70%)]"></div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-space font-bold text-center mb-4"
          variants={itemVariants}
        >
          My <span className="gradient-text">Journey</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16"
          variants={itemVariants}
        >
          Milestones, achievements and growth
        </motion.p>

        <div className="relative">
          <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-soft-violet to-ai-green transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
                variants={itemVariants}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 group hover:border-${item.color}/50 transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`inline-block px-3 py-1 rounded-full bg-${item.color}/20 text-${item.color} text-sm mb-3`}>
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-space font-semibold mb-2">{item.title}</h3>
                    <p className="text-ai-green text-sm mb-3">{item.organization}</p>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${item.color}`}></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="absolute left-12 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br from-${item.color} to-${item.color}/50 flex items-center justify-center border-4 border-space-navy`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
