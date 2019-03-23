const express = require('express')

const users = require('./routes/api/Users')
const debates = require('./routes/api/Debates')
const FAQs = require('./routes/api/FAQs')
const content = require('./routes/api/Contents')
const question = require('./routes/api/Questions')
const notification = require('./routes/api/Notifications')

const app = express()
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
mongoose
    .connect(db,{ useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send(`<a href="/Debates">Debates</a> </br> <a href="/api/Users">Users</a>`)
})

// Direct routes to appropriate files 
app.use('/api/Users', users)
app.use('/Debates', debates)
app.use('/api/FAQs', FAQs)
app.use('/api/Contents', content)
app.use('/api/Questions', question)
app.use('/api/Notifications', notification)

// Handling 404
 app.use((req, res) => {
     res.status(404).send({err: 'We can not find what you are looking for'});
  })

const port = 3003
app.listen(port, () => console.log(`Server up and running on port ${port}`))


