let express = require("express")

let router = express.Router()

let Kids = require("../model/kidsModel")


router.post("",async(req,res)=>{
    try {
        let kids = await Kids.create(req.body)
        return res.status(201).send({kids:kids})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

router.get("",async(req,res)=>{
    try {
        let kids = await Kids.find().lean().exec()
        return res.status(201).send({kids:kids})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

router.get("/:id",async(req,res)=>{
    try {
        let kids = await Kids.findById(req.params.id).lean().exec()
        return res.status(201).send({kids:kids})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let kids = await Kids.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({kids:kids})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        let kids = await Kids.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({kids:kids})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports = router