const express = require('express')
const { readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils.js')
const path = require('path')
const app = express()
const fs = require('fs')
const util = require('util')
const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 5000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Set static folder
app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
app.post('/notes', (req, res) => req.sendFile(path.join(__dirname, '/db/db.html')));



//Notes API route
app.get('/api/notes', (req, res) => {

})

app.post('/db/db'), (req,res) => {
    console.log(req.body)
}
// app.use('./public/notes', require('./public/notes'))






app.listen(PORT, () => console.log(`Server started on port ${PORT}`))