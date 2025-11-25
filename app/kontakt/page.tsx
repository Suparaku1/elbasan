"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Send, MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  // Koordinatat e Shkollës Profesionale Elbasan
  const schoolLocation = {
    lat: 41.1125,
    lng: 20.0822
  }

  useEffect(() => {
    if (mapRef.current && !mapLoaded) {
      // Krijojmë iframe me OpenStreetMap
      const iframe = document.createElement('iframe')
      iframe.width = '100%'
      iframe.height = '100%'
      iframe.frameBorder = '0'
      iframe.scrolling = 'no'
      iframe.marginHeight = 0
      iframe.marginWidth = 0
      iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${schoolLocation.lng - 0.01}%2C${schoolLocation.lat - 0.01}%2C${schoolLocation.lng + 0.01}%2C${schoolLocation.lat + 0.01}&layer=mapnik&marker=${schoolLocation.lat}%2C${schoolLocation.lng}`
      iframe.style.border = '0'
      iframe.onload = () => setMapLoaded(true)
      
      mapRef.current.appendChild(iframe)
    }
  }, [mapLoaded])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    // Simulate API call
    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Na Kontaktoni</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Keni pyetje apo sugjerime? Na shkruani dhe ne do t'ju përgjigjemi sa më shpejt të jetë e mundur.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Adresa</h3>
                <p className="text-muted-foreground">Shkolla Profesionale, Elbasan, Shqipëri</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Koordinatat: {schoolLocation.lat.toFixed(4)}, {schoolLocation.lng.toFixed(4)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">elektroniksuparaku@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                <p className="text-muted-foreground">+355 69 2710558</p>
              </div>
            </div>
          </div>

          {/* OpenStreetMap */}
          <div className="h-64 bg-muted rounded-lg overflow-hidden border relative">
            <div 
              ref={mapRef}
              className="absolute inset-0 bg-slate-100 dark:bg-slate-800"
            >
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                    <p>Duke ngarkuar hartën...</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Link për hapje në faqen e OpenStreetMap */}
            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs">
              <a 
                href={`https://www.openstreetmap.org/?mlat=${schoolLocation.lat}&mlon=${schoolLocation.lng}#map=16/${schoolLocation.lat}/${schoolLocation.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Shiko në OpenStreetMap ↗
              </a>
            </div>
          </div>

          {/* Informacion shtesë për lokacionin */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              📍 Shkolla Profesionale Elbasan
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              Shkolla e specializuar në trajnime profesionale në qendër të Elbasanit, 
              duke ofruar programe të ndryshme arsimore për të rinjtë.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-card border rounded-lg p-8 shadow-sm">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mesazhi u dërgua!</h3>
              <p className="text-muted-foreground mb-6">
                Faleminderit që na kontaktuat. Do t'ju përgjigjemi së shpejti.
              </p>
              <button 
                onClick={() => setStatus("idle")} 
                className="text-primary hover:underline font-medium"
              >
                Dërgo një mesazh tjetër
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    Emri
                  </label>
                  <input
                    id="firstName"
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Emri"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Mbiemri
                  </label>
                  <input
                    id="lastName"
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Mbiemri"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="name@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mesazhi
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Shkruani mesazhin tuaj këtu..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-11 flex items-center justify-center rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Duke dërguar...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Dërgo Mesazhin
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}