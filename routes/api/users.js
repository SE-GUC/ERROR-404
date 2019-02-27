const uuid = require('uuid')
const express = require('express')
const Joi = require('joi')
const user = require('./models/user')
const adminschema = require('./schemas/TIQadmin')
const userschema = require('./schemas/hubuser') 
const discipleschema = require ('./schemas/disciples')
const parentschema = require('./schemas/parent')
const router = express.Router();

var User 
router.post('/joi',(req,res)=> 
                    {
                        const firstname = req.body.firstname
                        const lastname = req.body.lastname
                        const birth_date = req.body.birth_date
                        const clubs = req.body.clubs
                        const email = req.body.email
                        const password = req.body.password
                        const type = req.body.type
                        const house=req.body.house
                        const score=req.body.score
                        const din = req.body.din
                        const dor = req.body.dor
                
                    });
switch(req.body.type)
{
  case TIQadmin:   const admin = Joi.validate(req.body,adminschema)
                    if(admin.error) return res.status(400).send(
                        {error:admin.error.details[0].message});
                    User.push(new user(type,firstname,lastname,birth_date,bio,email,password,house,score,din,dor,clubs))
                    return res.json({data:User});
 
                    
 case hubuser: const hubuser = Joi.validate(req.body,userschema)
                if(hubuser.error) return res.status(400).send(
                    {error:hubuser.error.details[0].message});  
                    User.push(new user(type,firstname,lastname,birth_date,bio,email,password,house,score,din,dor,clubs))
                    return res.json({data:User});
                

  case disciples : const disciple = Joi.validate(req.body,discipleschema)

                    if (disciple.error) return res.status(400).send (
                        {error : disciple.error.details[0].message});

                        User.push(new user(type,firstname,lastname,birth_date,bio,email,password,house,score,din,dor,clubs))
                        return res.json({data:User});
                    
 case parent : const parent = Joi.validate(req.body,parentschema)

                if (parent.error) return res.status(400).send (
                    {error : parent.error.details[0].message});

                    User.push(new user(type,firstname,lastname,birth_date,bio,email,password,house,score,din,dor,clubs))
                    return res.json({data:User});
                      
}

router.get('/',(req,res)=>{
    res.send({data:User})
})
router.delete('/:id',(req,res)=>{
    const userid = req.params.id 

    const u = User.find(user => user.id === userid)

    const index = books.indexOf(u)

    User.splice(index,1)

    res.send(User)

})
module.exports = router;