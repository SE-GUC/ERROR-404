const express = require('express');
const router = express.Router();

const update = require('../../models/user');
//temp data for testing
const users = [
    {
        type:'member',
        firstname:'Mahy',
        lastname: 'Ali',
        birth_date:'23-4-1994',
        bio: 'expert debater ',
        email: 'mali@gmail.com',
        password:'mahy94',
        house:'Pegasus',
        score: 278,
        din:'1-10-2017',
        dor:null,
        clubs:['TIQ'],
        id : '1'

    }];
    router.get('/', (req, res) => res.json({ data: users }))

   
    router.put('/api/update/:id',(req,res)=>{
        const userid =req.params.id;
        const updatedfname= req.body.firstname
        const updatedlname = req.body.lastname
        const updatedemail = req.body.email
        const updatedpass = req.body.password
        const updatedbdate = req.body.birth_date
        const updatedbio = req.body.bio
        const updatedhouse = req.body.house
        const updatedscore = req.body.score
        const updatedin = req.body.din
        const updatedor = req.body.dor
        const updatedclubs = req.body.clubs
        const userf = users.find(user => user.id === userid )
        userf.firstname = updatedfname
        userf.lastname = updatedlname
        userf.email = updatedemail
        userf.password = updatedpass
        userf.birth_date = updatedbdate
        userf.bio = updatedbio
        userf.house = updatedhouse
        userf.score = updatedscore
        userf.din = updatedin
        userf.dor = updatedor
        userf.clubs = updatedclubs

    res.send(users)
    })
    // Questions :
     //validaion for the new inputs?
    //schema for who should be able to update?

 
module.exports = router