let express = require("express")

let router = express.Router()

let Brand = require("../model/brandsmodel")


router.post("",async(req,res)=>{
    try {
        let brand = await Brand.create(req.body)
        return res.status(201).send({brand:brand})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        let brand = await Brand.find().lean().exec()
        return res.status(201).send({brand:brand})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        let brand = await Brand.findById(req.params.id).lean().exec()
        return res.status(201).send({brand:brand})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let brand = await Brand.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({brand:brand})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        let brand = await Brand.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({brand:brand})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
module.exports = router