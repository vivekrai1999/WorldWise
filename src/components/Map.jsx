import React, { useState } from 'react'
import styles from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useCity } from '../contexts/CityContext'

function Map() {
  const {cities} = useCity()
  const [searchParams, setSearchParams] = useSearchParams()
  const [position, setPosition] = useState([40,0])
  const navigate = useNavigate()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  return (
    <div className={styles.mapContainer}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} className={styles.map}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        {cities.map(city=><Marker key={city.id} position={[city.position.lat, city.position.lng]}>
          <Popup>
            <span>{city.emoji}</span>
            <span>{city.cityName}</span>
          </Popup>
        </Marker>)}
        </MapContainer>
    </div>
  )
}

export default Map