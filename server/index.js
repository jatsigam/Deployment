const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005



app.use('/js', express.static(path.join(__dirname, 'server/index.js')))