const express = require('express');
const router = express.Router();

const update = require('../../models/user');
//temp data for testing
const users = [
    {
       ,
        firstname:'Mahy',
        lastname: 'Ali',
        birth_date:'23-4-1994',
        clubs:['TIQ'],
        email: 'mali@gmail.com',
        password:'mahy94',
        type:'member',
        house:'Pegasus',
        score: 278,
        din:'1-10-2017',
        dor:null,
        bio: 'expert debater '
        id : 1

    }];
    router.get('/', (req, res) => res.json({ data: users }))

   // updating the info/profile of a user
    router.put('/',(req,res)=>{
        const userid =req.body.id;
        
        const updatedfname= req.body.firstname
        const updatedlname = req.body.lastname
        const updatedbdate = req.body.birth_date
         const updatedclubs = req.body.clubs
        const updatedemail = req.body.email
         const updatedpass = req.body.password
         const updatedtype=req.body.type
        const updatedhouse = req.body.house
        const updatedscore = req.body.score
        const updatedin = req.body.din
        const updatedor = req.body.dor
       const updatedbio = req.body.bio
       const userf = users.find(user => user.id === userid )
      
         userf.firstname = updatedfname
        userf.lastname = updatedlname
         userf.birth_date = updatedbdate
        userf.clubs = updatedclubs
        userf.email = updatedemail
        userf.password = updatedpass
         userf.type=updatedtype
         userf.house = updatedhouse
         userf.score = updatedscore
          userf.din = updatedin
         userf.dor = updatedor
         userf.bio = updatedbio
         

    res.send(users)
    })
   
module.exports = router
