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
const moveImg = "/assets/move-in-out.webp";

export default function MoveInOutCleaning() {
    const moveOutServices = [
        "Complete property deep clean",
        "Oven and refrigerator interior cleaning",
        "Inside all cabinets and drawers",
        "Bathroom deep sanitization",
        "Window cleaning (interior)",
        "Baseboard and trim cleaning",
        "Light fixture dusting",
        "Carpet vacuuming (steam cleaning available)",
        "Wall spot cleaning",
        "Garage sweeping"
    ];

    const moveInServices = [
        "Full property sanitization",
        "Disinfection of all surfaces",
        "Air vent cleaning",
        "Cabinet and drawer sanitization",
        "Bathroom deep sanitization",
        "Kitchen appliance cleaning",
        "Floor deep cleaning",
        "Window sill and track cleaning"
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={moveImg}
                        alt="Move-In/Move-Out Cleaning"
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
                                    MOVE-IN
                                </span>
                                <span className="block text-white">MOVE-OUT <span className="text-primary">CLEANING</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Comprehensive deep cleaning services for your transition. We ensure your new home is pristine or your old one is ready for the next occupants.
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
                                Moving is stressful enough without worrying about cleaning. Gyanelle LLC's move-in/move-out cleaning services ensure your old place is spotless (and deposit-ready) or your new home is fresh and sanitized before you unpack.
                            </p>
                        </MotionDiv>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <MotionDiv variants={fadeInLeft}>
                            <Card className="border-0 shadow-lg h-full">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center">
                                            <Icons.Logistics className="w-8 h-8 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-accent text-xl">Move-Out Cleaning</h4>
                                            <p className="text-sm text-gray-500">Leaving your old place</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        Our move-out cleaning is designed to help you get your security deposit back. We clean every corner, inside every cabinet, and leave the property in rental-ready condition.
                                    </p>
                                    <ul className="space-y-3">
                                        {moveOutServices.map((item, i) => (
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
                                            <Icons.Key className="w-8 h-8 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-accent text-xl">Move-In Cleaning</h4>
                                            <p className="text-sm text-gray-500">Starting fresh</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        Start your new chapter in a truly clean space. Our move-in cleaning sanitizes and freshens your new home so you can unpack with peace of mind.
                                    </p>
                                    <ul className="space-y-3">
                                        {moveInServices.map((item, i) => (
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
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-lg">
                                    Get Free Quote
                                </Button>
                            </motion.a>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Moving Soon?</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Book your move-in or move-out cleaning today and cross one more thing off your moving checklist.
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
                                        Book Cleaning
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
