let express = require("express")

let router = express.Router()
let Homestop= require("../model/homestopmodel")

router.post("",async(req,res)=>{
    try {
        let homestop = await Homestop.create(req.body)
        return res.status(201).send({homestop:homestop})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        let homestop = await Homestop.find().lean().exec()
        return res.status(201).send({homestop:homestop})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        let homestop = await Homestop.findById(req.params.id).lean().exec()
        return res.status(201).send({homestop:homestop})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let homestop = await Homestop.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({homestop:homestop})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        let homestop = await Homestop.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({homestop:homestop})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports = router