const express = require('express')

const db = require('./utils/products.db')
const initModels = require('./models/initModels')
const config = require('./config')
const productsRouter = require('./products/products.router')

const app = express()

db.authenticate()
    .then(() => console.log('DB succesfully authenticated!'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('DB synced!'))
    .catch((err) => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.use('/products', productsRouter)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}!`)
})