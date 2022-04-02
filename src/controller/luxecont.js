let express = require("express")

let router = express.Router()

let Luxe = require("../model/luxemodel")


router.post("",async(req,res)=>{
    try {
        let luxe = await Luxe.create(req.body)
        return res.status(201).send({luxe:luxe})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        let luxe = await Luxe.find().lean().exec()
        return res.status(201).send({luxe:luxe})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        let luxe = await Luxe.findById(req.params.id).lean().exec()
        return res.status(201).send({luxe:luxe})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let luxe = await Luxe.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({luxe:luxe})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        let luxe = await Luxe.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({luxe:luxe})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
module.exports = router