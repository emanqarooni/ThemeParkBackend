const express = require("express")
const app = express()

const logger = require("morgan")
const dotenv = require("dotenv")

const PORT = process.env.PORT || 3000

const db = require("./config/db")

const themeParkRouter = require("./routes/ThemePark")

//use app
app.use(logger("dev"))
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use("/", (req, res) => {
  res.send(`Connected!`)
})
app.use("/themeparks", themeParkRouter)

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
