let mongoose = require("mongoose")

let beautySchema = new mongoose.Schema(
    {
        img:{type:String,required:true}
    },
    {
        versionKey:false,
        
    }
)

module.exports = mongoose.model("beauty",beautySchema)