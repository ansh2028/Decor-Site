import React from 'react'
import "../products/product.css"
import Card from "../components/card.jsx"


const Product = ({result}) => {
  return (
    <section className="card-container">
    
     {result}
    </section>

  )
}

export default Product