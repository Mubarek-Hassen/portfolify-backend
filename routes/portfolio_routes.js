const express = require('express');
const router = express.Router()

const db = require('../models/Portfolio')

router.get('/', async (req, res, next) =>{
  try {
    res.json(await db.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})
router.post('/', async (req, res) =>{
  try {
    res.json(await db.create(req.body))
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})

module.exports = router