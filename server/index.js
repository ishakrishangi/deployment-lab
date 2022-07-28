require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


//rollbar user access
app.get('/', (req, res) => {
    rollbar.info(`user accessed the main page`)
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// const students = ['Jimmy', 'Timothy', 'Jimothy']

// app.get('/api/students', (req, res) => {
//     rollbar.info('somebody got the student list')
//     res.status(200).send(students)
// })

// app.post('/api/students', (req, res) => {
//    let {name} = req.body

//    const index = students.findIndex(student => {
//        return student === name
//    })

//    try {
//        if (index === -1 && name !== '') {
//            students.push(name)
//            rollbar.log(`user ${name} created successfully`)
//            res.status(200).send(students)
//        } else if (name === ''){
//             rollbar.warning(`no name was given to add`)
//            res.status(400).send('You must enter a name.')
//        } else {
//             rollbar.critical(`user tried adding a name that already exists`)
//            res.status(400).send('That student already exists.')
//        }
//    } catch (err) {
//     rollbar.error(err)
//        console.log(err)
//    }
// })

// app.delete('/api/students/:index', (req, res) => {
//     const targetIndex = +req.params.index
    
//     students.splice(targetIndex, 1)
//     rollbar.warning(`student deleted`)
//     res.status(200).send(students)
// })

app.get("/api/findrecipe", (req, res) => {
    rollbar.error("oops we dont have a recipe yet");
    res.status(400).send(error);
  });








app.use(express.static(path.join(__dirname, "/../public"))) 

app.get('/', function(req,res) {
    res.sendFile(path.resolve('public/index.html'))
})


const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
