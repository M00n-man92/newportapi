const express = require('express')
const route = express.Router()
const Data = require('../model/dataModel')
route.post('/new', async (req, res) => {

    const data = req.body
    try {
        const respone = new Data(data)
        const realone = await respone.save()

        if (!realone) {
            return res.send("error on ")
        }
        else {
            return res.status(201).json({ msg: "successfully added data", success: true, data: realone })
        }

    }
    catch (e) {
        return res.status(500).json({ msg: "error on " + e, success: false })
    }

})
route.get('/find', async (req, res) => {
    try {
        const responce = await Data.find()
        if (!responce) {
            return res.send("error on ")

        }
        else {

            return res.status(201).json({ msg: "successfully added data", success: true, data: responce })

        }
    }
    catch (e) {
        return res.status(500).json({ msg: "error on " + e, success: false })
    }
})
route.get('/find/:id', async (req, res) => {
    const id = req.params.id
    try {
        const responce = await Data.findOne({ _id: id })
        if (!responce) {
            return res.send("error on ")

        }
        else {
            return res.status(201).json({ msg: "succesfully fetched the data", success: true, data: responce })
        }
    }
    catch (e) {
        return res.status(500).json({ msg: "error on " + e, success: false })

    }
})
route.put('/update/:id', async (req, res) => {
    const id = req.params.id
    try {
        const responce = await Data.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true })
        if (!responce) {
            return res.send("error on ")

        }
        else{
            return res.status(201).json({ msg: "succesfully fetched the data", success: true, data: responce })

        }
    }
    catch (e) {
        return res.status(500).json({ msg: "error on " + e, success: false })

    }
})
route.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id
    try{
        const responce=await Data.findOneAndDelete({_id:id})
        if(responce){
            res.status(201).json({msg:"delted successfuly",success:true})
        }
    }
    catch(e){
        return res.status(500).json({ msg: "error on " + e, success: false })
 
    }
})
module.exports = route