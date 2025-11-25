"use client"

import dynamic from "next/dynamic"

const MapView = dynamic(() => import("@/components/map-view"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-muted animate-pulse rounded-xl" />,
})

interface MapViewWrapperProps {
  coordinates: {
    lat: number
    lng: number
  }
  name: string
}

export function MapViewWrapper(props: MapViewWrapperProps) {
  return <MapView {...props} />
}
