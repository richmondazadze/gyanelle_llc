import * as React from "react"
import { motion } from "framer-motion"
import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

interface ProcessStepProps {
    number: string
    title: string
    description: string
    icon: React.ElementType
    isLast?: boolean
    className?: string
}

export function ProcessStep({
    number,
    title,
    description,
    icon: Icon,
    isLast,
    className,
}: ProcessStepProps) {
    return (
        <div className={cn("relative flex flex-col items-center text-center group", className)}>
            {/* Connector Line */}
            {!isLast && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gray-200 z-0">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </div>
            )}

            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center relative z-10 border-2 border-transparent group-hover:border-primary transition-all duration-300"
            >
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg">
                    {number}
                </div>
                <Icon className="w-10 h-10 text-primary" />
            </motion.div>

            <div className="mt-8 space-y-3">
                <h4 className="text-xl font-bold text-accent group-hover:text-primary transition-colors">
                    {title}
                </h4>
                <p className="text-gray-600 text-sm max-w-[250px] mx-auto">
                    {description}
                </p>
            </div>
        </div>
    )
}
