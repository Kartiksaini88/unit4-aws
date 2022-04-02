let mongoose =require("mongoose")

module.exports = ()=>{
    mongoose.connect("mongodb+srv://Kartik:1234@kartik.exjuu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}