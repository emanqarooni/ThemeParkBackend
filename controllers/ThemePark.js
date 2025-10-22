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

//get theme park by id for the details page
const GetThemeParkById = async (req, res) => {
  try {
    const park = await ThemePark.findById(req.params.id)
    res.status(200).send(park)
  } catch (error) {
    res.status(500).send("Error fetching theme park")
  }
}

module.exports = {
  GetThemePark,
  CreateThemePark,
  DeleteThemePark,
  GetThemeParkById,
}
