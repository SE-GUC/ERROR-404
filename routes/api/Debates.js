const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Debate = require('../../models/Debate')
const joi = require('joi')

//###################
//User Story 
//TIQ user should be able to read debates
//################## 
//Displaying all debates on the Debate page
router.get('/', (req,res)=>{
        Debate.find().then(doc =>{return res.json({data:doc})})
        .catch(err=>{return res.json({err : 'Sorry could not display the debates'})})
})

//Displaying a debate by id
router.get('/:id', async (req, res) => {
    Debate.findById(req.params.id).then(doc =>{return res.json({data:doc})})
    .catch(err=>{return res.json({err : 'Sorry could not display the debates'})})
})

//###################
//User Story 
//TIQ admins'' should be able to create a new debate
//################## 
router.post('/', (req, res) => {
    const schema = {
        title: joi.string().min(3).required(),
        category: joi.string().required(),
        date: joi.date().required(),
        description: joi.string(),
        info: joi.string()
    }
    const result = joi.validate(req.body, schema)
    if (result.error) return res.json({ err: result.error.details[0].message });
    new Debate({
        _id: mongoose.Types.ObjectId(),
        title : req.body.title,
        category : req.body.category,
        date : req.body.date,
        description  : req.body.description,
        info : req.body.info
    
      }).save().then(doc=>{return res.json({data :doc})})
        .catch(err => { console.log(err); return res.json({err :`Sorry, could not create a new debate with this data !`}) })})
    
    

//###################
//User Story 
//TIQ admins* should be able to update an existing debate 
//################## 
router.put('/:id', (req, res) => {
    const id = req.params.id
    const schema = {
        title: joi.string().min(3),
        category: joi.string(),
        date: joi.date(),
        description: joi.string(),
        info: joi.string()
    }
    const result = joi.validate(req.body, schema)
    if (result.error) return res.json({ err: result.error.details[0].message });
    Debate.findByIdAndUpdate(id,req.body).exec()
    .then(doc => {return res.json({data : 'Updated Successfully'})})
    .catch(err => {console.log(err);return res.json({err:'Sorry Could not update debate with that id'})})
})


//###################
//User Story 
//TIQ admins* should be able to delete an existing debate 
//################## 
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Debate.findByIdAndDelete(id)
    .exec()
    .then( doc =>{return res.json({data  : 'Deleted Successfully'})})
    .catch(err => { return res.json({err :'Could not delete a debate with this id'})})
})


//###################
//User Story 
//TIQ users should be able to search for a debate by date
//################## 
router.get('/searchbydate/:date', async (req,res)=>{
    const date = req.params.date;
    const formatteddate = new Date(date)
    const schema = {
        date : joi.date()
    }
    const result = joi.validate(req.body,schema);
    if (result.error) return res.json({err : result.error.details[0].message});
    const dbs = await Debate.find({date : formatteddate})
    if(dbs.length===0) return res.status(404).json({err: 'Debates with this date do not exisit'})
    return res.json({data:dbs})

})




//TIQ users should be able to search for a debate by category
//################## 

// function searchByCategory(cat){
//     cat=req.body.category
//    const result= Debate.find(cat)
//    console.log(result)

router.get('/Search/:category',async(req,res)=>{
    const cat=req.params.category

    
     const dbs = await Debate.find({category:cat})
     console.log(dbs)
     console.log(!dbs)
     if(dbs.length===0) return res.status(404).json({err: 'Article with that category doesnt exisit'})
    return res.json({data:dbs})
         
    })
   

module.exports = router

