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
const heroBg = "/assets/logistics-warehouse-operations.webp";

export default function LogisticsServices() {
  const services = [
    {
      image: "/assets/materials_supply.webp",
      title: "Supply of Materials",
      description: "Mining and electrical materials sourced and delivered to your site, on time and on budget.",
      href: "/services/logistics/materials-supply"
    },
    {
      image: "/assets/relocation_services.webp",
      title: "Relocation Services",
      description: "Professional home and office moving services with careful handling and efficient transport.",
      href: "/services/logistics/relocation"
    },
    {
      image: "/assets/supply_chain.webp",
      title: "Supply Chain Management",
      description: "Optimized logistics and supply chain solutions to streamline your operations.",
      href: "/services/logistics/supply-chain"
    }
  ];

  const benefits = [
    { icon: Icons.Clock, label: "On-Time Delivery", desc: "Guaranteed schedule adherence" },
    { icon: Icons.Dollar, label: "Cost Effective", desc: "Competitive, transparent pricing" },
    { icon: Icons.Chart, label: "Real-Time Tracking", desc: "Full visibility of your shipment" },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroBg}
            alt="Logistics Solutions"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/90 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        {/* Animated trucks/packages */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 25}%`,
                top: `${25 + (i % 2) * 30}%`
              }}
              animate={{
                x: [0, 30, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
            >
              <Icons.Truck className="w-12 h-12 text-primary/30" />
            </motion.div>
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
                  SEAMLESS
                </span>
                <span className="block text-white">LOGISTICS <span className="text-primary">SOLUTIONS</span></span>
              </h1>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.7}>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                From supply of mining and electrical materials to the movement of goods for homes and offices, Gyanelle ensures your cargo arrives safely, efficiently, and on time.
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
                      Schedule Logistics
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
              <h3 className="text-4xl font-bold text-accent mb-6">Comprehensive Logistics Services</h3>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.2}>
              <AnimatedLine className="w-24 mx-auto mb-6" delay={0.3} />
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.3}>
              <p className="text-gray-600 text-lg leading-relaxed">
                We provide end-to-end logistics solutions, from sourcing and supplying materials to moving goods for homes and offices. Our experienced team guarantees safe, timely, and cost-effective delivery every time.
              </p>
            </MotionDiv>
          </div>

          {/* Services Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

          {/* Benefits Section */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-200">
            {benefits.map((benefit, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="text-center p-6 rounded-lg bg-gray-50 hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-300">{benefit.label}</h4>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </motion.div>
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
            <h2 className="text-4xl font-bold text-accent">Ready to Move with Gyanelle?</h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.2}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
              Contact Gyanelle LLC today for reliable logistics and supply chain solutions. We ensure your cargo arrives safely and on time.
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
                    Schedule Logistics
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
