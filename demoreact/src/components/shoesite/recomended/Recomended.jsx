import React from 'react'
import"../recomended/Recomended.css"

const Recomended = ({ handleClick }) => {
  return (
    <div>
      <h2 className='recomended-title'>Recommended </h2>
      <div className="recomended-flex">
        <button onClick={handleClick} value="" className='btns'>All products</button>
        <button onClick={handleClick} value="Nike" className='btns'>Nike</button>
        <button onClick={handleClick} value="Adidas" className='btns'>Adidas</button>
        <button onClick={handleClick} value="Puma" className='btns'>Puma</button>
        <button onClick={handleClick} value="Vans" className='btns'>Vans</button>
      </div>

    </div>
  )
}

export default Recomended