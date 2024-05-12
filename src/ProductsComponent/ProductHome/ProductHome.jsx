import React from 'react'
import ProductComponentHero from '../ProductComponentHero/ProductComponentHero'
import ProductComponentImages from '../ProductComponentImages/ProductComponentImages'
import Contact from '../../Layout/Contact/Contact'
import Footer from '../../Layout/Footer/Footer'

const ProductHome = () => {
  return (
    <div>
      <ProductComponentHero />
      <ProductComponentImages />
      <Contact />
      <Footer />
    </div>
  )
}

export default ProductHome
