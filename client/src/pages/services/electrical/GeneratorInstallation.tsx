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
const generatorImg = "/assets/gen_installation.webp";

export default function GeneratorInstallation() {
    const features = [
        "Automatic Transfer Switch (ATS) installation and configuration",
        "Load bank testing and commissioning",
        "Fuel system installation and connections",
        "Exhaust system design and installation",
        "Sound attenuation solutions",
        "Remote monitoring system setup",
        "Preventive maintenance programs",
        "24/7 emergency repair services"
    ];

    const specifications = [
        { label: "Power Range", value: "10kVA - 2000kVA" },
        { label: "Fuel Types", value: "Diesel, Natural Gas, Propane" },
        { label: "Applications", value: "Commercial, Industrial, Mining" },
        { label: "Response Time", value: "< 10 seconds transfer" },
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={generatorImg}
                        alt="Generator Installation"
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
                            <Link href="/services/electrical">
                                <a className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium mb-4">
                                    <Icons.ArrowRight className="w-4 h-4 rotate-180" /> Back to Electrical Services
                                </a>
                            </Link>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.3}>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="block" style={{
                                    WebkitTextStroke: '2px white',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    GENERATOR
                                </span>
                                <span className="block text-white">INSTALLATION & <span className="text-primary">MAINTENANCE</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Reliable backup power solutions for commercial, industrial, and mining operations. From installation to ongoing maintenance, we ensure your power never fails.
                            </p>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <MotionDiv variants={fadeInLeft}>
                            <div className="space-y-6">

                                <h3 className="text-4xl font-bold text-accent">Uninterrupted Power When It Matters Most</h3>
                                <AnimatedLine className="w-20" />
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Gyanelle LLC specializes in the installation, commissioning, and maintenance of standby and prime power generators for various applications. Our certified technicians bring over 17 years of experience in delivering reliable power solutions across mining sites, industrial facilities, commercial buildings, and critical infrastructure.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We work with leading generator manufacturers including Caterpillar, Cummins, Kohler, and Perkins to provide equipment that meets your specific power requirements and budget. Our comprehensive service includes site assessment, equipment selection, installation, testing, and ongoing preventive maintenance programs.
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
                            <div className="grid grid-cols-2 gap-4">
                                {specifications.map((spec, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                                        <div className="text-lg font-bold text-accent">{spec.value}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">

                        <MotionDiv variants={fadeInUp} delay={0.1}>
                            <h3 className="text-4xl font-bold text-accent mb-4">Complete Generator Solutions</h3>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <AnimatedLine className="w-24 mx-auto" />
                        </MotionDiv>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <StaggerItem key={i}>
                                <motion.div
                                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all h-full"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-start gap-3">
                                        <Icons.Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <p className="text-accent font-medium">{feature}</p>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <MotionDiv variants={fadeInUp}>
                                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Why Gyanelle</h2>
                            </MotionDiv>
                            <MotionDiv variants={fadeInUp} delay={0.1}>
                                <h3 className="text-4xl font-bold text-accent">The Gyanelle Advantage</h3>
                            </MotionDiv>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Expert Installation", desc: "Certified technicians with 17+ years of experience in generator systems" },
                                { title: "Safety Compliant", desc: "All installations meet NEC, OSHA, and local code requirements" },
                                { title: "24/7 Support", desc: "Round-the-clock emergency service and technical support" },
                            ].map((item, i) => (
                                <StaggerItem key={i}>
                                    <Card className="border-0 shadow-lg text-center h-full">
                                        <CardContent className="p-8">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                                {i === 0 && <Icons.Zap className="w-7 h-7 text-primary" />}
                                                {i === 1 && <Icons.Shield className="w-7 h-7 text-primary" />}
                                                {i === 2 && <Icons.Clock className="w-7 h-7 text-primary" />}
                                                {i === 3 && <Icons.Wrench className="w-7 h-7 text-primary" />}
                                            </div>
                                            <h4 className="text-xl font-bold text-accent mb-2">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </CardContent>
                                    </Card>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Ready to Ensure Reliable Backup Power?</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Contact Gyanelle LLC today for a free consultation and quote on your generator installation project.
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
                                    Request Free Quote
                                </Button>
                            </motion.a>
                        </Link>
                    </MotionDiv>
                </div>
            </section>
        </div>
    );
}
