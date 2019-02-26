const express = require('express')

const Joi = require('Joi');
//const user = require ('./models/user');
const desciple = require('./schemas/disciples');
const app = express();
app.use(express.json());

router.post('/joi',(req,res)=>{
            const type=req.user.type;
            const firstname=req.user.firstname;
            const lastname=req.user.lastname;
            const birth_date=req.user.birth_date;
            const bio = req.user.bio;
            const email = req.user.email;
            const password = req.user.password;
            const house =req.user.house;
            const score= req.user.score;
            const din = req.user.din;
            const dor = req.user.dor;
const disciple = Joi.validate(req.body,schema)
if (disciple.error) return res.status(400).send ({error : result.error.details[0].message});


const Newdesciple = {
    type,
    firstname,
    lastname,
    birth_date,
    bio,
    email,
    password,
    house,
    score,
    din,
    dor,
     id:uuid.v4()
};
return res.json({data: newUser});
});