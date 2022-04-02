let mongoose =require("mongoose")

module.exports = ()=>{
    mongoose.connect("mongodb+srv://Kartik:1234@kartik.exjuu.mongodb.net/db1?retryWrites=true&w=majority")
}