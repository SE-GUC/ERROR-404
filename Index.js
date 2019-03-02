const express = require('express')
const FAQs = require('./routes/api/FAQs')

const app = express()
app.use(express.json())

app.use('/api/FAQs', FAQs)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3001
app.listen(port, () => console.log(`Server up and running on port ${port}`))
