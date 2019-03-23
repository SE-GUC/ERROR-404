
const express = require('express')
const mongoose = require('mongoose')
const clubs = require('./routes/api/Clubs')
const app = express()

// // DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/Clubs', async (req, res) => {
    res.send(`<a href="/api/Clubs">Clubs</a>`)
   
})


// Direct routes to appropriate files 
app.use('/api/Clubs', clubs)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))