const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const pc = require('./products_controller')

const app = express()
app.use(bodyParser.json())
const { APP_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    app.set('db', db)
}).catch(err => {
    console.error('there was an error connecting to db', err)
})

app.get('/api/products', pc.getAll)
app.get('/api/products/:id', pc.getOne)
app.put('/api/products/:id', pc.update)
app.post('/api/products/', pc.create)
app.delete('/api/products/:id', pc.delete)

app.listen(APP_PORT, () => {
    console.log('Listening on port', APP_PORT)
})



