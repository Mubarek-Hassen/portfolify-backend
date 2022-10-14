require('./db.connection')

const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')
const { urlencoded } = require('express')

app.use(express.urlencoded({extended: true}))
app.use('/portfolio', routes.portfolio)

app.get('/', (req, res)=>{
  res.send('Hi World')
})

app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`))