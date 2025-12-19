import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  MotionDiv,
  StaggerContainer,
  StaggerItem,
  Floating,
  Shimmer,
  AnimatedLine,
  TiltCard,
  motion,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn
} from "@/components/ui/motion";
import { Marquee, ClientLogo } from "@/components/ui/marquee";
import { ProjectCard } from "@/components/ui/project-card";
import { ProcessStep } from "@/components/ui/process-step";
const heroBg = "/assets/modern_industrial_en_c3c5167b.jpg";
const electricalImg = "/assets/professional-electrical-engineerin.webp";
const cleaningImg = "/assets/commercial-cleaning-services.webp";
const logisticsImg = "/assets/logistics-warehouse-operations.webp";
const projectMiningImg = "/projects/mining.png";
const projectCleaningImg = "/projects/cleaning.png";
const projectLogisticsImg = "/projects/logistics.png";

// Client logos
const clientLogos = [
  { src: "/clients/CEF.jpeg", alt: "CEF" },
  { src: "/clients/Danakali-150x150.jpg", alt: "Danakali" },
  { src: "/clients/Dron-and-Dickson.png", alt: "Dron and Dickson" },
  { src: "/clients/Endeavour-Mining-150x150.jpg", alt: "Endeavour Mining" },
  { src: "/clients/Galaxy-150x150.jpg", alt: "Galaxy" },
  { src: "/clients/Goldfields-150x150.jpg", alt: "Goldfields" },
  { src: "/clients/Kibaran-Resources-150x150.jpg", alt: "Kibaran Resources" },
  { src: "/clients/Logo_RS_Group_02.png", alt: "RS Group" },
  { src: "/clients/Lycopodium-150x150.jpg", alt: "Lycopodium" },
  { src: "/clients/Nordgold-150x150.jpg", alt: "Nordgold" },
  { src: "/clients/Orezone-150x150.jpg", alt: "Orezone" },
  { src: "/clients/Perseus-Mining-150x150.jpg", alt: "Perseus Mining" },
  { src: "/clients/Roxgold-150x150.jpg", alt: "Roxgold" },
  { src: "/clients/TFC.png", alt: "TFC" },
  { src: "/clients/Teranga-Gold-Corporation-150x150.jpg", alt: "Teranga Gold" },
  { src: "/clients/West-African-Resources-150x150.jpg", alt: "West African Resources" },
  { src: "/clients/edmundson.jpeg", alt: "Edmundson" },
  { src: "/clients/caterpillar.webp", alt: "Caterpillar" },
  { src: "/clients/t-and-d.webp", alt: "T&D" },
];

