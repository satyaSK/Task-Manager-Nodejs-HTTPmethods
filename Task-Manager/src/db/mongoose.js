//Using mongoose for data validation and Snitization
const mongoose = require('mongoose')
const validator = require('validator')

const options = {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true}

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', options)

// const User = mongoose.model('User',{
//     name: { 
//         type: String,
//         required:true,
//         trim:true
//     },
//     age: {
//         type:Number
//     },
//     email: {
//             type:String,
//             required:true,
//             validate(value){
//                 if(!validator.isEmail(value)){
//                     throw new Error('Enter valid email')
//                 }
//             }
//     },
//     password:{
//             type:String,
//             required:true,
//             trim:true,
//             minlength:7,
//             validite(value){
//                 if (value.toLowerCase().includes("password")){
//                     throw new Error("C'mon bro! come up with a better password")
//                 }
//         }
//     }
// })

//creating Models init
// const Tasks = mongoose.model('Tasks',{
//     description:{
//         type: String,
//         required : true,
//         trim:true
//     },
//     completed:{
//         type: Boolean,
//         required: true,
//         default:false
//     }

// })


//saving to DB
// const task1 = new Tasks({
//     description:"Finish Nodejs Course  ",
//     //completed:false
// })

// task1.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// const user_1 = new User({
//     name:" Satyaaa   ",
//     age: 22,
//     email:"kambles@oregonstate.edu",
//     password:"Habibi1"
// })

// user_1.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })