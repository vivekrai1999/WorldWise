import React from 'react'
import styles from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Map() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  return (
    <div className={styles.mapContainer} onClick={()=>navigate("form")}>
        <h1>Map</h1>
        <p>Positions: {lat},{lng}</p>
    </div>
  )
}

export default Map