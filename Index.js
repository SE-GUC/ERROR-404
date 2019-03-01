const express = require('express')

const users = require('./routes/api/Users')

const app = express()

app.use(express.json())

app.use('/api/users', users)

const port = 3000

app.listen(port, () => console.log(`Server up and running on port ${port}`))