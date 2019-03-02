const express = require('express')
const app = express()
const debates = require('./routes/api/debates')
app.use(express.json())
app.get('/', (req, res) => {
    res.send(`<a href="/debates">Debates</a>`)
})
app.use('/debates', debates)
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port,()=> console.log('Sever up and running at port 3000'))
