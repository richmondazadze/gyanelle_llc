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
const heroBg = "/assets/commercial-cleaning-services.webp";

export default function CleaningServices() {
  const services = [
    {
      image: "/assets/commercial_cleaning.webp",
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for offices, medical facilities, and retail spaces.",
      href: "/services/cleaning/commercial"
    },
    {
      image: "/assets/residential_cleaning.webp",
      title: "Residential Cleaning",
      description: "Comprehensive house cleaning services to keep your home healthy and sparkling.",
      href: "/services/cleaning/residential"
    },
    {
      image: "/assets/move_in_out.webp",
      title: "Move-In/Out Cleaning",
      description: "Deep cleaning services to make your transition to a new space seamless.",
      href: "/services/cleaning/move-in-out"
    }
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroBg}
            alt="Cleaning Services"
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

        {/* Floating sparkles */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <Floating key={i} duration={3 + i * 0.3} delay={i * 0.2} y={15}>
              <motion.div
                className="absolute"
                style={{
                  left: `${5 + i * 12}%`,
                  top: `${15 + (i % 4) * 20}%`
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              >
                <Icons.Sparkles className="w-6 h-6 text-primary/50" />
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
                  SPOTLESS SPACES
                </span>
                <span className="block text-white">EVERY <span className="text-primary">TIME</span></span>
              </h1>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.7}>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Experience pristine, healthy spaces with Gyanelle's eco-friendly, flexible cleaning for homes and offices. Your comfort is our commitment.
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
                      Schedule Cleaning
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
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">

            <MotionDiv variants={fadeInUp} delay={0.1}>
              <h3 className="text-4xl font-bold text-accent mb-6">Premium Cleaning Services</h3>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.2}>
              <AnimatedLine className="w-24 mx-auto mb-6" delay={0.3} />
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.3}>
              <p className="text-gray-600 text-lg leading-relaxed">
                We deliver top-tier cleaning for homes and offices, using safe, eco-friendly products and flexible scheduling to fit your lifestyle. Our team is dedicated to making your environment shine.
              </p>
            </MotionDiv>
          </div>

          {/* Services Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                            <Icons.ArrowRight className="w-5 h-5 ml-2 transition-transform" />
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
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icons.Sparkles className="w-16 h-16 mx-auto text-primary opacity-80" />
            </motion.div>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.2}>
            <h2 className="text-4xl font-bold text-accent">Ready for a Spotless Space?</h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.3}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
              Contact Gyanelle LLC for a personalized cleaning plan for your home or office. Experience the difference of true professionalism.
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
                    Schedule Cleaning
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
