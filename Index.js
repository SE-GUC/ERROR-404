const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const debates = require('./routes/api/Debates')
const DB_USER = process.env.MONGO_ATLAS_USER
const DB_PASS = process.env.MONGO_ATLAS_PASSWORD
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@tiq-mflro.gcp.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true }
)

const app = express()
app.use(express.json()) 
app.use('/Debates', debates) 

app.get('/', (req, res) => {
    res.send(`<a href="/Debates">Debates</a> </br> <a href="/api/Users">Users</a>`)})

app.use((req, res) => {
  res.status(404).send(`Sorry, this page was not found !`)
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Running server at http://localhost:${PORT}`)
})
