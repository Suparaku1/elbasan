"use client"

import { Hero3D } from "@/components/hero-3d"
import { culturalPoints } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  // Get top rated points
  const topRated = culturalPoints.filter((p) => p.rating && p.rating >= 4.7).slice(0, 4)

  return (
    <div className="bg-black min-h-screen">
      <Hero3D />

      {/* Editorial Introduction */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-serif text-white leading-[0.9]"
          >
            Trashëgimi <br />
            <span className="text-outline">Të Pavdekshme</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
              Elbasani nuk është thjesht një qytet; është një muze i gjallë ku çdo gur tregon një histori. Nga muret e
              lashta të Kalasë deri te ritmet moderne të teknologjisë, ne po ndërtojmë urën midis të shkuarës dhe të
              ardhmes.
            </p>
            <Link
              href="/pikat-kulturore"
              className="inline-flex items-center text-white border-b border-red-500 pb-1 hover:text-red-500 transition-colors"
            >
              Eksploro të gjitha pikat <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="py-20 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[1200px] md:h-[800px]">
          {/* Main Feature - Kalaja */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl">
            <Link href={`/pikat-kulturore/${topRated[0].id}`} className="block h-full w-full">
              <Image
                src={topRated[0].images[0] || "/placeholder.svg"}
                alt={topRated[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="text-red-500 font-mono text-sm uppercase tracking-widest mb-2 block">
                  {topRated[0].type}
                </span>
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-4">{topRated[0].name}</h3>
                <p className="text-gray-300 max-w-md line-clamp-2">{topRated[0].shortDescription}</p>
              </div>
            </Link>
          </div>

          {/* Secondary Feature - Top Right */}
          <div className="md:col-span-1 relative group overflow-hidden rounded-3xl">
            <Link href={`/pikat-kulturore/${topRated[1].id}`} className="block h-full w-full">
              <Image
                src={topRated[1].images[0] || "/placeholder.svg"}
                alt={topRated[1].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif text-white">{topRated[1].name}</h3>
                <div className="flex items-center text-red-400 text-sm mt-2">
                  <MapPin className="w-3 h-3 mr-1" /> {topRated[1].location}
                </div>
              </div>
            </Link>
          </div>

          {/* Tertiary Feature - Bottom Right */}
          <div className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-zinc-900 p-8 flex flex-col justify-between hover:bg-zinc-800 transition-colors">
            <Link href="/pikat-kulturore" className="block h-full w-full">
              <div>
                <span className="text-gray-500 text-6xl font-serif opacity-20">03</span>
                <h3 className="text-2xl font-serif text-white mt-4">
                  Zbuloni
                  <br />
                  Thesaret
                </h3>
              </div>
              <div className="mt-auto">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Text */}
      <div className="py-20 overflow-hidden bg-red-600">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          <span className="text-4xl md:text-7xl font-mono font-bold text-black uppercase tracking-tighter">
            ELBASAN KULTURE
          </span>
          <span className="text-4xl md:text-7xl font-serif text-white uppercase italic">Tradita</span>
          <span className="text-4xl md:text-7xl font-mono font-bold text-black uppercase tracking-tighter">
            INOVACION
          </span>
          <span className="text-4xl md:text-7xl font-serif text-white uppercase italic">E Ardhmja</span>
          <span className="text-4xl md:text-7xl font-mono font-bold text-black uppercase tracking-tighter">
            EDUKIM
          </span>
          <span className="text-4xl md:text-7xl font-serif text-white uppercase italic">Shkolla Profesionale</span>
        </div>
      </div>
    </div>
  )
}
