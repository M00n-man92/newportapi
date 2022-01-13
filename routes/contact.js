const express = require('express')
const route = express.Router()
const Contact = require('../model/contactModel')
route.post('/new',async(req,res)=>{
 
const con=req.body
    try{
const reaponce=new Contact(con)
reaponce.save().then(()=>{
    return res.status(201).json({msg:"successfuly added",success:true,data:reaponce})
}).catch((e)=>{
    return res.send("error on "+e)
})
    }
    catch(e){
        return res.status(500).json({ msg: "error on " + e, success: false })

    }
})
route.get("/find",async(req,res)=>{
    const newone=req.query.new

    try{

        const responce=newone?await Contact.find().limit(5):await Contact.find()
    if(!responce){
        return res.send("no one ants you to work for em")

    }
    else{
        return res.status(201).json({msg:"successfully fethed the data",success:true,data:responce})
    }
    }
    catch(e){
        return res.status(500).json({ msg: "error on " + e, success: false })

    }
})
module.exports=route