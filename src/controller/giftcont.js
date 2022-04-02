let express = require("express")

let router = express.Router()

let Gift = require("../model/giftmodel")


router.post("",async(req,res)=>{
    try {
        let gift = await Gift.create(req.body)
        return res.status(201).send({gift:gift})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        let gift = await Gift.find().lean().exec()
        return res.status(201).send({gift:gift})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        let gift = await Gift.findById(req.params.id).lean().exec()
        return res.status(201).send({gift:gift})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let gift = await Gift.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({gift:gift})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        let gift = await Gift.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({gift:gift})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
module.exports = router