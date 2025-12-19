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
const safetyImg = "/assets/industrial-safety-equipment.webp";

export default function ElectricalSafetyAudits() {
    const auditTypes = [
        {
            title: "Compliance Audits",
            desc: "NEC, OSHA, and local code compliance verification",
            items: ["Code compliance review", "Violation identification", "Remediation recommendations", "Re-inspection services"]
        },
        {
            title: "Arc Flash Studies",
            desc: "IEEE 1584 compliant arc flash hazard analysis",
            items: ["Incident energy calculations", "PPE requirements", "Arc flash labels", "Boundary determination"]
        },
        {
            title: "Infrared Thermography",
            desc: "Non-invasive thermal inspection of electrical systems",
            items: ["Hot spot detection", "Connection integrity", "Overload identification", "Preventive reporting"]
        },
        {
            title: "Power Quality Analysis",
            desc: "Comprehensive power quality monitoring and analysis",
            items: ["Harmonic distortion", "Voltage sags/swells", "Power factor issues", "Transient analysis"]
        }
    ];

    const standards = [
        "NFPA 70 (National Electrical Code)",
        "NFPA 70E (Electrical Safety in the Workplace)",
        "OSHA 29 CFR 1910 Subpart S",
        "IEEE 1584 (Arc Flash Hazard Calculations)",
        "NFPA 70B (Electrical Equipment Maintenance)",
        "ANSI/NETA MTS (Maintenance Testing Specifications)"
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={safetyImg}
                        alt="Electrical Safety Audits"
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
                                    ELECTRICAL
                                </span>
                                <span className="block text-white">SAFETY <span className="text-primary">AUDITS</span></span>
                            </h1>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.5}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Comprehensive electrical safety assessments and compliance audits to protect your workforce and infrastructure.
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

                                <h3 className="text-4xl font-bold text-accent">Protect Your Workforce</h3>
                                <AnimatedLine className="w-20" />
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Electrical hazards are a leading cause of workplace injuries and fatalities. Gyanelle LLC provides comprehensive electrical safety audits to identify hazards, ensure code compliance, and create safer working environments for your employees.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Our certified engineers conduct thorough assessments of your electrical infrastructure, documenting findings, providing actionable recommendations, and supporting remediation efforts. We help you meet OSHA requirements, reduce liability, and most importantly, protect your people.
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
                            <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg">
                                <div className="flex items-start gap-4 mb-6">
                                    <Icons.Alert className="w-8 h-8 text-amber-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-accent text-xl mb-2">Why Safety Audits Matter</h4>
                                        <p className="text-gray-700">OSHA reports over 1,000 electrical injuries annually, with arc flash incidents accounting for 80% of electrical fatalities.</p>
                                    </div>
                                </div>
                                <div className="space-y-3 border-t border-amber-200 pt-6">
                                    <h5 className="font-semibold text-accent">Standards We Audit Against:</h5>
                                    <ul className="space-y-2">
                                        {standards.map((standard, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <Icons.Check className="w-4 h-4 text-primary shrink-0" />
                                                {standard}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Audit Types */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">

                        <MotionDiv variants={fadeInUp} delay={0.1}>
                            <h3 className="text-4xl font-bold text-accent mb-4">Types of Safety Assessments</h3>
                        </MotionDiv>
                        <MotionDiv variants={fadeInUp} delay={0.2}>
                            <AnimatedLine className="w-24 mx-auto" />
                        </MotionDiv>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {auditTypes.map((audit, i) => (
                            <StaggerItem key={i}>
                                <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow">
                                    <CardContent className="p-8">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                {i === 0 && <Icons.ClipboardCheck className="w-7 h-7 text-primary" />}
                                                {i === 1 && <Icons.Alert className="w-7 h-7 text-primary" />}
                                                {i === 2 && <Icons.FileText className="w-7 h-7 text-primary" />}
                                                {i === 3 && <Icons.Shield className="w-7 h-7 text-primary" />}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-accent mb-2">{audit.title}</h4>
                                                <p className="text-gray-600 mb-4">{audit.desc}</p>
                                                <ul className="space-y-2">
                                                    {audit.items.map((item, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                            <Icons.Check className="w-4 h-4 text-primary shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Ensure Electrical Safety Compliance</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp} delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Schedule a comprehensive electrical safety audit to protect your workforce and meet regulatory requirements.
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
                                    Schedule Safety Audit
                                </Button>
                            </motion.a>
                        </Link>
                    </MotionDiv>
                </div>
            </section>
        </div>
    );
}
