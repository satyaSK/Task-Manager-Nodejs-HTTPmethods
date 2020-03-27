// MongoDB Connection and CRUD operations done heres!
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017' //default mongo port and dont type localhost
const databaseName = 'task-manager'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

MongoClient.connect(connectionURL, options, (err, client)=>{
    if (err){
        return console.log("Unable to connect to DB")
    }
    
    const db = client.db(databaseName)
    db.collection('users').deleteMany({name:"Satyajit"
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
    
    
})



//update many documents!!
    // db.collection('tasks').updateMany({
    //     completed:false
    // }, {
    //     $set: {
    //         completed:true
    //     }
    // }).then((res)=>{
    //     console.log(res)
    // }).catch((err)=>{

    //     console.log(err)
    // })

    //returns a Promise by default
    // db.collection('tasks').updateOne({
    //     _id:new ObjectID("5e5ac0728d0daa19a46a1dcb")
    // },{
    //     $set:{
    //         description:"Have a shit!!"
    //     }
    // }).then((result)=>{
    //     console.log("Allgood!:",result)
    // }).catch((error)=>{
    //     console.log("Ahhw crap!",error)
    // })


//FIND ONE -- This returns single document
    // db.collection('tasks').findOne({_id:new ObjectID("5e5ac0728d0daa19a46a1dcb")},(err,res)=>{
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log(res)
    // })
    
    //FIND MANY -- This return Cursor
    // db.collection('tasks').find({completed:false}).toArray((err,res)=>{
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log(res)
    // })


//INSERT ONE!
    //creates reference to DB
    //insert very simple document in the users connection
    // db.collection('users').insertOne({
    //     name:'Satyajit',
    //     age:'22'
    // },(err,result)=>{
    //     if (err){
    //         return console.log(err)
    //     }else {
    //         console.log(result.insertedCount)
    //     }
    // })
    //INSERT MANY!
    // db.collection('users').insertMany([
    //     {
    //         name:"Ami",
    //         age:'22'
    //     },{
    //         name:"Satya",
    //         age:"22"
    //     }
    // ],(err,res)=>{
    //     if (err){
    //         return console.log("Unable to insert")
    //     }
    //     else{
    //         console.log(res.insertedCount)
    //     }
    // })

        // db.collection('tasks').insertMany(
        //     [
        //         {
        //             description:"Book appt. with Chris",
        //             completed: false
        //         },
        //         {
        //             description:"Create linkedin connections",
        //             completed:true
        //         }
        //     ] , (error,result)=>{
        //     if(error){
        //         console.log(error)
        //     }
        //     else{
        //         console.log(result)
        //     }
        // })