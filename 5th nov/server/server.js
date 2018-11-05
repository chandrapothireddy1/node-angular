var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
console.log(__dirname);

app.use(express.static(path.join(__dirname,"../dist/train/")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.post("/register",function(req,res){
    console.log(req.body.firstname);
})
app.use(router);
app.listen(3000);
console.log("server is listening on port 3000");