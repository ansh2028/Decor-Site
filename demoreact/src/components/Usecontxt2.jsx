import React, { useContext } from 'react'
import { data } from './usecontext'

const Usecontxt2 = () => {

    const username = useContext(data)
    return (
        // <data.consumer>
        //   {
        //     (name) => {
        //       return <h1>{name}</h1>
        //     }
        //   }
        // </data.consumer>
        <h1>my name is {username}</h1>

    )
}

export default Usecontxt2