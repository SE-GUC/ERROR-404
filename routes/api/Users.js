const express = require('express');
const router = express.Router();

const update = require('../../models/User');
//temp data for testing
const users = [
    {
        type:'member',
        firstName:'Mahy',
        lastName: 'Ali',
        email: 'mali@gmail.com',
        password:'mahy94',
        birthDate:'23-4-1994',
        bio: 'expert debater ',
        house:'Pegasus',
        score: 278,
        din:'1-10-2017',
        dor:null,
        clubs:['TIQ'],
        id : 1

    }];
    // reading the data
    router.get('/', (req, res) => res.json({ data: users }))

   // updating the info/profile of a user
    router.put('/',(req,res)=>{
        const userId =req.body.id;
        const updatedType=req.body.type
        const updatedFname= req.body.firstName
        const updatedLname = req.body.lastName
        const updatedEmail = req.body.email
         const updatedPass = req.body.password
        const updatedBdate = req.body.birthDate
        const updatedBio = req.body.bio
        const updatedHouse = req.body.house
        const updatedScore = req.body.score
        const updateDin = req.body.din
       const updateDor = req.body.dor
        const updatedClubs = req.body.clubs
       const userf = users.find(user => user.id === userId )
       userf.type=updatedType
         userf.firstName = updatedFname
        userf.lastName = updatedLname
        userf.email = updatedEmail
        userf.password = updatedPass
         userf.birthDate = updatedBdate
         userf.bio = updatedBio
         userf.house = updatedHouse
         userf.score = updatedScore
          userf.din = updateDin
         userf.dor = updateDor
         userf.clubs = updatedClubs

    res.send(users)
    })
    //delete a user
    router.delete('/',(req,res)=>{
        const userId =req.body.id;
        
        const userf = users.find(user => user.id === userId )
        const index = users.indexOf(userf)
        users.splice(index,1)
        res.send(users)
    }
    )

 
module.exports = router
