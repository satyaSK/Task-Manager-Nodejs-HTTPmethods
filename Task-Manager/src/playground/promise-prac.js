//sample code to chain promises

require('../db/mongoose')
const Task = require('../models/task')

Task.findByIdAndRemove('5e5af887fdbea135f8ffd603').then((res)=>{
    return Task.countDocuments({completed:false})
}).then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})

const fun = async (id)=>{
    const removed = await Task.findByIdAndRemove(id)
    const countDocs = await Task.countDocuments({completed:false})
    return countDocs
}

fun('5e5b048ff029f7344841c1d9').then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})