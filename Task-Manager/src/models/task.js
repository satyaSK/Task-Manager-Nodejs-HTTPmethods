//Using mongoose for data validation and Snitization
const mongoose = require('mongoose')
const validator = require('validator')

const options = {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true}

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', options)

const Task = mongoose.model('Tasks',{
    description:{
        type: String,
        required : true,
        trim:true
    },
    completed:{
        type: Boolean,
        required: true,
        default:false
    }

})

//USAGE:
//
// const task1 = new Task({
//     description:"Finish Nodejs Course  ",
//     //completed:false
// })

// task1.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

module.exports = Task