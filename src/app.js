const express = require('express')

const productRouter = require('./products/products.router')

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).json({message: 'OK!'})
})

app.use("/", productRouter)

const port = 8000;

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})