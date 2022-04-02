let mongoose = require("mongoose")

let giftSchema = new mongoose.Schema(
    {
        img:{type:String,required:true}
    },
    {
        versionKey:false,
        
    }
)

module.exports = mongoose.model("gift",giftSchema)