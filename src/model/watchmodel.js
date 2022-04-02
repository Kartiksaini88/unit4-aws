let mongoose = require("mongoose")

let watchSchema = new mongoose.Schema(
    {
        img:{type:String,required:true}
    },
    {
        versionKey:false,
        
    }
)

module.exports = mongoose.model("watch",watchSchema)