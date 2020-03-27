const express = require('express')
require('./db/mongoose')//we dont want anything from the file so no const is set..just connect to MongoDB
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')

const port = process.env.PORT || 3000
const app = express()

// app.use(express.json())

// const router = new express.Router()
// router.get('/test',(req,res)=>{
//     res.send('This is my new router')
// })
app.use(userRouter)
app.use(taskRouter)


app.listen(port, ()=>{
    console.log('Server is up and running!',port)
})