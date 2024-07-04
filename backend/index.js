const express = require('express');
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/todos", async function(req,res) {
    const createPayload = req.body;
    console.log(createPayload);
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log(parsedPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You have sent wrong inputs"
        });
        return;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.status(201).json("Todo added successfully");
})


app.get("/todos",  async function(req,res) {
    const todos =  await todo.find();
    res.status(201).json( {todos :todos});
})



app.post("/completed",async function(req,res) {
    const completedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(completedPayload);

    if(!parsedPayload.success)
        {
            res.status(411).json({
                msg : "You have sent wrong inputs "
            });
            return;
        }
    
    await todo.findByIdAndUpdate(completedPayload.id,{completed : true}, {new : true})

    res.json({
        msg : "Todo is completed"
    })

})

app.listen(3000);
