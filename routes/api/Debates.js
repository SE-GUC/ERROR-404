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
router.get('/',(req,res)=>{
    let data = `<a href="Debates/searchbydate">Search by Date</a><br>`;
    Debate.find({}).exec().then(doc => {
        for (let i = 0 ; i< doc.length ; i++ ) {
            // console.log(cur);
            data += (`<a href="Debates/${doc[i]._id}">${doc[i].title}</a><br>`)
         }
    }).
    then(()=>{return res.send(data)})
    .catch(err => {console.log(err); return Response.send('Sorry couldnt load the debates !')});})

//Displaying a debate by id
router.get('/:id', (req, res) => {
    Debate.findById(req.params.id).exec().then(doc => {return res.send([doc.title,doc.category,doc.info,doc.description,doc.date])})
    .catch(err => {res.send('Sorry could not fetch this debate')})
})

//###################
//User Story 
//TIQ admins'' should be able to create a new debate
//################## 
router.post('/', (req, res) => {
    const title = req.body.title
    const category = req.body.category
    const date = req.body.date
    const description = req.body.description
    const info = req.body.info
    const schema = {
        title: joi.string().min(3).required(),
        category: joi.string().required(),
        date: joi.date().required(),
        description: joi.string(),
        info: joi.string()
    }
    const result = joi.validate(req.body, schema)
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    new Debate({
        _id: mongoose.Types.ObjectId(),
        title : req.body.title,
        category : req.body.category,
        date : req.body.date,
        description  : req.body.description,
        info : req.body.info
    
      }).save()
        .then(res.redirect('/Debates'))
        .catch(err => { console.log(err); return res.send(`Sorry, could not create a new debate with this data !`) })})
    
    

//###################
//User Story 
//TIQ admins* should be able to update an existing debate 
//################## 
router.put('/:id', (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const category = req.body.category
    const date = req.body.date
    const description = req.body.description
    const info = req.body.info
    const schema = {
        title: joi.string().min(3),
        category: joi.string(),
        date: joi.date(),
        description: joi.string(),
        info: joi.string()
    }
    const result = joi.validate(req.body, schema)
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    Debate.findByIdAndUpdate(id,req.body).exec().then(doc => {return res.redirect(`/Debates/${id}`)}).catch(err => {console.log(err);return Response.send('Sorry Could not updatea debate with that id')})
})


//###################
//User Story 
//TIQ admins* should be able to delete an existing debate 
//################## 
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Debate.findByIdAndDelete(id)
    .exec()
    .then(doc => {return res.redirect('/Debates')})
    .catch(err => {res.send('Could not delete a debate with thid id')})
})


//###################
//User Story 
//TIQ users should be able to search for a debate by date
//################## 
router.get('/searchbydate/:date', (req,res)=>{
    const date = req.params.date;
    const formatteddate = new Date(date)
    const schema = {
        date : joi.date()
    }
    const result = joi.validate(req.body,schema);
    if (result.error) return res.status(400).send({error : result.error.details[0].message});
    let data = '';
    Debate.find({date : formatteddate})
    .exec()
    .then(doc => {
        for (let i = 0  ; i< doc.length ; i++)
        data += (`<a href="http://localhost:3000/api/Debates/${doc[i]._id}">${doc[i].title}</a><br>`)
        if (doc.length==0) data = 'No Debates were held on this date'
    })
    .then(()=>{return res.send(data)})
    .catch(err => {res.send('Sorry Could not find any Debates with this date')})
})



module.exports = router