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
const transformerImg = "/assets/transformer.webp";

export default function TransformerInstallation() {
    const services = [
        "Distribution transformer installation (11kV/33kV)",
        "Power transformer installation up to 150MVA",
        "Outdoor and indoor transformer setups",
        "Oil-filled and dry-type transformers",
        "Transformer relocation and reinstallation",
        "Foundation and mounting systems",
        "Protection relay configuration",
        "Commissioning and testing"
    ];

    const testingServices = [
        { title: "Winding Resistance", desc: "Measurement of DC resistance of windings" },
        { title: "Turns Ratio Test", desc: "Verification of voltage ratio between windings" },
        { title: "Insulation Resistance", desc: "Megger testing of winding insulation" },
        { title: "Oil Dielectric Test", desc: "Breakdown voltage testing of transformer oil" },
        { title: "Dissolved Gas Analysis", desc: "DGA testing to detect internal faults" },
        { title: "Tan Delta Test", desc: "Insulation power factor measurement" },
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={transformerImg}
                        alt="Transformer Installation"
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
                                    TRANSFORMER
                                </span>
                                <span className="block text-white">INSTALLATION & <span className="text-primary">TESTING</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Expert installation, testing, and commissioning of power and distribution transformers for industrial and utility applications.
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

                                <h3 className="text-4xl font-bold text-accent">Expert Transformer Services</h3>
                                <AnimatedLine className="w-20" />
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Gyanelle LLC provides comprehensive transformer installation and field services for utilities, mining operations, industrial facilities, and commercial developments. Our experienced team handles everything from site preparation to final commissioning.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We work with all major transformer types including oil-filled distribution transformers, dry-type transformers, pad-mounted units, and large power transformers. Our services extend to preventive maintenance, oil processing, and emergency repairs.
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
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <h4 className="font-bold text-accent text-xl mb-6">Installation Services</h4>
                                <ul className="space-y-4">
                                    {services.map((service, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-3"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <Icons.Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{service}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Testing Services */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">

                        <MotionDiv variants={fadeInUp} delay={0.1}>
                            <h3 className="text-4xl font-bold text-accent mb-4">Comprehensive Testing Services</h3>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <AnimatedLine className="w-24 mx-auto" />
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.3}>
                            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
                                We perform complete testing and commissioning procedures to ensure your transformer operates safely and efficiently from day one.
                            </p>
                        </MotionDiv>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testingServices.map((test, i) => (
                            <StaggerItem key={i}>
                                <motion.div
                                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all h-full border-t-4 border-primary"
                                    whileHover={{ y: -5 }}
                                >
                                    <Icons.Gauge className="w-8 h-8 text-primary mb-4" />
                                    <h4 className="font-bold text-accent mb-2">{test.title}</h4>
                                    <p className="text-gray-600 text-sm">{test.desc}</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Need Transformer Services?</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            From installation to testing and maintenance, our team delivers reliable transformer solutions.
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
