import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Intelligent File Management System',
      description: 'Automatically detects and eliminates duplicate files using content-based hashing techniques',
      tech: ['React', 'Springboot', 'MongoDB'],
      image: 'https://images.pexels.com/photos/17489155/pexels-photo-17489155.jpeg',
      github: 'https://github.com/Vishwajeet-Kr/DuplicaRemover.git',
      problem: 'Users often accumulate redundant files across directories, wasting storage and reducing system efficiency.',
      approach: 'Designed a content-based file scanning system using hashing and directory traversal algorithms.',
      architecture: 'Python-based core engine, recursive file system traversal, hash comparison for duplicate detection.',
      challenges: 'Handling large directories efficiently and avoiding false positives during file comparison.',
      learnings: 'Gained strong understanding of file systems, hashing algorithms and performance optimization.'
    },
    {
      id: 2,
      title: 'Drowsiness Detection System',
      description: 'Real-time computer vision system to detect driver drowsiness and trigger alerts.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'CNN'],
      image: 'https://images.pexels.com/photos/30271167/pexels-photo-30271167.jpeg',
      github: "https://github.com/Vishwajeet-Kr/Detect-Drowsiness.git",
      problem: 'Drowsy driving significantly increases accident risk due to delayed human reactions.',
      approach: 'Implemented real-time facial landmark detection and eye-state analysis to identify drowsiness.',
      architecture: 'Python-based system using OpenCV for video processing, MediaPipe for facial landmarks and CNN for eye-state classification.',
      challenges: 'Maintaining real-time performance, handling varying lighting conditions and reducing false alarms.',
      learnings: 'Developed strong understanding of computer vision pipelines, CNN integration and real-time system optimization.',
    },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} id="projects" className="py-20 px-6 relative overflow-hidden">
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
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16"
          variants={itemVariants}
        >
          Real-world solutions built with passion and precision
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group cursor-pointer relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-navy to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-cyber-cyan opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-space font-semibold mb-2 group-hover:text-cyber-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full text-sm text-cyber-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* <button className="flex items-center gap-2 text-ai-green hover:text-ai-green/80 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button> */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-soft-violet hover:text-soft-violet/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>

              <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-space font-bold gradient-text">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-cyber-cyan mb-2">Problem Statement</h4>
                  <p className="text-gray-300">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyber-cyan mb-2">Approach</h4>
                  <p className="text-gray-300">{selectedProject.approach}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyber-cyan mb-2">Architecture</h4>
                  <p className="text-gray-300">{selectedProject.architecture}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyber-cyan mb-2">Challenges</h4>
                  <p className="text-gray-300">{selectedProject.challenges}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyber-cyan mb-2">Key Learnings</h4>
                  <p className="text-gray-300">{selectedProject.learnings}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyber-cyan mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg text-cyber-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
