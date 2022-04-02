let mongoose = require("mongoose")

let menSchema = new mongoose.Schema(
    {
        img:{type:String,required:true}
    },
    {
        versionKey:false,
        
    }
)

module.exports= mongoose.model("men",menSchema)

