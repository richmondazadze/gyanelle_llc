import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  MotionDiv,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  AnimatedLine,
  TiltCard,
  Floating,
  motion,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn
} from "@/components/ui/motion";
const heroBg = "/assets/africa_gen.webp";

export default function ElectricalServices() {
  const services = [
    {
      image: "/projects/generator_service.png",
      title: "Generator Installation",
      description: "Professional installation of backup generators for residential and commercial properties, ensuring continuous power supply.",
      href: "/services/electrical/generator-installation"
    },
    {
      image: "/projects/hv_cable_service.png",
      title: "HV Cable Termination",
      description: "Expert high-voltage cable termination and jointing services for industrial power systems.",
      href: "/services/electrical/hv-cable-termination"
    },
    {
      image: "/assets/transformer_installation.webp",
      title: "Transformer Installation",
      description: "Complete transformer installation and commissioning services for power distribution networks.",
      href: "/services/electrical/transformer-installation"
    },
    {
      image: "/assets/safety_audits.webp",
      title: "Electrical Safety Audits",
      description: "Comprehensive safety assessments and compliance audits for electrical infrastructure.",
      href: "/services/electrical/safety-audits"
    }
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroBg}
            alt="Electrical Services"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-accent/75 mix-blend-multiply" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/90 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        {/* Floating electric sparks */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <Floating key={i} duration={3 + i * 0.5} delay={i * 0.3} y={20}>
              <motion.div
                className="absolute"
                style={{
                  left: `${10 + i * 18}%`,
                  top: `${20 + (i % 3) * 25}%`
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                <Icons.Zap className="w-8 h-8 text-primary/40" />
              </motion.div>
            </Floating>
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">

            <MotionDiv variants={fadeInUp} delay={0.3}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block" style={{
                  WebkitTextStroke: '2px white',
                  WebkitTextFillColor: 'transparent'
                }}>
                  POWERING YOUR
                </span>
                <span className="block text-white">PATH TO <span className="text-primary">SUCCESS</span></span>
              </h1>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.7}>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                From generator installation to HV cable termination, trust Gyanelle's certified electrical engineers for safe, reliable, and efficient solutions.
              </p>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.9}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Link href="/contact">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-none shadow-lg shadow-primary/25">
                      Get Free Quote
                    </Button>
                  </motion.a>
                </Link>
                <Link href="/contact">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent text-lg h-14 px-8 rounded-none">
                      Schedule Consultation
                    </Button>
                  </motion.a>
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">

            <MotionDiv variants={fadeInUp} delay={0.1}>
              <h3 className="text-4xl font-bold text-accent mb-6">Comprehensive Electrical Solutions</h3>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.2}>
              <AnimatedLine className="w-24 mx-auto mb-6" delay={0.3} />
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.3}>
              <p className="text-gray-600 text-lg leading-relaxed">
                We deliver expert electrical solutions for homes, businesses, and industrial projects. Our team specializes in all aspects of electrical work, ensuring safety, reliability, and compliance at every step.
              </p>
            </MotionDiv>
          </div>

          {/* Services Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, i) => (
              <StaggerItem key={i} className="h-full">
                <Link href={service.href}>
                  <TiltCard className="h-full">
                    <motion.div
                      className="h-full"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card className="border-0 shadow-lg rounded-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden cursor-pointer h-full flex flex-col bg-white">
                        <div className="h-64 overflow-hidden relative">
                          <motion.img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>
                        <CardContent className="p-8 flex flex-col flex-grow">
                          <h4 className="text-2xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h4>
                          <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                          <div className="mt-auto flex items-center text-primary font-bold">
                            <span>Learn More</span>
                            <Icons.ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TiltCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <MotionDiv variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-accent">Ready to Power Your Project?</h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.2}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
              Contact Gyanelle LLC today for expert electrical consulting and installation services. Our team is ready to deliver safe and reliable solutions.
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-10 rounded-none font-bold shadow-lg shadow-primary/20">
                    Get Free Quote
                  </Button>
                </motion.a>
              </Link>
              <Link href="/contact">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg h-14 px-10 rounded-none font-bold">
                    Schedule Audit
                  </Button>
                </motion.a>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
