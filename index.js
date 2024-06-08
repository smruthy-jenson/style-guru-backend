require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')

const cartServer = express()
cartServer.use(cors())
cartServer.use(express.json())
cartServer.use(router)


const PORT = 3000 || process.env.PORT
cartServer.listen(PORT,()=>{
    console.log(`Style Guru Server started at port ${PORT}`);
})

cartServer.get('/',(req,res)=>{
    res.send(`<h1 style="color:blue;">Style Guru Server started and waiting for client request!!!</h1>`)
})