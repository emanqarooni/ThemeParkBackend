const axios = require("axios")
const ThemePark = require("../models/themePark")

//get all theme parks
const GetThemePark = async (req, res) => {
  try {
    const parks = await ThemePark.find({})
    res.status(200).send(parks)
  } catch (error) {
    console.error("Error fetching theme parks:", error)
    res.status(500).send("Error fetching theme parks")
  }
}

//create a new theme park
const CreateThemePark = async (req, res) => {
  try {
    const newPark = await ThemePark.create(req.body)
    res.status(201).send(newPark)
  } catch (error) {
    console.error("Error creating theme park:", error)
    res.status(500).send("Error creating theme park")
  }
}

//delete a theme park
const DeleteThemePark = async (req, res) => {
  try {
    await ThemePark.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "ThemePark Deleted", id: req.params.id })
  } catch (error) {
    console.error("Error deleting theme park:", error)
    res.status(500).send("Error deleting theme park")
  }
}

//get games from external Park Fan API
const GetGames = async (req, res) => {
  try {
    const response = await axios.get("https://api.park.fan/games")
    res.status(200).json(response.data)
  } catch (error) {
    console.error("Error fetching games:", error)
    res.status(500).send("Error fetching games from Park Fan API")
  }
}

module.exports = {
  GetThemePark,
  CreateThemePark,
  DeleteThemePark,
  GetGames,
}