export default function Home() {
  const services = [
    {
      title: "Electrical Services",
      desc: "Comprehensive electrical solutions for mining, industrial, and commercial sectors.",
      icon: Icons.Electrical,
      img: electricalImg,
      href: "/services/electrical",
      features: [
        { name: "Generator Installation", href: "/services/electrical/generator-installation" },
        { name: "HV Cable Termination", href: "/services/electrical/hv-cable-termination" },
        { name: "Transformer Installation", href: "/services/electrical/transformer-installation" },
        { name: "Safety Audits", href: "/services/electrical/safety-audits" }
      ]
    },
    {
      title: "Professional Cleaning",
      desc: "Specialized industrial and commercial cleaning services using eco-friendly technology.",
      icon: Icons.Cleaning,
      img: cleaningImg,
      href: "/services/cleaning",
      features: [
        { name: "Commercial Cleaning", href: "/services/cleaning/commercial" },
        { name: "Residential Cleaning", href: "/services/cleaning/residential" },
        { name: "Move-In/Out Cleaning", href: "/services/cleaning/move-in-out" }
      ]
    },
    {
      title: "Logistics Solutions",
      desc: "End-to-end supply chain management and specialized material procurement.",
      icon: Icons.Logistics,
      img: logisticsImg,
      href: "/services/logistics",
      features: [
        { name: "Materials Supply", href: "/services/logistics/materials-supply" },
        { name: "Relocation Services", href: "/services/logistics/relocation" },
        { name: "Supply Chain Management", href: "/services/logistics/supply-chain" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        {/* Grid Background with Parallax */}
        <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 h-[120%] -top-[10%]">
          {[
            { 
              src: "/assets/africa_gen.webp", 
              alt: "Electrical Services",
              delay: 0.1,
              yOffset: 0.1
            },
            { 
              src: "/assets/commercial-cleaning-services.webp", 
              alt: "Cleaning Services",
              delay: 0.2,
              yOffset: 0.15
            },
            { 
              src: "/assets/logistics-warehouse-operations.webp", 
              alt: "Logistics Solutions",
              delay: 0.3,
              yOffset: 0.2
            },
            { 
              src: "/assets/industrial-safety-equipment.webp", 
              alt: "Safety Equipment",
              delay: 0.4,
              yOffset: 0.1
            }
          ].map((img, i) => (
            <motion.div 
              key={i} 
              className="relative overflow-hidden h-full border-r border-white/10 last:border-r-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  delay: img.delay,
                  ease: [0.16, 1, 0.3, 1] 
                }
              }}
            >
              <motion.div 
                className="w-full h-full"
                initial={{ 
                  scale: 1.3,
                  y: 0
                }}
                animate={{ 
                  scale: 1,
                  y: 0,
                  transition: { 
                    duration: 1.2, 
                    delay: img.delay,
                    ease: [0.6, 0.01, 0, 0.9],
                    y: { 
                      type: "spring", 
                      mass: 0.3, 
                      stiffness: 100, 
                      damping: 20 
                    }
                  }
                }}
                whileInView={{
                  y: "-10%"
                }}
                viewport={{ once: false, margin: "-20% 0% 0% 0%" }}
                style={{
                  y: 0
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-accent/60 mix-blend-multiply"
                initial={{ opacity: 0.8 }}
                whileHover={{ 
                  opacity: 0.4,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
          
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-accent/40 via-accent/60 to-accent/90 z-10"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 1, 
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1] 
              }
            }}
          />
        </div>

        {/* Subtle floating elements */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <Floating key={i} duration={5 + i} delay={i * 0.3} y={10 + i * 2}>
              <motion.div
                className="w-2 h-2 bg-primary/30 rounded-full blur-sm"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.8 + (i * 0.1) }
                }}
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`
                }}
              />
            </Floating>
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <MotionDiv variants={fadeInUp} delay={0.4}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text stroke-text text-white" style={{
                  WebkitTextStroke: '2px white',
                  WebkitTextFillColor: 'transparent'
                }}>
                  INNOVATION
                </span>
                <span className="block text-white">WITH EXCELLENCE</span>
                <span className="block text-white">IN <span className="text-primary">EVERY PROJECT</span></span>
              </h1>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} delay={0.7}>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Gyanelle LLC delivers expert electrical consulting, professional cleaning, and seamless logistics solutions. Serving Westerville, Ohio and clients across the globe with precision and reliability.
              </p>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} delay={0.9}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="/contact">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-10 rounded-none shadow-lg shadow-primary/25">
                      Request a Quote
                    </Button>
                  </motion.a>
                </Link>
                <Link href="/services">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent text-lg h-14 px-10 rounded-none">
                      Explore Services
                    </Button>
                  </motion.a>
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-1000"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/10 transition-all">
            <Icons.ChevronDown className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12 relative z-20 -mt-10 mx-4 md:mx-auto md:w-full md:max-w-6xl shadow-xl rounded-sm overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20 relative z-10">
          {[
            { label: "Years Experience", value: "17+" },
            { label: "Projects Completed", value: "500+" },
            { label: "Satisfied Clients", value: "100+" },
            { label: "Countries Served", value: "12+" },
          ].map((stat, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="flex flex-col items-center justify-center p-6 text-center text-white cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider font-medium opacity-90">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <MotionDiv variants={fadeInUp} delay={0.1}>
              <h3 className="text-4xl font-bold text-accent mb-4">Three Pillars of Excellence</h3>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.2}>
              <AnimatedLine className="w-24 mx-auto mb-6" delay={0.4} />
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.3}>
              <p className="text-gray-600 text-lg">
                We specialize in three core areas that form the backbone of industrial and commercial operations. Each service is delivered with the same commitment to quality, safety, and client satisfaction.
              </p>
            </MotionDiv>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <StaggerItem key={i} className="h-full">
                <Link href={service.href}>
                  <TiltCard className="h-full">
                    <motion.div
                      className="h-full"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card className="group overflow-hidden border-0 shadow-lg rounded-sm hover:shadow-2xl transition-all duration-500 h-full cursor-pointer bg-white flex flex-col">
                        <div className="h-56 overflow-hidden relative">
                          <motion.div
                            className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors z-10"
                            whileHover={{ opacity: 0 }}
                          />
                          <motion.img
                            src={service.img}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                        <CardContent className="p-8 flex flex-col flex-grow">
                          <h4 className="text-2xl font-bold text-accent mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                          <p className="text-gray-600 mb-6">{service.desc}</p>
                          <ul className="space-y-3 mb-8">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-600 group/item">
                                <Icons.Check className="w-4 h-4 text-primary shrink-0" />
                                <Link href={feature.href}>
                                  <a className="hover:text-primary transition-colors">{feature.name}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between transition-colors">
                            <span className="text-primary font-bold">Learn More</span>
                            <Icons.ArrowRight className="w-5 h-5 text-primary transition-transform" />
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



      {/* Our Process Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <MotionDiv variants={fadeInUp} delay={0.1}>
              <h3 className="text-4xl font-bold text-accent mb-4">Our Proven Process</h3>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.2}>
              <AnimatedLine className="w-24 mx-auto mb-6" delay={0.4} />
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.3}>
              <p className="text-gray-600 text-lg">
                We follow a systematic approach to ensure every project is delivered with precision, safety, and excellence.
              </p>
            </MotionDiv>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <StaggerItem>
              <ProcessStep
                number="01"
                title="Consultation"
                description="We begin by understanding your unique requirements and project goals through in-depth consultation."
                icon={Icons.Users}
              />
            </StaggerItem>
            <StaggerItem>
              <ProcessStep
                number="02"
                title="Strategic Planning"
                description="Our experts develop a comprehensive plan, identifying potential challenges and optimizing resources."
                icon={Icons.Target}
              />
            </StaggerItem>
            <StaggerItem>
              <ProcessStep
                number="03"
                title="Expert Execution"
                description="Our skilled team executes the project with precision, adhering to the highest safety and quality standards."
                icon={Icons.Zap}
              />
            </StaggerItem>
            <StaggerItem>
              <ProcessStep
                number="04"
                title="Ongoing Support"
                description="We provide continuous support and maintenance to ensure long-term success and client satisfaction."
                icon={Icons.Shield}
                isLast
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Icons.Globe className="w-full h-full text-white" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionDiv variants={fadeInLeft}>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Global Reach,<br />Local Expertise</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                With operations spanning across 12+ countries, Gyanelle LLC brings world-class standards to every local project. Our international experience allows us to tackle complex challenges with a global perspective.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">12+</div>
                  <div className="text-sm uppercase tracking-wider">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm uppercase tracking-wider">Continents</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm uppercase tracking-wider">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm uppercase tracking-wider">Reliability</div>
                </div>
              </div>
            </MotionDiv>
            <MotionDiv variants={fadeInRight} className="relative">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10">
                <h4 className="text-2xl font-bold mb-6">Regional Focus</h4>
                <ul className="space-y-4">
                  {[
                    "North America (HQ: Ohio, USA)",
                    "Africa (Mining & Industrial hubs)",
                    "Europe (Logistics & Supply Chain)",
                    "Australia (Electrical Engineering)"
                  ].map((region, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Icons.Check className="w-5 h-5 text-primary" />
                      {region}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <MotionDiv variants={fadeInUp} delay={0.1}>
              <h3 className="text-4xl font-bold text-accent mb-4">What Our Clients Say</h3>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.2}>
              <AnimatedLine className="w-24 mx-auto mb-6" delay={0.4} />
            </MotionDiv>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Gyanelle's electrical expertise was instrumental in our facility upgrade. Their attention to detail and safety standards are unmatched.",
                author: "James Wilson",
                position: "Operations Manager, Global Mining Co."
              },
              {
                quote: "The professional cleaning services provided by Gyanelle have transformed our workspace. They are reliable, thorough, and eco-conscious.",
                author: "Sarah Chen",
                position: "Facility Director, Tech Park"
              },
              {
                quote: "Their logistics solutions streamlined our international supply chain, saving us significant time and resources. A truly professional partner.",
                author: "Michael Brown",
                position: "Supply Chain Head, Logistics Corp."
              }
            ].map((testimonial, i) => (
              <StaggerItem key={i}>
                <Card className="p-8 h-full flex flex-col bg-gray-50 border-0 shadow-sm hover:shadow-md transition-all">
                  <Icons.Quote className="w-10 h-10 text-primary/20 mb-6" />
                  <p className="text-gray-600 italic mb-8 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <h5 className="font-bold text-accent">{testimonial.author}</h5>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Clients Marquee Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MotionDiv variants={fadeInUp} delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4">Trusted by Industry Leaders Worldwide</h3>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.2}>
              <AnimatedLine className="w-24 mx-auto mb-6" delay={0.3} />
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our proven track record speaks for itself. We've partnered with leading mining, energy, and industrial companies across Africa, Europe, and North America.
              </p>
            </MotionDiv>
          </div>
        </div>

        {/* Double Marquee with Opposite Directions */}
        <div className="border-y border-gray-100 py-8 bg-white space-y-8">
          {/* First Row - Left to Right */}
          <Marquee speed="slow" pauseOnHover direction="left">
            {clientLogos.slice(0, Math.ceil(clientLogos.length / 2)).map((client, i) => (
              <ClientLogo 
                key={`top-${i}`} 
                src={client.src} 
                alt={client.alt} 
                className="!h-36 !w-64"
              />
            ))}
          </Marquee>
          
          {/* Second Row - Right to Left */}
          <Marquee speed="slow" pauseOnHover direction="right">
            {clientLogos.slice(Math.ceil(clientLogos.length / 2)).map((client, i) => (
              <ClientLogo 
                key={`bottom-${i}`} 
                src={client.src} 
                alt={client.alt} 
                className="!h-36 !w-64"
              />
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 transform translate-x-20"
          initial={{ x: "100%" }}
          whileInView={{ x: 80 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <MotionDiv variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-accent">Ready to Start Your Next Project?</h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.2}>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-8">
              Get in touch today for a free consultation. Our team is ready to discuss your requirements and deliver solutions tailored to your needs.
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-10 rounded-none font-bold shadow-lg shadow-primary/20">
                    Request Free Quote
                  </Button>
                </motion.a>
              </Link>
              <motion.a
                href="tel:+16147798886"
                className="inline-flex items-center gap-2 text-xl font-bold text-accent hover:text-primary transition-colors px-8 py-4"
                whileHover={{ scale: 1.05 }}
              >
                <Icons.Phone className="w-6 h-6 text-primary" />
                +1 (614) 779-8886
              </motion.a>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
