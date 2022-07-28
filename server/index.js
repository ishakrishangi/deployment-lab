require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
// app.use(express.json())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.get("/api/findrecipe", (req, res) => {
    rollbar.error("oops we dont have a recipe yet");
    res.status(400).send("oops we dont have a recipe yet");
  });

app.use(express.static(path.join(__dirname, "/../public"))) 

app.get('/', function(req,res) {
    res.sendFile(path.resolve('public/index.html'))
})


const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
