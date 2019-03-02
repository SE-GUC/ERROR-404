const express = require('express')
const app = express()
const debates = require('./routes/api/Debates')
app.use(express.json())
app.get('/', (req, res) => {
    res.send(`<a href="/Debates">Debates</a>`)
})
app.use('/Debates', debates)
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port,()=> console.log('Sever up and running at port 3000'))
