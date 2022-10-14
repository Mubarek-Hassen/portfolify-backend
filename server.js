require('./db.connection')

const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors = require('cors')
const methodOverride = require('method-override')
const morgan = require('morgan')
const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/portfolios', routes.portfolio)

app.get('/', (req, res)=>{
  res.send('Hi World')
})

app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`))