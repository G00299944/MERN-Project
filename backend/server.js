const express = require('express');
const app = express();
const port = 4000;
const path = require('path'); //this gets the current directory 
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const mongodb = "mongodb+srv://fred:fred@cluster0-9zu60.mongodb.net/MERN-ProjectDB?retryWrites=true&w=majority";
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

const subjectSchema = new Schema( {
    name: String,
    credits: Number
})

const SubjectModel = mongoose.model("subject", subjectSchema);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// == CREATE ==
app.post('/api/subjects', (req, res) => { 
    SubjectModel.create({
        name: req.body.name,
        credits: req.body.credits
    });

    res.json("DEBUG - DATA UPLOADED");
})

// == READ ==
app.get("/api/subjects", (req, res) => { 
    SubjectModel.find((error, data) => {
        res.json({subjects:data});
    })
})

// == UPDATE ==
app.get("/api/subjects/:id", (req, res) => {
    SubjectModel.findById(req.params.id, (error, data) => {
        res.json(data);
        console.log("boom");
    })
})

app.put('/api/subjects/:id', (req, res) => {
    SubjectModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, data) => {
        res.json(data);
    })
})

// == DELETE ==
app.delete("/api/subjects/:id", (req, res) => {
    console.log(req.params.id);
    SubjectModel.deleteOne({_id: req.params.id}, (error, data) => {
        if(error) {
            res.json(error);
        }
        else {
            res.json(data);
        }
    })
})


