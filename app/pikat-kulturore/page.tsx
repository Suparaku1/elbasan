"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Star, Filter } from "lucide-react"
import { culturalPoints } from "@/lib/data"

export default function CulturalPointsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("Të gjitha")

  const types = ["Të gjitha", "Kalaja", "Muze", "Xhami", "Kishë", "Natyrë"]

  const filteredPoints = culturalPoints.filter((point) => {
    const matchesSearch = point.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "Të gjitha" || point.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Pikat Kulturore</h1>
        <p className="text-muted-foreground max-w-2xl">
          Eksploroni thesaret kulturore dhe historike të Elbasanit. Përdorni filtrat për të gjetur destinacionin tuaj të
          preferuar.
        </p>
      </div>

      <div className="grid md:grid-cols-[250px_1fr] gap-8">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-semibold mb-4 flex items-center">
              <Filter className="h-4 w-4 mr-2" /> Filtrat
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Kërko</label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Kërko..."
                    className="w-full pl-9 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Kategoria</label>
                <div className="space-y-2">
                  {types.map((type) => (
                    <label key={type} className="flex items-center space-x-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="h-4 w-4 rounded-full border-primary text-primary focus:ring-primary"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoints.length > 0 ? (
            filteredPoints.map((point) => (
              <Link
                key={point.id}
                href={`/pikat-kulturore/${point.id}`}
                className="group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all hover:border-primary/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={point.images[0] || "/placeholder.svg"}
                    alt={point.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {point.rating}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {point.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{point.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{point.shortDescription}</p>
                  <div className="mt-auto pt-4 flex items-center text-xs text-muted-foreground border-t">
                    <MapPin className="h-3 w-3 mr-1" />
                    {point.location}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-muted-foreground bg-muted/30 rounded-lg border border-dashed">
              <p>Nuk u gjetën rezultate për kërkimin tuaj.</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("Të gjitha")
                }}
                className="mt-2 text-primary hover:underline text-sm"
              >
                Pastro filtrat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}