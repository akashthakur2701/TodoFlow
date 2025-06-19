const express = require("express") ;
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000 ;
app.use(express.json());
app.use(cors());
const { createTodo , updateTodo } = require("./types");
const {Todos} = require("./ds");
/* 
body{
title : 
description
}
*/

app.post("/todos",async (req,res)=>{
    const createPayload = req.body ;
    const parsePayload = createTodo.safeParse(createPayload);
    console.log(parsePayload);
    if(!parsePayload.success){
        res.status(400).json({
            msg : "You sent the wrong input"
        })
        return ;
    }

    // input in mongodB
   try {
     await Todos.create({
       title : createPayload.title ,
       description : createPayload.description,
       completed : false
    })

    res.json({
        msg : "Todo created"
    })
   }catch(err){
     res.status(501).json({
        msg : "error in creating",
        err : err.message
    })
   }
})
app.get("/todos", async (req,res)=>{
    const todos = await Todos.find({});

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
    if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
    return res.status(400).json({ msg: "Invalid ID format" });
}
 await Todos.findByIdAndUpdate(req.body.id, { completed: true });
res.json({
    msg: "Todo is updated"
})

})

app.listen(PORT,()=>{
  console.log(`backend is running on port ${PORT}`)
})