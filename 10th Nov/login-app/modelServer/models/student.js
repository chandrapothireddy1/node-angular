var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var StudentSchema = new Schema({
    fname:String,
    lname:String,
    username:String,
    password:String
})
mongoose.model("Student",StudentSchema);