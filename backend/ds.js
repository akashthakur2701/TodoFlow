/*
Todo {
title : string,
description : string ,
completed : boolean
}
*/

const mongoose = require("mongoose");
try{
    mongoose.connect("mongodb+srv://csaiml22104:huihui69@trial.8kxh5.mongodb.net/?retryWrites=true&w=majority&appName=trial");
    console.log("connected to mongodb");
}catch(err){
   console.log("error in connecting to db");
}
const todoSchema = new mongoose.Schema({
title : String,
description : String ,
completed : Boolean
})

const Todos = mongoose.model('Todos',todoSchema);
module.exports = {
    Todos
}