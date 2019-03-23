const express = require('express')
const mongoose = require('mongoose')

const app = express()
const cors = require('cors')
app.use(express.json())




// Require Router Handlers
const users = require('./routes/api/users')
const articles = require('./routes/api/Articles')
const debates = require('./routes/api/Debates')


//DB config 
const db=require('./config/keys').mongoURI


// Connect to mongo
mongoose
    .connect(db,{useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


//Entry point
app.get('/', (req,res) => res.send(`<h1>Heloooooosss</h1>`))
app.get('/Users', (req,res) => res.send(`<h1>hey user</h1>`))
app.get('/Articles', (req,res) => res.send(`<h1>Articlesssssssssssssss?</h1>`))
app.get('/Users/register', (req,res) => res.send(`<h1>ready to registe?</h1>`))




app.use('/api/Users', users)
app.use('/api/Articles',articles)
app.use('/api/Debates', debates)



app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

 

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))