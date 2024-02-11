import { createContext, useContext, useEffect, useState } from "react";

const CityContext = createContext()

const URL = 'http://localhost:9000/cities'

function CityProvider({children}){
    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentCity, setCurrentCity] = useState({})

    useEffect(()=>{
        async function citiesData(){
          try{
            setIsLoading(true)
            const res = await fetch(URL)
            const data = await res.json()
            setCities(data)
          }catch{
            alert('something wrong')
          }finally{
            setIsLoading(false)
          }
        }
        citiesData()
    },[])

    async function getCity(id){
        try{
        setIsLoading(true)
        const res = await fetch(`${URL}/${id}`)
        const data = await res.json()
        setCurrentCity(data)
        }catch{
        alert('something wrong')
        }finally{
        setIsLoading(false)
        }      
    }
    return <CityContext.Provider value={{cities,setCities,isLoading,setIsLoading, getCity, currentCity}}>{children}</CityContext.Provider>
}

function useCity(){
    const context = useContext(CityContext)
    return context;
}

export {CityContext, CityProvider, useCity}
