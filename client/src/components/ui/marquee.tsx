"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    children: React.ReactNode;
    className?: string;
    pauseOnHover?: boolean;
    direction?: "left" | "right";
    speed?: "slow" | "normal" | "fast";
}

export function Marquee({
    children,
    className,
    pauseOnHover = true,
    direction = "left",
    speed = "normal",
}: MarqueeProps) {
    const speedMap = {
        slow: 40,
        normal: 25,
        fast: 15,
    };

    const duration = speedMap[speed];

    return (
        <div
            className={cn(
                "group flex overflow-hidden",
                pauseOnHover && "[--pause-on-hover:paused]",
                className
            )}
        >
            <motion.div
                className="flex shrink-0 gap-8 py-4"
                animate={{
                    x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
                }}
                transition={{
                    x: {
                        duration,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
                style={{
                    animationPlayState: "running",
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}

interface ClientLogoProps {
    src: string;
    alt: string;
    className?: string;
}

export function ClientLogo({ src, alt, className }: ClientLogoProps) {
    return (
        <motion.div
            className={cn(
                "flex items-center justify-center h-28 w-52 px-8",
                className
            )}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            <img
                src={src}
                alt={alt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
            />
        </motion.div>
    );
}
