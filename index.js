require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db')

const userController = require('./controllers/userController')
const reviewController = require('./controllers/reviewController')

app.use(require('./middleware/header'))
app.use(express.json())

app.use('/user', userController)

app.use('/review', reviewController)

db.sync()

app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}`)
})
