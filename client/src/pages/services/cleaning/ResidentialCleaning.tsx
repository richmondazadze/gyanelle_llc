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
const residentialImg = "/assets/residential-cleaning.webp";

export default function ResidentialCleaning() {
    const standardCleaning = [
        "Dusting all accessible surfaces",
        "Vacuuming carpets and rugs",
        "Mopping hard floors",
        "Bathroom cleaning and sanitization",
        "Kitchen cleaning (appliance exteriors, counters)",
        "Making beds (upon request)",
        "Trash removal",
        "General tidying"
    ];

    const deepCleaning = [
        "Everything in standard cleaning plus:",
        "Inside oven and refrigerator",
        "Inside cabinets and drawers",
        "Baseboards and door frames",
        "Light fixtures and ceiling fans",
        "Window sills and tracks",
        "Behind and under furniture",
        "Detailed bathroom deep clean"
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={residentialImg}
                        alt="Residential Cleaning"
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
                                    RESIDENTIAL
                                </span>
                                <span className="block text-white">DEEP <span className="text-primary">CLEANING</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Professional house cleaning services tailored to your needs. Enjoy a cleaner, healthier home environment for you and your family.
                            </p>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <MotionDiv variants={fadeInLeft}>
                            <div className="space-y-6">

                                <h3 className="text-4xl font-bold text-accent">Your Home, Our Priority</h3>
                                <AnimatedLine className="w-20" />
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    A clean home is a healthy home. Gyanelle LLC's residential cleaning services are designed to give you back your time while ensuring your living space is spotless, sanitized, and welcoming. Our professional cleaners treat your home with the same care and respect you would.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We offer flexible scheduling including one-time deep cleans, weekly, bi-weekly, and monthly maintenance plans. Every cleaning is performed using eco-friendly, pet-safe, and child-safe products. Our team members are trained professionals who are background-checked and fully insured.
                                </p>
                                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                                    <Icons.Leaf className="w-8 h-8 text-green-600" />
                                    <div>
                                        <h4 className="font-bold text-accent">Safe for Your Family</h4>
                                        <p className="text-sm text-gray-600">Non-toxic, pet-friendly, and child-safe cleaning products</p>
                                    </div>
                                </div>
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
                            <div className="space-y-6">
                                <Card className="border-0 shadow-lg">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Icons.Home className="w-8 h-8 text-primary" />
                                            <h4 className="font-bold text-accent text-xl">Standard Cleaning</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {standardCleaning.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                    <Icons.Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-lg border-t-4 border-t-primary">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Icons.Sparkles className="w-8 h-8 text-primary" />
                                            <h4 className="font-bold text-accent text-xl">Deep Cleaning</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {deepCleaning.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                    <Icons.Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Ready for a Sparkling Clean Home?</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Book your residential cleaning today and enjoy a cleaner, healthier home without the hassle.
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
                                    Book Cleaning
                                </Button>
                            </motion.a>
                        </Link>
                    </MotionDiv>
                </div>
            </section>
        </div>
    );
}
