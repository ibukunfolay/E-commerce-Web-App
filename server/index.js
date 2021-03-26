const express = require('express')
const http = require("http")
const PORT = process.env.PORT||5000
const app = express()

const server = http.createServer(app)

server.listen(PORT, ()=>(
    console.log("server bingo")
))

//middleware

const data = require('./data.js')

app.get('/api/products/:id', (req,res)=>{
    const productId = req.params.id
    const product = data.products.find(x=>x.id === productId)
    if(product)
        res.send(product)
    else
        res.status(404).send({msg: "can't find that"})
})

app.get('/api/products', (req,res)=>{
    res.send(data.products)
})

