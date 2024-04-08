const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DonateModel = require('./models/donate.model')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/NGO_Site_2");

app.post('/donation-form', (req, res) => {
    // console.log(req.body);
    DonateModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log("Server is Running....... :) Yeah Buddy")
})