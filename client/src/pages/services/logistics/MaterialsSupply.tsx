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
const materialsImg = "/assets/materials-supply.webp";

export default function MaterialsSupply() {
    const materials = [
        {
            category: "Electrical Materials",
            items: [
                "Power cables (LV, HV)",
                "Transformers and switchgear (HV)",
                "Circuit breakers and fuses",
                "Conduit and cable trays",
                "Lighting fixtures and controls",
                "Generators and UPS systems"
            ]
        },
        {
            category: "Mining Equipment",
            items: [
                "Drilling consumables",
                "Safety equipment and PPE",
                "Conveyor components",
                "Pumps and valves",
                "Ventilation equipment",
                "Ground support materials"
            ]
        },
        {
            category: "Industrial Supplies",
            items: [
                "Tools and hardware",
                "Fasteners and fittings",
                "Lubricants and chemicals",
                "Welding supplies",
                "Instrumentation equipment",
                "Safety signage and barriers"
            ]
        }
    ];

    const benefits = [
        { icon: Icons.Shield, title: "Quality Assured", desc: "All materials sourced from authorized manufacturers and distributors" },
        { icon: Icons.Clock, title: "Fast Delivery", desc: "Expedited shipping options for urgent project requirements" },
        { icon: Icons.Package, title: "Bulk Pricing", desc: "Competitive rates for large-volume orders" },
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={materialsImg}
                        alt="Materials Supply"
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
                                    MATERIALS
                                </span>
                                <span className="block text-white">SUPPLY & <span className="text-primary">PROCUREMENT</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Reliable supply of mining, electrical, and industrial materials. Sourced from trusted manufacturers, delivered on time, every time.
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

                                <h3 className="text-4xl font-bold text-accent">Your Trusted Supply Partner</h3>
                                <AnimatedLine className="w-20" />
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Gyanelle LLC leverages over 17 years of industry relationships to source and deliver high-quality materials for mining, electrical, and industrial projects. Our established network of manufacturers and distributors across Africa, Europe, and North America ensures competitive pricing and reliable supply chains.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We handle everything from procurement and logistics to customs clearance and last-mile delivery. Whether you need a single piece of specialized equipment or bulk materials for a major project, we have the expertise and connections to deliver.
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
                                        className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-white transition-colors font-semibold"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Icons.Phone className="w-5 h-5" /> Call Now
                                    </motion.a>
                                </div>
                            </div>
                        </MotionDiv>

                        <MotionDiv variants={fadeInRight} delay={0.2}>
                            <StaggerContainer className="grid grid-cols-1 gap-4">
                                {benefits.map((benefit, i) => (
                                    <StaggerItem key={i}>
                                        <motion.div
                                            className="bg-gray-50 p-6 rounded-lg flex items-start gap-4"
                                            whileHover={{ x: 5 }}
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                {i === 0 && <Icons.Shield className="w-6 h-6 text-primary" />}
                                                {i === 1 && <Icons.Clock className="w-6 h-6 text-primary" />}
                                                {i === 2 && <Icons.Package className="w-6 h-6 text-primary" />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-accent mb-1">{benefit.title}</h4>
                                                <p className="text-gray-600 text-sm">{benefit.desc}</p>
                                            </div>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Materials Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">

                        <MotionDiv variants={fadeInUp} delay={0.1}>
                            <h3 className="text-4xl font-bold text-accent mb-4">Materials Categories</h3>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <AnimatedLine className="w-24 mx-auto" />
                        </MotionDiv>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {materials.map((category, i) => (
                            <StaggerItem key={i}>
                                <Card className="border-0 shadow-lg h-full">
                                    <CardContent className="p-8">
                                        <Icons.Package className="w-10 h-10 text-primary mb-4" />
                                        <h4 className="text-xl font-bold text-accent mb-4">{category.category}</h4>
                                        <ul className="space-y-3">
                                            {category.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-600">
                                                    <Icons.Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                                                    <span>{item}</span>
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Need Materials for Your Project?</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Contact us with your requirements and let our procurement team find the best solutions for your needs.
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
                                    Request Quote
                                </Button>
                            </motion.a>
                        </Link>
                    </MotionDiv>
                </div>
            </section>
        </div>
    );
}
