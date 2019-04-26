const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Chatbars = require('../../models/Chatbar')
const User = require('../../models/User')
const chatBarValidator = require('../../validations/chatBarValidations')


router.get('/',async (req,res)=>{
    const chats = await Chatbars.find()
    res.json({data:chats})
})



                              

router.post('/create', async (req,res) => {
    try {
     const isValidated = chatBarValidator.createValidation(req.body)
    
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
 
    //  const newChatBar = await chatbars.create(req.body)
    const { debateLiveTitle} = req.body
    var currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth(); 
    const year = currentDate.getFullYear();
    const newMotion = new Chatbars({
       debateLiveTitle ,
       date: date + "-" +(month + 1) + "-" + year ,
       numberOfResponses:0
     
    
 })
  
  const newChatBar=await Chatbars.create(newMotion)
          
return res.json({msg:'A new chatBar was created successfully :)', data: newChatBar})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.put('/for/:id/',async(req,res)=>{
    //will add it again for the notification
//:userid
 
    try{
        const chatBarId=req.params.id
        const response =req.body.forResponses
        const userid = req.params.userid
        const getchatBar= await Chatbars.findOne({_id:chatBarId})
        if(!getchatBar) return res.status(400).send({msg:'This Debate live is not found'})
        const isValidated = chatBarValidator.updateValidation(req.body)
        if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const addnumberofResponse = 1
        const updatedchatBar=await Chatbars.findOneAndUpdate({_id:chatBarId},{$push:{forResponses:response}})
        const updateNumberofResponse =await Chatbars.findOneAndUpdate({_id:chatBarId},{$inc:{numberOfResponses: addnumberofResponse}})
        const getChatbarNew =await Chatbars.findOne({_id:chatBarId})
       // const notification=await User.findOneAndUpdate({_id:userid},{$push:{notification:response}})
        res.json({data:getChatbarNew })
    }
    catch(error){
        console.log(error)
    }
})
router.put('/against/:id',async(req,res)=>{
    //will add it again for the notification
    // /:userid
    try{
        const chatBarId=req.params.id
        const response =req.body.againstResponses
        const userid = req.params.userid
        const getchatBar= await Chatbars.findOne({_id:chatBarId})
        if(!getchatBar) return res.status(400).send({msg:'This Debate live is not found'})
        const isValidated = chatBarValidator.updateValidation(req.body)
        if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const addnumberofResponse = 1
        const updatedchatBar=await Chatbars.findOneAndUpdate({_id:chatBarId},{$push:{againstResponses:response}})
        const updateNumberofResponse =await Chatbars.findOneAndUpdate({_id:chatBarId},{$inc:{numberOfResponses: addnumberofResponse}})
        const getChatbarNew =await Chatbars.findOne({_id:chatBarId})
       // const notification=await User.findOneAndUpdate({_id:userid},{$push:{notification:response}})
        res.json({data:getChatbarNew })
    }
    catch(error){
        console.log(error)
    }
})



router.get('/search/:keyWord',async(req,res)=>{
    const keyWord=req.params.keyWord
    const chatBar = await Chatbar.find({ "debateLiveTitle" : { $regex: keyWord, $options: 'i' } })
    // const user = await User.find({'lastName':keyWord})

    if(chatBar.length===0) return res.status(404).send({error: 'ChatBar with that key word doesnt exisit'})
    return res.json({data:chatBar})
         
    })


router.get('/:id',async (req,res)=>{
    
    const motionId = req.params.id
  
    const motion = await Chatbars.findById({_id:motionId})
    res.send(motion)
   
    })


// router.get('/', async (req, res) => {
//     const chatbar = await Chatbars.find();
//     res.json({data: chatbar});

// })

router.delete('/:id', async (req,res) =>{
    try {
        const id = req.params.id
        const deletedChatbar = await Chatbars.findByIdAndRemove({_id:id})
        res.json({msg:'Debate Live was deleted successfully', data: deletedChatbar})
       }
       catch(error) {
        console.log(error)
    }  
})

router.get ('/getAllForResponses/:id',async (req,res)=>{
    const motionId = req.params.id
    const motion = await Chatbars.findById({_id:motionId})
    const getAllForResponses = motion.forResponses
    res.send(getAllForResponses)
})
router.get ('/getAllAgainstResponses/:id',async (req,res)=>{
    const motionId = req.params.id
    const motion = await Chatbars.findById({_id:motionId})
    const getAllAgainstResponses = motion.againstResponses
    res.send(getAllAgainstResponses)
})
router.get ('/getTitle/:id',async (req,res)=>{
    const motionId = req.params.id
    const motion = await Chatbars.findById({_id:motionId})
    const getTitle = motion.debateLiveTitle
    res.send(getTitle)
})

module.exports = router;


