
const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/Users')
const articles = require('./routes/api/Articles')
const app = express()
// // DB Config
const db = require('./config/keys').mongoURI
// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))
// // Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/articles', async (req, res) => {
    res.send(`<a href="/api/Articles">Articles</a>`)
   
})

app.get('/users',async (req, res) => {
    res.send(`<a href="/api/Users">Users</a>`)
})

// Entry point
app.get('/', (req,res) => res.send(`<h1>Articles</h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

// Direct routes to appropriate files 
app.use('/api/Users', users)
app.use('/api/Articles', articles)

// Handling 404
 app.use((req, res) => {
     res.status(404).send({err: 'We can not find what you are looking for'});
  })


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))
