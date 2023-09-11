//aquiring mongoose connection
const mongoose = require('mongoose');

//creating a schema
const listSchema = new mongoose.Schema({
    email:{
         type : String,
         required : true
    },
    password:{
        type : String,
        required : true
    }
})

//setting the collection name
const list = mongoose.model('login', listSchema);

//exporting list
module.exports = list;