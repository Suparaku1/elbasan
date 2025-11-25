import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Terminal, Code2, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ShkollaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Editorial Header */}
      <header className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <Badge variant="outline" className="text-red-500 border-red-500/50 mb-6 px-4 py-1 uppercase tracking-widest">
            Education 2.0
          </Badge>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
            Krijojmë{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Arkitektët
            </span>{" "}
            e së Ardhmes Digjitale
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            Shkolla Profesionale Elbasan nuk është thjesht një institucion arsimor. Ajo është inkubatori ku idetë e
            sotme kthehen në realitetin e së nesërmes.
          </p>
        </div>
      </header>

      {/* Split Layout */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="relative h-full min-h-[500px] border-y border-white/10">
          <Image
            src="/placeholder.jpg"
            alt="Students Coding"
            fill
            className="object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center border-b border-white/10">
          <Terminal className="w-12 h-12 text-red-500 mb-8" />
          <h2 className="text-4xl font-mono font-bold mb-6">MËSIMDHËNIA E DIFERENCUAR</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Siç theksohet në studimet bashkëkohore, ne aplikojmë metoda inovative ku nxënësi është në qendër.
            Mësimdhënia jonë përshtatet me nevojat individuale, duke nxitur mendimin kritik dhe zgjidhjen krijuese të
            problemeve.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <span className="block text-5xl font-serif text-white mb-2">98%</span>
              <span className="text-sm text-gray-500 uppercase tracking-widest">Punësim Pas Diplomimit</span>
            </div>
            <div>
              <span className="block text-5xl font-serif text-white mb-2">50+</span>
              <span className="text-sm text-gray-500 uppercase tracking-widest">Partneritete Biznesi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Cards Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-serif">Drejtimet Kryesore</h2>
          <Link
            href="https://www.shpe.al"
            className="hidden md:flex items-center text-red-500 hover:text-white transition-colors"
          >
            WEBSITE ZYRTAR <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {[
            { icon: Code2, title: "Teknologji Informacioni", desc: "Zhvillim Software, Rrjeta, Cyber Security" },
            { icon: Rocket, title: "Inovacion & Robotikë", desc: "Automation, IoT, Smart Systems" },
            { icon: Terminal, title: "Elektronikë", desc: "Circuits, Digital Systems, Hardware" },
          ].map((item, i) => (
            <div key={i} className="group border border-white/10 p-12 hover:bg-white/5 transition-colors relative">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-red-500 w-6 h-6" />
              </div>
              <item.icon className="w-12 h-12 text-gray-500 group-hover:text-red-500 transition-colors mb-8" />
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6">
            Vizito shpe.al <ExternalLink className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
