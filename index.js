const uuid = require('uuid')
const express = require('express')
const Joi = require('joi')
const user = require('./models/')
const adminschema = require('./schemas/TIQadmin')
const userschema = require('./schemas/hubuser') 
const app = express()
app.use(express.json())



app.post('/joi',(req,res)=> 
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
                        const dor = req.bpdy.dor
                
                    });
switch(req.body.type)
{
  case TIQadmin:   const admin = Joi.validate(req.body,adminschema);
                    if(admin.error) return res.status(400).send(
                        {error:admin.error.details[0].message});
                    const newTIQadmin = 
                    {
                        firstname,
                        lastname,
                        birth_date,
                        clubs,
                        email,
                        password,
                        type,
                        id : uuid.v4() 
                    };
                    return res.json({data:newTIQadmin});
 
                    
 case hubuser: const hubuser = Joi.validate(req.body,userschema)
                if(admin.error) return res.status(400).send(
                    {error:admin.error.details[0].message});  
                const newhubuser = 
                {
                    firstname,
                    lastname, 
                    birth_date,
                    clubs ,
                    email , 
                    password, 
                    type, 
                    id : uuid.v4()
                };
                return res.json({data:newhubuser});
  
                      
}