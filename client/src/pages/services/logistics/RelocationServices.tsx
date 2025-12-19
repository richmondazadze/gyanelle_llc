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
const relocationImg = "/assets/relocation.webp";

export default function RelocationServices() {
    const residentialServices = [
        "Local and long-distance moving",
        "Packing and unpacking services",
        "Furniture disassembly and assembly",
        "Specialty item handling (pianos, antiques)",
        "Temporary storage solutions",
        "Same-day moves available"
    ];

    const commercialServices = [
        "Office relocations",
        "IT equipment moving and setup",
        "Furniture and asset management",
        "Minimal business disruption planning",
        "Weekend and after-hours moves",
        "Decommissioning services"
    ];

    const process = [
        { step: "1", title: "Consultation", desc: "Free on-site assessment to understand your needs and provide accurate quotes" },
        { step: "2", title: "Planning", desc: "Detailed moving plan with timeline, resource allocation, and logistics coordination" },
        { step: "3", title: "Packing", desc: "Professional packing using quality materials to protect your belongings" },
        { step: "4", title: "Moving", desc: "Careful loading, transportation, and unloading by trained professionals" },
        { step: "5", title: "Setup", desc: "Unpacking, furniture assembly, and placement as per your instructions" },
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={relocationImg}
                        alt="Relocation Services"
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
                                    HOME & OFFICE
                                </span>
                                <span className="block text-white">RELOCATION <span className="text-primary">SERVICES</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Professional home and office relocation services. We handle your belongings with care and ensure a smooth transition to your new location.
                            </p>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">

                        <MotionDiv variants={fadeInUp} delay={0.1}>
                            <h3 className="text-4xl font-bold text-accent mt-4 mb-6">Moving Made Easier</h3>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <AnimatedLine className="w-20 mx-auto" />
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.3}>
                            <p className="text-gray-600 text-lg leading-relaxed mt-6">
                                Moving to a new home is exciting, but it can also be stressful. Our Relocation Home Service is designed to make your move smooth, safe, and stress-free. From carefully packing and transporting your belongings to setting them up in your new home, we handle every detail with care and professionalism.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mt-4">
                                Whether you're moving across town or to a new city, our team ensures your furniture, appliances, and personal items are relocated securely and on time.
                            </p>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <MotionDiv variants={fadeInLeft}>
                            <Card className="border-0 shadow-lg h-full">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Icons.Home className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-accent text-xl">Residential Moving</h4>
                                            <p className="text-sm text-gray-500">Home relocations</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        Whether you're moving across town or across the country, our residential moving services make the transition smooth and stress-free. We handle everything from packing to setup in your new home.
                                    </p>
                                    <ul className="space-y-3">
                                        {residentialServices.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-600">
                                                <Icons.Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </MotionDiv>

                        <MotionDiv variants={fadeInRight} delay={0.2}>
                            <Card className="border-0 shadow-lg h-full border-t-4 border-t-primary">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center">
                                            <Icons.Building className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-accent text-xl">Commercial Moving</h4>
                                            <p className="text-sm text-gray-500">Office & business relocations</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        Minimize business disruption with our professional commercial moving services. We plan and execute office relocations efficiently, often completing moves over weekends to keep your business running.
                                    </p>
                                    <ul className="space-y-3">
                                        {commercialServices.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-600">
                                                <Icons.Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </MotionDiv>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact">
                            <motion.a whileTap={{ scale: 0.95 }}>
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6">
                                    Request Quote
                                </Button>
                            </motion.a>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">

                        <MotionDiv variants={fadeInUp} delay={0.1}>
                            <h3 className="text-4xl font-bold text-accent mb-4">How We Work</h3>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <AnimatedLine className="w-24 mx-auto" />
                        </MotionDiv>
                    </div>

                    <StaggerContainer className="max-w-4xl mx-auto">
                        {process.map((item, i) => (
                            <StaggerItem key={i}>
                                <motion.div
                                    className="flex items-start gap-6 mb-8 last:mb-0"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                                        {item.step}
                                    </div>
                                    <div className="flex-1 pb-8 border-b border-gray-200 last:border-0">
                                        <h4 className="font-bold text-accent text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Planning a Move?</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Get a free, no-obligation quote for your residential or commercial relocation today.
                        </p>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
