const mongoose = require("mongoose")

//the schema is from the mongoose library
const themeParkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    country: {
      type: String,
    },
    timing: {
      type: String,
    },
    games: [Object],
  },
  {
    timestamps: true, //createdAt, updatedAt: if i want to create a record, you should be logging the when data is created and what time it is updated
  }
)

//creating the model then connect it with the schema
const themePark = mongoose.model("themePark", themeParkSchema)

//export the model
module.exports = themePark
