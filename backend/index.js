const express = require("express") ;
const app = express();
const PORT = 3000 ;
app.use(express.json());
const { createTodo , updateTodo } = require("./types");

/* 
body{
title : 
description
}
*/

app.post("/todos",(req,res)=>{
    const createPayload = req.body ;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong input"
        })
        return ;
    }

    // input in mongodB
})
app.get("/todos",(req,res)=>{

})


app.put("/completed",(req,res)=>{
    const updatePayload = req.body ;
    const parsePayload = updateTodo.safeParse(updatePayload);
     if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong input"
        })
        return ;
    }
})

app.listen(PORT,()=>{
  console.log(`backend is running on port ${port}`)
})