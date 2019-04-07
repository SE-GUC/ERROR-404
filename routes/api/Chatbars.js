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
     const { debateLiveTitle,date} = req.body
     const newMotion = new Chatbars({
        debateLiveTitle ,
        date ,
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

router.put('/for/:id/:userid',async(req,res)=>{

 
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
        const notification=await User.findOneAndUpdate({_id:userid},{$push:{notification:response}})
        res.json({data:getChatbarNew })
    }
    catch(error){
        console.log(error)
    }
})
router.put('/against/:id/:userid',async(req,res)=>{
    

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
        const notification=await User.findOneAndUpdate({_id:userid},{$push:{notification:response}})
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

router.delete('/:id',(req,res)=>{
    const id = req.params.id
    Chatbars.findByIdAndDelete(id)
    .exec()
    .then(()=>{return res.json({data :'Deleted Successfully'})})
    .catch(err =>{ return res.json({err : 'ERROR while deleting'})})
})
module.exports = router;


