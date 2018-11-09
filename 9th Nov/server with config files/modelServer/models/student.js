var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var StudentSchema = new Schema({
    fname:String,
    lname:String
})
mongoose.model("Student",StudentSchema);