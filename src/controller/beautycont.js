let express = require("express")

let router = express.Router()

let Beauty = require("../model/beautymodel")


router.post("",async(req,res)=>{
    try {
        let beauty = await Beauty.create(req.body)
        return res.status(201).send({beauty:beauty})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        let beauty = await Beauty.find().lean().exec()
        return res.status(201).send({beauty:beauty})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        let beauty = await Beauty.findById(req.params.id).lean().exec()
        return res.status(201).send({beauty:beauty})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let beauty = await Beauty.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({beauty:beauty})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        let beauty = await Beauty.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({beauty:beauty})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
module.exports = router