const express = require('express')

const users = require('./routes/api/Users')
const debates = require('./routes/api/Debates')
const FAQs = require('./routes/api/FAQs')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<a href="/Debates">Debates</a> </br> <a href="/api/Users">Users</a>`)
})

// Direct routes to appropriate files 
app.use('/api/Users', users)
app.use('/Debates', debates)
app.use('/api/FAQs', FAQs)
// Handling 404
 app.use((req, res) => {
     res.status(404).send({err: 'We can not find what you are looking for'});
  })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

