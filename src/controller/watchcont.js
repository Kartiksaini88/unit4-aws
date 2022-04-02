let express = require("express")

let router = express.Router()
let Watch = require("../model/watchmodel")

router.post("",async(req,res)=>{
    try {
        let watch = await Watch.create(req.body)
        return res.status(201).send({watch:watch})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        let watch = await Watch.find().lean().exec()
        return res.status(201).send({watch:watch})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        let watch = await Watch.findById(req.params.id).lean().exec()
        return res.status(201).send({watch:watch})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let watch = await Watch.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({watch:watch})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        let watch = await Watch.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({watch:watch})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports = router