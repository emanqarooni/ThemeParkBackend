const axios = require("axios")
const themePark = require("../models/themePark")
const GetThemePark = async (req, res) => {
  try {
    const themePark = await themePark.find({})
    res.status(200).send(themePark)
  } catch (error) {
    throw error
  }
}
const CreateThemePark = async (req, res) => {
  try {
    const themePark = await themePark.create(req.body)
    res.status(200).send(themePark)
  } catch (error) {
    throw error
  }
}
const DeleteThemePark = async (req, res) => {
  try {
    await themePark.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "ThemePark Deleted", id: req.params.id })
  } catch (error) {
    throw error
  }
}

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
