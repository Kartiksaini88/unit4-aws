let express = require("express")

let router = express.Router()
let Men = require("../model/menmodel")

router.post("",async(req,res)=>{
    try {
        let men = await Men.create(req.body)
        return res.status(201).send({men:men})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        let men = await Men.find().lean().exec()
        return res.status(201).send({men:men})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        let men = await Men.findById(req.params.id).lean().exec()
        return res.status(201).send({men:men})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let men = await Men.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({men:men})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        let men = await Men.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({men:men})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports = router