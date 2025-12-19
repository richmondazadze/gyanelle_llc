import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    title: string
    category: string
    location: string
    image: string
    description: string
    className?: string
}

export function ProjectCard({
    title,
    category,
    location,
    image,
    description,
    className,
}: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn("h-full", className)}
        >
            <Card className="group overflow-hidden border-0 shadow-lg rounded-sm hover:shadow-2xl transition-all duration-500 h-full cursor-pointer bg-white flex flex-col">
                <div className="h-64 overflow-hidden relative">
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-accent/40 group-hover:bg-accent/20 transition-colors z-10" />
                    <div className="absolute top-4 left-4 z-20">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                            {category}
                        </span>
                    </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                        <Icons.Globe className="w-4 h-4" />
                        {location}
                    </div>
                    <h4 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors">
                        {title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                        {description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-primary font-bold text-sm">
                        View Case Study
                        <Icons.ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
