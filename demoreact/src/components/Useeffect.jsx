import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Useeffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('call useeffect')
    document.title = `increment${count} times`
  }, [count])

  
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  )
}

export default Useeffect