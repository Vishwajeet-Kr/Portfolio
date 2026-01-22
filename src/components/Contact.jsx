import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/Vishwajeet-Kr', color: 'hover:text-ai-green' },
    { icon: Linkedin, label: 'LinkedIn', link: 'www.linkedin.com/in/vishwajeet-kumar-710ab226', color: 'hover:text-blue-500' },
    { icon: Mail, label: 'Email', link: 'bishwjit8890@gmail.com', color: 'hover:text-ai-green' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.1)_0%,transparent_70%)]"></div>
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
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16"
          variants={itemVariants}
        >
          Let's build something amazing together
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-space font-semibold mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities
              to be part of your vision. Whether you're a recruiter, fellow developer or
              just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyber-cyan" />
                <span>bishwjit8890@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className={`w-12 h-12 glass rounded-lg flex items-center justify-center text-gray-400 transition-all ${social.color}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Name
                </label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-black/30 border-2 border-gray-700 rounded-lg focus:border-cyber-cyan outline-none transition-all text-white"
                  placeholder="Your name"
                  animate={{
                    borderColor: focusedField === 'name' ? '#00f5ff' : '#374151',
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Email
                </label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-black/30 border-2 border-gray-700 rounded-lg focus:border-cyber-cyan outline-none transition-all text-white"
                  placeholder="your.email@example.com"
                  animate={{
                    borderColor: focusedField === 'email' ? '#00f5ff' : '#374151',
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/30 border-2 border-gray-700 rounded-lg focus:border-cyber-cyan outline-none transition-all text-white resize-none"
                  placeholder="Your message here..."
                  animate={{
                    borderColor: focusedField === 'message' ? '#00f5ff' : '#374151',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyber-cyan to-ai-green text-white font-semibold rounded-lg flex items-center justify-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-ai-green to-cyber-cyan"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
