import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import CityList from "./components/CityList"
import CountryList from "./components/CountryList"
import City from './components/City'
import Form from './components/Form'
import { CityProvider} from "./contexts/CityContext"


function App() {
  return <CityProvider>
      <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="pricing" element={<Pricing/>}/>
              <Route path="app" element={<AppLayout/>}>
                <Route index element={<Navigate replace to="cities"/>} />
                <Route path="cities" element={<CityList/>}/>
                <Route path="cities/:id" element={<City />}/>
                <Route path="country" element={<CountryList/>}/>
                <Route path="form" element={<Form />}/>
              </Route>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </CityProvider>
}

export default App
