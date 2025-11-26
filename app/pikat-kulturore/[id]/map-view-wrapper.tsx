"use client"

import { useEffect, useRef } from 'react'

interface MapViewWrapperProps {
  coordinates: {
    lat: number
    lng: number
  }
  name: string
}

export function MapViewWrapper({ coordinates, name }: MapViewWrapperProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Simple placeholder for map - you can integrate with Leaflet or Google Maps later
    const initMap = () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div style="width:100%;height:100%;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;align-items:center;justify-content:center;color:white;border-radius:0.5rem;flex-direction:column;">
            <div style="font-size:24px;margin-bottom:16px;">🗺️</div>
            <div style="font-weight:bold;margin-bottom:8px;">${name}</div>
            <div style="font-size:14px;opacity:0.8;">Koordinatat: ${coordinates.lat}, ${coordinates.lng}</div>
            <div style="font-size:12px;opacity:0.6;margin-top:8px;">Harta do të integrohet së shpejti</div>
          </div>
        `
      }
    }

    initMap()
  }, [coordinates, name])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg border"
    />
  )
}