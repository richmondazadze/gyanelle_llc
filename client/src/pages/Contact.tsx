import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { useState } from "react";
import {
  MotionDiv,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  AnimatedLine,
  motion,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn
} from "@/components/ui/motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Electrical Consulting",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };


  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="bg-accent text-white py-32 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating mail icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + (i % 2) * 30}%`
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              <Icons.Mail className="w-20 h-20 text-white/10" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">

          <MotionDiv variants={fadeInUp} delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block" style={{
                WebkitTextStroke: '2px white',
                WebkitTextFillColor: 'transparent'
              }}>
                GET IN TOUCH
              </span>
              <span className="block text-white">LET'S <span className="text-primary">CONNECT</span></span>
            </h1>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.3}>
            <AnimatedLine className="w-24 mx-auto mb-6" delay={0.4} />
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to get started? Contact us today to discuss your project needs.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        {/* Background decoration */}
        <motion.div
          className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>

                <MotionDiv variants={fadeInLeft} delay={0.1}>
                  <h3 className="text-3xl font-bold text-accent mb-4">Get in Touch</h3>
                </MotionDiv>
                <MotionDiv variants={fadeInUp} delay={0.2}>
                  <AnimatedLine className="w-20 mb-6" delay={0.3} />
                </MotionDiv>
                <MotionDiv variants={fadeInUp} delay={0.3}>
                  <p className="text-gray-600 mb-8">
                    Whether you have a question about our services, pricing, or need something else, our team is ready to answer all your questions.
                  </p>
                </MotionDiv>
              </div>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Icons.Phone, title: "Phone", value: "+1 (614) 779-8886", href: "tel:+16147798886" },
                  { icon: Icons.Mail, title: "Email", value: "info@gyanelle.com", href: "mailto:info@gyanelle.com" },
                  { icon: Icons.MapPin, title: "Address", value: "Columbus, Ohio, USA", href: "#" },
                  { icon: Icons.Clock, title: "Business Hours", value: "Mon - Fri: 8:00 AM - 6:00 PM", href: "#" }
                ].map((info, i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                        <CardContent className="p-6 flex flex-col gap-3 relative">
                          <motion.div
                            className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-5 -mt-5"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <info.icon className="w-6 h-6 text-primary" />
                          </motion.div>
                          <h3 className="font-bold text-accent group-hover:text-primary transition-colors duration-300">{info.title}</h3>
                          <p className="text-gray-600 text-sm">{info.value}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Map placeholder */}
              <MotionDiv variants={fadeInUp} delay={0.5}>
                <motion.div
                  className="mt-8 h-[200px] bg-gray-100 rounded-lg overflow-hidden relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icons.MapPin className="w-12 h-12 text-primary" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold text-accent">Westerville, OH 43081, USA</p>
                  </div>
                </motion.div>
              </MotionDiv>
            </div>

            {/* Form */}
            <MotionDiv variants={fadeInRight} delay={0.3}>
              <motion.div
                className="bg-white p-8 rounded-lg border border-gray-100 shadow-xl relative overflow-hidden"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Background decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-tr-full -ml-8 -mb-8"
                  animate={{ scale: [1.1, 1, 1.1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                <h3 className="text-2xl font-bold text-accent mb-6 relative z-10">Send us a Message</h3>

                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input
                        placeholder="John"
                        className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary transition-all"
                        value={formState.firstName}
                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                      />
                    </motion.div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary transition-all"
                        value={formState.lastName}
                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary transition-all"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service Interest</label>
                    <select
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    >
                      <option>Electrical Consulting</option>
                      <option>Cleaning Services</option>
                      <option>Logistics Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="bg-gray-50 border-gray-200 min-h-[120px] focus:border-primary focus:ring-primary transition-all"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={isSubmitting ? { x: "100%" } : {}}
                        transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                      />
                      {isSubmitted ? (
                        <motion.span
                          className="flex items-center justify-center gap-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <Icons.Check className="w-5 h-5" /> Message Sent!
                        </motion.span>
                      ) : isSubmitting ? (
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          Sending...
                        </motion.span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <Icons.Send className="w-4 h-4" />
                          </motion.span>
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
