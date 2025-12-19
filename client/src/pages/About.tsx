import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import {
  MotionDiv,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  AnimatedLine,
  Reveal,
  motion,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn
} from "@/components/ui/motion";
const heroBg = "/assets/modern_industrial_en_c3c5167b.jpg";

export default function About() {
  const values = [
    { icon: Icons.Shield, title: "Excellence", description: "We strive for excellence in every project we undertake" },
    { icon: Icons.Award, title: "Integrity", description: "Honest and transparent in all our business dealings" },
    { icon: Icons.Cleaning, title: "Innovation", description: "Constantly seeking better solutions for our clients" },
    { icon: Icons.Users, title: "Teamwork", description: "Collaborative approach to achieve the best results" },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero */}
      <section className="bg-accent text-white py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={heroBg} className="w-full h-full object-cover" alt="" />
        </motion.div>

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">

          <MotionDiv variants={fadeInUp} delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block" style={{
                WebkitTextStroke: '2px white',
                WebkitTextFillColor: 'transparent'
              }}>
                BUILDING TRUST
              </span>
              <span className="block text-white">WITH <span className="text-primary">EXCELLENCE</span></span>
            </h1>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Built on trust, driven by excellence. Discover our story and commitment to delivering exceptional service.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        {/* Background decoration */}
        <motion.div
          className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">

              <MotionDiv variants={fadeInLeft} delay={0.1}>
                <h3 className="text-4xl font-bold text-accent">Dedicated to Excellence Since Day One</h3>
              </MotionDiv>
              <MotionDiv variants={fadeInUp} delay={0.2}>
                <AnimatedLine className="w-20" delay={0.3} />
              </MotionDiv>
              <MotionDiv variants={fadeInUp} delay={0.3}>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Gyanelle LLC, based in Westerville, Ohio, offers top-quality Electrical Consulting, Cleaning, and Logistics services. With a reputation for professionalism, efficiency, and reliability, we are dedicated to helping homes and businesses operate better every day.
                </p>
              </MotionDiv>
              <StaggerContainer className="space-y-4 pt-4" delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Certified Professionals",
                    "17+ Years Experience",
                    "Global Service Network",
                    "Safety-First Approach"
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <motion.div
                        className="flex items-center gap-3 group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icons.Check className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                        </motion.div>
                        <span className="text-accent font-medium group-hover:text-primary transition-colors">{item}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>

            <MotionDiv variants={fadeInRight} delay={0.3}>
              <div className="relative">
                <motion.div
                  className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl z-0"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-br-3xl z-0"
                  animate={{ scale: [1.1, 1, 1.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.img
                  src="/assets/industrial-safety-equipment.webp"
                  alt="Professional Team at Work"
                  className="w-full h-auto rounded-sm shadow-xl relative z-10"
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl max-w-xs hidden md:block z-20 border-l-4 border-primary"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p className="text-accent font-bold text-lg italic">"We deliver excellence in every project, every time."</p>
                </motion.div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">


            <MotionDiv variants={fadeInUp} delay={0.2}>
              <AnimatedLine className="w-24 mx-auto" delay={0.3} />
            </MotionDiv>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-white group cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                      </motion.div>
                      <h4 className="text-xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-4 relative z-10">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Icons.Briefcase, label: "500+", desc: "Projects Completed" },
              { icon: Icons.Users, label: "200+", desc: "Expert Staff" },
              { icon: Icons.Award, label: "17+", desc: "Years Excellence" },
              { icon: Icons.Globe, label: "12+", desc: "Countries Served" }
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="p-6 text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <stat.icon size={24} />
                  </div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-accent mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                  <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.desc}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
