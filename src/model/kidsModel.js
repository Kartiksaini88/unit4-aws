let mongoose = require("mongoose")

let kidSchema = new mongoose.Schema(
    {
        img:{type:String,required:true}
    },
    {
        versionKey:false,
        
    }
)

module.exports= mongoose.model("kid",kidSchema)