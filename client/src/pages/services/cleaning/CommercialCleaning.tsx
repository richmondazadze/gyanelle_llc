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
const commercialImg = "/assets/commercial-cleaning.webp";

export default function CommercialCleaning() {
    const services = [
        "Daily office cleaning and maintenance",
        "Restroom sanitization and restocking",
        "Floor care (vacuuming, mopping, buffing)",
        "Window and glass cleaning (interior)",
        "Trash removal and recycling",
        "Kitchen and break room cleaning",
        "Dusting and surface disinfection",
        "Lobby and reception area maintenance"
    ];

    const industries = [
        { name: "Corporate Offices", desc: "Executive suites, open floor plans, conference rooms" },
        { name: "Medical Facilities", desc: "Clinics, dental offices, medical buildings" },
        { name: "Retail Spaces", desc: "Storefronts, showrooms, shopping centers" },
        { name: "Educational", desc: "Schools, training centers, universities" },
        { name: "Financial", desc: "Banks, credit unions, financial offices" },
        { name: "Industrial", desc: "Warehouses, manufacturing facilities" },
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={commercialImg}
                        alt="Commercial Cleaning"
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
                            <Link href="/services/cleaning">
                                <a className="inline-flex items-center gap-2 text-primary transition-colors text-sm font-medium mb-4">
                                    <Icons.ArrowRight className="w-4 h-4 rotate-180" /> Back to Cleaning Services
                                </a>
                            </Link>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.3}>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="block" style={{
                                    WebkitTextStroke: '2px white',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    COMMERCIAL
                                </span>
                                <span className="block text-white">OFFICE <span className="text-primary">CLEANING</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Professional daily and periodic cleaning services for offices, commercial spaces, and business facilities. Create a healthier, more productive workplace.
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

                                <h3 className="text-4xl font-bold text-accent">A Cleaner Workplace, A Better Business</h3>
                                <AnimatedLine className="w-20" />
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    First impressions matter. Gyanelle LLC provides comprehensive commercial cleaning services that help businesses maintain pristine, healthy environments for employees and visitors alike. Our trained teams deliver consistent, reliable cleaning that reflects your professional standards.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We offer flexible scheduling options including daily, weekly, and monthly service plans. All cleaning is performed using eco-friendly products that are effective yet safe for people and the environment. Our staff is fully trained, background-checked, bonded, and insured.
                                </p>
                                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                                    <Icons.Leaf className="w-8 h-8 text-primary mb-4" />
                                    <div>
                                        <h4 className="font-bold text-accent">100% Eco-Friendly</h4>
                                        <p className="text-sm text-gray-600">All products are non-toxic, biodegradable, and EPA-approved</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link href="/contact">
                                        <motion.a whileTap={{ scale: 0.95 }}>
                                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6">
                                                Get Free Quote
                                            </Button>
                                        </motion.a>
                                    </Link>
                                    <motion.a
                                        href="tel:+16147798886"
                                        className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent hover:bg-accent transition-colors font-semibold"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Icons.Phone className="w-5 h-5" /> Call Now
                                    </motion.a>
                                </div>
                            </div>
                        </MotionDiv>

                        <MotionDiv variants={fadeInRight} delay={0.2}>
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <h4 className="font-bold text-accent text-xl mb-6 flex items-center gap-2">
                                    <Icons.Calendar className="w-8 h-8 text-primary mb-4" />
                                    Our Commercial Services
                                </h4>
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

            {/* Industries */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">

                        <MotionDiv variants={fadeInUp} delay={0.1}>
                            <h3 className="text-4xl font-bold text-accent mb-4">Commercial Spaces We Clean</h3>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <AnimatedLine className="w-24 mx-auto" />
                        </MotionDiv>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((industry, i) => (
                            <StaggerItem key={i}>
                                <motion.div
                                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all h-full"
                                    whileHover={{ y: -5 }}
                                >
                                    <Icons.Building className="w-8 h-8 text-primary mb-4" />
                                    <h4 className="font-bold text-accent mb-2">{industry.name}</h4>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Ready for a Cleaner Workplace?</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Contact us today for a free walkthrough and customized cleaning proposal for your business.
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
