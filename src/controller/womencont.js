let express = require("express")

let router = express.Router()

let Women = require("../model/womenmodel")


router.post("",async(req,res)=>{
    try {
        let women = await Women.create(req.body)
        return res.status(201).send({women:women})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        let women = await Women.find().lean().exec()
        return res.status(201).send({women:women})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        let women = await Women.findById(req.params.id).lean().exec()
        return res.status(201).send({women:women})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let women = await Women.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({women:women})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        let women = await Women.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({women:women})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
module.exports = router