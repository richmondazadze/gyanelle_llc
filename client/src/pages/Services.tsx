import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  MotionDiv,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  AnimatedLine,
  TiltCard,
  motion,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn
} from "@/components/ui/motion";
const electricalImg = "/assets/professional-electrical-engineerin.webp";
const cleaningImg = "/assets/commercial-cleaning-services.webp";
const logisticsImg = "/assets/logistics-warehouse-operations.webp";

export default function Services() {
  const services = [
    {
      id: "electrical",
      title: "Electrical Consulting",
      icon: Icons.Electrical,
      image: electricalImg,
      href: "/services/electrical",
      color: "from-yellow-400 to-orange-500",
      description: "From generator installation to HV Cable Termination and Installation, Gyanelle LLC delivers expert electrical solutions for homes, businesses, and industrial projects. Our team specializes in domestic and commercial wiring, transformer installation, field works, and skilled labor hiring—ensuring safety, reliability, and compliance at every step.",
      features: [
        { label: "Generator Installation", href: "/services/electrical/generator-installation" },
        { label: "HV Cable Termination and Installation", href: "/services/electrical/hv-cable-termination" },
        { label: "Domestic & Commercial Wiring", href: "/services/electrical" },
        { label: "Transformer Installation & Field Works", href: "/services/electrical/transformer-installation" },
        { label: "Skilled Labor Hiring", href: "/services/electrical" }
      ]
    },
    {
      id: "cleaning",
      title: "Cleaning Services",
      icon: Icons.Cleaning,
      image: cleaningImg,
      href: "/services/cleaning",
      color: "from-blue-400 to-cyan-500",
      description: "Comprehensive cleaning services for commercial spaces, ensuring pristine environments that reflect your brand excellence. We offer flexible scheduling for homes and offices, deep cleaning for move-in/move-out, and use only safe products for your family and pets.",
      features: [
        { label: "Eco-Friendly Home Cleaning", href: "/services/cleaning/residential" },
        { label: "Flexible Office Cleaning", href: "/services/cleaning/commercial" },
        { label: "Deep Cleaning & Move-In/Out", href: "/services/cleaning/move-in-out" },
        { label: "Safe Products for Family & Pets", href: "/services/cleaning" }
      ]
    },
    {
      id: "logistics",
      title: "Logistics Solutions",
      icon: Icons.Logistics,
      image: logisticsImg,
      href: "/services/logistics",
      color: "from-green-400 to-emerald-500",
      description: "Our logistics services are designed to streamline your supply chain and material handling needs. From mining and electrical materials to home and office goods movement, we provide efficient, reliable transportation and supply solutions with route optimization and real-time tracking.",
      features: [
        { label: "Supply of Mining & Electrical Materials", href: "/services/logistics/materials-supply" },
        { label: "Home & Office Goods Movement", href: "/services/logistics/relocation" },
        { label: "Route Optimization & Tracking", href: "/services/logistics/supply-chain" }
      ]
    }
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={electricalImg}
            alt="Gyanelle Services"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-accent/85 mix-blend-multiply" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-accent/50 via-accent/70 to-accent/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <MotionDiv variants={fadeInUp} delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block" style={{
                WebkitTextStroke: '2px white',
                WebkitTextFillColor: 'transparent'
              }}>
                SOLUTIONS
              </span>
              <span className="block text-white">DESIGNED FOR <span className="text-primary">SUCCESS</span></span>
            </h1>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.3}>
            <AnimatedLine className="w-24 mx-auto mb-6" delay={0.4} />
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions in three essential areas—Electrical Consulting, Cleaning Services, and Logistics. Each service designed with precision and care.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Services List */}
      <div className="container mx-auto px-4 py-24 space-y-32">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex-1 space-y-6">

              <MotionDiv variants={index % 2 === 0 ? fadeInLeft : fadeInRight} delay={0.1}>
                <h2 className="text-4xl font-bold text-accent">{service.title}</h2>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} delay={0.2}>
                <AnimatedLine className="w-20" delay={0.3} />
              </MotionDiv>

              <MotionDiv variants={fadeInUp} delay={0.3}>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} delay={0.4}>
                <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                  <h3 className="font-bold text-accent mb-4">Key Features:</h3>
                  <StaggerContainer>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <StaggerItem key={i}>
                          <Link href={feature.href}>
                            <motion.li
                              className="flex items-start gap-2 text-gray-700 group cursor-pointer"
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Icons.Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              </motion.div>
                              <span className="group-hover:text-primary transition-colors">{feature.label}</span>
                            </motion.li>
                          </Link>
                        </StaggerItem>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} delay={0.5}>
                <Link href={service.href}>
                  <motion.a
                    className="inline-flex"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 py-5 group">
                      Learn More
                      <motion.span
                        className="ml-2 inline-block"
                      >
                        <Icons.ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Button>
                  </motion.a>
                </Link>
              </MotionDiv>
            </div>

            <div className="flex-1 w-full">
              <TiltCard>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`absolute top-4 ${index % 2 === 1 ? 'left-4' : 'right-4'} w-full h-full border-2 border-primary/30 z-0`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{
                      x: index % 2 === 1 ? -5 : 5,
                      y: 5
                    }}
                  />
                  <div className="relative z-10 overflow-hidden rounded-sm shadow-xl">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-accent/20"
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </TiltCard>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <MotionDiv variants={scaleIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Ready to Get Started?</h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.2}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and discover how we can help you achieve your goals.
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.4}>
            <Link href="/contact">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-10 rounded-none font-bold shadow-lg shadow-primary/20">
                  Contact Us Today
                </Button>
              </motion.a>
            </Link>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
