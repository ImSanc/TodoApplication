const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect('mongodb+srv://Sanchit:sanchit%4017@cluster0.8djn6b3.mongodb.net/'); 

const todoSchema = mongoose.Schema({ 
title : String,
description : String,
completed : Boolean
})

const todo = mongoose.model('todos',todoSchema ) 

module.exports = {
    todo
}