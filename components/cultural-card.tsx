"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowUpRight } from "lucide-react"
import type { CulturalPoint } from "@/lib/data"
import { motion } from "framer-motion"

export function CulturalCard({ point }: { point: CulturalPoint }) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-full">
      <Link href={`/pikat-kulturore/${point.id}`}>
        <div className="group relative h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer">
          {/* Background Image with Zoom Effect */}
          <div className="absolute inset-0">
            <Image
              src={point.images[0] || "/placeholder.svg"}
              alt={point.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
          </div>

          {/* Floating Badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 uppercase tracking-wider text-xs px-3 py-1">
              {point.type}
            </Badge>
          </div>

          {/* Content Positioned at Bottom */}
          <div className="absolute bottom-0 left-0 w-full p-6 z-10 transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{point.name}</h3>

            <div className="flex items-center text-gray-300 text-sm mb-4">
              <MapPin className="w-4 h-4 mr-1 text-red-500" />
              {point.location}
            </div>

            <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <p className="text-gray-300 text-sm line-clamp-2 mb-4 font-light">{point.shortDescription}</p>
              <div className="flex items-center text-white text-sm font-medium">
                Zbuloni më shumë <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
