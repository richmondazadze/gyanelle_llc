import { Link } from "wouter";
import { Icons } from "@/components/ui/icons";
import {
  MotionDiv,
  StaggerContainer,
  StaggerItem,
  motion,
  fadeInUp,
  fadeInLeft
} from "@/components/ui/motion";

export function Footer() {
  return (
    <footer className="bg-accent text-white pt-16 pb-8 overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <MotionDiv variants={fadeInUp} className="space-y-4">
            <motion.div
              className="flex items-center gap-2 font-bold text-2xl tracking-tight group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center p-1 group-hover:bg-primary transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img src="/logo.png" alt="Gyanelle LLC" className="w-full h-full object-contain brightness-0 invert" />
              </motion.div>
              <span className="group-hover:text-primary transition-colors duration-300 font-heading font-extrabold italic tracking-tighter">Gyanelle LLC</span>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expert electrical consulting, cleaning, and logistics solutions. Built on trust, driven by excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Icons.Facebook, href: "#" },
                { icon: Icons.Twitter, href: "#" },
                { icon: Icons.Linkedin, href: "#" },
                { icon: Icons.Instagram, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </MotionDiv>

          {/* Quick Links */}
          <MotionDiv variants={fadeInUp} delay={0.1}>
            <h3 className="text-lg font-bold mb-6 text-primary">
              <motion.span
                className="relative inline-block"
                whileHover={{ x: 3 }}
              >
                Quick Links
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </motion.span>
            </h3>
            <StaggerContainer>
              <ul className="space-y-3 text-gray-300">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' }
                ].map((item) => (
                  <StaggerItem key={item.href}>
                    <li>
                      <Link href={item.href}>
                        <motion.a
                          className="group flex items-center gap-2 hover:text-primary transition-all duration-300"
                          whileHover={{ x: 8 }}
                        >
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                          >
                            <Icons.ArrowRight className="w-3 h-3 mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                          </motion.span>
                          {item.label}
                        </motion.a>
                      </Link>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </MotionDiv>

          {/* Services */}
          <MotionDiv variants={fadeInUp} delay={0.2}>
            <h3 className="text-lg font-bold mb-6 text-primary">
              <motion.span
                className="relative inline-block"
                whileHover={{ x: 3 }}
              >
                Services
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </motion.span>
            </h3>
            <StaggerContainer>
              <ul className="space-y-3 text-gray-300">
                {[
                  { label: 'Electrical Consulting', href: '/services/electrical' },
                  { label: 'Professional Cleaning', href: '/services/cleaning' },
                  { label: 'Logistics Solutions', href: '/services/logistics' },
                ].map((service) => (
                  <StaggerItem key={service.href}>
                    <li>
                      <Link href={service.href}>
                        <motion.a
                          className="group flex items-center gap-2 hover:text-primary transition-all duration-300"
                          whileHover={{ x: 8 }}
                        >
                          {service.label}
                        </motion.a>
                      </Link>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </MotionDiv>

          {/* Contact */}
          <MotionDiv variants={fadeInUp} delay={0.3}>
            <h3 className="text-lg font-bold mb-6 text-primary">
              <motion.span
                className="relative inline-block"
                whileHover={{ x: 3 }}
              >
                Contact Us
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
              </motion.span>
            </h3>
            <StaggerContainer>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 group">
                  <Icons.MapPin className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">Westerville, OH 43081, USA</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Icons.Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+16147798886" className="text-gray-400 hover:text-white transition-colors">+1 (614) 779-8886</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Icons.Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@gyanelle.com" className="text-gray-400 hover:text-white transition-colors">info@gyanelle.com</a>
                </li>
              </ul>
            </StaggerContainer>
          </MotionDiv>
        </div>

        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="cursor-pointer hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 Gyanelle LLC. All rights reserved.
          </motion.p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service"].map((text, i) => (
              <motion.a
                key={text}
                href="#"
                className="relative hover:text-white transition-colors duration-300 group"
                whileHover={{ y: -2 }}
              >
                {text}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
