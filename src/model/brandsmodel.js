let mongoose = require("mongoose")

let brandSchema = new mongoose.Schema(
    {
        img:{type:String,required:true},
        name:{type:String,required:true}
    },
    {
        versionKey:false,
        
    }
)

module.exports = mongoose.model("brand",brandSchema)