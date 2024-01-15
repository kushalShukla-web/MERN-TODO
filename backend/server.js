const express = require("express");// express import 

const app = express();
//express app 

const mongoose = require('mongoose');
//mongoose
const cors = require("cors")
const routes = require('./routes/todoroutes')
require('dotenv').config();
app.use(express.json());
app.use(cors())
mongoose.connect(process.env.MONGODB_URL)//backend connect to the mongodb
.then(()=>{
    console.log("connected to mongodb")
})
.catch(()=>{
    console.log('error')
})
app.use(routes)
app.listen(5000, ()=>{
    console.log("Hello WOrld")
})