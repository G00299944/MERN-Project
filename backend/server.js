const express = require('express');
const app = express();
const port = 4000;
const path = require('path'); //this gets the current directory 
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const mongodb = "mongodb+srv://fred:fred@cluster0-9zu60.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongodb, {useNewUrlParser:true});

const cors = require('cors'); app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
    name:String,
    subject:String,
    weight:Number,
    grade:Number
});

const AssessmentModel = mongoose.model("assessment", assessmentSchema);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/api/assessments", (req, res) => {
    AssessmentModel.find((error, data) => {
        res.json({assessments:data});
    })
})

app.post('/api/assessments', (req, res) => {
    console.log(req.body);

    AssessmentModel.create({
        name: req.body.name,
        subject: req.body.subject,
        weight: req.body.weight,
        grade: req.body.grade
    });

    res.json("DEBUG - DATA UPLOADED");
})