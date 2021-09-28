'use strict';

const mongoose=require('mongoose');

// built the schema:
const fruitSchema= new mongoose.Schema({
name:{type:String},
image:{type:String},
price:{type:String},
email:{type:String}

})

// built the model:
const fruitModel= mongoose.model('fruit',fruitSchema)

// require the fruitModel to be visible and used :
module.exports=fruitModel;