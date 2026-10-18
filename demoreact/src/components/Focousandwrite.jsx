import React, { use } from 'react'
import { useRef } from 'react'

const Focousandwrite = () => {
    const inputelement=useRef(null)
    function focousinput(){
        inputelement.current.focus();
        inputelement.current.value="ansh"
       
    }
  


  return (
    <div>
        <input ref={inputelement} type="text" />
        <button onClick={()=>focousinput()}>focous and write</button>
    </div>
  )
}

export default Focousandwrite