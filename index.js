const express = require('express')

const users = require('./routes/api/users')

const app = express()

app.use(express.json())

app.use('/api/users', users)

app.use((req, res) => {

    res.status(404).send({err: 'We can not find what you are looking for'});

 })
const port = process.env.PORT | 3000

app.listen(port, () => console.log(`Server up and running on port ${port}`))