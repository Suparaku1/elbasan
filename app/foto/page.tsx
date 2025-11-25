import { culturalPoints } from "@/lib/data"
import Image from "next/image"

export default function PhotosPage() {
  // Flatten all images into a single array with point info
  const allImages = culturalPoints.flatMap((point) =>
    point.images.map((src) => ({
      src,
      title: point.name,
      pointId: point.id,
    })),
  )

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Galeria e Fotove</h1>
        <p className="text-muted-foreground">Një udhëtim vizual nëpër historinë dhe kulturën e Elbasanit.</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {allImages.map((img, idx) => (
          <div key={idx} className="break-inside-avoid relative group rounded-lg overflow-hidden border">
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.title}
              width={600}
              height={400}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-medium">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
