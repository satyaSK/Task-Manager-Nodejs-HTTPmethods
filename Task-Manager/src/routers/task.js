const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks',(req,res)=>{
    const new_task = new Task(req.body)
    new_task.save().then((res)=>{
        console.log("Added successfully!")
    }).catch((err)=>{
        res.status(400)
        res.send(err)
    })
})


router.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks)
    }).catch((err)=>{
        res.status(500).send("Some server side error occured")
    })
})

router.get('/tasks/:id',(req,res)=>{
    Task.findById(req.params.id).then((task)=>{
        res.send(task)
    }).catch((err)=>{
        res.status(500).send("Some server side error occured")
    })
})

router.patch('/tasks/:id', async (req,res)=>{

    try{
        const task = await Task.findOneAndUpdate(req.params.id, req.body, {new:true,runValidators:true})
    if (!task){
        return res.status(400).send()
    }
    res.status(200).send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', async(req,res)=>{
    try{
        const del = await Task.findByIdAndDelete(req.params.id,{})
        if(!del){
           return res.status(400).send()
        }
        res.status(200).send(del)
    }catch(e){
        res.status(500).send(e)
    }
})


module.exports = router