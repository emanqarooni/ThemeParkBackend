const axios = require("axios")
const Post = require("../models/themePark")

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.status(200).send(posts)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.status(200).send(post)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "Post Deleted", id: req.params.id })
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
  GetPosts,
  CreatePost,
  DeletePost,
  GetGames,
}
