const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('promise');


const app = express();

mongoose.connect('mongodb://haniffaiq13:087881012700Hf#@ds157614.mlab.com:57614/gllosarium', {
    useMongoClient : true
});

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
const dataKata = require('./controller/kosakata')(app);
//create

app.listen(3000, () =>{
    console.log("Server is running");
});
