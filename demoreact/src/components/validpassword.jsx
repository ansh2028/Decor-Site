import React, { isValidElement } from 'react'
const validpassword=()=><h1>valid password</h1>
const invalidpassword=()=><h1>invalid password</h1>

const password= ({isValid}) => {
//     if(isValid){
//         return <validpassword />
//     }
//     return <invalidpassword />
// }
return isValid?<validpassword />:<invalidpassword />
}

const Validpassword = () => {
  return (
    <div>password isvalid= {true}</div>
  )
}

export default validpassword