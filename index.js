
const express = require('express')

const content = require('./routes/api/contents')

const rout = express()

rout.use(express.json())
rout.get('/', (req, res) => {
    res.send(`<a href="/api/contents">Contents</a>`);
})

rout.use('/api/contents', content)

rout.use((req, res) => {

    res.status(404).send({err: 'We can not find what you are looking for'});

 })
 const port = 3000
 rout.listen(port, () => console.log(`Server up and running on port ${port}`))