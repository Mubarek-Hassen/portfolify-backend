const express = require('express');
const router = express.Router()

const db = require('../models/Portfolio')

router.get('/portfolios', async (req, res, next) =>{
  try {
    res.json(await db.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router