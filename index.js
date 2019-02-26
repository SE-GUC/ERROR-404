const express=require('express')
const Joi=require('joi')


const alumnischema =require('./schemas/alumni')
const memberschema=require('./schemas/member')
const user =require('./models/user')

const app=express()
app.use(express.json)

                    app.post('/joi',(req,res)=>
                    {
                        const firstname=req.body.firstname
                        const lastname =req.body.lastname
                        const birth_date=req.body.birth_date
                        const clubs=req.body.clubs
                        const email=req.body.email
                        const password=req.body.password
                        const house= req.body.house
                        const bio= req.body.bio
                        const type=req.body.type
                        const din=req.house.din
                        const dor=req.body.dor    
                        const score=req.body.score


                    });





switch(req.body.type){
    case(alumni):
                        const alumni =Joi.validate(req.body,alumnischema)

                        if(alumni.error) return res.status(404).send({error:alumni.error.details[0].message})

                        const newalumni ={
                            firstname,
                            lastname,
                            birth_date,
                            clubs,
                            email,
                            password,
                            house,
                            bio,
                            type,
                            din,
                            dor,
                            id:uuid.v4()
                        };
                        return res.json({data:newalumni});




                

    case(member):
                    const member =Joi.validate(req.body,memberschema)

                    if(member.error) return res.status(404).send({error:member.error.details[0].message})

                    const newmember={
                        firstname,
                        lastname,
                        birth_date,
                        clubs,
                        email,
                        password,
                        house,
                        score,
                        bio,
                        type,
                        id:uuid.v4()
                    }
                    return res.json({data:newmember});

    
  

}

