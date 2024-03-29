import React from 'react'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import CityItem from './CountryItem'
import Message from './Message'
import CountryItem from './CountryItem'
import { useCity } from '../contexts/CityContext'

function CountryList() {
  const {cities, isLoading} = useCity()
  const countries = cities.reduce((arr,city)=>
    {
      if(!arr.map(el=>el.country).includes(city.country)){ 
      return [...arr, {country: city.country, emoji: city.emoji}]
      }
      else{
        return arr
      }
    }
  ,[])
  if(isLoading) return <Spinner/>
  //if(!countries.length) return <Message message="Add your first city by clicking on a city on the map" />
  return (
    <ul className={styles.countryList}>
        {countries.map(country=><CountryItem key={country.country} country={country}/>)}
    </ul>
  )
}

export default CountryList