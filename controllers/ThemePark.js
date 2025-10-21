const themePark = require('../models/themePark')
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
    res.status(200).send({ msg: 'ThemePark Deleted', id: req.params.id })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetThemePark,
  CreateThemePark,
  DeleteThemePark,
}
