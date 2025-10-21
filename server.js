const express = require("express")
const app = express()

const logger = require("morgan")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()
const PORT = process.env.PORT || 3000

const db = require("./config/db")

//use app
app.use(logger("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
const ThemeParkRouter = require("./routes/ThemePark")
app.use("/themeparks", ThemeParkRouter) // ✅ use routes

app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
