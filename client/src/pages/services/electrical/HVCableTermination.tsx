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
const cableImg = "/assets/cable_termination.webp";

export default function HVCableTermination() {
    const services = [
        {
            title: "Cable Termination",
            items: [
                "Heat shrink terminations up to 36kV",
                "Cold shrink terminations",
                "Slip-on stress cones",
                "Outdoor and indoor terminations",
                "Separable connectors"
            ]
        },
        {
            title: "Cable Jointing",
            items: [
                "Straight joints for all cable types",
                "Transition joints (PILC to XLPE)",
                "Branch joints and tees",
                "Pre-molded and heat shrink joints",
                "Submarine cable repairs"
            ]
        },
        {
            title: "Cable Installation",
            items: [
                "Trench and duct installation",
                "Direct burial cables",
                "Cable pulling and laying",
                "Cable tray and ladder systems",
                "Fiber optic integration"
            ]
        }
    ];

    const voltageRanges = [
        { range: "High Voltage", voltage: "36kV - 150kV", applications: "Transmission, substations, heavy industry" },
        { range: "Extra High Voltage", voltage: "150kV+", applications: "National grid, large power stations" },
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={cableImg}
                        alt="HV Cable Termination"
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
                                <a className="inline-flex items-center gap-2 text-primary transition-colors text-sm font-medium mb-4">
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
                                    HV CABLE
                                </span>
                                <span className="block text-white">TERMINATION & <span className="text-primary">JOINTING</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Specialized high-voltage cable termination and jointing services for mining and industrial power infrastructure.
                            </p>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Safety Notice */}
            <section className="bg-amber-50 border-y border-amber-200 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-4 text-amber-800">
                        <Icons.Alert className="w-6 h-6 shrink-0" />
                        <p className="text-sm md:text-base font-medium">
                            All HV work is performed by certified cable jointers with strict adherence to safety protocols, isolation procedures, and permit-to-work systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <MotionDiv variants={fadeInLeft}>
                            <div className="space-y-6">

                                <h3 className="text-4xl font-bold text-accent">Expert High Voltage Cable Services</h3>
                                <AnimatedLine className="w-20" />
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Gyanelle LLC provides comprehensive high voltage cable termination, jointing, and installation services. Our certified cable jointers have extensive experience working on transmission networks, substations, and industrial facilities across multiple countries.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We utilize industry-leading materials from manufacturers like 3M, Raychem, and Prysmian to ensure long-lasting, reliable connections. Our team is trained in the latest techniques and follows strict quality assurance procedures for every joint and termination.
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
                            <div className="space-y-4">
                                {voltageRanges.map((range, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-accent">{range.range}</h4>
                                            <span className="text-primary font-semibold">{range.voltage}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm">{range.applications}</p>
                                    </motion.div>
                                ))}
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
                            <h3 className="text-4xl font-bold text-accent mb-4">Complete Cable Solutions</h3>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <AnimatedLine className="w-24 mx-auto" />
                        </MotionDiv>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <StaggerItem key={i}>
                                <Card className="border-0 shadow-lg h-full">
                                    <CardContent className="p-8">
                                        <Icons.Cable className="w-10 h-10 text-primary mb-4" />
                                        <h4 className="text-xl font-bold text-accent mb-4">{service.title}</h4>
                                        <ul className="space-y-3">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-600">
                                                    <Icons.Check className="w-4 h-4 text-primary shrink-0" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Need Professional Cable Services?</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Contact our certified cable jointing team for termination, jointing, and installation services.
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
                                    Get Free Quote
                                </Button>
                            </motion.a>
                        </Link>
                    </MotionDiv>
                </div>
            </section>
        </div>
    );
}
