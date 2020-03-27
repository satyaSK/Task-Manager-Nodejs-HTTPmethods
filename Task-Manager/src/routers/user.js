const express = require('express')
const User = require('../models/user')

const router = new express.Router()

//creating a post api so people can use /users enpoint to POST data...access http data? Incoming JSON data is stored in req.body
router.post('/users',async (req,res)=>{
    //after receiving JSON data in req.body --> send the data to the User Model to store in DB
    const new_user = new User(req.body)
    try {
        await new_user.save()
        res.status(200).send(new_user)
    } catch(e){
        console.log(e)
        res.status(400).send(e)
    }
    
    // .then((res)=>{
    //     console.log(res)
    // }).catch((err)=>{
    //     res.status(400)
    //     console.log(err)
    // })
    // res.send('Testing@!')
})

router.get('/users',async (req,res)=>{
    try{
        const result = await User.find({})
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

router.get('/users/:id',(req,res)=>{
    User.findById(req.params.id).then((user)=>{
        if(!user){
            return res.status(400).send("No user with that ID")
        }else{
            res.send(user)
        }
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

router.patch('/users/:id', async (req,res)=>{
    //there is a way to force only WANTED fields and not unwanted field like "height"...check video to get that!
    try{//why the eff is findByIdAndUpdate not working?
    const user = await User.findOneAndUpdate(req.param.id, req.body,{new:true, runValidators:true})//new-send updated data
    if(!user){
        return res.status(400).send()
    }
    res.status(200).send(user)
    } catch(e){
        res.status(500).send(e)
    }

})

router.delete('/users/:id', async(req,res)=>{
    try{
        const del = await User.findByIdAndDelete(req.params.id,{})
        if(!del){
           return res.status(400).send()
        }
        res.status(200).send(del)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router