import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
    MotionDiv,
    StaggerContainer,
    StaggerItem,
    AnimatedLine,
    motion,
    fadeInUp,
    fadeInLeft,
    fadeInRight
} from "@/components/ui/motion";
const supplyChainImg = "/assets/supply-chain.webp";

export default function SupplyChainManagement() {
    const services = [
        {
            title: "Procurement",
            desc: "Strategic sourcing and vendor management to optimize costs and quality",
            features: ["Supplier identification", "Price negotiation", "Quality assurance", "Contract management"]
        },
        {
            title: "Logistics",
            desc: "End-to-end transportation and delivery coordination",
            features: ["Freight forwarding", "Customs clearance", "Last-mile delivery", "Real-time tracking"]
        },
        {
            title: "Warehousing",
            desc: "Secure storage and inventory management solutions",
            features: ["Inventory control", "Order fulfillment", "Cross-docking", "Temperature control"]
        },
        {
            title: "Consulting",
            desc: "Supply chain optimization and strategic planning",
            features: ["Process analysis", "Cost reduction", "Risk management", "Technology integration"]
        }
    ];

    const industries = [
        { name: "Mining", desc: "Remote site supply management" },
        { name: "Energy", desc: "Power generation equipment logistics" },
        { name: "Manufacturing", desc: "Just-in-time delivery systems" },
        { name: "Construction", desc: "Project-based material supply" },
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={supplyChainImg}
                        alt="Supply Chain Management"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                    <div className="absolute inset-0 bg-accent/85" />
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <Link href="/services/logistics">
                                <a className="inline-flex items-center gap-2 text-primary transition-colors text-sm font-medium mb-4">
                                    <Icons.ArrowRight className="w-4 h-4 rotate-180" /> Back to Logistics Services
                                </a>
                            </Link>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.3}>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="block" style={{
                                    WebkitTextStroke: '2px white',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    SUPPLY CHAIN
                                </span>
                                <span className="block text-white">MANAGEMENT <span className="text-primary">SOLUTIONS</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Optimized supply chain solutions to streamline your operations. From procurement to delivery, we manage the entire process with precision.
                            </p>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <MotionDiv variants={fadeInLeft}>
                            <div className="space-y-6">

                                <h3 className="text-4xl font-bold text-accent">Streamlined Supply Chain Excellence</h3>
                                <AnimatedLine className="w-20" />
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Gyanelle LLC provides integrated supply chain management solutions that help businesses reduce costs, improve efficiency, and maintain reliable operations. With experience supporting mining operations, industrial facilities, and commercial enterprises across multiple continents, we understand the complexities of global supply chains.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Our team combines deep industry knowledge with modern logistics technology to deliver visibility, control, and reliability throughout your supply chain. Whether you need end-to-end management or support for specific challenges, we tailor our solutions to your needs.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link href="/contact">
                                        <motion.a whileTap={{ scale: 0.95 }}>
                                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6">
                                                Request Quote
                                            </Button>
                                        </motion.a>
                                    </Link>
                                    <motion.a
                                        href="tel:+16147798886"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Icons.Phone className="w-5 h-5" /> Call Now
                                    </motion.a>
                                </div>
                            </div>
                        </MotionDiv>

                        <MotionDiv variants={fadeInRight} delay={0.2}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: 'Globe', label: "12+ Countries", desc: "Global network coverage" },
                                    { icon: 'Truck', label: "500+ Shipments", desc: "Successfully delivered" },
                                    { icon: 'Clock', label: "99% On-Time", desc: "Delivery rate" },
                                    { icon: 'Shield', label: "100% Secure", desc: "Cargo protection" },
                                ].map((stat, i) => {
                                    const IconComponent = Icons[stat.icon as keyof typeof Icons];
                                    return (
                                        <motion.div
                                            key={i}
                                            className="bg-gray-50 p-6 rounded-lg text-center"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            {IconComponent && <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />}
                                            <div className="font-bold text-accent text-lg">{stat.label}</div>
                                            <div className="text-gray-500 text-sm">{stat.desc}</div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">

                        <MotionDiv variants={fadeInUp} delay={0.1}>
                            <h3 className="text-4xl font-bold text-accent mb-4">Comprehensive Supply Chain Services</h3>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <AnimatedLine className="w-24 mx-auto" />
                        </MotionDiv>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <StaggerItem key={i}>
                                <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow">
                                    <CardContent className="p-8">
                                        <h4 className="text-xl font-bold text-accent mb-2">{service.title}</h4>
                                        <p className="text-gray-600 mb-4">{service.desc}</p>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Icons.Check className="w-4 h-4 text-primary shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">

                        <MotionDiv variants={fadeInUp} delay={0.1}>
                            <h3 className="text-3xl font-bold text-accent">Industries We Serve</h3>
                        </MotionDiv>
                    </div>
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industries.map((industry, i) => (
                            <StaggerItem key={i}>
                                <motion.div
                                    className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary/10 transition-colors"
                                    whileHover={{ y: -5 }}
                                >
                                    <h4 className="font-bold text-accent mb-1">{industry.name}</h4>
                                    <p className="text-gray-600 text-sm">{industry.desc}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Optimize Your Supply Chain</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Schedule a consultation to discuss how we can streamline your supply chain operations.
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
                                    Schedule Consultation
                                </Button>
                            </motion.a>
                        </Link>
                    </MotionDiv>
                </div>
            </section>
        </div>
    );
}
