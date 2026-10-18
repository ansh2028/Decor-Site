import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io("http://localhost:5000")

const App = () => {
  const [messages, setmessage] = useState([])
  const [messageinput, setmessageinput] = useState('')

  useEffect(() => {
    socket.on('message', (message) => {
      setmessage((prev) => [...prev, message])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  const sendmessage = () => {
    if (messageinput.trim() !== '') {
      socket.emit('message', messageinput)
      setmessageinput('')
    }
  }

  return (
    <div>
      <h1>Simple Chat App</h1>

      <input 
        type='text' 
        value={messageinput} 
        placeholder='type your message...' 
        onChange={(e) => setmessageinput(e.target.value)}
      />
      <button onClick={sendmessage}>send</button>

      <section>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </section>
    </div>
  )
}

export default App