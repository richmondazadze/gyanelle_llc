"use client";

import { motion, useInView, useAnimation, Variants, HTMLMotionProps } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Animation variants for reuse
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

export const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
};

export const slideInFromBottom: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

// Smooth spring transition
export const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 1
};

// Easing curves
export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeInOutCubic = [0.65, 0, 0.35, 1];

interface MotionContainerProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number;
}

// Scroll-triggered animation wrapper
export function MotionDiv({
    children,
    className,
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.3,
    variants = fadeInUp,
    ...props
}: MotionContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [isInView, controls, once]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration, delay, ease: easeOutExpo }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for child animations
export function StaggerContainer({
    children,
    className,
    delay = 0,
    once = true,
    amount = 0.2,
    ...props
}: MotionContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [isInView, controls, once]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            transition={{ delay }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// Individual stagger item
export function StaggerItem({
    children,
    className,
    ...props
}: Omit<MotionContainerProps, 'delay' | 'duration'>) {
    return (
        <motion.div
            variants={staggerItem}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// Parallax effect component
interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export function Parallax({ children, className, speed = 0.5 }: ParallaxProps) {
    return (
        <motion.div
            className={className}
            style={{ y: 0 }}
            whileInView={{ y: 0 }}
            transition={{ type: "tween" }}
        >
            {children}
        </motion.div>
    );
}

// Magnetic hover effect
interface MagneticProps {
    children: ReactNode;
    className?: string;
    strength?: number;
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
    return (
        <motion.div
            className={cn("relative", className)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springTransition}
        >
            {children}
        </motion.div>
    );
}

// Text reveal animation
interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const words = text.split(" ");

    return (
        <motion.span ref={ref} className={cn("inline-flex flex-wrap", className)}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-[0.25em] overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.05,
                        ease: easeOutExpo
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Character reveal animation for headings
interface CharRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export function CharReveal({ text, className, delay = 0 }: CharRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const chars = text.split("");

    return (
        <motion.span ref={ref} className={cn("inline-block", className)}>
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -90 }}
                    transition={{
                        duration: 0.4,
                        delay: delay + i * 0.02,
                        ease: easeOutExpo
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Hover card with 3D tilt effect
interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
    return (
        <motion.div
            className={cn("relative", className)}
            whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            style={{ transformStyle: "preserve-3d" }}
        >
            {children}
        </motion.div>
    );
}

// Animated counter
interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
    className?: string;
    suffix?: string;
    prefix?: string;
}

export function Counter({ from = 0, to, duration = 2, className, suffix = "", prefix = "" }: CounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
            {prefix}
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            >
                {isInView ? (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {to}
                    </motion.span>
                ) : from}
            </motion.span>
            {suffix}
        </motion.span>
    );
}

// Floating animation
interface FloatingProps {
    children: ReactNode;
    className?: string;
    duration?: number;
    delay?: number;
    y?: number;
}

export function Floating({ children, className, duration = 3, delay = 0, y = 10 }: FloatingProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -y, 0]
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
}

// Glow pulse animation
interface GlowPulseProps {
    children: ReactNode;
    className?: string;
    color?: string;
}

export function GlowPulse({ children, className, color = "rgba(91, 164, 174, 0.5)" }: GlowPulseProps) {
    return (
        <motion.div
            className={className}
            animate={{
                boxShadow: [
                    `0 0 0 0 ${color}`,
                    `0 0 20px 10px transparent`,
                    `0 0 0 0 ${color}`
                ]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
}

// Page transition wrapper
interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
        >
            {children}
        </motion.div>
    );
}

// Reveal on scroll with mask
interface RevealProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

export function Reveal({ children, className, direction = "up" }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const getInitial = () => {
        switch (direction) {
            case "up": return { y: 75, opacity: 0 };
            case "down": return { y: -75, opacity: 0 };
            case "left": return { x: 75, opacity: 0 };
            case "right": return { x: -75, opacity: 0 };
        }
    };

    return (
        <div ref={ref} className={cn("relative overflow-hidden", className)}>
            <motion.div
                initial={getInitial()}
                animate={isInView ? { x: 0, y: 0, opacity: 1 } : getInitial()}
                transition={{ duration: 0.7, ease: easeOutExpo }}
            >
                {children}
            </motion.div>
        </div>
    );
}

// Animated line/underline
interface AnimatedLineProps {
    className?: string;
    delay?: number;
}

export function AnimatedLine({ className, delay = 0 }: AnimatedLineProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            className={cn("h-1 bg-gradient-to-r from-primary to-accent", className)}
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 0.8, delay, ease: easeOutExpo }}
        />
    );
}

// Shimmer effect
interface ShimmerProps {
    children: ReactNode;
    className?: string;
}

export function Shimmer({ children, className }: ShimmerProps) {
    return (
        <motion.div
            className={cn("relative overflow-hidden", className)}
        >
            {children}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
}

// Export motion from framer-motion for direct use
export { motion, AnimatePresence } from "framer-motion";
