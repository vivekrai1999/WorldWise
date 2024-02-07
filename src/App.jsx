import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import CityList from "./components/CityList"
import { useEffect, useState } from "react"
import CountryList from "./components/CountryList"
import City from './components/City'
import Form from './components/Form'

const URL = 'http://localhost:9000/cities'
function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
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
  return <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="pricing" element={<Pricing/>}/>
      <Route path="app" element={<AppLayout/>}>
        <Route index element={<Navigate replace to="cities"/>} />
        <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>
        <Route path="cities/:id" element={<City />}/>
        <Route path="country" element={<CountryList cities={cities} isLoading={isLoading}/>}/>
        <Route path="form" element={<Form />}/>
      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
