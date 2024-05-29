import React from 'react'
import ProductComponentHero from '../../ProductsComponent/ProductComponentHero/ProductComponentHero'
import ProductComponentImages from '../../ProductsComponent/ProductComponentImages/ProductComponentImages'
import Contact from '../../Layout/Contact/Contact'
import Footer from '../../Layout/Footer/Footer'
import { Link } from 'react-router-dom'
const LighteingCategories = [
  {
    id : 1,
    name : "Chandelier ",
    pic: "/public/products/Lighting/1.jpg",
    path : "/lighting/chandelier"
  },
  {
    id : 2,
    name : "Lanterns",
    pic: "/public/products/Lighting/2.jpg",
    path : "/lighting/lanterns"
  },
  {
    id : 3,
    name : "Scones",
    pic: "/public/products/Lighting/3.jpg",
    path : "/lighting/scones"
  },
  {
    id : 4,
    name : "Lamps",
    pic: "/public/products/Lighting/4.jpg",
    path : "/lighting/lamps"
  }

]
const Lighteing = () => {
  return (
    <div>
      <ProductComponentHero />
      <ProductComponentImages cateogoryImage = {LighteingCategories}/>
      <Contact />
      <Footer />
    </div>
  )
}

export default Lighteing
