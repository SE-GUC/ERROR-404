const express = require('express');
const router = express.Router();
const joi = require('joi')
const uuid = require('uuid')
const Content = require('../../models/Content')
//const Content = require('../../schemas/Alumni')

//temp data for testing
const Contents = [
    {
       description: 'blabla',
        type:'member',
        date: 1/1/2010,


    },
    {
        description: 'up',
         type:'admin',
         date:2/1/2010
         
     },
     {
        description: 'down',
         type:'user',
         date:3/1/2010
         
 
     },
     {
        description: 'left',
         type:'tech',
         date: 4/1/2010
        
     }


]


router.post('/', (req, res) => {
    const description = req.body.description
    const type = req.body.type
    const date = req.body.date
    const schema ={
        description:joi.string().required(),
        type:joi.string().required(),
        date:joi.date().required()


    };
    const result= joi.validate(req.body,schema);
    if(result.error)
    return res.status(400).send({error: result.error.details[0].message});

    const NewContents = {
        type: type,
        date: date,
        description: description,
    }
    Contents.push(NewContents)
    res.send(Contents)
})

router.put('/:id', (req, res) => {
    const ContentId = req.params.id 
    const updatedType = req.body.type
    const updatedDate= req.body.date
    const updateddesc = req.body.description
    const schema ={
        description:joi.string(),
        type:joi.string(),
        date:joi.date()


    };
    const result= joi.validate(req.body,schema);
    if(result.error)
    return res.status(400).send({error: result.error.details[0].message});


    const x = Contents.find(Contents => Contents.id === ContentId)
    x.type= updatedType 
    x.date= updatedDate
    x.description= updateddesc
     res.send(Contents)
})
module.exports = router;

