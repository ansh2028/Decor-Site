const express = require("express")

const app = express()
const userModel = require("./models/user")
const dbConnection = require("./config/db")



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

app.set("view engine", "ejs")

app.use((req, res, next) => {
    console.log("middleware used")
    next()
})

app.get("/", (req, res) => {
    res.render("index")

})

app.get('/register', (req, res) => {
    res.render("register")
})

app.post('/register', async (req, res) => {
    const { username, age } = req.body
    await userModel.create({
        username: username,
        age: age
    })
    res.send('registerd')
})


app.post("/formdata", (req, res) => {
    console.log(req.body)
    res.send('data recieved')
})

app.listen(3000)