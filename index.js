const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://suoh:abc123456789@shop1.g0zie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connectd...'))
.catch(err => console.log(err))

// mongodb+srv://suoh:<password>@shop1.g0zie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongoURI:'mongodb+srv://suoh:abc123456789@shop1.g0zie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})