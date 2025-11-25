import { culturalPoints } from "@/lib/data"
import { ReviewSystem } from "@/components/review-system"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Share2, Info, MapIcon, Box } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapViewWrapper } from "./map-view-wrapper"

export function generateStaticParams() {
  return culturalPoints.map((point) => ({
    id: point.id,
  }))
}

export default async function CulturalPointDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const point = culturalPoints.find((p) => p.id === id)

  if (!point) {
    return <div className="p-8 text-center">Pika kulturore nuk u gjet.</div>
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image src={point.images[0] || "/placeholder.svg"} alt={point.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 container mx-auto">
          <Link
            href="/pikat-kulturore"
            className="inline-flex items-center text-sm text-white/80 hover:text-white mb-4 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Kthehu te lista
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{point.name}</h1>
          <div className="flex items-center text-white/90 gap-4">
            <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">{point.type}</span>
            <span className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-1" /> {point.location}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="description">
                  <Info className="w-4 h-4 mr-2" />
                  Info
                </TabsTrigger>
                <TabsTrigger value="map">
                  <MapIcon className="w-4 h-4 mr-2" />
                  Harta
                </TabsTrigger>
                <TabsTrigger value="3d">
                  <Box className="w-4 h-4 mr-2" />
                  3D View
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-8 animate-in fade-in-50 duration-500">
                <section className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Rreth këtij destinacioni</h2>
                  <p className="lead text-xl text-muted-foreground mb-6">{point.shortDescription}</p>
                  <p>{point.detailedDescription}</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Galeria</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {point.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border">
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${point.name} - pamje ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="map" className="animate-in fade-in-50 duration-500">
                <h3 className="text-xl font-bold mb-4">Vendndodhja në Hartë</h3>
                <MapViewWrapper coordinates={point.coordinates} name={point.name} />
              </TabsContent>

              <TabsContent value="3d" className="animate-in fade-in-50 duration-500">
                <div className="h-[400px] w-full bg-black/90 rounded-xl flex flex-col items-center justify-center text-center p-8 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800&text=3D+Grid')] opacity-20 bg-center" />
                  <Box className="w-20 h-20 text-primary mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white mb-2">Pamje 3D në Ndërtim</h3>
                  <p className="text-gray-400 max-w-md">
                    Po punojmë për të sjellë modelin e saktë 3D të {point.name}. Së shpejti do të mund të eksploroni çdo
                    detaj në mënyrë virtuale.
                  </p>
                  <Button className="mt-6 z-10 bg-transparent" variant="outline">
                    Njofto kur të jetë gati
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <section>
              <ReviewSystem pointId={point.id} />
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 border rounded-lg bg-card sticky top-24">
              <h3 className="font-bold text-lg mb-4">Informacion</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Vendndodhja</div>
                  <div className="font-medium">{point.location}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Koordinatat</div>
                  <div className="font-mono text-xs">
                    {point.coordinates.lat}, {point.coordinates.lng}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Karakteristikat</div>
                  <div className="flex flex-wrap gap-2">
                    {point.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-muted rounded-md text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <hr />
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-muted transition-colors">
                  <Share2 className="h-4 w-4" /> Ndaj me miqtë
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
