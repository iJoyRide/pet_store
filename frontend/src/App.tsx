import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home.page'
import Products from './pages/products/Product.Pages'

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Wrapper  */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/products">
            <Route index element={<Products/>} />
          </Route>
          
        </Routes>
      </div>
    </div>
  )
}

export default App