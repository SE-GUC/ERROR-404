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

//updating firstname draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedfname= req.body.firstname
    const userf = users.find(user => user.id === userid )
    userf.firstname = updatedfname
    res.send(users)
})
//updating lastname draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedlname = req.body.lastname
    const lname = users.find(user => user.id === userid )
    user.lastname = updatedlname
    res.send(users)
})
//updating email draft one

     router.put('/api/update/:id',(req,res)=>{
     const userid =req.params.id 
     const updatedemail = req.body.email
     const email = users.find(user => user.id === userid )
     user.email = updatedemail
     res.send(users)
})
//updating password draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedpass = req.body.password
    const pass = users.find(user => user.id === userid )
    user.password = updatedpass
    res.send(users)
})
//updating birthdate draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedbdate = req.body.birth_date
    const userf = users.find(user => user.id === userid )
    user.birth_date = updatedbdate
    res.send(users)
})
//updating bio draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedbio = req.body.bio
    const userf = users.find(user => user.id === userid )
    userf.bio = updatedbio
    res.send(users)
})

//updating house draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedhouse = req.body.house
    const userf = users.find(user => user.id === userid )
    userf.house = updatedhouse
    res.send(users)
})
//updating score draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedscore = req.body.score
    const userf = users.find(user => user.id === userid )
    userf.score = updatedscore
    res.send(users)
})
//updating din draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedin = req.body.din
    const userf = users.find(user => user.id === userid )
    userf.din = updatedin
    res.send(users)
})
//updating dor draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedor = req.body.dor
    const userf = users.find(user => user.id === userid )
    userf.dor = updatedor
    res.send(users)
})
//updating clubs draft one
router.put('/api/update/:id',(req,res)=>{
    const userid =req.params.id 
    const updatedclubs = req.body.clubs
    const userf = users.find(user => user.id === userid )
    userf.clubs = updatedclubs
    res.send(users)
})
 
module.exports = router