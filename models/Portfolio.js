const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, 'Name cannot be empty']
  },
  profession: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: [true, 'You must show your smile! :)']
  },
  skills: [{skill: String}],
  projects: [{
    title: String,
    image: String,
    description: String,
    link: String
  }]
})

const Portfolio = mongoose.model("Portfolio", portfolioSchema)

module.exports = Portfolio;