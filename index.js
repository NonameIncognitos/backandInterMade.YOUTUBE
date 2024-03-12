require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/userRoutes.js')
const postRouter = require('./routes/postRoutes.js')

const PORT = process.env.PORT || 7000;

const app = express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT - ${PORT}`))
    } catch (e) {
        console.log(`message error: ${e} `)
    }
}

start()