require('./db.connection')

const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors = require('cors')
const morgan = require('morgan')