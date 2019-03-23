
const express = require('express')
const mongoose = require ('mongoose')

const content = require('./routes/api/Contents')

const app = express()
const db = require('./config/keys').mongoURI
mongoose.connect(db).then(()=>{console.log('Connected to db')})
.catch(err => console.log(err))
app.use(express.json())
app.use('/api/Contents', content)

app.get('/', (req, res) => {
    res.send(`<a href="/api/Contents">Content</a>`);
})


app.use((req, res) => {

    res.status(404).send({err: 'We can not find what you are looking for'});

 })
 const port = 3000
 app.listen(port, () => console.log(`Server up and running on port ${port}`))

