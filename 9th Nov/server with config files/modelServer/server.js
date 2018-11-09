var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
var router = express.Router();
console.log(__dirname);

var config = require("./config/config");
mongoose.connect(config.local.db);

require("./models/student");
var Student = mongoose.model("Student");

app.use(express.static(path.join(__dirname,"../dist/train/")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.post("/api/registerUser",function(req,res){
    var theStudent = new Student(req.body);
    theStudent.save(function(err){
        res.json(theStudent);
    })
});

router.get("/api/listusers",function(req,res){
    Student.find({}).exec(function(err,students){
        if(err){
            res.failure(err)
        }else{
            res.json(students);
        }
    })
});

router.get("/api/editUser/:id",function(req,res){
    Student.findOne({_id:req.params.id}).exec(function(err,student){
        if(err){
            res.failure(err)
        }else{
            res.json(student);
        }
    })
});

router.put("/api/updateUser",function(req,res){
    var theStudent = new Student(req.body);
    var sid = req.body._id;
    Student.findById(sid,function(err,doc){
        doc.fname = req.body.fname;
        doc.lname = req.body.lname;
        doc.save(function(){
            res.json(doc);
        })
    })
});

router.delete("/api/deleteUser/:id",function(req,res){
    var theStudent = new Student(req.body);
    var sid = req.params.id;
    Student.findById(sid,function(err,doc){
        doc.remove(function(){
            res.json({message:"deleted"});
        })
    })
});

app.use(router);
app.listen(3000);
console.log("server is listening on port 3000");