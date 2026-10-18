import express from "express"
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: 'http://localhost:5173' }, methods: ['GET', 'POST'] })

app.use(cors())

io.on('connection', (socket) => {
    console.log(`User Connected:${socket.id}`)

    socket.on('message', (message) => {
        console.log(`Message from ${socket.id}:${message}`)
        io.emit('message', message)
    })

    socket.on('disconnect', () => {
        console.log(`User Disconnected:${socket.id}`)
    })
})

const port = 5000
server.listen(port, () => {
    console.log(`server is running on port :${port}`)
})