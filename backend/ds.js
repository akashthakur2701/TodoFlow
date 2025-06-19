/*
Todo {
title : string,
description : string ,
completed : boolean
}
*/
require("dotenv").config(); 
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  console.error("MONGODB_URI not found in .env");
  process.exit(1);
}
try{
    mongoose.connect(mongoURI);
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