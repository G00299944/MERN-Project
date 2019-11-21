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

const assessmentSchema = new Schema({
    name:String,
    subject:String,
    weight:Number,
    grade:Number
});

const userSchema = new Schema( {
    username:String,
    password:String
    //TODO: embed subjects and assessments here?
});

const AssessmentModel = mongoose.model("assessment", assessmentSchema);
const UserModel = mongoose.model("user", userSchema);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// == REGISTER == https://medium.com/@Keithweaver_/building-a-log-in-system-for-a-mern-stack-39411e9513bd
// app.post('/reg/', (req, res, next) => {
//     const {body} = req;
//     const {
//         password
//     } = body;

//     if (!)
// })

// app.get('/reg/:username', (req, res) => {
//     UserModel.exists(req.params.username), (err, res) => {
//         res.json(data);
//     }
// })
// app.post('/reg/', (req, res) => {

//     //console.log(UserModel.exists({username: req.params.username}))
//     // if(UserModel.exists({username: req.params.username}) == true) {
//     //     console.log("FOUND");
//     // }
//     // else {
//     //     console.log("NOT FOUND");
//     // }


//     // UserModel.find({username: req.params.username}, (error, data) => {
//     //     if(error) {
//     //         console.log("ERROR NOT FOUND?");
//     //         res.json(error);
//     //     }
//     //     else {
//     //         console.log("USER FOUND?" + data);
//     //         res.json(data)
//     //     }
//     // })

//     // UserModel.create({
//     //     username: req.body.username,
//     //     password: req.body.password
//     // });

//     //res.json("DEBUG - NEW USER REGISTERED");
// })

// == CREATE ==
app.post('/api/assessments', (req, res) => { 
    AssessmentModel.create({
        name: req.body.name,
        subject: req.body.subject,
        weight: req.body.weight,
        grade: req.body.grade
    });

    res.json("DEBUG - DATA UPLOADED");
})

// == READ ==
app.get("/api/assessments", (req, res) => { 
    AssessmentModel.find((error, data) => {
        res.json({assessments:data});
    })
})

// == UPDATE ==
app.get("/api/assessments/:id", (req, res) => {
    AssessmentModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.put('/api/assessments/:id', (req, res) => {
    AssessmentModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, data) => {
        res.json(data);
    })
})

// == DELETE ==
app.delete("/api/assessments/:id", (req, res) => {
    console.log(req.params.id);
    AssessmentModel.deleteOne({_id: req.params.id}, (error, data) => {
        if(error) {
            res.json(error);
        }
        else {
            res.json(data);
        }
    })
})

// == LOGIN == 


