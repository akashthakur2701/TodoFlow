/*
Todo {
title : string,
description : string ,
completed : boolean
}
*/

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://csaiml22104:huihui69@trial.8kxh5.mongodb.net/?retryWrites=true&w=majority&appName=trial");

const todoSchema = new mongoose.Schema({
title : String,
description : String ,
completed : Boolean
})

const Todos = mongoose.model('Todos',todoSchema);
module.exports = {
    Todos
}