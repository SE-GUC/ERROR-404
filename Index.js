
const express = require('express')

const Content = require('./routes/api/Content')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<a href="/api/Users">Users</a>`);
})

// Direct routes to appropriate files 
app.use('/api/Content', Content)

// Handling 404
 app.use((req, res) => {
     res.status(404).send({err: 'We can not find what you are looking for'});
  })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

