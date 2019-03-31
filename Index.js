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

app.use('/api/Users', users)
app.use('/api/Articles',articles)
app.use('/api/Debates', debates)
app.use('/api/FAQs', FAQs)
app.use('/api/Questions', question)
app.use('/api/Notifications', notification)
app.use('/api/Clubs', clubs)
app.use('/api/Contents', content)

// Entry point
app.get('/', (req,res) => res.send('Deplued on Heroku'))


app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

 
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))

