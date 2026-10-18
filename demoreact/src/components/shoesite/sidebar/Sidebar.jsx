import React from 'react'
import "../sidebar/Sidebar.css"
import Category from './category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';


const Sidebar = ({ handleChange }) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category  handleChange={handleChange} />
      <Price  handleChange={handleChange} />
      <Colors  handleChange={handleChange} />



    </section>
  )
}

export default Sidebar