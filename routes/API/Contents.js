const express = require('express')
const rout = express.Router()
const uuid = require('uuid')
const Content = require('../../model/Content')

//example database
var Contents =[
    new Content('date1','type1','desc1'),
    new Content('date2','type2','desc2'),
    new Content('date3','type3','desc3'),
    new Content('date4','type4','desc4'),
    new Content('date5','type5','desc5'),
]

//displaying all content uploaded by admin
rout.get('/', (req, res) => res.json({ data: Contents }));


//displaying a certain content uploaded 
 rout.get('/:id',(req,res)=>{
    const Id = req.params.id 
    const cont = Contents.find(cont=>cont.id ===Id)
    res.send(cont)
}) 

//deleting a content 
rout.delete('/:id',(req,res)=>{
  const id = req.params.id 
  const c = Contents.find(c =>c.id ===id)
  const index = Contents.indexOf(c)
  Contents.splice(index,1)
  res.send(Contents)
})

module.exports = rout


