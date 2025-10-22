const express = require("express")
const router = express.Router()
const games = require("../data/games.json")

router.get("/", (req, res) => {
  res.json(games)
})

module.exports = router
