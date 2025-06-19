const express = require("express") ;
const app = express();
const PORT = 3000 ;
app.use(express.json());
const { createTodo , updateTodo } = require("./types");
const {Todo} = require("./ds");
/* 
body{
title : 
description
}
*/

app.post("/todos",async (req,res)=>{
    const createPayload = req.body ;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong input"
        })
        return ;
    }

    // input in mongodB
    await Todo.create({
       title : createPayload.title ,
       description : createPayload.description,
       completed : false
    })

    res.json({
        msg : "Todo created"
    })
})
app.get("/todos", async (req,res)=>{
    const todos = await Todo.find({});

    res.json({
        todos
    })
})


app.put("/completed",async (req,res)=>{
    const updatePayload = req.body ;
    const parsePayload = updateTodo.safeParse(updatePayload);
     if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong input"
        })
        return ;
    }
 await Todo.update({
    _id : req.body.id 
 },{
    completed : true 
 })
res.json({
    msg: "Todo is updated"
})

})

app.listen(PORT,()=>{
  console.log(`backend is running on port ${port}`)
})