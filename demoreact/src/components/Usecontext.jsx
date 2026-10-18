import React from 'react'
import { createContext } from 'react'
import Usecontxt2 from './usecontxt2.jsx'


export const data=createContext()


const Usecontext = () => {
    const name='Anssh'
  return (
    <div>
        <data.Provider value={name}>

           <Usecontxt2 /> 
        </data.Provider>
        
    </div>
  )
}

export default Usecontext