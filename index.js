const express = require('express')
const FAQs = require('./routes/api/FAQs')

const app = express()
app.use(express.json())

// app.get('/', (req, res) => {
    
//     res.send(`<h1>Welcome to The Hub</h1>
//     <a href="/api/users/${"k"}">Profile</a>
//     <a href="/api/clubs">Clubs</a>

//     `);
// })

app.use('/api/FAQs', FAQs)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3001
app.listen(port, () => console.log(`Server up and running on port ${port}`))
