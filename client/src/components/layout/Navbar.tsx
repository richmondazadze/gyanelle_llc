import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "@/hooks/use-click-away";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  // Close dropdowns when clicking outside
  useClickAway(dropdownRef, (event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      return;
    }
    setServicesOpen(false);
  });
  
  // Close mobile menu when clicking outside
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  useClickAway(mobileMenuRef, () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = '';
    }
  });
  
  // Toggle body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Close dropdown when navigating
  useEffect(() => {
    setServicesOpen(false);
  }, [location]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  const services = [
    { href: "/services/electrical", label: "Electrical Consulting" },
    { href: "/services/cleaning", label: "Cleaning Services" },
    { href: "/services/logistics", label: "Logistics Solutions" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Bar */}
      <div className="bg-accent text-white py-2 px-4 hidden md:block animate-in fade-in duration-500">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Icons.MapPin className="h-4 w-4 text-primary" /> Westerville, OH 43081, USA</span>
            <span className="flex items-center gap-2"><Icons.Phone className="h-4 w-4 text-primary" /> +1 (614) 779-8886</span>
            <span className="flex items-center gap-2"><Icons.Mail className="h-4 w-4 text-primary" /> info@gyanelle.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300">Open: Mon-Fri 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 font-bold text-2xl text-accent tracking-tight hover:opacity-80 transition-opacity duration-300">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt="Gyanelle LLC" className="w-full h-full object-contain" />
            </div>
            <span className="hidden sm:inline font-heading font-extrabold italic tracking-tighter">Gyanelle LLC</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary relative group py-2 inline-block",
                  location === link.href ? "text-primary" : "text-gray-600"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                  location === link.href && "scale-x-100"
                )} />
              </a>
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={buttonRef}>
            <div className="flex items-center">
              <Link href="/services">
                <a 
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative py-2 group",
                    location?.startsWith("/services") ? "text-primary" : "text-gray-600 hover:text-primary"
                  )}
                >
                  Services
                </a>
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen(!servicesOpen);
                }}
                onMouseEnter={() => setServicesOpen(true)}
                className="p-1 -ml-1"
                aria-label="Toggle services menu"
              >
                <motion.span
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icons.ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                initial={false}
                animate={{ 
                  scaleX: servicesOpen || location?.startsWith("/services") ? 1 : 0,
                  opacity: servicesOpen || location?.startsWith("/services") ? 1 : 0.7
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Animated Dropdown Menu */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scaleY: 1,
                    transition: { 
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -10, 
                    scaleY: 0.9,
                    transition: { 
                      duration: 0.15,
                      ease: [0.4, 0, 1, 1]
                    }
                  }}
                  className="absolute top-full left-0 mt-2 z-50 origin-top-right"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <motion.div 
                    className="bg-white shadow-2xl rounded-lg py-2 min-w-[240px] overflow-hidden border border-gray-100"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        staggerChildren: 0.05,
                        delayChildren: 0.1
                      }
                    }}
                  >
                    {services.map((service) => (
                      <motion.div
                        key={service.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { 
                            type: "spring",
                            stiffness: 300,
                            damping: 24
                          }
                        }}
                        exit={{ opacity: 0, x: -10 }}
                        whileHover={{ x: 4 }}
                        className="px-1"
                      >
                        <Link href={service.href}>
                          <a
                            className={cn(
                              "block px-4 py-3 text-sm font-medium transition-all duration-200 relative group/item rounded-md mx-1",
                              location === service.href 
                                ? "text-primary bg-primary/5" 
                                : "text-gray-700 hover:bg-gray-50"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span>{service.label}</span>
                              <motion.span 
                                className="opacity-0 -translate-x-2"
                                initial={false}
                                animate={{
                                  opacity: location === service.href ? 1 : 0,
                                  x: location === service.href ? 0 : -2,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <Icons.ArrowRight className="w-4 h-4" />
                              </motion.span>
                            </div>
                            <motion.span 
                              className="absolute inset-0 bg-primary/5 rounded-md -z-10"
                              initial={false}
                              animate={{
                                opacity: location === service.href ? 1 : 0,
                                scale: location === service.href ? 1 : 0.95,
                                transition: { duration: 0.2 }
                              }}
                            />
                          </a>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact">
            <a className={cn("bg-primary hover:bg-primary/90 text-white rounded-none px-6 transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9")}>
              <span>Get a Quote</span>
            </a>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "block text-lg font-medium px-4 py-2 rounded-sm transition-all duration-200",
                    location === link.href ? "text-primary bg-primary/5" : "text-gray-600 hover:bg-gray-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-lg font-medium px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-sm transition-all duration-200 flex items-center justify-between w-full"
            >
              Services
              <Icons.ChevronDown className={cn(
                "h-4 w-4 transition-transform duration-200",
                servicesOpen && "rotate-180"
              )} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-2 animate-in slide-in-from-top-4 duration-300">
                {services.map((service) => (
                  <Link key={service.href} href={service.href}>
                    <a
                      className={cn(
                        "block text-sm font-medium px-4 py-2 rounded-sm transition-all duration-200",
                        location === service.href ? "text-primary bg-primary/5" : "text-gray-600 hover:bg-gray-50"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.label}
                    </a>
                  </Link>
                ))}
              </div>
            )}

            <Link href="/contact">
              <a className={cn("w-full bg-primary hover:bg-primary/90 text-white mt-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2")}>
                <span>Get a Quote</span>
              </a>
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
