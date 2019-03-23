const express = require('express')
const router = express.Router()
router.use(express.json())
const mongoose = require('mongoose')

// We will be connecting using database 
const Notification = require('../../models/Notification')

router.get('/user/:id', async(request, response) => {
    const userId = request.params.id 

    const notifications = await Notification.find({type:"answer" , user:userId})
    response.json({msg: 'Your question is answered',data:notifications})

});
module.exports = router