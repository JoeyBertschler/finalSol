require('dotenv').config()

const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json()) // plug bunch o mw
server.use(cors())

//endpoints

server.get('api/hello', (req, res) => {
    res.json({message: 'api is working'})
})

//catch all
server.use('*', (req, res)=>{
    res.send('<h1>Hello there</h1>')
})

//only err after
server.use( (err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        oneMessage: "Something went very wrong",
        message: err.message,
        stack: err.stack
    })
})

const PORT = process.env.PORT || 9000
server.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})
//console.log(process.env.PORT, process.env.NODE_ENV)