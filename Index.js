const express = require('express')

const content = require('./routes/api/Contents')

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send(`<a href="/api/Contents">Content</a>`);
})

app.use('/api/Contents', content)

app.use((req, res) => {

    res.status(404).send({err: 'We can not find what you are looking for'});

 })
 const port = 3000
 app.listen(port, () => console.log(`Server up and running on port ${port}`))

