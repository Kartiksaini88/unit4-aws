let mongoose = require("mongoose")

let luxeSchema = new mongoose.Schema(
    {
        img:{type:String,required:true}
    },
    {
        versionKey:false,
        
    }
)

module.exports = mongoose.model("luxe",luxeSchema)