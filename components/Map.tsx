'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Circle, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Coordonnées de Noisy-le-Sec
const NOISY_LE_SEC = {
  lat: 48.8894,
  lng: 2.4522,
}

// Rayon de 20km en mètres
const RADIUS = 20000

// Icône personnalisée pour le marqueur
const customIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4CAF50" width="40" height="40">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `),
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

// Composant pour ajuster la vue de la carte
function SetViewOnMount() {
  const map = useMap()

  useEffect(() => {
    // Centrer la carte et ajuster le zoom pour voir le cercle de 20km
    map.setView([NOISY_LE_SEC.lat, NOISY_LE_SEC.lng], 10)
  }, [map])

  return null
}

export default function Map() {
  return (
    <MapContainer
      center={[NOISY_LE_SEC.lat, NOISY_LE_SEC.lng]}
      zoom={10}
      scrollWheelZoom={false}
      className="w-full h-full rounded-2xl"
      style={{ minHeight: '300px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetViewOnMount />
      <Marker position={[NOISY_LE_SEC.lat, NOISY_LE_SEC.lng]} icon={customIcon} />
      <Circle
        center={[NOISY_LE_SEC.lat, NOISY_LE_SEC.lng]}
        radius={RADIUS}
        pathOptions={{
          color: '#4CAF50',
          fillColor: '#4CAF50',
          fillOpacity: 0.15,
          weight: 2,
        }}
      />
    </MapContainer>
  )
}
