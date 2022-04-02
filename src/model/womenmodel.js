let mongoose = require("mongoose")

let womenSchema = new mongoose.Schema(
    {
        img:{type:String,required:true}
    },
    {
        versionKey:false,
        
    }
)

module.exports = mongoose.model("women",womenSchema)