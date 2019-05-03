const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

//creating app
const app = express()
app.use(express.json())

// Connect to mongo
dotenv.config()
mongoose
    .connect(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@trail-mflro.mongodb.net/mydb`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


// Require Router Handlers
const articles = require('./routes/api/Articles')
const users = require('./routes/api/Users')
const debates = require('./routes/api/Debates')
const FAQs = require('./routes/api/FAQs')
const question = require('./routes/api/Questions')
const notification = require('./routes/api/Notifications')
const content = require('./routes/api/Contents')
const clubs = require('./routes/api/Clubs') 
const chatbars = require('./routes/api/Chatbars')

// app.get('/articles', async (req, res) => {
//     res.send(`<a href="/api/Articles">Articles</a>`)
   
// })

// app.get('/users',async (req, res) => {
//     res.send(`<a href="/api/Users">Users</a>`)
// })

// app.get('/FAQs',async (req, res) => {
//     res.send(`<a href="/api/FAQs">FAQs</a>`)
// })

// app.get('/Debates',async (req, res) => {
//     res.send(`<a href="/api/Debates">Debates</a>`)
// })

// app.get('/Clubs', async (req, res) => {
//     res.send(`<a href="/api/Clubs">Clubs</a>`)
   
// })
// app.get('/Content', async (req, res) => {
//     res.send(`<a href="/api/Contents">Contents</a>`)
   
// })

app.use('/api/Users', users)
app.use('/api/Articles',articles)
app.use('/api/Debates', debates)
app.use('/api/FAQs', FAQs)
app.use('/api/Questions', question)
app.use('/api/Notifications', notification)
app.use('/api/Clubs', clubs)
app.use('/api/Contents', content)
app.use('/api/Chatbars', chatbars)


//Server static assets if in the production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
// Entry point
// app.get('/', (req,res) => res.send(`<h1>Welcome to TIQ APP by ERROR 404</h1></br></br></br> 
// <a href="/api/Articles">Articles</a> </br>
// <a href="/api/Users">Users</a> </br>
// <a href="/api/FAQs">FAQs</a> </br>
// <a href="/api/Debates">Debates</a> </br>
// <a href="/api/Clubs">Clubs</a> </br>
// <a href="/api/Contents">Contents</a>`))




app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

 

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on ${port}`))


